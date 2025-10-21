// Project data with categories (would normally come from API)
const projectsData = [
    {
        id: 1,
        title: "Rukn - AI Mental Health Platform",
        description: "Real-time Arabic-first mental health helpline monitoring dashboard for NCMH (National Center for Mental Health Promotion). Detects distress spikes, operational issues, and enables rapid response with human-in-the-loop approval using fine-tuned MARBERT models.",
        icon: "🧠",
        category: "ai",
        tags: ["TypeScript", "FastAPI", "NLP", "MARBERT", "Next.js"],
        github: "https://github.com/A1maan/rukn",
        demo: "#"
    },
    {
        id: 2,
        title: "Dyslexia Detection - IEEE Access Publication",
        description: "Feature-efficient and interpretable dyslexia detection via soft voting ensemble learning. Enhanced performance by more than 2% across all metrics compared to baseline models. Published in IEEE Access 2025. Engineered the novel approach, project code, and evaluation plots.",
        icon: "📊",
        category: "research",
        tags: ["PyTorch", "Python", "Machine Learning", "Ensemble Methods", "mRMR"],
        github: "https://github.com/A1maan",
        demo: "#"
    },
    {
        id: 3,
        title: "Jarir AI Salesman - LangGraph Agent",
        description: "Intelligent chatbot assistant for Jarir Bookstore with tool-based reasoning. Engineered an agentic system using LangGraph to autonomously access and search product data. Developed during KAUST Academy AI Summer School with personalized recommendations.",
        icon: "🤖",
        category: "ai-agents",
        tags: ["LangChain", "LangGraph", "Python", "NLP", "Agents"],
        github: "https://github.com/A1maan/jarir-nlp",
        demo: "#"
    },
    {
        id: 4,
        title: "MSGU-Net - Medical Image Segmentation",
        description: "Lightweight deep learning framework for medical image segmentation, specifically designed for skin lesion detection. Published framework with comprehensive documentation and benchmarks on standard medical imaging datasets.",
        icon: "🏥",
        category: "deep-learning",
        tags: ["PyTorch", "Deep Learning", "Computer Vision", "Medical AI"],
        github: "https://github.com/A1maan/msgu-net",
        demo: "https://www.frontiersin.org/journals/neurorobotics/articles/10.3389/fnbot.2024.1480055/full"
    },
    {
        id: 5,
        title: "Class Imbalance in Object Detection",
        description: "Research project addressing technical challenges of class imbalance and rare object detection in multi-class scenarios. Developing novel approaches to improve detection performance on underrepresented classes.",
        icon: "🎯",
        category: "computer-vision",
        tags: ["Object Detection", "Deep Learning", "PyTorch", "Computer Vision"],
        github: "https://github.com/A1maan/long-tail-imbalance-handling",
        demo: "#"
    },
    {
        id: 6,
        title: "Interactive Portfolio Website",
        description: "Responsive, modern portfolio with dynamic project filtering, real-time search, enhanced form validation, and smooth animations. Features dark mode, GitHub API integration, and LocalStorage persistence. Built with vanilla JavaScript for optimal performance.",
        icon: "🌐",
        category: "web",
        tags: ["HTML5", "CSS3", "JavaScript", "API Integration", "UX/UI"],
        github: "https://github.com/A1maan/assignment-2",
        demo: "#"
    }
];

