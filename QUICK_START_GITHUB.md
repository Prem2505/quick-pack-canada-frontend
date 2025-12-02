# Quick Start: Upload to GitHub

## Prerequisites

1. **Install Git** (if not installed):
   - Download: https://git-scm.com/download/win
   - Install and restart terminal

2. **Create GitHub Account** (if needed):
   - Go to: https://github.com
   - Sign up for free account

## Step-by-Step Instructions

### PART 1: Frontend Repository

#### 1. Create Frontend Repository on GitHub
- Go to: https://github.com/new
- Name: `quick-pack-canada-frontend`
- Description: "Frontend for Quick Pack Canada"
- **DO NOT** initialize with README
- Click "Create repository"

#### 2. Upload Frontend Code
Open PowerShell in the **root directory** (Quick_Pack_Canada folder):

```powershell
# Initialize git
git init

# Add files (backend folder is excluded by .gitignore)
git add .

# Commit
git commit -m "Initial commit: Frontend"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/quick-pack-canada-frontend.git

# Push
git branch -M main
git push -u origin main
```

---

### PART 2: Backend Repository

#### 1. Create Backend Repository on GitHub
- Go to: https://github.com/new
- Name: `quick-pack-canada-backend`
- Description: "Backend API for Quick Pack Canada"
- **DO NOT** initialize with README
- Click "Create repository"

#### 2. Upload Backend Code
Open PowerShell in the **backend folder**:

```powershell
# Navigate to backend
cd backend

# Initialize git
git init

# Add files
git add .

# Commit
git commit -m "Initial commit: Backend"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/quick-pack-canada-backend.git

# Push
git branch -M main
git push -u origin main
```

---

## Important Notes

✅ **What gets uploaded:**
- Frontend: All React code, components, pages, styles
- Backend: Server code, controllers, package.json

❌ **What does NOT get uploaded:**
- `node_modules/` (install with `npm install`)
- `.env` files (sensitive data)
- Backend folder in frontend repo
- Build files

## Authentication

If Git asks for credentials:
1. Use your GitHub username
2. Use a **Personal Access Token** (not password)
3. Create token at: GitHub Settings > Developer settings > Personal access tokens
4. Select `repo` scope

## Troubleshooting

**"Git not recognized"**
- Install Git from https://git-scm.com/download/win
- Restart terminal after installation

**"Remote origin already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/repo-name.git
```

**"Authentication failed"**
- Use Personal Access Token instead of password
- Make sure token has `repo` permissions

## Future Updates

To update either repository:

```bash
git add .
git commit -m "Your update message"
git push
```

