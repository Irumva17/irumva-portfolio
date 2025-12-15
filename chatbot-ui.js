// ============================================
// CHATBOT UI
// ============================================
// User interface and interactions for the chatbot

class ChatbotUI {
  constructor(engine) {
    this.engine = engine;
    this.isOpen = false;
    this.isTyping = false;
    this.messageQueue = [];
    
    this.init();
  }

  init() {
    this.createChatbotHTML();
    this.cacheDOMElements();
    this.setupEventListeners();
    this.displayWelcomeMessage();
  }

  createChatbotHTML() {
    const chatbotHTML = `
      <div id="chatbotWidget" class="chatbot-widget">
        <button class="chatbot-toggle" id="chatbotToggle" aria-label="Open chat assistant" title="Chat with AI Assistant">
          <i class="fas fa-comments"></i>
          <span class="chatbot-badge">1</span>
        </button>
        
        <div class="chatbot-container" id="chatbotContainer">
          <div class="chatbot-header">
            <div class="chatbot-header-info">
              <div class="chatbot-avatar">
                <i class="fas fa-robot"></i>
              </div>
              <div class="chatbot-header-text">
                <h3>Irumva's AI Assistant</h3>
                <p class="chatbot-status">Online</p>
              </div>
            </div>
            <div class="chatbot-header-actions">
              <button class="chatbot-minimize" id="chatbotMinimize" aria-label="Minimize chat" title="Minimize">
                <i class="fas fa-minus"></i>
              </button>
              <button class="chatbot-close" id="chatbotClose" aria-label="Close chat" title="Close">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>

          <div class="chatbot-messages" id="chatbotMessages">
            <!-- Messages will be inserted here -->
          </div>

          <div class="chatbot-quick-actions" id="chatbotQuickActions">
            <!-- Quick action buttons will be inserted here -->
          </div>

          <div class="chatbot-input-container">
            <input 
              type="text" 
              class="chatbot-input" 
              id="chatbotInput" 
              placeholder="Type your message..." 
              autocomplete="off"
              aria-label="Chat input"
            />
            <button class="chatbot-send" id="chatbotSend" aria-label="Send message" title="Send">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    `;

    // Insert before closing body tag
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
  }

  cacheDOMElements() {
    this.widget = document.getElementById('chatbotWidget');
    this.toggle = document.getElementById('chatbotToggle');
    this.container = document.getElementById('chatbotContainer');
    this.closeBtn = document.getElementById('chatbotClose');
    this.minimizeBtn = document.getElementById('chatbotMinimize');
    this.messagesContainer = document.getElementById('chatbotMessages');
    this.quickActionsContainer = document.getElementById('chatbotQuickActions');
    this.input = document.getElementById('chatbotInput');
    this.sendBtn = document.getElementById('chatbotSend');
    this.badge = this.toggle.querySelector('.chatbot-badge');
  }

