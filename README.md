# 🎓 Ayush Kumar — B.Tech CSE (AI & ML) Student Portfolio
### JECRC University, Jaipur

A modern, responsive, and developer-focused personal portfolio website designed for **Ayush Kumar**, a first-year Computer Science Engineering student specializing in **Artificial Intelligence & Machine Learning** at **JECRC University, Jaipur**.

---

## 🌟 Key Highlights & Design Features

- **Developer Aesthetic:** Clean dark mode by default with glowing accents, subtle grid background, and glassmorphism.
- **Light & Dark Theme Toggle:** Instant theme switcher with icon indicator and `localStorage` persistence.
- **100% Responsive:** Tested across mobile screens, tablets, and wide desktop displays.
- **Smooth Navigation:** Sticky navbar, active section highlight on scroll (ScrollSpy), and a responsive mobile hamburger drawer.
- **Dynamic Typing Effect:** Interactive hero subtitle cycling through student roles.
- **Zero Heavy Dependencies:** Built purely with semantic **HTML5**, modern **CSS3**, and lightweight vanilla **JavaScript**—no Node.js build step or complex framework required.
- **Honest First-Year Level Presentation:** Accurately highlights skills and projects as ongoing learning and development, without exaggeration.
- **Future-Proof Structure:** Modular sections make it easy to drop in new semester projects, hackathon achievements, and certificates.

---

## 📁 Project Structure

```
student-portfolio/
├── index.html                 # Main website file (contains all 9 sections)
├── css/
│   └── style.css              # Custom styling, design tokens, light/dark themes, media queries
├── js/
│   └── main.js                # Theme toggle, mobile navigation, typing effect, filters, form handler
├── assets/
│   ├── favicon.svg            # Modern code/AI favicon
│   └── avatar-placeholder.svg # High-resolution developer avatar illustration
└── README.md                  # Documentation and quick customization guide
```

---

## 🚀 How to Run Locally

### Option 1: Direct File Open
Simply double-click `index.html` or right-click `index.html` and choose **Open with > Google Chrome** (or Edge/Brave/Firefox).

### Option 2: Live Server in VS Code
1. Open the folder `student-portfolio` in Visual Studio Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and click **"Open with Live Server"**.

### Option 3: Python Local Server
Run this in PowerShell or terminal inside the `student-portfolio` folder:
```powershell
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## ✏️ Step-by-Step Customization Guide

Look for the `<!-- CUSTOMIZATION TIP: ... -->` comments inside `index.html` for easy replacement:

### 1. Update Your Name & Titles
Open `index.html` and search for `[Your Name]`:
- Line 25: Brand logo text (`StudentPortfolio`)
- Line 83: Hero section main name
- Line 140: Hero right-hand card profile name
- Line 468: Footer copyright & brand

### 2. Update Contact Details
In the `<section id="contact">` section of `index.html`:
- **Email:** Change `your.email@example.com` to your college or personal email.
- **Phone:** Change `+91 XXXXX XXXXX` to your phone number.
- **LinkedIn:** Replace `https://linkedin.com/in/your-profile` with your actual profile link.
- **GitHub:** Replace `https://github.com/your-username` with your GitHub username.

### 3. Replace Profile Picture (Avatar)
To use a real photo of yourself:
1. Save your photo as `profile.jpg` inside the `assets/` folder.
2. In `index.html` (around line 137), change:
   ```html
   <img src="assets/avatar-placeholder.svg" alt="Student Profile Avatar" class="profile-avatar-img">
   ```
   to:
   ```html
   <img src="assets/profile.jpg" alt="Your Name" class="profile-avatar-img">
   ```

### 4. Adding a New Project Later
To add a new project in upcoming semesters, duplicate one of the `<article class="project-card">` blocks inside `index.html`:
```html
<article class="project-card" data-category="ai-ml">
  <div class="project-header-banner">
    <span class="project-type-badge">Machine Learning</span>
    <div class="project-icon-box">🤖</div>
  </div>
  <div class="project-body">
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-description">
      Brief summary of what the project does and what you learned.
    </p>
    <div class="project-tags">
      <span class="project-tag">Python</span>
      <span class="project-tag">Scikit-Learn</span>
    </div>
    <div class="project-footer-actions">
      <a href="https://github.com/..." target="_blank" class="btn btn-outline btn-sm">GitHub</a>
    </div>
  </div>
</article>
```

### 5. Adding Earned Certifications
In the `<section id="certifications">` section, update any of the `.cert-card` cards with your real credential:
- Update the title (e.g., *Programming for Everybody (Python)* by University of Michigan / Coursera)
- Change `<span class="cert-card-badge">` from `Planned` to `Verified Credential`
- Add a direct link to the certificate verification URL.

---

## 🌐 Free Deployment Options

### 1. GitHub Pages (Recommended for Students)
1. Initialize a git repo and push to GitHub:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit of student portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```
2. Go to your repository on GitHub: **Settings > Pages**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Your website will be live at `https://your-username.github.io/portfolio/`.

### 2. Vercel
1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **"Add New Project"** and select your portfolio repository.
3. Click **Deploy**. It will go live instantly with free SSL!

### 3. Netlify
1. Go to [netlify.com](https://netlify.com).
2. Simply drag and drop the `student-portfolio` folder into the Netlify dashboard for instant 10-second deployment.

---

## 📜 License
Created for academic, educational, and developer showcase purposes. Feel free to modify and adapt for your own career growth!