// wait for the dom to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    
    function updateTimeGreeting() {
        const greetingEl = document.getElementById('time-greeting');
        if (!greetingEl) return;
        
        const hour = new Date().getHours();
        let greeting = '';
        let emoji = '';
        
        if (hour < 12) {
            greeting = 'Good morning!';
            emoji = '🌅';
        } else if (hour < 18) {
            greeting = 'Good afternoon!';
            emoji = '☀️';
        } else {
            greeting = 'Good evening!';
            emoji = '🌙';
        }
        
        greetingEl.textContent = `${emoji} ${greeting}`;
    }
    
    // Update greeting on page load and every minute
    updateTimeGreeting();
    setInterval(updateTimeGreeting, 60000);
    
    
    const sectionNavBtns = document.querySelectorAll('.section-nav-btn');
    sectionNavBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            
            // Update active state
            sectionNavBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Smooth scroll to section
            const targetElement = document.getElementById(section);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update section nav active state on scroll
    window.addEventListener('scroll', function() {
        const sections = ['about', 'projects', 'contact'];
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            const btn = document.querySelector(`[data-section="${sectionId}"]`);
            
            if (section && btn) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const scrollPosition = window.scrollY;
                
                if (scrollPosition >= sectionTop - 150 && scrollPosition < sectionTop + sectionHeight - 150) {
                    sectionNavBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                }
            }
        });
    });
    
    // mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // mobile menu should be closed when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // dark mode 
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // quick check to see if user has any mode preferences (cuz some people seem to like light mode apparently)
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        if (themeToggle) {
            themeToggle.textContent = '☀️';
        }
    } else {
        // light mode preference (why just why lol)
        body.classList.remove('dark-mode');
        if (themeToggle) {
            themeToggle.textContent = '🌙';
        }
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            
            // update button icon to opposite mode and save user's preference
            if (body.classList.contains('dark-mode')) {
                themeToggle.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggle.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            }
            
            updateNavbarTheme();
        });
    }
    
    // func to update navbar colr
    function updateNavbarTheme() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (body.classList.contains('dark-mode')) {
                navbar.style.backgroundColor = window.scrollY > 50 ? '#1e293b' : '#334155';
            } else {
                navbar.style.backgroundColor = '#ffffff';
            }
        }
    }
    
    // smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    // Use event delegation to handle expand/collapse - ONE listener for all cards
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        projectsSection.addEventListener('click', function(e) {
            // Check if click is on expand button
            const expandBtn = e.target.closest('.project-expand-btn');
            if (expandBtn) {
                e.stopPropagation();
                
                const card = expandBtn.closest('.project-card');
                const icon = expandBtn.querySelector('.expand-icon');
                
                if (!card || !icon) return;
                
                // Close all other cards first
                document.querySelectorAll('.project-card').forEach(otherCard => {
                    if (otherCard !== card && otherCard.classList.contains('expanded')) {
                        otherCard.classList.remove('expanded');
                        const otherIcon = otherCard.querySelector('.expand-icon');
                        if (otherIcon) {
                            otherIcon.style.transform = 'rotate(0deg)';
                        }
                    }
                });
                
                // Toggle current card
                card.classList.toggle('expanded');
                icon.style.transform = card.classList.contains('expanded') ? 'rotate(180deg)' : 'rotate(0deg)';
                return;
            }
            
            // Check if click is on project header (but not on button or links)
            const header = e.target.closest('.project-header');
            if (header && !e.target.closest('.project-expand-btn') && !e.target.closest('a')) {
                const card = header.closest('.project-card');
                const icon = card.querySelector('.expand-icon');
                
                if (!card || !icon) return;
                
                // Close all other cards first
                document.querySelectorAll('.project-card').forEach(otherCard => {
                    if (otherCard !== card && otherCard.classList.contains('expanded')) {
                        otherCard.classList.remove('expanded');
                        const otherIcon = otherCard.querySelector('.expand-icon');
                        if (otherIcon) {
                            otherIcon.style.transform = 'rotate(0deg)';
                        }
                    }
                });
                
                // Toggle current card
                card.classList.toggle('expanded');
                icon.style.transform = card.classList.contains('expanded') ? 'rotate(180deg)' : 'rotate(0deg)';
            }
        });
    }
    
    
    let allProjects = [];
    let filteredProjects = [];
    let currentFilter = 'all';
    
    // Load projects
    function loadProjects() {
        const loadingState = document.getElementById('projects-loading');
        const errorState = document.getElementById('projects-error');
        const projectsGrid = document.querySelector('.projects-grid');
        
        // Simulate API call with delay
        setTimeout(() => {
            try {
                allProjects = [...projectsData];
                filteredProjects = [...projectsData];
                
                // Hide loading, show projects
                if (loadingState) loadingState.style.display = 'none';
                
                renderProjects(filteredProjects);
                
                // Try to fetch GitHub repos (optional enhancement)
                fetchGitHubRepos();
                
            } catch (error) {
                console.error('Error loading projects:', error);
                if (loadingState) loadingState.style.display = 'none';
                if (errorState) errorState.style.display = 'block';
            }
        }, 1000);
    }
    
    // Render projects to DOM
    function renderProjects(projects) {
        const projectsGrid = document.querySelector('.projects-grid');
        const emptyState = document.getElementById('projects-empty');
        
        if (!projectsGrid) return;
        
        if (projects.length === 0) {
            projectsGrid.innerHTML = '';
            if (emptyState) emptyState.style.display = 'block';
            return;
        }
        
        if (emptyState) emptyState.style.display = 'none';
        
        projectsGrid.innerHTML = projects.map((project, index) => `
            <div class="project-card" style="animation-delay: ${index * 0.1}s" data-category="${project.category}" data-project-id="${project.id}">
                <div class="project-header">
                    <div class="project-image">
                        <div class="project-placeholder">${project.icon}</div>
                    </div>
                    <div class="project-header-content">
                        <h3 class="project-title">${project.title}</h3>
                        <span class="project-category-badge">${project.category}</span>
                    </div>
                    <button class="project-expand-btn" aria-label="Toggle project details">
                        <span class="expand-icon">▼</span>
                    </button>
                </div>
                
                <div class="project-content">
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${project.demo && project.demo !== '#' ? `<a href="${project.demo}" class="project-link demo-link" target="_blank">
                            <span>View Project</span>
                            <span class="external-icon">↗</span>
                        </a>` : ''}
                        ${project.github && project.github !== '#' ? `<a href="${project.github}" class="project-link github-link" target="_blank">
                            <span>GitHub Repo</span>
                            <span class="external-icon">↗</span>
                        </a>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Filter projects by category
    function filterProjects(category) {
        currentFilter = category;
        
        if (category === 'all') {
            filteredProjects = [...allProjects];
        } else {
            filteredProjects = allProjects.filter(project => project.category === category);
        }
        
        // Apply search if active
        const searchInput = document.getElementById('project-search');
        if (searchInput && searchInput.value.trim()) {
            searchProjects(searchInput.value);
        } else {
            renderProjects(filteredProjects);
        }
    }
    
    // Search projects
    function searchProjects(query) {
        const searchTerm = query.toLowerCase().trim();
        
        if (!searchTerm) {
            renderProjects(filteredProjects);
            return;
        }
        
        const results = filteredProjects.filter(project => 
            project.title.toLowerCase().includes(searchTerm) ||
            // project.description.toLowerCase().includes(searchTerm) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        
        renderProjects(results);
    }
    
    // Set up filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            const filter = this.getAttribute('data-filter');
            filterProjects(filter);
        });
    });
    
    // Set up search input
    const searchInput = document.getElementById('project-search');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            searchProjects(e.target.value);
        });
    }
    
    // Initialize projects
    loadProjects();
    
    
    async function fetchGitHubRepos() {
        try {
            const response = await fetch('https://api.github.com/users/A1maan/repos?sort=updated&per_page=5');
            
            if (!response.ok) {
                console.log('GitHub API rate limit or error, using static data');
                return;
            }
            
            const repos = await response.json();
            console.log('✓ Successfully fetched GitHub repos:', repos.length);
            
            // Store in localStorage for caching
            localStorage.setItem('githubRepos', JSON.stringify(repos));
            localStorage.setItem('githubReposFetchTime', Date.now().toString());
            
        } catch (error) {
            console.log('Could not fetch GitHub repos:', error.message);
        }
    }
    
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const submitBtn = document.getElementById('submit-btn');
        
        // Real-time validation
        function validateField(input, errorId, validator) {
            const errorElement = document.getElementById(errorId);
            const error = validator(input.value);
            
            if (error) {
                errorElement.textContent = error;
                input.style.borderColor = '#dc2626';
                return false;
            } else {
                errorElement.textContent = '';
                input.style.borderColor = '#10b981';
                return true;
            }
        }
        
        // Validators
        const validators = {
            name: (value) => {
                if (!value.trim()) return 'Name is required';
                if (value.trim().length < 2) return 'Name must be at least 2 characters';
                return null;
            },
            email: (value) => {
                if (!value.trim()) return 'Email is required';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return 'Please enter a valid email address';
                return null;
            },
            message: (value) => {
                if (!value.trim()) return 'Message is required';
                if (value.trim().length < 10) return 'Message must be at least 10 characters';
                return null;
            }
        };
        
        // Add real-time validation
        nameInput.addEventListener('blur', () => validateField(nameInput, 'name-error', validators.name));
        emailInput.addEventListener('blur', () => validateField(emailInput, 'email-error', validators.email));
        messageInput.addEventListener('blur', () => validateField(messageInput, 'message-error', validators.message));
        
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Validate all fields
            const isNameValid = validateField(nameInput, 'name-error', validators.name);
            const isEmailValid = validateField(emailInput, 'email-error', validators.email);
            const isMessageValid = validateField(messageInput, 'message-error', validators.message);
            
            if (!isNameValid || !isEmailValid || !isMessageValid) {
                return;
            }
            
            // Show loading state
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline-flex';
            submitBtn.disabled = true;
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Store submission in localStorage
            const submission = {
                name: nameInput.value,
                email: emailInput.value,
                message: messageInput.value,
                timestamp: new Date().toISOString()
            };
            
            const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
            submissions.push(submission);
            localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
            
            // Show success message
            const successMessage = document.getElementById('form-success');
            successMessage.style.display = 'block';
            
            // Reset form
            contactForm.reset();
            
            // Reset button state
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
            
            // Reset field borders
            [nameInput, emailInput, messageInput].forEach(input => {
                input.style.borderColor = '#e5e7eb';
            });
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        });
    }
    
    // extra small thing (this part will greet the user based on the time of day)
    function displayGreeting() {
        const heroTitle = document.querySelector('.hero-title');
        if (!heroTitle) return;
        
        const now = new Date();
        const hour = now.getHours();
        let greeting;
        
        if (hour < 12) {
            greeting = "Good Morning! I'm";
        } else if (hour < 17) {
            greeting = "Good Afternoon! I'm";
        } else {
            greeting = "Good Evening! I'm";
        }
        
        heroTitle.innerHTML = `${greeting} <span class="highlight">Almaan Khan</span>`;
    }
    
    displayGreeting();
    
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            updateNavbarTheme();
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
    }
    
    // fade-in animation to sections when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // hero section should be visible immediately
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
    
    // typing effect for hero subtitle 
    function typeWriter(element, text, speed = 100) {
        if (!element) return;
        
        element.textContent = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        // typing using a short delay to replicate real human typing
        setTimeout(type, 1000);
    }
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        typeWriter(heroSubtitle, originalText, 80);
    }

    
    // Trigger scroll animations when sections come into view
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
                    
                    // Fade in scroll-reveal elements
                    if (entry.target.classList.contains('scroll-reveal')) {
                        entry.target.classList.add('visible');
                    }
                }
            });
        }, observerOptions);
        
        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
        
        // Observe all scroll-reveal elements
        document.querySelectorAll('.scroll-reveal').forEach(element => {
            observer.observe(element);
        });
    }
    
    // Initialize scroll animations when page loads
    initScrollAnimations();
});

// func just to get the current time in string format
function getCurrentTime() {
    return new Date().toLocaleTimeString();
}

// same thing but for date
function getCurrentDate() {
    return new Date().toLocaleDateString();
}