// script.js

// Mobile Menu Toggle
window.toggleMobileMenu = function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
};

// Fade-in animation observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section, .hero-content');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
});

// Tab switching logic for the Codebase Viewer
function switchTab(language, element) {
    // Hide all code blocks
    document.querySelectorAll('.code-content').forEach(el => {
        el.style.display = 'none';
        el.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(el => {
        el.classList.remove('active');
    });
    
    // Show selected code block and set active button
    const activeBlock = document.getElementById(`code-${language}`);
    activeBlock.style.display = 'block';
    
    // Small delay for syntax highlighting fade-in effect
    setTimeout(() => {
        activeBlock.classList.add('active');
    }, 10);
    
    if (element) {
        element.classList.add('active');
    }
    
    // Update filename and step text based on selection
    const filenameMap = {
        'java': 'TemplatePath/EmployeeService.java',
        'python': 'TemplatePath/ConsentAPI.py',
        'js': 'TemplatePath/MarketingTracker.js',
        'sql': 'TemplatePath/schema.sql'
    };
    document.getElementById('example-filename').innerText = filenameMap[language];
    
    // Update dummy flow text to reflect the language conceptually
    const step1Text = document.getElementById('flow-step1-text');
    const step2Text = document.getElementById('flow-step2-text');
    const step3Text = document.getElementById('flow-step3-text');
    const badge1 = document.getElementById('flow-step1-badge');
    const badge3 = document.getElementById('flow-step3-badge');
    
    if (language === 'java') {
        step1Text.innerHTML = 'Semgrep YAML regex matches: <code>INSERT INTO ... {VAR}</code> (Section 8 Violation).';
        step2Text.innerHTML = '<strong>BYO-LLM Context Query:</strong> "Analyze the AST trace. Are cryptographic transformations applied prior to database execution?"';
        step3Text.innerHTML = '<strong>DENIED [DPDP Section 8]:</strong> No cryptographic functions detected. Deployment blocked to prevent ₹250 Crores penalty exposure.';
    } else if (language === 'python') {
        step1Text.innerHTML = 'Semgrep flags: Unconditional tracking logic detected (Section 6 Violation).';
        step2Text.innerHTML = '<strong>BYO-LLM Context Query:</strong> "Is there a boolean consent check verified before `analytics_engine.track` runs?"';
        step3Text.innerHTML = '<strong>DENIED [DPDP Section 6]:</strong> Missing explicit consent barrier. Deployment blocked.';
    } else if (language === 'js') {
        step1Text.innerHTML = 'Semgrep flags: AdNetwork API push (Section 9 Violation).';
        step2Text.innerHTML = '<strong>BYO-LLM Context Query:</strong> "Does the function verify `user.age >= 18` before data transmission?"';
        step3Text.innerHTML = '<strong>DENIED [DPDP Section 9]:</strong> Children\'s data protection violation. Deployment blocked to prevent ₹200 Crores penalty exposure.';
    } else if (language === 'sql') {
        step1Text.innerHTML = 'Semgrep flags: <code>aadhaar_number VARCHAR</code> column definition without encryption wrapper.';
        step2Text.innerHTML = '<strong>BYO-LLM Context Query:</strong> "Is the aadhaar field encrypted at rest using enterprise key management?"';
        step3Text.innerHTML = '<strong>DENIED [DPDP Section 8]:</strong> Raw PII stored natively in schema without cryptographic protection.';
    }
}

// Tab switching logic for the Streamlit Dashboard Mockup
function switchDashboardTab(tabId, element) {
    // Hide all dashboard views
    document.querySelectorAll('.dash-view').forEach(el => el.style.display = 'none');
    
    // Remove active class from all sidebar items
    document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
    
    // Show the selected view
    document.getElementById('dash-' + tabId).style.display = 'block';
    
    // Set clicked sidebar item as active
    if (element) {
        element.classList.add('active');
    }
}
