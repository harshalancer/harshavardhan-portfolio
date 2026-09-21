import { Translations } from './types';

export const en: Translations = {
  nav: {
    home: 'HOME',
    services: 'SERVICES',
    work: 'MY WORK',
    contact: 'CONTACT',
    discussProject: 'Discuss Project',
    selectLanguage: 'Select language',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    softwareAndAi: 'Software & AI',
  },
  home: {
    availability: 'OPEN TO DISCUSSING PROJECTS',
    title: 'Software Developer & AI Enthusiast',
    intro:
      'I build robust web applications, intelligent automation systems, and computer vision prototypes. Passionate about crafting high-performance digital experiences that turn ambitious concepts into reliable reality.',
    exploreWork: 'Explore My Work',
    getInTouch: 'Get In Touch',
    coreFocus: 'Core Focus:',
    pillarsBadge: 'ENGINEERING PILLARS',
    pillarsHeading: 'What I Bring to Every Project',
    viewDetailedServices: 'View detailed services',
    pillar1Title: 'Full-Stack Web Engineering',
    pillar1Desc:
      'End-to-end web applications built with Next.js, React, TypeScript, and modern backend architectures designed for sub-second speeds.',
    pillar2Title: 'AI & Systems Automation',
    pillar2Desc:
      'Integration of state-of-the-art LLMs (Gemini, OpenAI), smart conversational chatbots, and low-code workflow orchestration via n8n and APIs.',
    pillar3Title: 'Robotics & Vision Systems',
    pillar3Desc:
      'Practical experience prototyping computer-vision-driven hardware systems such as the Pipeline Inspection Robot prototype.',
    featuredBadge: 'SELECTED WORK',
    featuredHeading: 'Featured Technical Highlights',
    exploreAllProjects: 'Explore all projects',
    inspectDetails: 'Inspect details',
    collabBadge: 'COLLABORATION',
    collabTitle: 'Have an idea, project, or technical challenge?',
    collabDesc:
      'Let’s explore practical, well-architected solutions tailored to your goals and budget.',
    startConversation: 'Start a Conversation',
  },
  services: {
    badge: 'SERVICES & EXPERTISE',
    heading: 'How I Can Help Your Business',
    subheading:
      'Thoughtful digital solutions engineered with precision, modern architecture, and affordable efficiency. Every project is scoped transparently around your exact requirements.',
    keyDeliverables: 'Key Deliverables:',
    discussScope: 'Discuss scope',
    scopingBadge: 'Transparent Project Scoping',
    scopingText:
      'Every business has unique requirements. I do not push rigid packages or inflated agency fees. Reach out to discuss your exact project goals, timeline, and budget.',
    requestQuote: 'Request a Project Quote',
    items: [
      {
        id: 'full-stack',
        title: 'Full-Stack Web Development',
        tag: 'Core Engineering',
        summary:
          'End-to-end custom web applications with server-rendered user interfaces, scalable API layers, database design, and business logic crafted specifically for your operational goals.',
        deliverables: [
          'Type-safe frontend and backend architectures',
          'Database schema design (PostgreSQL, Supabase, Firebase)',
          'Secure REST APIs and third-party integrations',
          'Production-ready deployment and caching strategies',
        ],
      },
      {
        id: 'frontend',
        title: 'Frontend Development & Responsive Websites',
        tag: 'Interface Architecture',
        summary:
          'High-performance, accessible, responsive websites engineered to load within milliseconds and deliver smooth experiences across phones, tablets, laptops, and ultra-wide displays.',
        deliverables: [
          'Pixel-perfect responsive layouts without horizontal overflow',
          'Accessibility standards compliance (WCAG AA)',
          'Sub-second loading speeds and Core Web Vitals optimization',
          'Modern micro-interactions and smooth page transitions',
        ],
      },
      {
        id: 'ui-ux',
        title: 'UI/UX & Interaction Design',
        tag: 'User Experience',
        summary:
          'Clean, futuristic, intuitive interfaces that reduce cognitive friction and make complex web applications simple, clear, and satisfying to navigate.',
        deliverables: [
          'Design systems with consistent color tokens and typography',
          'Information architecture and user journey mapping',
          'Mobile-first responsive wireframing and prototyping',
          'Refined dark-mode surfaces, contrast tuning, and focus rings',
        ],
      },
      {
        id: 'ai-solutions',
        title: 'AI & Automation Solutions',
        tag: 'Intelligent Systems',
        summary:
          'Integration of generative AI models, smart customer support chatbots, and automated multi-app workflow pipelines to eliminate repetitive daily manual tasks.',
        deliverables: [
          'LLM integration via official Google Gemini and OpenAI APIs',
          'Automated multi-step workflows using n8n, Make, or custom Python scripts',
          'Intelligent chatbots for customer inquiries and lead triage',
          'Structured JSON output parsing and database synchronization',
        ],
      },
      {
        id: 'redesign-bugfixing',
        title: 'Website Redesign, Bug Fixing & Modernization',
        tag: 'Dedicated Support',
        summary:
          'Already have a website that feels outdated or runs slow? I help troubleshoot broken functionality, fix layout bugs, enhance responsiveness, and modernize overall design.',
        deliverables: [
          'Bug diagnosis and direct code refactoring',
          'Modernization of legacy styling and outdated components',
          'Mobile responsiveness fixes and viewport overflow debugging',
          'Asset optimization and script performance tune-ups',
        ],
      },
    ],
  },
  projects: {
    badge: 'PORTFOLIO & CASE STUDIES',
    heading: 'My Work & Technical Projects',
    subheading:
      'A showcase of engineered prototypes, automation pipelines, and full-stack software. Built with an emphasis on reliability, performance, and practical real-world utility.',
    architecturalHighlights: 'Architectural Highlights:',
    sourceCode: 'Source / Profile',
    livePreview: 'Live Preview',
    verifiedWork: 'Verified Work: Authentic technical project documented in Harsha’s active portfolio.',
    collabHeading: 'Have a project you would like to build together?',
    collabText: 'I am actively discussing new full-stack, AI, and software engineering opportunities.',
    startDiscussion: 'Start a Project Discussion',
    items: [
      {
        id: 'pipeline-inspection-robot',
        title: 'Pipeline Inspection Robot',
        category: 'Robotics & Computer Vision',
        description:
          'An advanced robotic inspection prototype engineered to navigate restricted pipeline environments, capture internal visual telemetry, and detect structural defects or corrosion in real time.',
        highlights: [
          'Edge-based visual processing for surface defect and crack identification',
          'Compact locomotion chassis engineered for enclosed cylindrical geometries',
          'Telemetry logging for operational reliability and sensor-driven navigation',
        ],
      },
      {
        id: 'ai-workflow-automation-system',
        title: 'Intelligent AI Workflow Automation',
        category: 'AI & Systems Automation',
        description:
          'A multi-service automation framework that integrates LLM reasoning with business applications to eliminate repetitive operational bottlenecks and automate inquiry routing.',
        highlights: [
          'Event-driven webhook pipelines triggering contextual AI workflows',
          'Automated semantic parsing, data transformation, and CRM synchronization',
          'Zero-human-in-the-loop triage for standard data validation workflows',
        ],
      },
      {
        id: 'nextjs-fullstack-architecture',
        title: 'Modern Full-Stack Web Application',
        category: 'Full-Stack Web Development',
        description:
          'A high-performance, modular web platform designed with server-rendered UI, type-safe API communication, and scalable relational data architecture.',
        highlights: [
          'Sub-second first contentful paint utilizing hybrid static & server rendering',
          'End-to-end type safety across client UI, server actions, and database schemas',
          'WCAG AA accessible interface with dynamic theme and localized UI support',
        ],
      },
    ],
  },
  contact: {
    badge: 'GET IN TOUCH',
    heading: 'Have an Idea? Let’s Connect.',
    subheading:
      'Tell me about your planned project, challenge, or ideas. I review every message directly and reply promptly.',
    channelsTitle: 'Direct Contact Channels',
    whatsappLabel: 'WHATSAPP',
    whatsappSub: 'Instant chat & project discussions',
    emailLabel: 'EMAIL',
    emailSub: 'Direct inbox, answered promptly',
    phoneLabel: 'PHONE',
    phoneSub: 'Available for scheduled project calls',
    githubLabel: 'GITHUB REPOSITORY',
    githubSub: 'Source repositories & open-source activity',
    privacyNote: 'Direct, private communication. No automated spam or third-party sales funnels.',
    formTitle: 'Send a Direct Project Enquiry',
    formSub: 'Fill out the details below to format your message and dispatch it instantly.',
    nameLabel: 'Your Name',
    namePlaceholder: 'e.g. Alex Smith',
    contactLabel: 'Email or Phone Number',
    contactPlaceholder: 'e.g. alex@example.com or +91 98765 43210',
    serviceLabel: 'Service Interested In',
    servicePlaceholder: 'Select a technical service...',
    descLabel: 'Project Description',
    descPlaceholder:
      'Tell me briefly about what you want to build, the problem you are solving, or your target timeline...',
    submitButton: 'Prepare & Dispatch Message',
    directPrivacyNote: 'Zero tracking. All messages route directly to Harsha.',
    errors: {
      nameRequired: 'Please provide your name.',
      contactRequired: 'Please provide an email address or phone number.',
      serviceRequired: 'Please select a service area.',
      descRequired: 'Please provide a brief description of your project.',
    },
    successHeading: 'Enquiry Formatted Successfully',
    successMessage: 'Choose your preferred direct delivery method below:',
    sendViaWhatsapp: 'Send directly via WhatsApp',
    sendViaEmail: 'Send directly via Email',
    editDetails: 'Edit details',
    whatsappPrefill: 'Hi Harsha, I visited your website and would like to discuss a project.',
    serviceOptions: {
      fullstack: 'Full-Stack Web Development',
      frontend: 'Frontend Development & Responsive UI',
      uiux: 'UI/UX & Interaction Design',
      ai: 'AI & Systems Automation',
      redesign: 'Website Redesign & Troubleshooting',
      robotics: 'Robotics / Computer Vision Consultation',
      other: 'Other / General Technical Inquiry',
    },
  },
  footer: {
    title: 'Software Developer & AI Enthusiast',
    tagline:
      'Engineering high-performance web applications, intelligent automation, and tailored digital architectures.',
    availableBadge: 'Available for select technical projects',
    navigationHeader: 'NAVIGATION',
    directReachHeader: 'DIRECT REACH',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
};