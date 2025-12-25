// =====================================================
// PC BUILD COMPONENT DATA
// =====================================================

const components = [
    {
        id: 1,
        name: 'Intel Core i5-14600KF',
        price: 211,
        specs: 'CPU',
        amazonLink: 'https://www.amazon.com/Intel%C2%AE-i5-14600KF-Desktop-Processor-P-cores/dp/B0CGJ4MLC8',
        image: 'https://i.pinimg.com/1200x/c7/6a/5d/c76a5d55dd2f648cd2420f08dd1c5f3d.jpg'
    },
    {
        id: 2,
        name: 'Gigabyte B760M DS3H DDR4',
        price: 109,
        specs: 'Motherboard',
        amazonLink: 'https://www.amazon.com/GIGABYTE-B760M-DS3H-DDR4-Motherboard/dp/B0BSB6MB15',
        image: 'https://i.pinimg.com/1200x/54/37/4f/54374f448b607b4164cf55ed0e2ce833.jpg'
    },
    {
        id: 3,
        name: 'AMD Radeon RX 7600',
        price: 279,
        specs: 'Graphics Card',
        amazonLink: 'https://www.amazon.com/ASRock-RX7600-CL-8GO-Challenger/dp/B0C6HTVV52',
        image: 'https://i.pinimg.com/1200x/df/4d/15/df4d157ac6e7ec560dff49126443b7ed.jpg'
    },
    {
        id: 4,
        name: 'Patriot Viper Elite II DDR4-3600',
        price: 45,
        specs: 'RAM (2x16GB)',
        amazonLink: 'https://www.amazon.ca/Patriot-Viper-Elite-3600MHz-Memory/dp/B0957XLCFM',
        image: 'https://i.pinimg.com/1200x/e9/da/b4/e9dab4757e07623bb28753b65f7ff6b7.jpg'
    },
    {
        id: 5,
        name: 'WD Black SN770',
        price: 79,
        specs: 'Storage (1TB)',
        amazonLink: 'https://www.amazon.com/WD_BLACK-SN770-Internal-Gaming-Solid/dp/B09QV692XY',
        image: 'https://i.pinimg.com/736x/c4/a5/f2/c4a5f20a558672d736cbf686c83f44a8.jpg'
    },
    {
        id: 6,
        name: 'Thermaltake Versa H17',
        price: 54,
        specs: 'Case',
        amazonLink: 'https://www.newegg.com/thermaltake-micro-atx-gaming-chassis-versa-h17-spcc-computer-case-black-ca-1j1-00s1nn-00/p/N82E16811133364',
        image: 'https://i.pinimg.com/1200x/8e/f4/89/8ef489010767ab9cd8f972d9ae1a5d96.jpg'
    },
    {
        id: 7,
        name: 'Thermaltake Smart 700W',
        price: 54,
        specs: 'Power Supply',
        amazonLink: 'https://www.amazon.com/Thermaltake-Certified-Continuous-Active-PS-SPD-0700NPCWUS-W/dp/B014W3EAX8',
        image: 'https://i.pinimg.com/1200x/c1/6a/f2/c16af2dd7c34c38673333ec9fddc4912.jpg'
    },
    {
        id: 8,
        name: 'Cooler Master i70C',
        price: 21,
        specs: 'CPU Cooler',
        amazonLink: 'https://www.amazon.com/Cooler-Master-Low-Profile-Anodized-Aluminum/dp/B0BB88471Y',
        image: 'https://i.pinimg.com/1200x/ec/bd/dc/ecbddc7de5f5350f683a14355b20ddff.jpg'
    }
];

// =====================================================
// DOM MANIPULATION & INITIALIZATION
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
    renderComponents();
    setupIntersectionObserver();
    setupParticles();
});

function renderComponents() {
    const grid = document.getElementById('componentsGrid');
    
    components.forEach((component, index) => {
        const card = createComponentCard(component);
        grid.appendChild(card);
        
        // Trigger animation after a slight delay for staggered effect
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 100);
    });
}

function createComponentCard(component) {
    const card = document.createElement('div');
    card.className = 'component-card';
    
    const imageHtml = `
        <div class="component-image-container">
            <img 
                src="${component.image}" 
                alt="${component.name}"
                class="component-image"
            />
        </div>
    `;
    
    card.innerHTML = `
        ${imageHtml}
        <div class="component-info">
            <h3 class="component-name">${component.name}</h3>
            <p class="component-price">$${component.price}</p>
            <p class="component-specs">${component.specs}</p>
            <a href="${component.amazonLink}" target="_blank" rel="noopener noreferrer" class="amazon-button">
                View on Amazon
            </a>
        </div>
    `;
    
    return card;
}

// =====================================================
// SCROLL ANIMATION - Intersection Observer
// ===================================================== */

function setupIntersectionObserver() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    // Observe all component cards
    document.querySelectorAll('.component-card').forEach(card => {
        observer.observe(card);
    });
    
    // Observe other elements
    document.querySelectorAll('.section-header, .total-cost-card, .footer-content').forEach(el => {
        observer.observe(el);
    });
}

// =====================================================
// ANIMATED PARTICLES SETUP
// ===================================================== */

function setupParticles() {
    const container = document.querySelector('.particles-container');
    
    // Create floating particles
    const particleCount = window.innerWidth < 768 ? 5 : 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = Math.random() > 0.5 
            ? 'rgba(255, 0, 0, ' + (Math.random() * 0.5 + 0.1) + ')'
            : 'rgba(255, 255, 255, ' + (Math.random() * 0.3 + 0.05) + ')';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = 0;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 20 + 10}s infinite`;
        particle.style.boxShadow = 'rgba(255, 0, 0, ' + Math.random() * 0.4 + ') 0 0 ' + Math.random() * 10 + 'px';
        
        container.appendChild(particle);
    }
    
    // Add float animation keyframes if not already present
    if (!document.getElementById('particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
            @keyframes float {
                0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 300 - 150}px) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// =====================================================
// SMOOTH SCROLL ENHANCEMENT
// ===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// =====================================================
// RESPONSIVE HANDLING
// ===================================================== */

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Re-setup particles on window resize for better performance
        const container = document.querySelector('.particles-container');
        if (window.innerWidth < 768) {
            // Could regenerate particles for smaller screens
        }
    }, 250);
});

// =====================================================
// PERFORMANCE OPTIMIZATION - Image Lazy Loading
// ===================================================== */

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Image is already loaded via src, but we can add additional handling here
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('.component-image').forEach(img => {
        imageObserver.observe(img);
    });
}

// =====================================================
// ACCESSIBILITY & KEYBOARD NAVIGATION
// ===================================================== */

document.querySelectorAll('.amazon-button').forEach(button => {
    button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            button.click();
        }
    });
});

// =====================================================
// THEME DETECTION & PREFERENCE
// ===================================================== */

// Check for user's color scheme preference (future enhancement)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    // Could add light theme support here
    console.log('User prefers light mode');
}

// Detect motion preferences
if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Reduce animations for users who prefer reduced motion
    document.body.style.setProperty('--animation-duration', '0.01s');
}

// =====================================================
// ERROR HANDLING & FALLBACKS
// ===================================================== */

window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        // Image failed to load, parent div will show placeholder
        console.warn('Image failed to load:', e.target.src);
    }
});

// =====================================================
// ANALYTICS & TRACKING (Optional)
// ===================================================== */

document.querySelectorAll('.amazon-button').forEach(button => {
    button.addEventListener('click', () => {
        const componentName = button.closest('.component-card').querySelector('.component-name').textContent;
        console.log('User clicked:', componentName);
        // You can add analytics tracking here if needed
    });
});
