"use client";
import ParticleNetwork from './ParticleNetwork';
import React, { useState } from 'react';

// Types for data-driven sections
interface Project {
  title: string;
  link?: string;
  tech: string;
  bullets: string[];
}
interface Experience {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

// Card component for projects/experience
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div
    className={`bg-black/80 rounded-xl shadow p-6 mb-4 transition-all duration-200 border border-transparent hover:border-blue-400 hover:shadow-lg group/card font-['Roboto','sans-serif'] ${className}`}
  >
    {children}
  </div>
);

// Skill badge component
const SkillBadge: React.FC<{ skill: string }> = ({ skill }) => (
  <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold font-['Roboto','sans-serif'] border border-white/30">{skill}</span>
);

// Data for projects
const projects: Project[] = [
  {
    title: 'Spamurai : Spam/Ham Classifier',
    link: 'https://github.com/garvitdby/Spam-Classifier',
    tech: 'Python, Data Preprocessing & ML models training, pickle, KNIME',
    bullets: [
      'Analyzed a 5000-row labeled text dataset for message classification, applying comprehensive preprocessing including data data cleaning, Exploratory Data Analysis (EDA), text vectorization, and feature engineering.',
      'Trained and evaluated 11 machine learning models including Logistic Regression, Support Vector Machine (SVM), K-nearest negihbour (KNN), Random Forest, and Naive Bayes for spam detection.',
      'Achieved over 97% precision and accuracy using the Multimodel Naive Bayes model, deployed final model with full ML pipeline using pickle for scalable text classification.',
    ],
  },
  {
    title: 'SwipeWise: Managing Credit Cards',
    link: 'https://github.com/garvitdby/Credit-card-management-system-',
    tech: 'SQL (PL/pgSQL)',
    bullets: [
      'Designed a normalized PostgreSQL databse system with 8 relational tables to manage customers, transactions, rewards and promotional offers for secure and scalable credit card operations.',
      'Implemented automation via 2 stored procedures and 2 triggers to handle reward point computation and signup bonuses, enhancing transactional efficiency.',
      'Applied SQL best practices for optimized data retrieval, integrity, and maintainability, ensuring seamless data flow across user profiles, rewards, and offer tracking.',
    ],
  },
  {
    title: 'Elevatr: Enhancing Social Networking Profiles for Students Using ML',
    link: 'https://github.com/garvitdby/Enhancing-Student-Social-Networking-Profile',
    tech: 'Python (Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn)',
    bullets: [
      'Applied KMeans clustering to data from 1,000+ students to recommend peer groups based on shared interests.',
      'Improved interest-based matches by 20%, fostering more meaningful student interactions.',
      'Leveraged machine learning to strengthen student communities by enhancing profile recommendations and encouraging deeper social engagement.',
    ],
  },
  {
    title: 'PayDefend: Credit Card Fraud Detection System',
    link: 'https://github.com/garvitdby/Credit-card-frauddetection-main',
    tech: 'Python, Machine Learning',
    bullets: [
      'Cleans, analyzes, and visualizes credit card transaction data to detect fraudulent activities.',
      'Implements multiple machine learning models (KNN, Decision Trees, Random Forest) for fraud classification.',
      'Provides insights and predictions to help prevent unauthorized transactions and financial losses.',
    ],
  },
  {
    title: 'DataRift: Nations In Numbers',
    link: 'https://github.com/garvitdby/GDP-Analysis',
    tech: 'Tableau, Data Visualization, Level Of Detail (LOD), Storytelling, Economic Analysis',
    bullets: [
      'Conducted multi-country GDP and economic indicator analysis across 18 nations (developed, developing, underdeveloped) using real-time datasets with 36 features.',
      'Identified trends in salary, employment, and cost of living to reveal economic disparities and workforce dynamics for strategic planning and decision-making.',
      'Designed interactive Tableau dashboards and stories to visualize economic trends and support insights into job markets and development strategies.',
    ],
  },
];

