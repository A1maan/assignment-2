# Technical Documentation - Assignment 2

## Project Overview

This enhanced portfolio website builds upon Assignment 1 by adding interactive features, dynamic content, data handling, and improved user experience. It demonstrates modern web development practices with vanilla JavaScript.

### Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **APIs**: GitHub REST API (optional enhancement)
- **Storage**: LocalStorage for data persistence
- **Fonts**: Google Fonts (Inter)
- **Version Control**: Git
- **Deployment**: Static hosting compatible (GitHub Pages, Netlify, Vercel)

## File Structure

```
assignment-2/
├── index.html              # Main HTML with enhanced interactive elements
├── css/
│   └── styles.css          # Enhanced styling with animations
├── js/
│   └── script.js           # Interactive features and API integration
├── assets/
│   └── images/
│       └── pfp.jpeg        # Profile picture
├── docs/
│   ├── ai-usage-report.md  # Detailed AI tool usage log
│   └── technical-documentation.md  # Technical specifications
├── README.md               # Project overview and instructions
└── .gitignore             # Git ignore rules
```

---

## New Features in Assignment-2

### 1. Dynamic Content - Project Filtering System

#### Feature Description
Users can filter projects by 6 categories and search in real-time. The system combines both filtering and searching simultaneously. Project cards are expandable to show full details.

#### Categories
- **ai** - General AI/ML projects
- **ai-agents** - Agentic systems
- **deep-learning** - Neural networks and deep learning
- **computer-vision** - Vision-based projects
- **research** - Academic publications and research
- **web** - Web development projects

#### Expandable Cards Implementation
```javascript
// Event delegation for card expansion
projectsSection.addEventListener('click', function(e) {
    const expandBtn = e.target.closest('.project-expand-btn');
    if (expandBtn) {
        e.stopPropagation();
        const card = expandBtn.closest('.project-card');
        
        // Close all other cards
        document.querySelectorAll('.project-card').forEach(otherCard => {
            if (otherCard !== card && otherCard.classList.contains('expanded')) {
                otherCard.classList.remove('expanded');
                const otherIcon = otherCard.querySelector('.expand-icon');
                if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
            }
        });
        
        // Toggle current card
        card.classList.toggle('expanded');
        icon.style.transform = card.classList.contains('expanded') ? 'rotate(180deg)' : 'rotate(0deg)';
    }
});
```

**Key Features**:
- Only one card expands at a time
- Smooth expand/collapse animation
- Icon rotates 180° when expanded
- Event delegation prevents duplicate listeners
- Responsive grid layout that adjusts card heights individually

### 2. Data Handling

#### LocalStorage Implementation

**Theme Persistence** (from Assignment 1):
```javascript
localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme');
```

**Form Submissions Storage**:
```javascript
const submission = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
    timestamp: new Date().toISOString()
};

const submissions = JSON.parse(
    localStorage.getItem('contactSubmissions') || '[]'
);
submissions.push(submission);
localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
```

**GitHub API Caching**:
```javascript
localStorage.setItem('githubRepos', JSON.stringify(repos));
localStorage.setItem('githubReposFetchTime', Date.now().toString());
```

#### API Integration

**GitHub API Fetch**:
```javascript
async function fetchGitHubRepos() {
    try {
        const response = await fetch(
            'https://api.github.com/users/A1maan/repos?sort=updated&per_page=5'
        );
        
        if (!response.ok) {
            console.log('API error, using fallback data');
            return;
        }
        
        const repos = await response.json();
        // Process and cache repos
        
    } catch (error) {
        console.log('Fetch failed:', error.message);
        // Graceful fallback to static data
    }
}
```

**Error Handling**:
- Try-catch blocks for all async operations
- Graceful fallback to static data
- User-friendly error messages
- Rate limit handling

### 3. Enhanced Form Validation

#### Real-Time Validation

**Validator Functions**:
```javascript
const validators = {
    name: (value) => {
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return null;
    },
    email: (value) => {
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email';
        return null;
    },
    message: (value) => {
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return null;
    }
};
```

**Validation Triggers**:
- **onBlur**: Validates when user leaves field
- **onSubmit**: Validates all fields before submission
- **Visual Feedback**: Border colors change (red for errors, green for valid)

**Loading States**:
```javascript
// Show loading
btnText.style.display = 'none';
btnLoading.style.display = 'inline-flex';
submitBtn.disabled = true;

// Hide loading after submission
btnText.style.display = 'inline';
btnLoading.style.display = 'none';
submitBtn.disabled = false;
```

### 4. Animation and Transitions

#### CSS Animations

