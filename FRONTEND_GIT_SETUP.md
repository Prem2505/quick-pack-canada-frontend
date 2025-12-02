# Frontend Repository Setup

Follow these steps to create and upload the frontend to GitHub.

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `quick-pack-canada-frontend`
3. Description: "Frontend for Quick Pack Canada - React website"
4. Choose Public or Private
5. **DO NOT** check "Initialize with README"
6. Click "Create repository"

## Step 2: Initialize Git in Root Directory

Open PowerShell/Command Prompt in the project root (Quick_Pack_Canada folder) and run:

```bash
# Initialize git repository
git init

# Add all frontend files (excludes backend folder)
git add .

# Create initial commit
git commit -m "Initial commit: Quick Pack Canada frontend"

# Add remote repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/quick-pack-canada-frontend.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Update .gitignore

Make sure your `.gitignore` excludes the backend folder:

```
backend/
node_modules/
.env
dist/
build/
```

## Files Included in Frontend Repo

- All files in `src/` folder
- `public/` folder
- `index.html`
- `package.json`
- `vite.config.js`
- `README.md`
- `.gitignore`
- All other frontend-related files

## Files Excluded

- `backend/` folder (separate repository)
- `node_modules/`
- `.env` files

