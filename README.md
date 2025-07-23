# 🌐 React Portfolio

> A clean and modern personal portfolio website built using React + Vite, showcasing skills, projects, resume, and contact details with a beautiful responsive design using custom CSS.

## 🔗 Links

- **Live Demo**: [https://www.rashmijoshi.me/](https://www.rashmijoshi.me/)
- **GitHub Repository**: [https://github.com/Rashmijoshi18/react-portfolio](https://github.com/Rashmijoshi18/react-portfolio)

## ✨ Features

- 📄 **Complete Portfolio Sections**: About Me, Projects, Services, Contact, and Resume
- 📱 **Fully Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Beautiful interface designed with custom CSS
- 💡 **Clean Component Structure**: Well-organized and maintainable React components
- 📬 **Contact Form Integration**: Ready for EmailJS integration for functional contact forms
- ⚡ **Optimized Performance**: Fast loading with Vite build system
- 🌍 **Vercel Deployment**: Deployed and hosted on Vercel platform
- 🎯 **SEO Friendly**: Optimized meta tags and structure

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React** | Frontend JavaScript library |
| **Vite** | Build tool and development server |
| **CSS3** | Custom styling and responsive design |
| **Vercel** | Deployment and hosting platform |
| **EmailJS** | Contact form email service (optional) |
| **PostCSS** | CSS processing |

## 📁 Project Structure

```
📦 react-portfolio/
├── 📁 node_modules/          # Dependencies
├── 📁 public/               # Static assets
│   ├── LOGO.png            # Site logo
│   ├── new.png             # Additional image asset
│   └── vite.svg            # Vite icon
├── 📁 src/                 # Source code
│   ├── 📁 assets/          # Static assets
│   │   ├── 📁 images/      # Image assets
│   │   │   ├── email.png   # Email icon
│   │   │   ├── game.png    # Gaming project image
│   │   │   └── ...         # Other project images
│   │   ├── me_resume.pdf   # Resume PDF file
│   │   └── react.svg       # React logo
│   ├── 📁 components/      # React components
│   │   ├── About.jsx       # About section component
│   │   ├── Contact.jsx     # Contact form component
│   │   ├── Footer.jsx      # Footer component
│   │   ├── Header.jsx      # Header/Hero section
│   │   ├── Navbar.jsx      # Navigation component
│   │   ├── Projects.jsx    # Projects showcase
│   │   └── Services.jsx    # Services section
│   ├── App.jsx             # Main App component
│   ├── App.css             # App-specific styles
│   ├── index.css           # Global styles and CSS imports
│   └── main.jsx            # Application entry point
├── index.html              # HTML template
├── .gitignore              # Git ignore rules
├── README.md               # Project documentation
├── package.json            # Dependencies & scripts
├── postcss.config.cjs      # PostCSS configuration
├── eslint.config.js        # ESLint configuration
├── vite.config.js          # Vite configuration
└── vercel.json             # Vercel deployment config
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rashmijoshi18/react-portfolio.git
   cd react-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view your portfolio

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |



## 🌐 Deployment

### Deployed on Vercel

This portfolio is currently deployed and hosted on Vercel. The live version is available at: [https://www.rashmijoshi.me/](https://www.rashmijoshi.me/)

### Deploy Your Own Version to Vercel

1. **Fork this repository** to your GitHub account

2. **Update the content** with your personal information

3. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your forked repository
   - Vercel will automatically detect it's a Vite project
   - Click "Deploy"
   - Your site will be live in minutes!



## 🔧 Configuration Files

### Vite Configuration (`vite.config.js`)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './' // For relative paths in production
})
```

### PostCSS Configuration (`postcss.config.cjs`)
Handles CSS processing and transformations.

### Vercel Configuration (`vercel.json`)
Handles routing for single-page applications.


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 💡 Tips for Customization

- **Images**: Use optimized images (WebP format recommended) for better performance
- **CSS**: Organize your styles with CSS modules or custom properties for maintainability
- **SEO**: Update meta tags in `index.html` for better search engine visibility
- **Analytics**: Add Google Analytics or other tracking tools
- **Performance**: Use React.lazy() for code splitting on larger projects
- **Accessibility**: Ensure proper alt tags, ARIA labels, and keyboard navigation
- **Responsive Design**: Test your custom CSS across different screen sizes

## 🙏 Acknowledgments

- **React** team for the amazing framework
- **Vite** for the lightning-fast build tool
- **Vercel** for excellent hosting and deployment
- **CSS3** for powerful styling capabilities

---

## 📞 Support

If you have any questions or need help with customization, feel free to:
- Open an issue on GitHub
- Contact via the portfolio website
- Reach out on social media platforms

**Happy coding! 🚀**
