# Michel Gad - Academic Portfolio

A modern, responsive academic portfolio website showcasing research in environmental analytical chemistry, nanoparticle research, and data management. Built with a focus on scientific presentation, professional design, and comprehensive dark/light theme support.

## 🌊 About

This portfolio represents Michel Gad's academic journey as a Ph.D. Candidate at the Helmholtz Centre for Environmental Research (UFZ), specializing in:

- **Environmental Analytical Chemistry**
- **Nanoparticle Fate & Behavior in Aquatic Systems**
- **Surface Water Analysis & DOM Characterization**
- **Machine Learning Applications in Environmental Science**
- **Research Data Management & SciTrace Platform**

## ✨ Features

### 🎨 Modern Design
- **macOS 26 Liquid Glass UI** - Translucent materials with dynamic adaptation and glassmorphism effects
- **Environmental Chemistry Theme** - Water-inspired color palette with deep blues and ocean tones
- **Scientific Elements** - Molecular patterns, water ripples, and nanoparticle-inspired animations
- **Professional Typography** - Source Serif Pro for headings, Inter for body text, JetBrains Mono for code
- **Responsive Layout** - Optimized for desktop, tablet, and mobile devices
- **🌙 Dark/Light Theme** - Automatic system preference detection with manual toggle
- **Theme Persistence** - User preference saved in localStorage
- **Glass Effects** - Frosted glass backgrounds with backdrop-filter blur and dynamic materials

### 📊 Interactive Elements
- **Typing Animation** - Cycles through professional identities and research focus
- **Smooth Scrolling** - Seamless navigation between sections
- **Hover Effects** - Interactive cards and buttons with smooth transitions
- **Parallax Background** - Dynamic hero section with floating molecular patterns
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Theme Toggle** - Horizontal switch with sun/moon icons for theme switching

### 🔬 Research Showcase
- **Research Focus Cards** - Three main research areas with detailed descriptions
- **Publications Section** - Featured papers with journal logos, direct links, and graphical abstracts
- **Experience Timeline** - Academic journey with achievements and skills (updated date format)
- **SciTrace Project** - Dedicated section for the research data management platform
- **📰 Updates Section** - Recent activities, published code projects, and current work
- **GitHub Integration** - Direct links to published repositories and projects

### 📱 Contact & Interaction
- **Contact Form** - Functional form with validation and notifications
- **Social Links** - LinkedIn, GitHub, and Instagram integration
- **Email Copy** - One-click email copying to clipboard
- **Professional Contact Cards** - Institution and location information

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup and accessibility
- **CSS3** - Modern styling with CSS Grid, Flexbox, and custom properties
- **CSS Glassmorphism** - Backdrop-filter blur effects and translucent materials
- **JavaScript (ES6+)** - Interactive features and animations
- **Font Awesome** - Professional icons throughout the interface

### Design & Typography
- **Google Fonts** - Inter, Source Serif Pro, JetBrains Mono
- **CSS Variables** - Consistent theming and easy customization
- **CSS Animations** - Smooth transitions and micro-interactions
- **Responsive Design** - Mobile-first approach with breakpoints
- **Glassmorphism Effects** - Backdrop-filter blur with translucent materials

### Features
- **Intersection Observer API** - Scroll-triggered animations
- **Clipboard API** - Email copying functionality
- **Form Validation** - Client-side form validation
- **Smooth Scrolling** - Native CSS scroll-behavior
- **Theme Management** - System preference detection and localStorage persistence
- **Responsive Images** - Optimized graphical abstracts with proper sizing

## 📁 Project Structure

