// ==========================
// MATRIX RAIN BACKGROUND
// ==========================
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Matrix characters
const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

// Draw matrix rain
function drawMatrix() {
    // Semi-transparent black for trail effect
    ctx.fillStyle = 'rgba(5, 8, 20, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00ff9f';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 33);

// ==========================
// ENCRYPTED TEXT EFFECT
// ==========================
class EncryptedText {
    constructor(element) {
        this.element = element;
        this.originalText = element.getAttribute('data-value') || element.textContent;
        this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
        this.isAnimating = false;
        
        this.element.addEventListener('mouseenter', () => this.animate());
    }
    
    animate() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        let iteration = 0;
        const speed = 30;
        
        const interval = setInterval(() => {
            this.element.textContent = this.originalText
                .split('')
                .map((char, index) => {
                    if (index < iteration) {
                        return this.originalText[index];
                    }
                    return this.chars[Math.floor(Math.random() * this.chars.length)];
                })
                .join('');
            
            if (iteration >= this.originalText.length) {
                clearInterval(interval);
                this.isAnimating = false;
            }
            
            iteration += 1/3;
        }, speed);
    }
}

// Initialize encrypted text elements
document.addEventListener('DOMContentLoaded', () => {
    const encryptedElements = document.querySelectorAll('.encrypted-text');
    encryptedElements.forEach(element => new EncryptedText(element));
});

// ==========================
// NAVBAR SCROLL EFFECT
// ==========================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ==========================
// SMOOTH SCROLLING FOR LINKS
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================
// STATS COUNTER ANIMATION
// ==========================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for stats animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            animateCounter(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
});

// ==========================
// SCROLL REVEAL ANIMATIONS
// ==========================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

// Add reveal animation to sections
document.querySelectorAll('.scroll-item, .skill-card, .cert-card, .contact-card').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(item);
});

// ==========================
// MITRE ATT&CK FILTERING
// ==========================
const mitreFilters = document.querySelectorAll('.mitre-filter');
const techniqueColumns = document.querySelectorAll('.technique-column');

mitreFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        // Update active state
        mitreFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
        
        const filterValue = filter.getAttribute('data-filter');
        
        // Show/hide columns based on filter
        techniqueColumns.forEach(column => {
            const category = column.getAttribute('data-category');
            if (filterValue === 'all' || category === filterValue) {
                column.style.display = 'flex';
                column.style.animation = 'fadeIn 0.5s ease';
            } else {
                column.style.display = 'none';
            }
        });
    });
});

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ==========================
// STICKY SCROLL EFFECT
// ==========================
const scrollItems = document.querySelectorAll('.scroll-item');

const stickyScrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'scale(1)';
        } else {
            entry.target.style.opacity = '0.6';
            entry.target.style.transform = 'scale(0.95)';
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '-100px 0px -100px 0px'
});

scrollItems.forEach(item => {
    item.style.transition = 'all 0.5s ease';
    stickyScrollObserver.observe(item);
});

// ==========================
// TECHNIQUE ITEM TOOLTIPS
// ==========================
const techniqueItems = document.querySelectorAll('.technique-item');

techniqueItems.forEach(item => {
    item.addEventListener('click', () => {
        const tooltip = item.getAttribute('data-tooltip');
        const techniqueId = item.textContent;
        
        // Create a temporary notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--bg-card);
            border: 2px solid var(--primary);
            padding: 2rem;
            border-radius: 8px;
            z-index: 10000;
            max-width: 400px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
            animation: fadeIn 0.3s ease;
        `;
        
        notification.innerHTML = `
            <h4 style="color: var(--primary); margin-bottom: 0.5rem; font-family: var(--font-display);">${techniqueId}</h4>
            <p style="color: var(--text-primary); margin-bottom: 1rem;">${tooltip}</p>
            <button onclick="this.parentElement.remove()" style="
                padding: 0.5rem 1rem;
                background: var(--primary);
                color: var(--bg-dark);
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-weight: 700;
                font-family: var(--font-mono);
            ">Fermer</button>
        `;
        
        document.body.appendChild(notification);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    });
});

// ==========================
// TERMINAL TYPING EFFECT
// ==========================
function typeTerminal() {
    const terminalBody = document.querySelector('.terminal-body');
    if (!terminalBody) return;
    
    const lines = terminalBody.innerHTML;
    terminalBody.innerHTML = '';
    
    let charIndex = 0;
    const typingSpeed = 10;
    
    function type() {
        if (charIndex < lines.length) {
            terminalBody.innerHTML = lines.slice(0, charIndex + 1);
            charIndex++;
            setTimeout(type, typingSpeed);
        }
    }
    
    // Start typing when terminal is in view
    const terminalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !terminalBody.classList.contains('typed')) {
                terminalBody.classList.add('typed');
                terminalBody.innerHTML = '';
                type();
            }
        });
    }, { threshold: 0.5 });
    
    terminalObserver.observe(terminalBody);
}

// Uncomment to enable terminal typing effect
// typeTerminal();

// ==========================
// CURSOR GLOW EFFECT
// ==========================
const cursorGlow = document.createElement('div');
cursorGlow.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 255, 159, 0.15) 0%, transparent 70%);
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    opacity: 0;
`;
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
    cursorGlow.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
});

// ==========================
// PARALLAX SCROLL EFFECT
// ==========================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Parallax for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    // Parallax for section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        const rect = title.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;
        if (scrollPercent > 0 && scrollPercent < 1) {
            title.style.transform = `translateY(${(1 - scrollPercent) * 50}px)`;
        }
    });
});