const ongoingProjects: Project[] = [
  {
    title: 'TriNetra: Awake, Aware, Always',
    tech: 'Python, OpenCV, YOLOv8, Deep Learning, Template Matching, Ultralytics',
    bullets: [
      'Built and currently enhancing a multi-model real-time AI surveillance system for public safety, capable of detecting weapons, fire/smoke, accidents, and unusual activities from CCTV feeds.',
      'Leveraged YOLOv5/YOLOv8 TensorFlow Lite, and OpenCV with transfer learning to achieve high-accuracy multi-class detection and tampering recognition (e.g., unattended baggage, stolen artifacts).',
      'Engineered optimized object tracking and inference pipelines using ORB + FLANN feture matching, quantization and edge device optimization, reducing False Positives and acheiving sub-500ms latency on CPU.',
      'Designed scalable modular AI workflows with dynamic config-based toggling, automated timestamped alerts, forensic logging of 200+ events, and zone based (ROI) alerting to minimize false alerts.',
      'Architected the system for future scalability and adaptability, with planned modules for theft detection, behavioral anomaly monitoring,. and responsive alerting tailored for enviornments such as museums, parking lots, and riot-prone zones.',
    ],
  },
  {
    title: 'MailMind – Automated Email Intelligence System',
    tech: 'Python, SQL, LLMs, Transformers, Deep Learning',
    bullets: [
      'Building a context-aware AI email asssitsnt to boost inbox productivity through intelligent summarization, classification and smart reply suggestions.',
      'Developed a secure automated email ingestion system using Python, Gmail API, OAuth2, and MySQL for structured storage and retrieval.',
      'Implemented intelligent email processing with MeiliSearch for full-text indexing, T5 transformer(Hugging Face) for summarization and intent detection, and heuristic-drivem dynamic labeling.',
      'Integrated with Google Calendar and Slack APIs for contextual scheduling, reminders, and real-time alerts, with worklfows validated via Postman.',
      'Designed a modular, privacy-focused NLP pipeline with planned LSTM-based spam detection and deployment as a browser extension and web application for scalable usability.',
    ],
  },
  {
    title: 'CryptoCop: Blockchain Forensics',
    tech: 'Python, Graphical Neural Network (GNN), Graph Attention Network (GAT), Ensemble Learning',
    bullets: [
      'Developing a multi-chain blockchain analytics system that transforms raw transaction data into structured wallet-centric graphs for profiling, anomaly detection, and forensic investigation.',
      'Designed a modular CLI framework with subcommands for graph analysis, feature extarction, semantic edge classification (exchange, NFT, mixer, bridge), visualization and automated reporting.',
      'Implementing graph learning pipelines using GCN and GAT to generate ML-ready embeddings, enabling wallet classifcation, behavioral clustering, and anomaly detection across heterogeneous chains.',
      'Engineered robust data ingestion & normalization workflows for Bitcoin, Ethereum, BSC, Polygon, and Solana (including custom low-level parsing of Solana transactions to accurately extract source/destination addresses).',
      'Planned enhancements include GNN + ensemble learning models for fraud and suspicious activity detection, along with darknet coin monitoring and OSINT integration to evolve into a comprehensive blockchain forensics and threat intelligence platform.',
    ],
  },
];

