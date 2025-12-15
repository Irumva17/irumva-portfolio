// ============================================
// CHATBOT ENGINE
// ============================================
// Pattern matching and response generation

class ChatbotEngine {
  constructor(intentsData, portfolioData) {
    this.intents = intentsData;
    this.portfolioData = portfolioData;
    this.conversationHistory = [];
    this.currentContext = [];
    this.sessionData = {
      startTime: new Date(),
      messageCount: 0
    };
  }

  // Main processing function
  async processMessage(userMessage) {
    this.sessionData.messageCount++;
    
    // Add to conversation history
    this.conversationHistory.push({
      type: 'user',
      message: userMessage,
      timestamp: new Date()
    });

    // Clean and normalize message
    const normalizedMessage = this.normalizeMessage(userMessage);

    // Find matching intent
    const matchedIntent = this.findBestIntent(normalizedMessage);

    // Generate response
    const response = this.generateResponse(matchedIntent, normalizedMessage);

    // Add to conversation history
    this.conversationHistory.push({
      type: 'bot',
      message: response.text,
      intent: matchedIntent.tag,
      timestamp: new Date()
    });

    // Update context
    if (matchedIntent.context && matchedIntent.context.length > 0) {
      this.currentContext = matchedIntent.context;
    }

    return response;
  }

  normalizeMessage(message) {
    return message
      .toLowerCase()
      .trim()
      .replace(/[^\w\s]/g, '') // Remove punctuation
      .replace(/\s+/g, ' '); // Normalize whitespace
  }

  findBestIntent(normalizedMessage) {
    let bestMatch = null;
    let highestScore = 0;

    for (const intent of this.intents) {
      const score = this.calculateMatchScore(normalizedMessage, intent.patterns);
      
      if (score > highestScore) {
        highestScore = score;
        bestMatch = intent;
      }
    }

    // If no good match found, return fallback
    if (highestScore < 0.3) {
      return this.intents.find(intent => intent.tag === 'fallback');
    }

    return bestMatch;
  }

  calculateMatchScore(message, patterns) {
    if (!patterns || patterns.length === 0) return 0;

    let maxScore = 0;

    for (const pattern of patterns) {
      const normalizedPattern = this.normalizeMessage(pattern);
      
      // Exact match
      if (message === normalizedPattern) {
        return 1.0;
      }

      // Contains pattern
      if (message.includes(normalizedPattern)) {
        maxScore = Math.max(maxScore, 0.9);
        continue;
      }

      // Pattern contains message
      if (normalizedPattern.includes(message)) {
        maxScore = Math.max(maxScore, 0.8);
        continue;
      }

      // Word overlap scoring
      const messageWords = message.split(' ');
      const patternWords = normalizedPattern.split(' ');
      const commonWords = messageWords.filter(word => 
        patternWords.includes(word) && word.length > 2
      );

      if (commonWords.length > 0) {
        const score = commonWords.length / Math.max(messageWords.length, patternWords.length);
        maxScore = Math.max(maxScore, score * 0.7);
      }
    }

    return maxScore;
  }

  generateResponse(intent, normalizedMessage) {
    // Select a random response from the intent
    const responses = intent.responses || [];
    const responseText = responses[Math.floor(Math.random() * responses.length)];

    // Get quick actions
    const quickActions = intent.quickActions || [];

    // Build response object
    const response = {
      text: responseText,
      quickActions: quickActions,
      intent: intent.tag,
      context: intent.context || []
    };

    // Add personalization based on context
    if (this.sessionData.messageCount === 1) {
      response.isFirstMessage = true;
    }

    return response;
  }

  // Get suggestions based on current context
  getSuggestions() {
    const suggestions = [
      { text: "What are your skills?", action: "send" },
      { text: "Show me projects", action: "send" },
      { text: "How can I contact you?", action: "send" },
      { text: "Tell me about your experience", action: "send" }
    ];

    // Context-aware suggestions
    if (this.currentContext.includes('skills')) {
      return [
        { text: "Backend skills", action: "send" },
        { text: "Frontend skills", action: "send" },
        { text: "Mobile development", action: "send" }
      ];
    }

    if (this.currentContext.includes('projects')) {
      return [
        { text: "Event Ticket App", action: "send" },
        { text: "Ijwi AI Project", action: "send" },
        { text: "View all projects", action: "navigate", target: "#projects" }
      ];
    }

    return suggestions;
  }

  // Execute actions (navigation, external links, etc.)
  executeAction(action) {
    switch (action.action) {
      case 'navigate':
        this.navigateToSection(action.target);
        break;
      case 'external':
        window.open(action.url, '_blank');
        break;
      case 'modal':
        this.openModal(action.target);
        break;
      case 'download':
        this.downloadFile(action.url);
        break;
      case 'gallery':
        this.openGallery(action.target);
        break;
      case 'show':
        this.showContent(action.target);
        break;
      case 'send':
        // This will be handled by the UI to send the message
        return action.text;
      default:
        console.warn('Unknown action type:', action.action);
    }
  }

  navigateToSection(target) {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Close chatbot after navigation (optional)
      setTimeout(() => {
        const chatbot = document.getElementById('chatbotWidget');
        if (chatbot) {
          chatbot.classList.remove('active');
        }
      }, 500);
    }
  }

  openModal(modalType) {
    let modalId;
    switch (modalType) {
      case 'cv':
        modalId = 'cvLightbox';
        break;
      case 'about':
        modalId = 'aboutLightbox';
        break;
      default:
        console.warn('Unknown modal type:', modalType);
        return;
    }

    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  downloadFile(url) {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  openGallery(projectId) {
    // Find the first image of the project and click it
    const projectImg = document.querySelector(`[data-project="${projectId}"]`);
    if (projectImg) {
      projectImg.click();
    }
  }

  showContent(contentType) {
    // Handle specific content display
    switch (contentType) {
      case 'contact':
        this.navigateToSection('#contact');
        break;
      case 'skills-backend':
      case 'skills-frontend':
      case 'skills-mobile':
        this.navigateToSection('#skills');
        break;
      case 'certificates':
        this.navigateToSection('#courses');
        break;
      case 'help':
        return this.processMessage('help');
      default:
        this.navigateToSection(`#${contentType}`);
    }
  }

  // Get conversation history
  getHistory() {
    return this.conversationHistory;
  }

  // Clear conversation
  clearHistory() {
    this.conversationHistory = [];
    this.currentContext = [];
    this.sessionData.messageCount = 0;
  }

  // Get portfolio data for dynamic responses
  getPortfolioData(key) {
    return this.portfolioData[key];
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ChatbotEngine;
}
