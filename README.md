# Interactive Portfolio Website - Assignment 2

Hello there! 👋 Welcome to the enhanced version of my portfolio website, built for SWE 363 Assignment 2 at KFUPM. This iteration builds upon Assignment 1 by adding powerful interactive features, dynamic content management, and improved user experience.

## 🎯 What's New in Assignment 2?

This enhanced version takes the portfolio to the next level with:

### ✨ Dynamic Content
- **Smart Project Filtering** - Filter projects by 6 categories (AI, AI Agents, Deep Learning, Computer Vision, Research, Web)
- **Real-Time Search** - Instantly search through projects as you type
- **Combined Filtering** - Use category filters and search together seamlessly
- **Expandable Project Cards** - Click to expand/collapse project details with smooth animations
- **6 Featured Projects** - Expanded project showcase with detailed information and tech tags

### 💾 Data Handling
- **LocalStorage Integration** - Your theme preference and form submissions persist
- **GitHub API Integration** - Fetches and caches my latest repositories
- **Smart Caching** - Reduces API calls and improves performance
- **Graceful Fallbacks** - Always works, even if APIs fail

### 🎨 Enhanced Animations
- **Staggered Loading** - Project cards fade in with beautiful timing
- **Section Transitions** - Smooth fade-in animations as you scroll (Apple/Airbnb style)
- **Parallax Effects** - Subtle gradient animations in hero section
- **Expandable Cards** - Smooth expand/collapse with rotation animations
- **Loading States** - Professional spinners while content loads
- **Smooth Transitions** - Everything feels polished and responsive
- **Hover Effects** - Interactive feedback on all elements

### ✅ Advanced Form Validation
- **Real-Time Feedback** - See errors as you type (or leave fields)
- **Visual Indicators** - Border colors change (red = error, green = valid)
- **Inline Error Messages** - Clear, helpful validation messages
- **Loading States** - Button shows loading spinner during submission
- **Success Animation** - Friendly confirmation when form is submitted

### 🛡️ Error Handling
- **Loading States** - Users know when content is being fetched
- **Error States** - Friendly error messages with retry options
- **Empty States** - Helpful messages when no results are found
- **Form Validation** - Prevents invalid submissions with clear feedback

## Features Overview

### Core Features (From Assignment 1)
- ✅ **Responsive Design** - Looks perfect on any device
- ✅ **Dark/Light Theme Toggle** - With localStorage persistence
- ✅ **Smooth Animations** - Fade-in effects and scroll animations
- ✅ **Time-Based Greeting** - Dynamic greeting based on time of day
- ✅ **Typewriter Effect** - Cool typing animation for subtitle
- ✅ **Mobile Navigation** - Hamburger menu for small screens

### New Interactive Features (Assignment 2)
- 🆕 **Project Filtering System** - Filter by 6 categories
- 🆕 **Expandable Project Cards** - Click to reveal full project details
- 🆕 **Live Search** - Search projects in real-time
- 🆕 **Enhanced Form Validation** - Real-time feedback with visual indicators
- 🆕 **Loading/Error/Empty States** - Professional state management
- 🆕 **GitHub API Integration** - Fetch latest repos (optional)
- 🆕 **Data Persistence** - Form submissions stored in localStorage
- 🆕 **Smooth Scroll Animations** - Apple/Airbnb-style section transitions
- 🆕 **Parallax Effects** - Subtle gradient animations
- 🆕 **Staggered Animations** - Cards load with beautiful timing
- 🆕 **Success Notifications** - Animated confirmation messages

## 📂 What's Inside

### Sections

- **🏠 Hero Section** - Dynamic greeting + professional introduction
- **👨‍💻 About Me** - Background, education, and technical skills
- **💼 Projects Section** - Filterable, searchable project showcase with expandable details
  - 6 featured projects across AI, Deep Learning, Computer Vision, and Web Dev
  - Expandable cards showing full project details on click
  - Real-time filtering and search
  - Loading, error, and empty states
  - Tech tags displayed in expandable content