// ==========================
// COMPANY LOGO HOVER EFFECT
// ==========================
const companyLogos = document.querySelectorAll('.company-logo');
companyLogos.forEach(logo => {
    logo.addEventListener('mouseenter', () => {
        logo.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    logo.addEventListener('mouseleave', () => {
        logo.style.transform = 'scale(1) rotate(0deg)';
    });
});

// ==========================
// TECH TAGS HOVER EFFECT
// ==========================
const techTags = document.querySelectorAll('.tag');
techTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.1)';
        tag.style.boxShadow = '0 0 15px currentColor';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1)';
        tag.style.boxShadow = 'none';
    });
});

// ==========================
// SKILL CARD 3D TILT EFFECT
// ==========================
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==========================
// CTA BUTTON RIPPLE EFFECT
// ==========================
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            top: ${y}px;
            left: ${x}px;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .cta-button {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(rippleStyle);

// ==========================
// LOADING ANIMATION
// ==========================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==========================
// GAUGE ANIMATION
// ==========================
const gauges = document.querySelectorAll('.gauge-fill');
const gaugeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const progress = entry.target.style.getPropertyValue('--progress');
            entry.target.style.strokeDashoffset = `calc(283 - (283 * ${progress} / 100))`;
        }
    });
}, { threshold: 0.5 });

gauges.forEach(gauge => {
    gaugeObserver.observe(gauge);
});

// ==========================
// MATRIX CELLS ANIMATION
// ==========================
const matrixCells = document.querySelectorAll('.matrix-cell.active');
matrixCells.forEach((cell, index) => {
    cell.style.animationDelay = `${index * 0.1}s`;
});

// ==========================
// CONSOLE EASTER EGG
// ==========================
console.log(`
%c
   ____   ____________________    _   ________
  / __ \\ / ____/ ____/   |/ | / / |/ / ____/
 / / / // /   / __/ / /| /  |/ /|  / __/   
/ /_/ // /___/ /___/ ___ / /|  / /|  / /___  
\\____/ \\____/_____/_/  |_/_/ |_/_/ |_/_____/  

%cSOC Manager & Cybersecurity Expert
%cDéveloppé avec 💚 Matrix theme
`, 
'color: #00ff9f; font-family: monospace; font-size: 10px;',
'color: #00d4ff; font-family: monospace; font-size: 12px;',
'color: #a1a1aa; font-family: monospace; font-size: 10px;'
);

console.log('%c🛡️ Défendre. Détecter. Répondre.', 
    'color: #00ff9f; font-size: 14px; font-weight: bold; padding: 10px;'
);

// ==========================
// KEYBOARD SHORTCUTS
// ==========================
document.addEventListener('keydown', (e) => {
    // Press 'M' to toggle Matrix background
    if (e.key === 'm' || e.key === 'M') {
        const currentOpacity = parseFloat(canvas.style.opacity || '0.15');
        canvas.style.opacity = currentOpacity === 0.15 ? '0.3' : '0.15';
    }
    
    // Press 'H' to go to home
    if (e.key === 'h' || e.key === 'H') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ==========================
// PERFORMANCE OPTIMIZATION
// ==========================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll listeners
const optimizedScroll = debounce(() => {
    // Scroll-dependent code here
}, 10);

window.addEventListener('scroll', optimizedScroll);

// ==========================
// ANALYTICS TRACKING (Optional)
// ==========================
// Track section views
const sections = document.querySelectorAll('section[id]');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            console.log(`Viewing section: ${sectionId}`);
            // Add your analytics tracking here
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => {
    sectionObserver.observe(section);
});

// ==========================
// INITIALIZE ALL FEATURES
// ==========================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Portfolio initialized');
    
    // Add any initialization code here
    
    // Animate elements on page load
    setTimeout(() => {
        document.querySelectorAll('.hero-content > *').forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 300);
});