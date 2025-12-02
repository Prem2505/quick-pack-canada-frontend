# Quick Pack Canada - Frontend

A modern, responsive React website for Quick Pack Canada, a packaging supplies business specializing in pizza boxes and paper cups.

## Features

- 🎨 **Multiple Color Themes** - 6 beautiful color theme variations
- 🌙 **Dark Mode** - Toggle between light and dark modes
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🛒 **Order System** - Single and custom order functionality
- 📧 **Contact Form** - Integrated contact form with email backend
- 🎯 **SEO Optimized** - Comprehensive meta tags for search engines
- ⚡ **Fast Performance** - Built with Vite for optimal speed

## Tech Stack

- React 18
- React Router
- Vite
- CSS3 with CSS Variables
- Context API for theme management

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/quick-pack-canada-frontend.git
cd quick-pack-canada-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:5000
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable React components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── OrderModal.jsx
│   └── CustomOrderModal.jsx
├── context/         # React Context providers
│   └── ThemeContext.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   └── Contact.jsx
├── App.jsx          # Main app component
├── main.jsx         # Entry point
└── index.css        # Global styles and CSS variables
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Color Themes

The website supports 6 color themes:
1. Brown & Red (Default)
2. Blue & Teal
3. Green & Emerald
4. Purple & Pink
5. Orange & Amber
6. Indigo & Violet

Users can switch themes using the 🎨 button in the navbar.

## Features Overview

### Pages
- **Home** - Hero section, features, and call-to-action
- **About** - Company information and team details
- **Services** - Product catalog (pizza boxes and paper cups) with pricing
- **Contact** - Contact form and contact information

### Order System
- Individual product ordering
- Custom orders with multiple sizes
- Real-time price calculation
- Email notifications to backend

### Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px
- Touch-friendly interface
- Optimized for all screen sizes

## Backend Integration

The frontend connects to a Node.js/Express backend for:
- Contact form submissions
- Order processing
- Email notifications

Backend repository: [quick-pack-canada-backend](https://github.com/YOUR_USERNAME/quick-pack-canada-backend)

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000
```

For production, update this to your backend URL.

## Deployment

### Build for Production
```bash
npm run build
```

The `dist` folder will contain the production-ready files.

### Deploy to Vercel/Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variable: `VITE_API_URL=your-backend-url`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2024 Quick Pack Canada. All rights reserved.

Website created by Prem Ashok Patel
