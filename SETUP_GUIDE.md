# Setup Guide - Installing Node.js and npm

## The Problem
You're seeing the error: `npm is not recognized` because Node.js (which includes npm) is not installed on your Windows system.

## Solution: Install Node.js

### Step 1: Download Node.js
1. Visit the official Node.js website: **https://nodejs.org/**
2. Download the **LTS (Long Term Support)** version for Windows
   - This is the recommended stable version
   - The installer will be a `.msi` file (e.g., `node-v20.x.x-x64.msi`)

### Step 2: Install Node.js
1. Run the downloaded `.msi` installer
2. **IMPORTANT**: During installation, make sure to check:
   - ✅ "Add to PATH" option (this is usually checked by default)
   - ✅ "Automatically install the necessary tools" (if prompted)
3. Follow the installation wizard and click "Next" through all steps
4. Click "Install" and wait for installation to complete
5. Click "Finish" when done

### Step 3: Verify Installation
1. **Close and reopen** your PowerShell/Command Prompt window (important!)
2. Run these commands to verify:
   ```powershell
   node --version
   npm --version
   ```
3. You should see version numbers (e.g., `v20.10.0` and `10.2.3`)

### Step 4: Install Project Dependencies
Once Node.js is installed, navigate to your project folder and run:
```powershell
npm install
```

### Step 5: Start the Development Server
```powershell
npm run dev
```

## Alternative: Using Chocolatey (if you have it)
If you have Chocolatey package manager installed, you can install Node.js with:
```powershell
choco install nodejs
```

## Troubleshooting

### If npm still doesn't work after installation:
1. **Restart your computer** - This ensures PATH variables are updated
2. **Close and reopen** your terminal/PowerShell window
3. Check if Node.js is in your PATH:
   - Press `Win + R`, type `sysdm.cpl`, press Enter
   - Go to "Advanced" tab → "Environment Variables"
   - Under "System variables", find "Path" and check if `C:\Program Files\nodejs\` is listed
   - If not, add it manually

### If you still have issues:
- Make sure you downloaded the correct version (64-bit for most modern Windows systems)
- Try running PowerShell as Administrator
- Check the Node.js installation directory (usually `C:\Program Files\nodejs\`)

## Quick Test
After installation, try this in a new PowerShell window:
```powershell
node --version
npm --version
```

If both commands show version numbers, you're all set! 🎉

