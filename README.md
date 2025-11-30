# Clinical Chem Master

**Understand the lab behind the numbers.**

A comprehensive, mobile-first educational platform for pathology residents and clinical chemistry fellows to master the principles of clinical chemistry.

## 🎯 Mission

Clinical Chem Master bridges the gap between laboratory testing and clinical interpretation, providing practical, workflow-driven education covering:

- How clinical chemistry labs operate
- Principles of analytic measurement
- Quality assurance (QA/QC)
- Core chemistries and their clinical interpretation
- Laboratory errors and interferences
- Lab automation and information systems

## ✨ Features

### 📚 Comprehensive Curriculum

**9 Educational Modules:**
1. **Foundations of Clinical Chemistry** - Pre-analytical, analytical, and post-analytical phases
2. **Analytic Principles & Instrumentation** - Spectrophotometry, immunoassays, mass spectrometry
3. **Quality Management** - QC, Westgard rules, method evaluation
4. **Core Chemistry Panels** - Electrolytes, renal, liver, lipids, glucose
5. **Endocrine Testing** - Thyroid, adrenal, calcium/PTH, reproductive hormones
6. **Special Chemistry** - Cardiac markers, tumor markers, proteins
7. **Toxicology & TDM** - Therapeutic drug monitoring and toxicology screens
8. **Lab Errors & Interferences** - Hemolysis, lipemia, biotin interference
9. **Automation & Lab Systems** - Total lab automation, LIS, auto-verification

### 🎓 Interactive Learning

- **Integrated Cases** - 7 realistic clinical scenarios combining laboratory results, QC assessment, and clinical reasoning
- **Session-Only Assessments** - 20 comprehensive questions with immediate feedback and detailed rationales
- **Clinical Pearls** - Key takeaways for each module
- **Common Pitfalls** - What to avoid in practice

### 🌙 User Experience

- **Mobile-First Design** - Optimized for learning on any device
- **Dark Mode Default** - Eye-friendly interface with light mode option
- **Offline-Ready** - PWA with service worker for learning anywhere
- **No Data Tracking** - Session-only assessments, no persistence or data collection

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The app will be available at `http://localhost:5173` in development mode with hot module replacement.

## 🛠️ Technology Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + shadcn/ui components
- **State Management:** Zustand (session-only)
- **Routing:** React Router v6
- **PWA:** vite-plugin-pwa with Workbox
- **Icons:** Lucide React

## 📖 Usage

### For Learners

1. **Browse Modules** - Start with Foundations and progress through each module
2. **Study Cases** - Work through integrated clinical chemistry cases
3. **Take Assessment** - Test your knowledge with session-only quizzes
4. **Review Settings** - Read about the app and important disclaimers

### For Educators

This platform can be used as a:
- Self-study resource for residents during clinical chemistry rotations
- Supplementary material for didactic lectures
- Case-based discussion starter for educational conferences
- Review tool for board preparation

## ⚠️ Important Disclaimers

### Educational Use Only

This application is designed **exclusively for educational purposes**. It is **NOT** intended for:
- Patient care or clinical decision-making
- Diagnostic purposes
- Treatment decisions
- Replacing clinical judgment or institutional protocols

### Synthetic Data Only

All laboratory values, cases, and scenarios use **synthetic data**. No real patient data or protected health information (PHI) is used or stored.

### No Data Tracking

This application does **NOT**:
- Track your assessment scores
- Store progress or completed modules
- Export user data
- Collect personal information
- Maintain user accounts

All assessments are **session-only** and data is cleared when you close the application.

### Clinical Responsibility

Always consult:
- Appropriate clinical resources and guidelines
- Current medical literature
- Institutional protocols
- Experienced colleagues

for all patient care decisions.

## 🎯 Target Audience

- Pathology residents (PGY1-PGY4)
- Clinical chemistry fellows
- Laboratory professionals
- Medical students on laboratory rotations

## 📚 Educational Objectives

After using this platform, learners should be able to:

1. Understand how laboratory tests are performed (instrumentation + principles)
2. Recognize interferences and sources of error
3. Interpret common chemistries (electrolytes, renal, liver, endocrine)
4. Perform delta checks and critical value reasoning
5. Navigate TDM and toxicology logic
6. Apply QC principles and troubleshoot QC failures
7. Recognize pre-analytical errors and their effects on results

## 🏗️ Project Structure

```
CLINICAL-CHEM-MASTER/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── Layout.tsx   # Main app layout
│   │   └── ModuleTemplate.tsx
│   ├── pages/           # Main page components
│   │   ├── modules/     # Educational module pages
│   │   ├── Home.tsx     # Landing page
│   │   ├── Settings.tsx # Settings page
│   │   ├── Assessment.tsx
│   │   └── Cases.tsx
│   ├── store/           # Zustand state stores
│   ├── data/            # Questions and content
│   ├── lib/             # Utilities
│   └── App.tsx          # Root component
├── public/              # Static assets
└── dist/                # Production build
```

## 🤝 Contributing

This is an educational project. Contributions are welcome to:
- Improve educational content accuracy
- Add more clinical cases
- Enhance user experience
- Fix bugs or typos

## 📝 License

Copyright © 2024 Clinical Chem Master. All rights reserved.

## 🙏 Acknowledgments

- Conceptual framework based on Tietz Fundamentals of Clinical Chemistry
- CLSI guidelines and CLIA concepts
- Designed for educational excellence in clinical chemistry

## 📧 Support

For questions or feedback about the educational content, please open an issue in the repository.

---

**Remember:** This is a learning tool. Always verify information with current medical literature, institutional protocols, and subject matter experts for patient care decisions.
