# 🚀 React Portfolio

A modern, responsive portfolio website built with **React** and **Tailwind CSS** to showcase projects, skills, and professional experience with a sleek, dark-themed design.

## ✨ Features

- **🎨 Modern Design** - Dark-themed UI with gradient accents and glassmorphism effects
- **📱 Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **⚡ Fast Performance** - Built with React and optimized for speed
- **🎯 Interactive Elements** - Smooth hover effects and transitions
- **🌟 Project Showcase** - Dedicated section with live demo and GitHub links
- **💼 Professional Layout** - Clean, organized sections for easy navigation
- **🔧 Easy Customization** - Well-structured code for easy modifications

## 🛠️ Tech Stack

- **Frontend Framework:** React 18+
- **Styling:** Tailwind CSS 3+
- **Icons:** Heroicons
- **Build Tool:** Vite/Create React App
- **Deployment:** Vercel/Netlify

## 📁 Project Structure

```
react-portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── flip.png
│   │       ├── travel-x.png
│   │       ├── weather.png
│   │       ├── game.png
│   │       └── fit.png
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

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
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🎨 Customization

### 1. Personal Information
Update your personal details in the respective components:
- `Hero.jsx` - Name, title, and introduction
- `About.jsx` - Professional background and bio
- `Contact.jsx` - Contact information and social links

### 2. Projects
Modify the projects array in `Projects.jsx`:
```javascript
const projects = [
  {
    id: "project-name",
    title: "Project Title",
    description: "Project description",
    image: projectImg,
    link: "https://live-demo-url.com",
    repo: "https://github.com/username/repo",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    category: "Web App",
  },
  // Add more projects...
];
```

### 3. Colors & Theme
Customize the color scheme in `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#00f0ff',    // Cyan accent
        secondary: '#ff007f',  // Pink accent
        dark: '#0f0f15',       // Dark background
      }
    }
  }
}
```

### 4. Adding Your Own Images
Place your project screenshots and profile photos in `src/assets/images/` and update the import paths in your components.

## 📦 Build for Production

```bash
npm run build
# or
yarn build
```

This creates a `build` folder with optimized production files.

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with automatic builds on every push

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://netlify.com)
3. Or connect your GitHub repository for automatic deployments

### GitHub Pages
```bash
npm install --save-dev gh-pages

# Add to package.json scripts:
"homepage": "https://yourusername.github.io/react-portfolio",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

## 🎯 Key Sections

- **Hero** - Introduction with call-to-action
- **About** - Professional background and skills overview
- **Projects** - Showcase of featured works with live demos
- **Skills** - Technical expertise and tools
- **Contact** - Get in touch section with social links

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Heroicons](https://heroicons.com/) for the beautiful icons
- [React](https://reactjs.org/) for the powerful UI library

## 📞 Contact

**Rashmi Joshi**
- GitHub: [@Rashmijoshi18](https://github.com/Rashmijoshi18)
- LinkedIn: [https://www.linkedin.com/in/rashmi3699/]
- Email: rashmijoshi3699@gmail.com

---

⭐ **Star this repository if you found it helpful!**

---

**Live Demo:** [View Portfolio](https://www.rashmijoshi.me/)