  setupEventListeners() {
    // Toggle chatbot
    this.toggle.addEventListener('click', () => this.toggleChatbot());

    // Close chatbot
    this.closeBtn.addEventListener('click', () => this.closeChatbot());
    this.minimizeBtn.addEventListener('click', () => this.closeChatbot());

    // Send message
    this.sendBtn.addEventListener('click', () => this.sendMessage());
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeChatbot();
      }
    });
  }

  toggleChatbot() {
    if (this.isOpen) {
      this.closeChatbot();
    } else {
      this.openChatbot();
    }
  }

  openChatbot() {
    this.isOpen = true;
    this.widget.classList.add('active');
    this.input.focus();
    this.badge.style.display = 'none';
    
    // Add open animation
    this.container.style.animation = 'slideInUp 0.3s ease';
  }

  closeChatbot() {
    this.isOpen = false;
    this.widget.classList.remove('active');
    
    // Add close animation
    this.container.style.animation = 'slideOutDown 0.3s ease';
  }

  async sendMessage() {
    const message = this.input.value.trim();
    if (!message) return;

    // Clear input
    this.input.value = '';

    // Display user message
    this.addMessage('user', message);

    // Show typing indicator
    this.showTypingIndicator();

    // Process message with engine
    try {
      const response = await this.engine.processMessage(message);
      
      // Hide typing indicator
      this.hideTypingIndicator();

      // Display bot response
      setTimeout(() => {
        this.addMessage('bot', response.text);
        
        // Display quick actions if available
        if (response.quickActions && response.quickActions.length > 0) {
          this.displayQuickActions(response.quickActions);
        }
      }, 500);

    } catch (error) {
      console.error('Error processing message:', error);
      this.hideTypingIndicator();
      this.addMessage('bot', "Sorry, I encountered an error. Please try again.");
    }
  }

  addMessage(type, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message chatbot-message-${type}`;
    
    const timestamp = new Date().toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });

    if (type === 'bot') {
      messageDiv.innerHTML = `
        <div class="chatbot-message-avatar">
          <i class="fas fa-robot"></i>
        </div>
        <div class="chatbot-message-content">
          <div class="chatbot-message-bubble">
            ${this.formatMessage(text)}
          </div>
          <div class="chatbot-message-time">${timestamp}</div>
        </div>
      `;
    } else {
      messageDiv.innerHTML = `
        <div class="chatbot-message-content">
          <div class="chatbot-message-bubble">
            ${this.escapeHTML(text)}
          </div>
          <div class="chatbot-message-time">${timestamp}</div>
        </div>
      `;
    }

    this.messagesContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    this.scrollToBottom();

    // Animate message
    messageDiv.style.animation = 'fadeInUp 0.3s ease';
  }

  formatMessage(text) {
    // Convert markdown-style formatting to HTML
    let formatted = this.escapeHTML(text);
    
    // Bold text (**text**)
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Line breaks
    formatted = formatted.replace(/\n/g, '<br>');
    
    // Bullet points
    formatted = formatted.replace(/^• (.+)$/gm, '<li>$1</li>');
    if (formatted.includes('<li>')) {
      formatted = formatted.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    }
    
    // Links
    formatted = formatted.replace(
      /(https?:\/\/[^\s]+)/g, 
      '<a href="$1" target="_blank" rel="noopener">$1</a>'
    );

    // Emojis (keep as is)
    
    return formatted;
  }

  escapeHTML(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  showTypingIndicator() {
    this.isTyping = true;
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chatbot-message chatbot-message-bot chatbot-typing';
    typingDiv.id = 'chatbotTyping';
    typingDiv.innerHTML = `
      <div class="chatbot-message-avatar">
        <i class="fas fa-robot"></i>
      </div>
      <div class="chatbot-message-content">
        <div class="chatbot-message-bubble">
          <div class="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    `;
    this.messagesContainer.appendChild(typingDiv);
    this.scrollToBottom();
  }

  hideTypingIndicator() {
    this.isTyping = false;
    const typingIndicator = document.getElementById('chatbotTyping');
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }

  displayQuickActions(actions) {
    this.quickActionsContainer.innerHTML = '';
    
    if (actions.length === 0) return;

    actions.forEach(action => {
      const button = document.createElement('button');
      button.className = 'chatbot-quick-action';
      button.innerHTML = `<i class="fas fa-${this.getActionIcon(action.action)}"></i> ${action.text}`;
      
      button.addEventListener('click', () => {
        if (action.action === 'send') {
          this.input.value = action.text;
          this.sendMessage();
        } else {
          this.engine.executeAction(action);
          this.addMessage('bot', `✓ Action executed: ${action.text}`);
        }
      });
      
      this.quickActionsContainer.appendChild(button);
    });

    this.quickActionsContainer.style.display = 'flex';
  }

  getActionIcon(actionType) {
    const icons = {
      'navigate': 'compass',
      'external': 'external-link-alt',
      'download': 'download',
      'modal': 'window-maximize',
      'gallery': 'images',
      'show': 'eye',
      'send': 'comment',
      'open-cert': 'certificate'
    };
    return icons[actionType] || 'arrow-right';
  }

  scrollToBottom() {
    setTimeout(() => {
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }, 100);
  }

  displayWelcomeMessage() {
    // Wait a bit before showing welcome
    setTimeout(() => {
      this.addMessage('bot', "👋 Hi! I'm Irumva's AI assistant. I can help you learn about his skills, experience, and projects. What would you like to know?");
      
      this.displayQuickActions([
        { text: 'View Skills', action: 'navigate', target: '#skills' },
        { text: 'See Projects', action: 'navigate', target: '#projects' },
        { text: 'Contact Info', action: 'show', target: 'contact' }
      ]);
    }, 1000);
  }

  // Public methods
  clear() {
    this.messagesContainer.innerHTML = '';
    this.quickActionsContainer.innerHTML = '';
    this.engine.clearHistory();
    this.displayWelcomeMessage();
  }

  minimize() {
    this.closeChatbot();
  }
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Check if chatbot data is available
  if (typeof portfolioData !== 'undefined' && typeof chatbotIntents !== 'undefined') {
    // Create engine
    const chatbotEngine = new ChatbotEngine(chatbotIntents, portfolioData);
    
    // Create UI
    const chatbotUI = new ChatbotUI(chatbotEngine);

    // Make globally accessible for debugging
    window.chatbot = {
      engine: chatbotEngine,
      ui: chatbotUI
    };

    console.log('%c🤖 Chatbot initialized successfully!', 'color: #06b6d4; font-weight: bold; font-size: 14px;');
  } else {
    console.warn('Chatbot data not found. Make sure chatbot-data.js is loaded.');
  }
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ChatbotUI;
}
