# Michel Gad - Academic Portfolio

A modern, responsive academic portfolio website showcasing research in environmental analytical chemistry, nanoparticle research, and data management. Built with a focus on scientific presentation, professional design, and comprehensive dark/light theme support.

## 🌊 About

This portfolio represents Michel Gad's academic journey as a Ph.D. Candidate at the Helmholtz Centre for Environmental Research (UFZ), specializing in:

- **Environmental Data Stewardship**
- **FAIR Data Principles Implementation**
- **Research Data Management & SciTrace Platform**
- **Dissolved Organic Matter (DOM) Analysis**
- **Machine Learning Applications in Environmental Science**
- **Interdisciplinary Data Management**

## 🚀 Live Website

Visit the live portfolio at: **[michelgad.github.io](https://michelgad.github.io)**

## ✨ Features

### 🎨 Modern Design System
- **macOS 26 Sequoia Glass UI** - Translucent materials with dynamic adaptation and glassmorphism effects
- **Environmental Chemistry Theme** - Water-inspired color palette with deep blues and ocean tones
- **Scientific Visual Elements** - Molecular patterns, water ripples, and nanoparticle-inspired animations
- **Professional Typography** - SF Pro Display/Text, Inter, and SF Mono for code
- **Responsive Layout** - Mobile-first design optimized for all devices
- **🌙 Dark/Light Theme** - Automatic system preference detection with manual toggle
- **Theme Persistence** - User preference saved in localStorage with smooth transitions

### 🔬 Academic Portfolio Features
- **Research Timeline** - Comprehensive academic journey with achievements and publications
- **Technical Skills Showcase** - 8 detailed skill areas including data stewardship and FAIR principles
- **Publications Gallery** - Featured papers with journal logos, graphical abstracts, and direct links
- **Project Portfolio** - SciTrace platform, research projects, and football projects with filtering
- **Recent Updates** - Timeline of current work including second PhD manuscript and published code releases
- **Football** - FootyFrame and xG-Vision sports analytics platforms
- **Professional Contact** - Institution details, location, and social media integration

### 💻 Interactive Elements
- **Typing Animation** - Dynamic text cycling through professional identities and research focus
- **Smooth Scrolling** - Seamless navigation with custom easing between sections
- **Hover Effects** - Interactive cards and buttons with smooth transitions
- **Video Background** - MP4 video with fallback for immersive hero section
- **Mobile Navigation** - Responsive hamburger menu for mobile devices
- **Theme Toggle** - Animated switch with sun/moon icons and swipe transitions

### 📊 Data & Research Integration
- **GitHub Integration** - Direct links to published repositories and research code
- **Research Data Management** - SciTrace platform showcase with interactive mockup
- **Publication Links** - Direct access to papers in Water Research, Environmental Science: Nano, ACS
- **Code Releases** - Featured repositories for DOM-Drivers, NP_SRFA_Ratio, and SciTrace
- **Contact Form** - Functional form with validation and professional contact information

## 🛠️ Technologies Used

### Core Technologies
- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript (ES6+)** - No frameworks, pure JavaScript for optimal performance
- **CSS Glassmorphism** - Backdrop-filter blur effects and translucent materials

### Design System
- **macOS 26 Sequoia Color Palette** - System-inspired color scheme with light/dark variants
- **Google Fonts** - SF Pro Display, SF Pro Text, SF Mono, Inter for typography
- **Font Awesome 6.4.2** - Professional icon library
- **CSS Custom Properties** - Dynamic theming with CSS variables
- **Responsive Design** - Mobile-first approach with breakpoints at 768px, 1200px

### Advanced Features
- **Theme Management** - System preference detection with localStorage persistence
- **Intersection Observer API** - Scroll-triggered animations and lazy loading
- **Clipboard API** - One-click email copying functionality
- **Smooth Scrolling** - Native CSS scroll-behavior with custom easing
- **Form Validation** - Client-side validation with user feedback
- **Video Background** - MP4 video with fallback for hero section
- **Typing Animation** - Dynamic text cycling through professional identities

## 📁 Project Structure

```
MichelGad.github.io/
├── index.html                    # Main website file with semantic HTML structure
├── README.md                     # Comprehensive project documentation
├── LICENSE                       # Apache License 2.0
├── favicon.svg                   # Custom SVG favicon with environmental theme
└── assets/
    ├── css/
    │   └── style.css             # Main stylesheet (3,400+ lines)
    │                             # - macOS 26 Sequoia design system
    │                             # - Dark/light theme support
    │                             # - Glassmorphism effects
    │                             # - Responsive breakpoints
    ├── js/
    │   └── main.js               # JavaScript functionality (580+ lines)
    │                             # - Theme management with localStorage
    │                             # - Typing animation system
    │                             # - Smooth scrolling and interactions
    │                             # - Form validation and clipboard API
    └── images/
        ├── portrait.jpg          # Professional profile photo
        ├── water-research-background.mp4  # Hero section video background
        ├── scitrace-logo.png     # SciTrace project logo
        ├── logo-water-research.png        # Water Research journal logo
        ├── logo-acs.jpeg                  # ACS Applied Bio Materials logo
        ├── logo-rsc-nano.png              # Environmental Science: Nano logo
        ├── logo-ufz.jpeg                 # UFZ institution logo
        ├── logo-uni-siegen.jpeg          # University of Siegen logo
        ├── graphical-abstract-dom.png     # DOM composition research visual
        ├── graphical-abstract-nano.png   # TiO₂ nanoparticles research visual
        └── graphical-abstract-bioimaging.png  # Bioimaging research visual
```

### File Descriptions

#### Core Files
- **`index.html`** - Single-page application with semantic HTML5 structure
- **`style.css`** - Comprehensive stylesheet with CSS custom properties for theming
- **`main.js`** - Vanilla JavaScript with modern ES6+ features and APIs

#### Visual Assets
- **Profile & Branding**: Professional portrait and SciTrace logo
- **Journal Logos**: High-quality logos for academic publications
- **Research Visuals**: Graphical abstracts for featured publications
- **Background Media**: Video background with fallback for hero section

#### Key Features
- **No Build Process** - Pure HTML, CSS, and JavaScript
- **Responsive Design** - Mobile-first approach with CSS Grid and Flexbox
- **Theme System** - CSS custom properties with light/dark mode support
- **Performance Optimized** - Minimal dependencies and optimized assets
- **Interactive Project Showcases** - Detailed project descriptions with visual mockups
- **Recent Updates Timeline** - Current research progress and code releases
- **Football Integration** - Sports analytics platforms with interactive visualizations

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- No build tools, dependencies, or server setup required
- Git (optional, for cloning the repository)

### Quick Start
1. **Clone the repository:**
   ```bash
   git clone https://github.com/MichelGad/MichelGad.github.io.git
   cd MichelGad.github.io
   ```

2. **Open the website:**
   - Simply open `index.html` in your web browser
   - Or use a local server for development (recommended)

### Local Development Server

For the best experience during development, use a local HTTP server:

```bash
# Option 1: Python 3 (recommended)
python3 -m http.server 8000

# Option 2: Node.js with http-server
npx http-server -p 8000

# Option 3: PHP
php -S localhost:8000

# Option 4: Live Server (VS Code extension)
# Right-click index.html → "Open with Live Server"
```

Then visit `http://localhost:8000` in your browser.

### GitHub Pages Deployment
This repository is automatically deployed to GitHub Pages at `https://michelgad.github.io`. Any changes pushed to the `main` branch will be automatically deployed.

## 🎯 Key Sections

### Hero Section
- **Professional Introduction** - Full name display and research focus
- **Typing Animation** - Dynamic text cycling through expertise areas
- **Research Statistics** - Key achievements and metrics
- **Call-to-Action Buttons** - Direct links to skills and SciTrace
- **Theme Toggle** - Sun/moon switch for dark/light mode

### Technical Skills
- **Programming & Data Science** - Python, R, and data analysis tools
- **Research Data Management** - FAIR principles, DataLad, and DMPs
- **Environmental Data Analysis** - DOM analysis and mass spectrometry
- **Machine Learning & Analytics** - Predictive modeling and visualization
- **Analytical Chemistry** - FT-ICR MS, spICP-MS, LC-MS, LDI-MS, LA-ICP-MS
- **High Performance Computing** - HPC clusters and large-scale data analysis
- **Version Control & Collaboration** - Git, GitHub, and reproducible workflows
- **Reproducible Science & Open Research** - Open science and data lineage

### Updates Section
- **Recent Activities** - Current work and project updates including second PhD manuscript on LDI-FT-ICR MS
- **Published Code Projects** - NP_SRFA_Ratio and DOM-Drivers repositories with comprehensive analysis pipelines
- **SciTrace Releases** - Version updates and new features for research data management
- **GitHub Integration** - Direct links to all published repositories and code releases

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
- **Research Data Stewardship Platform** - Data lineage and workflow tracking with FAIR principles
- **Interactive Mockup** - Visual representation of the platform with data flow visualization
- **Feature Highlights** - FAIR data principles, interdisciplinary collaboration, and data stewardship
- **GitHub Integration** - Direct link to project repository with v0.1.0 release

### Football
- **FootyFrame** - Professional football shot map analytics platform
- **xG-Vision** - Advanced football video analysis

## 🎨 Customization

### Theme Customization
The website uses CSS custom properties for easy theming. All colors are defined in `assets/css/style.css`:

**Light Theme Colors:**
```css
:root {
    --blue: #007AFF;              /* Primary blue */
    --blue-light: #5AC8FA;        /* Light blue */
    --blue-dark: #0051D5;         /* Dark blue */
    --system-blue: #007AFF;       /* System blue */
    --text-primary: #1d1d1f;      /* Primary text */
    --text-secondary: #86868b;    /* Secondary text */
    --bg-primary: #ffffff;        /* Primary background */
    --bg-secondary: #f5f5f7;      /* Secondary background */
}
```

**Dark Theme Colors:**
```css
[data-theme="dark"] {
    --blue: #0A84FF;               /* Primary blue (dark) */
    --blue-light: #64D2FF;        /* Light blue (dark) */
    --text-primary: #f5f5f7;      /* Primary text (dark) */
    --text-secondary: #a1a1a6;    /* Secondary text (dark) */
    --bg-primary: #1c1c1e;        /* Primary background (dark) */
    --bg-secondary: #2c2c2e;      /* Secondary background (dark) */
}
```

### Typography System
- **Headings**: SF Pro Display (system font)
- **Body Text**: SF Pro Text / Inter (fallback)
- **Code/Monospace**: SF Mono / JetBrains Mono (fallback)

### Content Customization

#### 1. Personal Information
Update the following sections in `index.html`:
- **Hero Section**: Name, title, description, and profile image
- **Contact Information**: Email, institution, location
- **Social Links**: LinkedIn, GitHub, Instagram URLs

#### 2. Research & Publications
- **Publications**: Add new papers with journal logos and graphical abstracts
- **Research Updates**: Update the timeline with recent activities
- **Technical Skills**: Modify skill cards to reflect current expertise
- **Experience Timeline**: Add new positions and achievements

#### 3. Projects
- **SciTrace Project**: Update project description and features with v0.1.0 release
- **Research Projects**: Add new repositories and descriptions including DOM-Drivers and NP_SRFA_Ratio
- **Football**: Include personal projects like FootyFrame and xG-Vision sports analytics platforms

#### 4. Visual Assets
- **Profile Image**: Replace `assets/images/portrait.jpg`
- **Journal Logos**: Add new logos to `assets/images/`
- **Graphical Abstracts**: Update publication images
- **Background Video**: Replace `assets/images/water-research-background.mp4`

### Advanced Customization

#### Color Scheme Changes
1. **Modify CSS Variables**: Update colors in `assets/css/style.css`
2. **Test Both Themes**: Ensure changes work in both light and dark modes
3. **Maintain Contrast**: Follow WCAG guidelines for accessibility

#### Typography Updates
1. **Font Changes**: Update Google Fonts links in `index.html`
2. **Font Variables**: Modify font-family properties in CSS
3. **Responsive Typography**: Adjust font sizes for different breakpoints

#### Layout Modifications
1. **Section Order**: Reorder sections in `index.html`
2. **Grid Layouts**: Modify CSS Grid properties for different layouts
3. **Responsive Breakpoints**: Adjust breakpoints in CSS media queries

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

## 🎯 Key Features

- ✅ **Data Stewardship Focus** - Environmental data steward specialization
- ✅ **FAIR Data Principles** - Prominently featured throughout the website
- ✅ **8 Technical Skills Cards** - Comprehensive skill areas including data stewardship, FAIR principles, and analytical chemistry
- ✅ **Research Data Management** - Enhanced SciTrace project with data stewardship focus
- ✅ **Interdisciplinary Collaboration** - Emphasized throughout experience and projects
- ✅ **Environmental Data Analysis** - DOM analysis and mass spectrometry expertise
- ✅ **Analytical Chemistry** - FT-ICR MS, spICP-MS, LC-MS, LDI-MS, LA-ICP-MS
- ✅ **High Performance Computing** - HPC clusters and large-scale data analysis
- ✅ **Version Control & Collaboration** - Git, GitHub, and reproducible workflows
- ✅ **Reproducible Science** - Open science and data lineage tracking
- ✅ **Recent Updates Timeline** - Current PhD manuscript progress and published code releases
- ✅ **Football** - FootyFrame and xG-Vision sports analytics platforms
- ✅ **Published Code Repositories** - DOM-Drivers and NP_SRFA_Ratio analysis pipelines
- ✅ **LDI-FT-ICR MS Research** - Advanced mass spectrometry for nanoparticle characterization
- ✅ **macOS 26 Liquid Glass UI** - Translucent materials with dynamic adaptation
- ✅ **Glassmorphism Effects** - Frosted glass backgrounds with backdrop-filter blur
- ✅ **Dark/Light Theme** - Automatic system preference detection with manual toggle
- ✅ **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- ✅ **Interactive Elements** - Typing animation, smooth scrolling, hover effects
- ✅ **Professional Typography** - Source Serif Pro, Inter, JetBrains Mono
- ✅ **Contact Integration** - Functional form, social links, email copy
- ✅ **GitHub Integration** - Direct links to repositories and projects

## ⚡ Performance & Optimization

### Performance Features
- **Vanilla JavaScript** - No framework overhead, fast loading times
- **Optimized Images** - Compressed images with proper sizing
- **CSS Grid & Flexbox** - Efficient layout rendering
- **Lazy Loading** - Images and content load as needed
- **Minimal Dependencies** - Only essential external resources

### Browser Support
- **Chrome** 60+ (full support)
- **Firefox** 55+ (full support)
- **Safari** 12+ (full support)
- **Edge** 79+ (full support)
- **Mobile Browsers** - iOS Safari 12+, Chrome Mobile 60+

### Accessibility
- **Semantic HTML** - Proper heading structure and landmarks
- **ARIA Labels** - Screen reader support for interactive elements
- **Keyboard Navigation** - Full keyboard accessibility
- **Color Contrast** - WCAG AA compliant color schemes
- **Focus Indicators** - Clear focus states for navigation

## 🤝 Contributing

This is a personal academic portfolio, but suggestions and improvements are welcome:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/improvement`
3. **Make your changes** and test thoroughly
4. **Commit your changes**: `git commit -m 'Add improvement'`
5. **Push to the branch**: `git push origin feature/improvement`
6. **Open a Pull Request**

## 📄 License

This project is open source and available under the Apache License 2.0.

## 🙏 Acknowledgments

- **macOS Design System** - Inspired by Apple's design language
- **Environmental Chemistry Community** - Research and collaboration
- **Open Source Community** - Font Awesome, Google Fonts, and web standards
- **Academic Mentors** - Guidance and support throughout research journey