const experiences: Experience[] = [
  {
    title: 'Gurugram Cyber Police Cyber Intern',
    company: 'Haryana Police',
    period: '(June 2025 – July 2025)',
    bullets: [
      'Made a project conducting multi-chain transaction analysis under the mentorship of a Senior Blockchain Researcher (Ministry of Defense), and was engaged in brainstroming sessions on cyber threat intelligence, crypto trends, and national cyber strategies.',
      'Selected among 500 candidates from over 10000+ applicants.',
      'Attented elite sessions  led by experts from CBI (CSAM), Narcotics Bureau, Ethical Hacking & Red Teaming professionals, Retired Air Force AI Data Center Head, Tech Masters from I4C and PCI DSS focusing on cyber networks, GRC (Governance, Risk & Compliance), and mentored by Dr. Rakshit Tandon.',
    ],
  },
  {
    title: 'Data Analyst Intern',
    company: 'MetalMan Auto',
    period: '(Jul 2024 – Sep 2024)',
    bullets: [
      'Worked with large datasets related to production efficiency, machine downtime, and quality control.',
      'Created interactive dashboards using Tableau to help managers monitor production performance.',
      'Automated parts of the reporting process using SQL queries amd Python, reducing report generation time. Helped improve machine uptime and defect detection, leading to noticable efficiency gains, estimated to be around 10% - 15% based on team feedback.',
    ],
  },
];

const skills = [
  'Python', 'SQL', 'Java', 'Scikit-learn', 'KMeans', 'Random Forest', 'SVM (Support Vector Machine)', 'Naive Bayes', 'Logistic Regression',
  'TensorFlow', 'Keras', 'OpenCV', 'Text preprocessing', 'Vectorization', 'Sentiment/Hate Speech Classification', 'NLP (Natural Language Processing)',
  'PostgreSQL', 'MySQL', 'KNIME', 'Tableau', 'Git/GitHub', 'Excel', 'VS Code', 'Data Analysis', 'Hugging Face Transformers',
  'Predictive Modeling', 'Statistical Analysis', 'Data Visualization', 'Machine Learning', 'Deep Learning', 'Artificial Intelligence', 'Postman',
  'Git', 'EDA (Exploratory Data Analysis)', 'Feature Engineering', 'Data Normalization', 'Data Cleaning', 'Model Evaluation & Optimization',
  'Hyperparameter Tuning'
];

// Sticky navigation bar component
const sections = [
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
];

const StickyNav: React.FC = () => (
  <nav className="fixed top-0 left-0 z-50 w-full bg-black/80 backdrop-blur border-b border-white/10 shadow flex justify-center py-2 mb-6 font-['Roboto','sans-serif'] transition-transform duration-300">
    <ul className="flex flex-wrap gap-4 sm:gap-8 items-center">
      {sections.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className="relative inline-flex items-center px-4 py-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 group text-base font-sans
              bg-gradient-to-r from-cyan-900/40 via-fuchsia-900/40 to-yellow-900/40
              text-white hover:text-blue-400 hover:bg-fuchsia-900/30
              shadow-md hover:shadow-fuchsia-400/30 border border-white/10 hover:border-blue-400"
            style={{ scrollBehavior: 'smooth' }}
          >
            <span className="transition-colors duration-200 group-hover:text-blue-400 font-['Roboto','sans-serif']">
              {section.label}
            </span>
            <span className="absolute left-0 top-0 w-full h-full rounded-lg bg-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"></span>
          </a>
        </li>
      ))}
      <li>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 font-semibold rounded-lg bg-fuchsia-600 text-white hover:bg-fuchsia-700 transition-colors shadow border border-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 ml-2 text-base font-roboto"
        >
          View Resume
        </a>
      </li>
    </ul>
  </nav>
);