- **📧 Contact Form** - Enhanced validation with real-time feedback
  - Inline error messages
  - Visual validation indicators
  - Loading states during submission
  - Success confirmation animation

## 🛠 Tech Stack

Keeping it modern but vanilla:
- **HTML5** - Semantic structure with enhanced interactive elements
- **CSS3** - Grid, Flexbox, animations, and keyframes
- **Vanilla JavaScript (ES6+)** - No frameworks, pure modern JS
- **GitHub API** - Fetch repository data (optional enhancement)
- **LocalStorage API** - Client-side data persistence
- **Google Fonts** (Inter) - Clean, professional typography
- **Git & GitHub** - Version control and hosting

## 🚀 How to Run This Locally

Super easy setup:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/A1maan/assignment-2.git
   cd assignment-2
   ```

2. **Open in browser**:
   
   **Option A**: Simply open `index.html` in your browser
   
   **Option B**: Use a local server (recommended for API features):
   ```bash
   # Python
   python -m http.server 8000
   # Then visit: http://localhost:8000
   
   # Node.js
   npx serve .
   # Or
   npx http-server
   
   # VS Code Live Server
   # Right-click index.html → "Open with Live Server"
   ```

3. **That's it!** 🎉 The site is now running locally.

> **Note**: The GitHub API integration works best with a local server due to CORS policies.

## 📁 Project Structure

```
assignment-2/
├── index.html              # Enhanced HTML with interactive elements
├── css/
│   └── styles.css          # Enhanced styling with animations
├── js/
│   └── script.js           # Interactive features & API integration
├── assets/
│   └── images/
│       └── pfp.jpeg        # Profile picture
├── docs/
│   ├── ai-usage-report.md  # Detailed AI usage documentation
│   └── technical-documentation.md  # Complete technical specs
├── README.md               # Project overview (you're here!)
└── .gitignore             # Git ignore rules
```

## 🤖 AI Integration & Usage

For Assignment 2, I extensively used AI tools to enhance development:

### Tools Used:
- **GitHub Copilot** (60-70%) - Code completion, boilerplate, suggestions
- **ChatGPT/GPT-4** (20-30%) - Problem-solving, debugging, best practices
- **Claude 3.5** (10%) - Code review, documentation, UX improvements

### Key AI-Assisted Features:
- ✅ Project filtering system architecture
- ✅ Real-time search implementation
- ✅ Form validation with visual feedback
- ✅ Loading/error/empty state patterns
- ✅ CSS animation optimization
- ✅ GitHub API integration with error handling
- ✅ LocalStorage data persistence patterns

### Transparency:
Every AI interaction is documented in `docs/ai-usage-report.md` with:
- Exact prompts used
- AI responses received
- My modifications and customizations
- Learning outcomes from each interaction

**Important**: All AI-generated code has been reviewed, understood, modified, and thoroughly tested. I can explain every line of code in this project.

## 🌐 Live Demo

🚀 **[View Live Site](https://almaan-portfolio.netlify.app/)**

## 📚 What I Learned (Assignment 2)

This assignment took my web dev skills to the next level:

### JavaScript Skills
- ✅ **State Management** - Managing app state without frameworks
- ✅ **Async/Await** - Proper API integration with error handling
- ✅ **Event Handling** - Complex event listeners and delegation
- ✅ **Data Structures** - Efficient filtering and searching algorithms
- ✅ **LocalStorage API** - Client-side data persistence

### UI/UX Skills
- ✅ **Loading States** - Professional feedback during async operations
- ✅ **Error Handling** - User-friendly error messages and fallbacks
- ✅ **Form Validation** - Real-time feedback for better UX
- ✅ **Micro-interactions** - Animations that enhance usability
- ✅ **Empty States** - Helpful messages when no data is available

### Best Practices
- ✅ **Code Organization** - Modular, maintainable JavaScript
- ✅ **Performance** - CSS transforms, debouncing, efficient rendering
- ✅ **Accessibility** - WCAG compliance and keyboard navigation
- ✅ **Documentation** - Comprehensive docs and code comments
- ✅ **AI-Assisted Development** - Leveraging AI while maintaining understanding
  
---
