# GitHub Upload Guide - Frontend & Backend

This guide will help you upload the frontend and backend separately to GitHub.

## Prerequisites

### Step 1: Install Git
1. Download Git from: https://git-scm.com/download/win
2. Run the installer and follow the setup wizard
3. Restart your terminal/PowerShell after installation
4. Verify installation by running: `git --version`

### Step 2: Create GitHub Account (if you don't have one)
1. Go to https://github.com
2. Sign up for a free account
3. Verify your email address

## Upload Frontend to GitHub

### Step 1: Create Frontend Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `quick-pack-canada-frontend` (or your preferred name)
3. Description: "Frontend for Quick Pack Canada - React website"
4. Set to **Public** or **Private** (your choice)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 2: Initialize Git in Frontend (Root Directory)
Open PowerShell/Command Prompt in the project root directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Quick Pack Canada frontend"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/quick-pack-canada-frontend.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: If you need to update later
```bash
git add .
git commit -m "Your commit message"
git push
```

## Upload Backend to GitHub

### Step 1: Create Backend Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `quick-pack-canada-backend` (or your preferred name)
3. Description: "Backend API for Quick Pack Canada - Node.js/Express"
4. Set to **Public** or **Private** (your choice)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 2: Initialize Git in Backend Folder
Open PowerShell/Command Prompt in the `backend` folder and run:

```bash
# Navigate to backend folder
cd backend

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Quick Pack Canada backend"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/quick-pack-canada-backend.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: If you need to update later
```bash
git add .
git commit -m "Your commit message"
git push
```

## Important Notes

### Files NOT Uploaded (Protected by .gitignore)
- `node_modules/` - Dependencies (will be installed via npm install)
- `.env` files - Environment variables (sensitive data)
- Build files and logs

### Before Pushing
1. **Never commit `.env` files** - They contain sensitive information
2. Make sure `.env` is in `.gitignore` (already done)
3. The `.env.example` files are safe to commit (they're templates)

### Environment Variables
For deployment, you'll need to:
1. Set environment variables in your hosting platform
2. Use the `.env.example` files as templates
3. Never share your actual `.env` files

## Quick Commands Reference

### Frontend (Root Directory)
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/quick-pack-canada-frontend.git
git branch -M main
git push -u origin main
```

### Backend (Backend Directory)
```bash
cd backend
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/quick-pack-canada-backend.git
git branch -M main
git push -u origin main
```

## Troubleshooting

### If Git asks for credentials:
1. Use a Personal Access Token instead of password
2. Go to GitHub Settings > Developer settings > Personal access tokens
3. Generate a new token with `repo` permissions
4. Use the token as your password

### If you get "remote origin already exists":
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/repository-name.git
```

### If you need to update existing repository:
```bash
git add .
git commit -m "Update description"
git push
```