**Project Card Fade-In**:
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.project-card {
    animation: fadeInUp 0.6s ease forwards;
}
```

**Staggered Animation**:
```javascript
// Each card has delayed animation
style="animation-delay: ${index * 0.1}s"
```

**Loading Spinner**:
```css
.spinner {
    border: 4px solid #e5e7eb;
    border-top: 4px solid #2563eb;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
```

**Success Message Slide**:
```css
@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

#### Interactive Hover Effects

**Cards**:
```css
.project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}
```

**Buttons**:
```css
.filter-btn:hover {
    border-color: #2563eb;
    color: #2563eb;
    transform: translateY(-2px);
}
```

### 5. Error Handling and User Feedback

#### Application States

**Loading State**:
```html
<div id="projects-loading" class="loading-state">
    <div class="spinner"></div>
    <p>Loading awesome projects...</p>
</div>
```

**Error State**:
```html
<div id="projects-error" class="error-state" style="display: none;">
    <span class="error-icon">⚠️</span>
    <p>Oops! Failed to load projects.</p>
    <button class="btn btn-primary" onclick="location.reload()">
        Try Again
    </button>
</div>
```

**Empty State**:
```html
<div id="projects-empty" class="empty-state" style="display: none;">
    <span class="empty-icon">🔍</span>
    <p>No projects found matching your search.</p>
</div>
```

#### Form Error Messages

**Inline Errors**:
```html
<div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>
    <span class="error-message" id="name-error"></span>
</div>
```

**Success Feedback**:
```html
<div id="form-success" class="success-message" style="display: none;">
    ✓ Message sent successfully! I'll get back to you soon.
</div>
```

## HTML Structure

### Semantic Markup
The HTML follows semantic best practices:

```html
<nav>       <!-- Navigation bar -->
<section>   <!-- Main content sections -->
<article>   <!-- Project cards -->
<form>      <!-- Contact form -->
<footer>    <!-- Site footer -->
```

### Accessibility Features
- **ARIA Labels**: Interactive elements have descriptive labels
- **Semantic Elements**: Proper HTML5 semantic structure
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Alt Text**: Descriptive text for images (when added)

### Meta Tags
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Almaan Khan - Computer Science Student</title>
```

## CSS Architecture

### Methodology
The CSS follows a component-based approach with:
- **Reset Styles**: Normalize browser defaults
- **Base Styles**: Typography and global rules
- **Component Styles**: Specific component styling
- **Responsive Styles**: Media queries for different screen sizes

### Layout Systems

#### CSS Grid
Used for main layout structures:
```css
.hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}
```

#### Flexbox
Used for navigation and smaller components:
```css
.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

### Responsive Design

#### Breakpoints
- **Desktop**: 1200px+ (default)
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: 320px - 479px

#### Media Query Strategy
Mobile-first approach with progressive enhancement:
```css
/* Mobile first (default) */
.element { /* mobile styles */ }

/* Tablet */
@media (max-width: 768px) { /* tablet styles */ }

/* Mobile */
@media (max-width: 480px) { /* mobile styles */ }
```

### Color Scheme

#### Light Theme
- **Primary**: #2563eb (Blue)
- **Background**: #ffffff (White)
- **Text**: #333333 (Dark Gray)
- **Secondary**: #64748b (Gray)

#### Dark Theme
- **Primary**: #3b82f6 (Light Blue)
- **Background**: #1e293b (Dark Blue)
- **Text**: #e2e8f0 (Light Gray)
- **Secondary**: #cbd5e1 (Light Gray)

### Animations
- **Transitions**: 0.3s ease for hover effects
- **Fade-in**: Scroll-triggered animations using Intersection Observer
- **Theme Toggle**: Smooth color transitions

---

## Performance Considerations

### Optimization Techniques

**Debouncing Search Input**:
```javascript
// Prevent excessive function calls during typing
let searchTimeout;
searchInput.addEventListener('input', function(e) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        searchProjects(e.target.value);
    }, 300);
});
```

### Asset Optimization
- Minify CSS and JavaScript for production
- Optimize images (compress, use modern formats like WebP)
- Use CDN for fonts and external resources

---

## Browser Compatibility

### Supported Browsers
- **Chrome**: 90+ ✓
- **Firefox**: 88+ ✓
- **Safari**: 14+ ✓
- **Edge**: 90+ ✓
---

## Accessibility Features

### WCAG 2.1 Compliance

**Keyboard Navigation**:
- All interactive elements are keyboard accessible
- Focus indicators visible on all elements
- Tab order follows logical sequence

**Screen Reader Support**:
- Semantic HTML elements
- ARIA labels for complex interactions
- Alt text for images
- Error messages announced to screen readers

**Color Contrast**:
- All text meets WCAG AA standards (4.5:1 ratio minimum)
- Interactive elements have sufficient contrast
- Dark mode also meets contrast requirements

**Form Accessibility**:
- Labels associated with inputs
- Error messages linked to fields
- Required fields indicated
- Validation feedback is clear

---

## Testing Strategy

### Manual Testing
- ✓ Cross-browser testing
- ✓ Responsive design testing on multiple devices
- ✓ Form validation with various inputs
- ✓ Error state simulation
- ✓ Dark mode functionality

### Testing Scenarios

**Project Filtering**:
- Filter by each category
- Search with various terms
- Combine filter and search
- Empty results handling

**Form Validation**:
- Submit empty form
- Invalid email formats
- Short messages
- Valid submission

**Error Handling**:
- Simulated API failures
- Network disconnection
- Invalid data

---

## Smooth Scroll & Section Transitions

### Apple/Airbnb Style Animations

Implemented smooth, modern animations inspired by professional websites:

**Smooth Scroll Behavior**:
```css
html, * {
    scroll-behavior: smooth;
}
```

**Section Fade-In on Scroll**:
```javascript
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fade in sections
                if (entry.target.tagName === 'SECTION') {
                    entry.target.classList.add('visible');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}
```

**Animations Included**:
1. **Section Fade-In**: Sections fade in with subtle upward motion
2. **Heading Slide-In**: Titles slide in from left
3. **Parallax Gradient**: Hero section has subtle moving background
4. **Staggered Items**: Multiple items animate in sequence
5. **Scroll Reveal**: Elements animate when they enter viewport
6. **Hover Effects**: Smooth spring-like hover transitions

**CSS Animation Details**:
```css
@keyframes fadeInSection {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes gradientShift {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(10px); }
}
```

---