```
MichelGad.github.io/
├── index.html              # Main website file
├── README.md               # Project documentation
├── favicon.svg             # Custom SVG favicon
└── assets/
    ├── css/
    │   └── style.css       # Main stylesheet with dark/light theme support
    ├── js/
    │   └── main.js         # JavaScript functionality including theme management
    └── images/
        ├── portrait.jpg     # Profile photo
        ├── logo-water-research.png
        ├── logo-acs.jpeg
        ├── logo-rsc-nano.png
        ├── logo-ufz.jpeg
        ├── logo-uni-siegen.jpeg
        ├── graphical-abstract-dom.png
        ├── graphical-abstract-nano.png
        └── graphical-abstract-bioimaging.png
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation
1. Clone or download the repository
2. Open `index.html` in your web browser
3. The website is ready to use!

### Local Development
For local development, you can use any simple HTTP server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🎯 Key Sections

### Hero Section
- **Professional Introduction** - Full name display and research focus
- **Typing Animation** - Dynamic text cycling through expertise areas
- **Research Statistics** - Key achievements and metrics
- **Call-to-Action Buttons** - Direct links to research and SciTrace
- **Theme Toggle** - Sun/moon switch for dark/light mode

### Research Focus
- **Nanoparticle Fate & Behavior** - TiO₂ NPs and eco-corona research
- **Surface Water Analysis** - DOM composition and environmental drivers
- **Predictive Modeling** - Machine learning and multivariate analysis

### Updates Section
- **Recent Activities** - Current work and project updates
- **Published Code Projects** - NP_SRFA_Ratio and DOM-Drivers repositories
- **SciTrace Releases** - Version updates and new features
- **GitHub Integration** - Direct links to all published repositories

### Publications
- **Water Research** - Environmental drivers of DOM composition
- **Environmental Science: Nano** - ζ-potential prediction of TiO₂ NPs
- **ACS Applied Bio Materials** - Bioimaging of biomolecules
- **Graphical Abstracts** - Visual representations of research findings

### Experience Timeline
- **UFZ Research** - Current Ph.D. work and achievements
- **Siegen University** - Student Assistant in spICP-MS signal processing
- **BAM Collaboration** - Previous research experience
- **Skills Integration** - Technical expertise and methodologies
- **Updated Date Format** - Consistent timeline styling

### SciTrace Project
- **Research Data Management Platform** - Data lineage and workflow tracking
- **Interactive Mockup** - Visual representation of the platform
- **Feature Highlights** - Key capabilities and technologies
- **GitHub Integration** - Direct link to project repository

## 🎨 Customization

### Colors & Themes
The website uses CSS custom properties for easy theming with comprehensive dark/light mode support:

**Light Theme:**
```css
:root {
    --primary-color: #1e40af;      /* Deep blue */
    --secondary-color: #0ea5e9;    /* Sky blue */
    --accent-color: #06b6d4;       /* Cyan */
    --water-blue: #0c4a6e;        /* Ocean blue */
    --ocean-deep: #0f172a;         /* Dark blue */
    --sky-light: #e0f2fe;         /* Light blue */
    --text-dark: #1e293b;         /* Dark text */
    --text-white: #ffffff;        /* White text */
    --bg-white: #ffffff;          /* White background */
}
```

**Dark Theme:**
```css
[data-theme="dark"] {
    --primary-color: #60a5fa;      /* Light blue */
    --secondary-color: #38bdf8;    /* Cyan blue */
    --accent-color: #22d3ee;       /* Bright cyan */
    --text-dark: #f1f5f9;         /* Light text */
    --text-white: #ffffff;        /* White text */
    --bg-white: #0f172a;          /* Dark background */
    --card-bg: rgba(30, 41, 59, 0.95); /* Dark card background */
}
```

### Typography
- **Headings**: Source Serif Pro (serif)
- **Body Text**: Inter (sans-serif)
- **Code/Monospace**: JetBrains Mono

### Content Updates
- **Profile Information**: Update `index.html` with new details
- **Publications**: Add new papers to the publications section with graphical abstracts
- **Research Focus**: Modify research cards to reflect current work
- **Experience**: Update timeline with new positions or achievements
- **Updates Section**: Add new activities, code releases, and project updates
- **Institution Logos**: Add new logo files to `assets/images/` directory
- **Theme Customization**: Modify CSS variables to change color schemes

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

### Mobile Features
- **Hamburger Navigation** - Collapsible menu for mobile devices
- **Touch-Friendly Buttons** - Optimized for touch interaction
- **Optimized Typography** - Readable text sizes on small screens
- **Simplified Layout** - Single-column layout on mobile

## 🔧 Browser Support

- **Chrome** 60+
- **Firefox** 55+
- **Safari** 12+
- **Edge** 79+

## 🆕 Recent Updates

### Version 3.0 - macOS 26 Liquid Glass UI & Enhanced Design

#### 🍎 macOS 26 Liquid Glass UI Implementation
- **Liquid Glass Design Language** - Translucent materials with dynamic adaptation
- **Glassmorphism Effects** - Frosted glass backgrounds with backdrop-filter blur
- **Dynamic Material System** - Glass effects that reflect and refract surroundings
- **Enhanced Depth & Layering** - Multiple glass layers with proper z-indexing

#### 🎨 Advanced Visual Design
- **Water Research Background** - Custom Midjourney-generated background image
- **Gradient Overlays** - Theme-specific overlays for optimal text visibility
- **Blur Effects** - Strategic blur positioning for content readability
- **Shadow System** - Refined text shadows for both light and dark themes
- **Theme-Specific Styling** - Optimized appearance for each color scheme

#### 📱 Enhanced User Experience
- **Clean Light Theme** - Removed white shadow effects for natural appearance
- **Refined Dark Theme** - Maintained appropriate shadows for contrast
- **Improved Text Visibility** - Better contrast and readability across themes
- **Professional Styling** - Clean, modern appearance with subtle effects
- **Consistent Design Language** - Unified styling across all elements

#### 🔧 Technical Improvements
- **CSS Variables System** - Comprehensive theming with macOS 26 colors
- **Backdrop Filter Support** - Modern glass effects with fallbacks
- **Responsive Glass Effects** - Optimized blur values for different screen sizes
- **Theme-Specific Shadows** - Appropriate shadow treatment for each theme
- **Performance Optimizations** - Efficient CSS with hardware acceleration

### Version 2.0 - Major Theme & Content Updates

#### 🌙 Dark/Light Theme System
- **Automatic Theme Detection** - Detects user's system preference (dark/light)
- **Manual Theme Toggle** - Horizontal switch with sun/moon icons in header
- **Theme Persistence** - User preference saved in localStorage
- **Comprehensive Dark Mode** - All sections properly themed for dark mode
- **Smooth Transitions** - Animated theme switching throughout the site

#### 📰 New Updates Section
- **Recent Activities Timeline** - Current work and project updates
- **Published Code Projects** - NP_SRFA_Ratio and DOM-Drivers repositories
- **SciTrace Releases** - Version updates and new features
- **GitHub Integration** - Direct links to all published repositories
- **Consistent Date Format** - Unified timeline styling across sections

#### 🖼️ Enhanced Publications
- **Graphical Abstracts** - Visual representations of research findings
- **Responsive Images** - Optimized sizing to prevent cropping
- **Updated Publication Title** - More descriptive paper titles
- **Improved Layout** - Better visual hierarchy and spacing

#### 🎨 UI/UX Improvements
- **Fixed Navigation** - Header remains visible when scrolling
- **Consistent Button Styling** - All GitHub buttons use primary styling
- **Updated Branding** - Full name display instead of initials
- **Enhanced Mobile Experience** - Improved mobile navigation and theme toggle
- **Professional Footer** - Streamlined footer content

#### 🔧 Technical Enhancements
- **Theme Management JavaScript** - Robust theme switching functionality
- **CSS Custom Properties** - Comprehensive dark mode variable system
- **Responsive Theme Toggle** - Mobile-optimized theme switch
- **Improved Accessibility** - Better contrast and ARIA labels

### Key Features Added
- ✅ macOS 26 Liquid Glass UI design system
- ✅ Glassmorphism effects with backdrop-filter
- ✅ Water research background with Midjourney credit
- ✅ Theme-specific shadow optimization
- ✅ Clean light theme without white shadows
- ✅ Enhanced text visibility and contrast
- ✅ Professional glass effect styling
- ✅ Responsive glass effects for all devices
- ✅ Dark/Light theme with system preference detection
- ✅ Theme toggle with sun/moon icons
- ✅ Updates section with timeline format
- ✅ Graphical abstracts for publications
- ✅ Published code project showcase
- ✅ Consistent date formatting across sections
- ✅ Fixed navigation header behavior
- ✅ Enhanced mobile responsiveness
- ✅ Improved button consistency
- ✅ Professional branding updates

## 📄 License

This project is open source and available under the Apache License 2.0.

