// Hero background slideshow
class HeroSlideshow {
    constructor() {
        this.currentIndex = 0;
        this.images = [
            'hero_bgs/1.jpg',
            'hero_bgs/2.jpg',
            'hero_bgs/3.jpg',
            'hero_bgs/4.jpg'
        ];
        this.interval = 5000; // 5秒間隔
        this.heroElement = document.querySelector('.hero');
        this.bgElements = [];
        
        this.init();
    }
    
    init() {
        if (!this.heroElement) return;
        
        // 背景要素を作成
        this.createBackgroundElements();
        
        // 最初の画像を表示
        this.showSlide(this.currentIndex);
        
        // スライドショーを開始
        this.startSlideshow();
        
        // 画像のプリロード
        this.preloadImages();
    }
    
    createBackgroundElements() {
        this.images.forEach((imageSrc, index) => {
            const bgElement = document.createElement('div');
            bgElement.className = 'hero-bg';
            bgElement.style.backgroundImage = `url('${imageSrc}')`;
            
            // 最初の画像のみアクティブに
            if (index === 0) {
                bgElement.classList.add('active');
            }
            
            this.heroElement.appendChild(bgElement);
            this.bgElements.push(bgElement);
        });
    }
    
    showSlide(index) {
        // 全ての背景を非アクティブに
        this.bgElements.forEach(bg => bg.classList.remove('active'));
        
        // 指定されたインデックスの背景をアクティブに
        if (this.bgElements[index]) {
            this.bgElements[index].classList.add('active');
        }
    }
    
    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.showSlide(this.currentIndex);
    }
    
    startSlideshow() {
        setInterval(() => {
            this.nextSlide();
        }, this.interval);
    }
    
    preloadImages() {
        this.images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
}

// Tab functionality
class TabManager {
    constructor() {
        this.tabButtons = document.querySelectorAll('.tab-button');
        this.tabContents = document.querySelectorAll('.tab-content');
        
        this.init();
    }
    
    init() {
        this.tabButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.switchTab(e.target.closest('.tab-button'));
            });
        });
        
        // Add fade-in animation to tab contents
        this.setupIntersectionObserver();
    }
    
    switchTab(clickedButton) {
        if (!clickedButton) return;
        
        const targetTab = clickedButton.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        this.tabButtons.forEach(btn => btn.classList.remove('active'));
        this.tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        clickedButton.classList.add('active');
        const targetContent = document.getElementById(targetTab);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    }
    
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out';
                }
            });
        });
        
        this.tabContents.forEach(content => {
            observer.observe(content);
        });
    }
}

// Smooth scrolling for navigation links
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize hero slideshow
    new HeroSlideshow();
    
    // Initialize tab manager
    new TabManager();
    
    // Initialize smooth scrolling
    new SmoothScroll();
    
    // Add loading animation
    document.body.classList.add('loaded');
});

// Add loading states
window.addEventListener('load', function() {
    // Remove any loading overlays or add loaded class
    document.body.classList.add('fully-loaded');
}); 