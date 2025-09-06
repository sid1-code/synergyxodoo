# Quick Setup Guide

## Option 1: Frontend Only (Recommended for testing)

1. **Install React dependencies:**
   ```bash
   npm install
   ```

2. **Start the React app:**
   ```bash
   npm start
   ```

3. **Open your browser to:** `http://localhost:3000`

## Option 2: With Mock Backend

1. **Install React dependencies:**
   ```bash
   npm install
   ```

2. **Install backend dependencies:**
   ```bash
   npm install express cors jsonwebtoken
   ```

3. **Start the mock backend (in one terminal):**
   ```bash
   node mock-backend.js
   ```

4. **Start the React app (in another terminal):**
   ```bash
   npm start
   ```

5. **Test with these credentials:**
   - Email: `john@example.com`
   - Password: `password123`

## Testing the App

1. **Register a new account** or use the test credentials above
2. **Login** and you'll be redirected to the dashboard
3. **Try accessing** `/dashboard` directly without logging in (should redirect to login)
4. **Logout** and verify you're redirected back to login

## Mobile Testing

- Open the app on your mobile device using the same network
- The responsive design will adapt to mobile screens
- Touch interactions work seamlessly

## Production Deployment

1. **Build the app:**
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to your hosting service

3. **Configure your backend** to match the expected API endpoints

## Troubleshooting

- **API errors:** Make sure your backend is running and accessible
- **CORS issues:** Ensure your backend has CORS enabled
- **Token issues:** Check that JWT tokens are being generated correctly
- **Routing issues:** Verify React Router is properly configured
