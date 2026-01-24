# Quick Start Guide - Ephemeral Token System

This guide will help you get the ephemeral token system up and running quickly.

## 🚀 Step 1: Install Dependencies

First, make sure you have Node.js installed (version 14 or higher). Then run:

```bash
npm install
```

This installs the required packages:
- `express` - Backend server
- `cors` - Allows frontend to connect to backend
- `node-fetch` - For making API calls

## 🔑 Step 2: Set Up API Keys

Create a `.env` file in the root directory with your Gemini API keys:

```env
GEMINI_API_KEY_PRIMARY=your_primary_api_key_here
GEMINI_API_KEY_SECONDARY=your_secondary_api_key_here
PORT=3000
```

**To get API keys:**
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key
3. Copy it to your `.env` file

## 🌐 Step 3: Configure API Base URL (IMPORTANT!)

### For Development (Local Testing):

The system automatically detects if you're on `localhost` and uses:
```
http://localhost:3000/api
```

**You don't need to change anything for local development!**

### For Production:

Open `js/ai-token-manager.js` and find line **200-205**. You have two options:

**Option 1: If your backend is on the same domain as frontend**
```javascript
// This is already set - no changes needed if backend is on same domain
const API_BASE_URL = isLocalhost 
    ? 'http://localhost:3000/api'
    : window.location.origin + '/api';  // Uses same domain
```

**Option 2: If your backend is on a different domain**
```javascript
// Replace the production line with your backend URL:
const API_BASE_URL = isLocalhost 
    ? 'http://localhost:3000/api'
    : 'https://your-backend-domain.com/api';  // Change this!
```

**Or use the alternative approach** (line 204-205):
```javascript
// Uncomment and set your backend URL:
const API_BASE_URL = 'https://your-backend-domain.com/api';
```

**Examples:**
- `https://api.yoursite.com/api`
- `https://backend.yoursite.com/api`
- `https://fast-papers-backend.herokuapp.com/api`

## 🖥️ Step 4: Start the Backend Server

Open a terminal in the project root and run:

```bash
npm start
```

Or for development with auto-reload:

```bash
npm run dev
```

You should see:
```
🚀 Server running on port 3000
📍 Health check: http://localhost:3000/api/health
🔐 Token generation: POST http://localhost:3000/api/token/generate
```

**Keep this terminal running!** The backend server must be running for AI Generate to work.

## ✅ Step 5: Test It!

1. **Open your website** in a browser (e.g., `file:///` or local server)
2. **Navigate to any subject page** with AI Generate (e.g., Programming Fundamentals)
3. **Click the "AI Generate" tab**
4. **Select a topic** and click "Generate"

If everything works, you'll see:
- ✅ Ephemeral token generated (in browser console)
- ✅ AI generating questions...
- ✅ Questions displayed!

## ❌ Troubleshooting "AI Token Manager not loaded" Error

If you see this error, check the following:

### 1. Check Browser Console

Open browser DevTools (F12) → Console tab. Look for:
- ✅ Should see: `🔧 AI Token Manager initializing with API URL: ...`
- ✅ Should see: `✅ AI Token Manager loaded successfully`
- ❌ If you DON'T see these, the script isn't loading

### 2. Check Script Path

Make sure `ai-token-manager.js` is included BEFORE other AI generate scripts in your HTML:

```html
<!-- Correct order: -->
<script src="../js/subject-data.js"></script>
<script src="../js/ai-token-manager.js"></script>  <!-- Must be first! -->
<script src="../js/ai-generate.js"></script>
<script src="../js/subject.js"></script>
```

### 3. Check File Path

Verify the file exists at: `js/ai-token-manager.js`

### 4. Check Backend Server

Make sure the backend server is running:
- Open terminal
- Run `npm start`
- Check for error messages
- Visit `http://localhost:3000/api/health` in browser - should return JSON

### 5. Check CORS (Cross-Origin)

If your frontend is served from `file:///` or different port:

**Temporary fix for development:**
In `server.js`, make sure CORS is enabled:
```javascript
app.use(cors()); // Allows all origins (OK for development)
```

**For production:**
```javascript
app.use(cors({
  origin: 'https://your-frontend-domain.com' // Your actual domain
}));
```

### 6. Check Network Tab

Open DevTools → Network tab:
- Look for request to `/api/token/generate`
- Check if it's failing (red) or succeeding (green)
- If failing, check the error message

### 7. Common Issues

**Issue: "Failed to generate token"**
- ✅ Backend server is not running → Start it with `npm start`
- ✅ Wrong API URL → Check `js/ai-token-manager.js` line 200
- ✅ CORS error → Check backend `server.js` CORS settings

**Issue: "Network request failed"**
- ✅ Backend server not accessible → Check server is running on port 3000
- ✅ Firewall blocking → Check Windows Firewall settings
- ✅ Wrong port → Verify `PORT=3000` in `.env` or change in `server.js`

**Issue: "Invalid or expired token"**
- ✅ This is normal - tokens expire after 15 minutes
- ✅ The system should auto-refresh, but if error persists, check backend logs

## 📝 Summary Checklist

- [ ] Installed dependencies (`npm install`)
- [ ] Created `.env` file with API keys
- [ ] Backend server running (`npm start`)
- [ ] Frontend scripts loaded in correct order
- [ ] Browser console shows token manager loaded
- [ ] No CORS errors in console
- [ ] Network tab shows successful API calls

## 🆘 Still Having Issues?

1. **Check all error messages** in browser console and terminal
2. **Verify file paths** are correct (especially `ai-token-manager.js`)
3. **Test backend directly**: Visit `http://localhost:3000/api/health`
4. **Test token generation**: Run this in browser console:
   ```javascript
   fetch('http://localhost:3000/api/token/generate', {method: 'POST'})
     .then(r => r.json())
     .then(console.log)
   ```

## 🎯 Quick Reference

**Development API URL:** `http://localhost:3000/api`

**Production API URL:** Set in `js/ai-token-manager.js` line 200-205

**Backend Port:** `3000` (change in `.env` if needed)

**Token Expiry:** 15 minutes or 10 requests (whichever comes first)

