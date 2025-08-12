import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Download,
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Menu,
  X,
  ChevronDown,
  Code,
  Briefcase,
  User,
  FileText
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'projects', 'experience', 'resume'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: 'Expense Tracker Application',
      description: 'Developed a secure backend with Spring Boot and JWT, using Docker and PostgreSQL for efficient, reliable data handling. Managed deployment on AWS EC2 and RDS, configuring for high availability, fault tolerance, and scalable infrastructure.',
      technologies: ['AWS', 'Docker', 'PostgreSQL', 'Spring Boot', 'Maven', 'JWT'],
      github: 'https://github.com/ruby543/expense-tracker-api',
      featured: true
    },
    {
      title: 'Full-Stack Car Rental Website',
      description: 'Built a scalable car rental platform with Next.js and GraphQL, supporting hundreds of daily bookings. Integrated Stripe.js for secure payments and Clerk.js for user authentication.',
      technologies: ['GraphQL', 'Next.js', 'Clerk.js', 'Stripe.js', 'Hygraph'],
      github: 'https://github.com/ruby543/Full-Stack-Car-Rental-Website',
      featured: true
    },
    {
      title: 'Full-Stack E-Commerce Website',
      description: 'Developed a responsive e-commerce site with React, Redux, and Firebase for secure authentication and real-time data. Implemented Stripe.js with Node.js API for secure payment processing.',
      technologies: ['React JS', 'Redux', 'Firebase', 'Stripe.js', 'Node.js'],
      github: 'https://github.com/ruby543/Full-Stack-E-Commerce-Website',
      featured: false
    }
  ];

  const experiences = [
    {
      title: 'Software Developer Mentor',
      company: 'Code the Dream',
      period: 'Jul 2025 – Present',
      location: 'Remote',
      description: [
        'Enhanced student learning by providing detailed feedback on weekly JavaScript and React assignments',
        'Improved problem-solving by troubleshooting code issues through live Google Meet sessions and Slack communication',
        'Facilitated student progress tracking and engagement using Airtable',
        'Utilized JavaScript, React, VS Code, GitHub Codespaces, and CTD coding sandboxes for hands-on coding practice'
      ],
      technologies: ['JavaScript', 'React', 'VS Code', 'GitHub Codespaces', 'Slack', 'Airtable']
    },
    {
      title: 'Software Engineer Intern',
      company: 'ADP',
      period: 'May 2024 – Aug 2024',
      location: 'Alpharetta, GA',
      description: [
        'Migrated 30+ legacy workflows to Salesforce Flows, boosting process efficiency 40% and cutting manual effort',
        'Developed Apex REST API with 98% accuracy for account matching and messaging',
        'Designed dynamic SOQL queries with robust error handling, reducing API failure rate and improving system stability',
        'Collaborated with Agile developers and product managers to deliver workflow migration on schedule and meet goals'
      ],
      technologies: ['DevOps', 'SOQL', 'Java', 'Apex', 'Salesforce', 'REST APIs']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Rubaina Roshan
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  { id: 'intro', label: 'About', icon: User },
                  { id: 'projects', label: 'Projects', icon: Code },
                  { id: 'experience', label: 'Experience', icon: Briefcase },
                  { id: 'resume', label: 'Resume', icon: FileText }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-1" />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                { id: 'intro', label: 'About', icon: User },
                { id: 'projects', label: 'Projects', icon: Code },
                { id: 'experience', label: 'Experience', icon: Briefcase },
                { id: 'resume', label: 'Resume', icon: FileText }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
<section id="intro" className="min-h-screen flex items-center justify-center px-4 pt-16">
  <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Left: Profile Image */}
    <div className="flex justify-center md:justify-end">
      <img
        src="image.jpg"
        alt="Rubaina Roshan"
        className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-lg animate-fade-in"
      />
    </div>

    {/* Right: Text Content */}
    <div className="text-center md:text-left">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
          Rubaina Roshan
        </span>
      </h1>

      <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-xl">
        Hi 👋, I'm Rubaina Roshan. I am passionate about building scalable applications that transform ideas into impactful realities. I love tackling complex challenges with creative tech solutions that make a real difference in the world.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
        <a
          href="mailto:roshanrubaina@gmail.com"
          className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <Mail className="w-5 h-5 mr-2" />
          Contact Me
        </a>
        <a
          href="https://github.com/ruby543"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
        >
          <Github className="w-5 h-5 mr-2" />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/rubaina-roshan-67852b296"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
        >
          <Linkedin className="w-5 h-5 mr-2" />
          LinkedIn
        </a>
      </div>

      {/* Location and Phone */}
      <div className="flex justify-center md:justify-start items-center text-gray-400 mb-6 space-x-6">
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          <span>Atlanta, GA</span>
        </div>
        <div className="flex items-center">
          <Phone className="w-4 h-4 mr-1" />
          <span>+1 615-668-1351</span>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll Down Icon */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <ChevronDown className="w-8 h-8 text-gray-400" />
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:scale-105 transition-transform duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-purple-400 mb-2">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-teal-400 font-medium">{exp.period}</p>
                      <p className="text-gray-400 text-sm">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-start">
                        <span className="text-purple-400 mr-3 mt-2">•</span>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          {/* Embed PDF Resume */}
    <div className="mt-10">
      <iframe
        src="resume.pdf"
        title="Resume"
        width="100%"
        height="700px"
        className="border border-gray-700 rounded-lg"
      ></iframe>
    </div>

    {/* Download Button */}
    <div className="mt-6 text-center">
      <a
        href="resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        className="inline-flex items-center px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition-colors"
      >
        <Download className="w-5 h-5 mr-2" />
        Download My Resume
      </a>
    </div>

          {/* Contact Info */}
          <div className="mt-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-600/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                href="mailto:roshanrubaina@gmail.com"
                className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                roshanrubaina@gmail.com
              </a>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-2" />
                +1 615668-1351
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2" />
                Atlanta, GA
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="https://github.com/ruby543"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/rubaina-roshan-67852b296"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Rubaina Roshan. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;