// Tabs for Projects/Ongoing Projects
const ProjectTabs: React.FC = () => {
  const [tab, setTab] = useState<'projects' | 'ongoing'>('projects');
  return (
    <div className="w-full font-['Roboto','sans-serif']">
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-t-lg font-bold text-2xl transition-colors border-b-2 font-['Roboto','sans-serif'] ${tab === 'projects' ? 'text-blue-400 border-blue-400 bg-black/80' : 'text-white border-transparent hover:text-blue-400'}`}
          onClick={() => setTab('projects')}
          aria-selected={tab === 'projects'}
        >
          Projects
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg font-bold text-2xl transition-colors border-b-2 font-['Roboto','sans-serif'] ${tab === 'ongoing' ? 'text-blue-400 border-blue-400 bg-black/80' : 'text-white border-transparent hover:text-blue-400'}`}
          onClick={() => setTab('ongoing')}
          aria-selected={tab === 'ongoing'}
        >
          Ongoing Projects
        </button>
      </div>
      {tab === 'projects' ? (
        <div>
          {projects.map((proj) => (
            <Card key={proj.title}>
              {proj.link ? (
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-300 text-2xl underline hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors font-['Roboto','sans-serif'] inline-flex items-center gap-2">
                  {/* Hyperlink icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 13.5L17 7m0 0h-5.25M17 7v5.25M6.75 17a5.25 5.25 0 010-7.425l2.625-2.625a5.25 5.25 0 017.425 7.425l-2.625 2.625a5.25 5.25 0 01-7.425-7.425" />
                  </svg>
                  {proj.title}
                </a>
              ) : (
                <span className="font-bold text-white text-2xl font-sans">{proj.title}</span>
              )}
              <p className="text-white text-base mt-1 font-medium font-sans">{proj.tech}</p>
              <ul className="list-disc ml-6 mt-2 text-white font-sans">
                {proj.bullets.map((b, i) => (
                  <li key={i} className="text-base leading-relaxed font-sans">{b}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      ) : (
        <div>
          {ongoingProjects.map((proj) => (
            <Card key={proj.title}>
              <span className="font-bold text-white text-2xl font-sans">{proj.title}</span>
              <p className="text-white text-base mt-1 font-medium font-sans">{proj.tech}</p>
              <ul className="list-disc ml-6 mt-2 text-white font-sans">
                {proj.bullets.map((b, i) => (
                  <li key={i} className="text-base leading-relaxed font-sans">{b}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

// Collapsible section component
const CollapsibleSection: React.FC<{
  id: string;
  title: React.ReactNode; // Allow ReactNode for gradient headings
  children: React.ReactNode;
  defaultOpen?: boolean;
}> = ({ id, title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section id={id} className="scroll-mt-24 font-['Roboto','sans-serif']">
      <button
        className="w-full flex items-center justify-between px-6 pt-6 pb-2 text-2xl font-bold text-white uppercase drop-shadow tracking-wide font-['Roboto','sans-serif'] transition-colors bg-gradient-to-r from-yellow-400/10 via-fuchsia-500/10 to-cyan-400/10 rounded-t-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`section-content-${id}`}
        type="button"
      >
        {title}
        <span className="ml-4 text-2xl font-sans">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div id={`section-content-${id}`} className="space-y-6 bg-black/90 rounded-b-2xl shadow p-8 font-['Roboto','sans-serif']">
          {children}
        </div>
      )}
    </section>
  );
};

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black p-0 flex flex-col items-center overflow-hidden font-roboto" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <ParticleNetwork />
      <StickyNav />
      {/* Add extra top padding for mobile to prevent navbar overlap */}
      <div className="relative z-10 w-full flex flex-col items-center px-0 sm:px-2 md:px-4 py-4 sm:py-6 font-roboto" style={{ paddingTop: '96px' }}>
        <header className="w-full max-w-6xl mx-auto text-center mb-6 font-['Roboto','sans-serif']">
          <div className="mx-auto flex justify-center">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-full px-8 py-6 sm:px-12 sm:py-8 flex flex-col items-center gap-2 transition-all duration-300 hover:bg-white/20 hover:shadow-blue-400/30 hover:scale-105 group font-['Roboto','sans-serif']">
              <h1 className="text-4xl sm:text-5xl font-bold mb-2 tracking-tight drop-shadow-lg transition-transform duration-200 group-hover:scale-105 font-['Roboto','sans-serif'] text-white" style={{ textTransform: 'none' }}>
                Garvit Dubey
              </h1>
              <p className="text-base text-white font-semibold mb-2 font-['Roboto','sans-serif']">AI & ML Enthusiast</p>
              <p className="text-base text-white flex flex-wrap items-center gap-x-8 gap-y-2 justify-center mt-2 font-['Roboto','sans-serif']">
                <span className="flex items-center gap-2 font-sans">
                  {/* Location icon (Heroicons solid) */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-white" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6c0 4.418 5.373 9.292 5.601 9.5a1 1 0 001.398 0C10.627 17.292 16 12.418 16 8a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" clipRule="evenodd" />
                  </svg>
                  <a
                    href="https://maps.app.goo.gl/caG8g6cWqYKRZ7Vu8"
                    className="font-['Roboto','sans-serif'] text-blue-300 hover:text-blue-400 font-semibold underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Gurugram on Google Maps"
                  >
                    Gurugram
                  </a>
                </span>
                <span className="flex items-center gap-2 font-sans">
                  <a
                    href="mailto:garv.itdby@gmail.com"
                    className="flex items-center gap-2 underline text-blue-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition-colors font-['Roboto','sans-serif'] font-semibold"
                    aria-label="Send Mail to Garvit Dubey"
                  >
                    {/* Mail icon (Material Design) with adjusted viewBox and alignment */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 20 20" fill="currentColor" className="w-5 h-5 text-white" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l8 7 8-7V20H4z"/>
                    </svg>
                    <span className="font-semibold font-['Roboto','sans-serif']">Mail</span>
                  </a>
                </span>
                <span className="flex items-center gap-2 font-sans">
                  <a
                    href="https://www.linkedin.com/in/garvit-dubey/"
                    className="flex items-center gap-2 underline text-blue-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition-colors font-['Roboto','sans-serif'] font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Garvit Dubey on LinkedIn"
                  >
                    {/* LinkedIn icon (official SVG) with adjusted viewBox and alignment */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5 text-white" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                      <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0153.6 0c29.6 0 53.6 24.09 53.6 53.6 0 29.6-24 53.7-53.36 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.4s1.2-242.1 0-267.1h92.4v37.9c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.6 39.8 106.6 125.4V448z"/>
                    </svg>
                    <span className="font-semibold font-['Roboto','sans-serif']">LinkedIn</span>
                  </a>
                </span>
                <span className="flex items-center gap-2 font-sans">
                  <a
                    href="https://github.com/garvitdby"
                    className="flex items-center gap-2 underline text-blue-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition-colors font-['Roboto','sans-serif'] font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Garvit Dubey on GitHub"
                  >
                    {/* GitHub icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.479C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z"/>
                    </svg>
                    <span className="font-semibold font-['Roboto','sans-serif']">GitHub</span>
                  </a>
                </span>
                <span className="flex items-center gap-2 font-sans">
                  <a
                    href="https://x.com/GarvItdby"
                    className="flex items-center gap-2 underline text-blue-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition-colors font-['Roboto','sans-serif'] font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Garvit Dubey on Twitter/X"
                  >
                    {/* Twitter/X icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor" className="w-5 h-5 text-white" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                      <path d="M1200 21.6L728.8 623.2L1197.6 1205.6H1027.2L661.6 749.6L256 1205.6H0L496.8 579.2L54.4 21.6H230.4L563.2 441.6L944 21.6H1200ZM960 1096.8H1072L320 130.4H208L960 1096.8Z"/>
                    </svg>
                    <span className="font-semibold font-['Roboto','sans-serif']">Twitter/X</span>
                  </a>
                </span>
              </p>
            </div>
          </div>
        </header>
        {/* About Me Section (collapsible, single heading, matching width and spacing) */}
        <div className="w-full max-w-6xl mx-auto mb-6 scroll-mt-24 font-['Roboto','sans-serif']">
          <CollapsibleSection id="about" title={<span className="text-white" style={{ textTransform: 'none' }}>About Me</span>} defaultOpen={false}>
            <p className="text-base leading-relaxed bg-black/80 text-white rounded-b-lg shadow p-6 font-roboto" style={{ fontFamily: 'Roboto, sans-serif' }}>
              I’m Garvit Dubey, a Data Science undergrad from The NorthCap University who combines research-minded rigor with hands-on engineering to turn messy & complex data into actionable intelligence. I build end-to-end AI systems across computer vision, NLP, and graph learning, while giving equal weight to clean code, reproducible pipelines, and deployment-ready performance. My technical toolkit includes Python, TensorFlow / Keras, PyTorch, Scikit-learn, OpenCV, SQL/MySQL, MeiliSearch, and experience with GNNs (GCN/GAT), attention mechanisms, model quantization, and edge optimizations. I’ve implemented real-time CV pipelines, a context-aware NLP assistant (summarization, intent detection, smart replies), and a multi-chain blockchain forensics platform producing ML-ready graph embeddings for anomaly detection. I prioritize interpretability, privacy, and scalable design—comfortable building CLI tools, API integrations, and dashboards that translate raw metrics into clear insights. I’m open to research collaborations and applied projects where I can blend algorithmic depth with production engineering to deliver measurable impact and build intelligent systems.
            </p>
          </CollapsibleSection>
        </div>
        {/* Projects Section (non-collapsible, interactive box) */}
        <section id="projects" className="w-full max-w-6xl mx-auto mb-6 scroll-mt-[120px] font-['Roboto','sans-serif']">
          <div className="rounded-2xl bg-gradient-to-r from-yellow-400/10 via-fuchsia-500/10 to-cyan-400/10 shadow p-0 mb-6 font-sans">
            <h2 className="text-2xl font-bold px-6 pt-6 pb-2 text-white uppercase tracking-wide font-['Roboto','sans-serif']" style={{ textTransform: 'none' }}>
              Projects
            </h2>
            <div className="space-y-6 bg-black/90 rounded-b-2xl shadow p-8 font-['Roboto','sans-serif']">
              <ProjectTabs />
            </div>
          </div>
        </section>
        {/* Experience Section (non-collapsible, interactive box) */}
        <section id="experience" className="w-full max-w-6xl mx-auto mb-6 scroll-mt-[120px] font-['Roboto','sans-serif']">
          <div className="rounded-2xl bg-gradient-to-r from-yellow-400/10 via-fuchsia-500/10 to-cyan-400/10 shadow p-0 mb-6 font-sans">
            <h2 className="text-2xl font-bold px-6 pt-6 pb-2 text-white uppercase tracking-wide font-['Roboto','sans-serif']" style={{ textTransform: 'none' }}>
              Experience
            </h2>
            <div className="space-y-6 bg-black/90 rounded-b-2xl shadow p-8 font-['Roboto','sans-serif']">
              {experiences.map((exp) => (
                <Card key={exp.title + exp.company}>
                  <span className="font-bold text-2xl text-white font-sans">{exp.title}, {exp.company} <span className="text-xs text-white font-sans">{exp.period}</span></span>
                  <ul className="list-disc ml-6 mt-2 text-white font-sans">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="text-base leading-relaxed font-sans">{b}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Skills Section (non-collapsible, interactive box) */}
        <section id="skills" className="w-full max-w-6xl mx-auto mb-6 scroll-mt-[120px] font-['Roboto','sans-serif']">
          <div className="rounded-2xl bg-gradient-to-r from-yellow-400/10 via-fuchsia-500/10 to-cyan-400/10 shadow p-0 mb-6 font-sans">
            <h2 className="text-2xl font-bold px-6 pt-6 pb-2 text-white uppercase tracking-wide font-['Roboto','sans-serif']" style={{ textTransform: 'none' }}>
              Skills
            </h2>
            <div className="flex flex-wrap gap-3 justify-center bg-black/90 rounded-b-2xl shadow p-8 font-['Roboto','sans-serif']">
              {skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}