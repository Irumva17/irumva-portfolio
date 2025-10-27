# Certificate Images Guide

## Current Certificates

✅ **Machine Learning Certificate** - `machineLearning.jpg` (Already added!)
✅ **Profile Photo** - `Arsene.jpg`

## Courses (No Certificate Badge)

📚 **100 Days of Code - Python (Udemy)** - Course link only, no certificate displayed

## Certificates to Add

To complete your portfolio, please add the following certificate image to this folder:

### 1. Embedded Systems Certificate
- **Filename:** `embedded-certificate.jpg`
- **Recommended format:** JPG or PNG
- **Recommended size:** 1920x1080px or similar high resolution

## How to Add Your Certificates

1. Save your certificate images with the exact filenames mentioned above
2. Copy them to this `/images` folder
3. The lightbox will automatically display them when clicked
4. No code changes needed!

## Certificate Image Best Practices

- **Format:** JPG or PNG (JPG recommended for smaller file size)
- **Resolution:** High quality (minimum 1280x720px)
- **File Size:** Keep under 500KB if possible for faster loading
- **Content:** Make sure the certificate is readable and professional

## How the Lightbox Works

When a visitor clicks on "📄 Click to view certificate":
1. A beautiful modal window opens
2. The certificate displays full-screen
3. They can close it by:
   - Clicking the X button (top right)
   - Clicking outside the image
   - Pressing the ESC key

## Current Setup

The JavaScript in `script.js` is configured to look for these files:
```javascript
'ml-cert': 'images/machineLearning.jpg' ✅ READY
'embedded-cert': 'images/embedded-certificate.jpg'
```

Note: The Python course (100 Days of Code) only displays a course link and does NOT have a certificate badge.

## Need Help?

If you want to add more certificates or change the filenames, edit the `certificates` object in `script.js` (around line 292).
