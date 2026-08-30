import { ServiceItem, PunjabLocation, CareerOpportunity, CaseStudy, PanoramaScene } from '../types';

export const COMPANY_DETAILS = {
  name: "Smart View Labs",
  legalName: "Smart View Labs - Digital Marketing, Web Design & 360° Virtual Media Solutions",
  tagline: "Punjab's #1 Digital Marketing Agency, Web Development & Google Trusted 360° Street View Partner",
  phone: "7508094760",
  formattedPhone: "+91 75080 94760",
  whatsappNumber: "917508094760",
  email: "smartviewlabs@gmail.com",
  whatsappUrl: "https://wa.me/917508094760?text=Hi%20Smart%20View%20Labs%2C%20I%20want%20to%20grow%20my%20business%20with%20Digital%20Marketing%2C%20Web%20Design%2C%20Social%20Media%20and%20Google%20360%C2%B0%20Virtual%20Tours.",
  headquarters: "Chandigarh, India",
  googlePartnerStatus: "Google Street View Certified & Trusted Photographer Agency",
  yearsInBusiness: "6+ Years",
  projectsCompleted: "550+",
  googleViewsGenerated: "12.5M+",
  coverageState: "Punjab, Chandigarh Tricity, Haryana & North India",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "digital-marketing-performance",
    title: "1. Performance Digital Marketing & Paid Ads (Google & Meta)",
    shortDescription: "High-ROI Google Search Ads, Meta Performance campaigns, and automated lead generation funnels delivering predictable revenue.",
    fullDescription: "Accelerate your customer pipeline with end-to-end performance marketing. We create hyper-targeted Google Search & Display campaigns, Facebook & Instagram lead funnels, WhatsApp Click-to-Chat pipelines, and conversion tracking architectures tailored for high ROAS.",
    iconName: "TrendingUp",
    tag: "Primary Growth Engine",
    badge: "Top Priority",
    popular: true,
    features: [
      "High-Intent Google Search, Maps & Display Ads",
      "Meta (Instagram & Facebook) Conversion & Lead Funnels",
      "Instant WhatsApp Click-to-Chat Direct Lead Generation",
      "Hyper-Local Geo-Fencing for Walk-in Footfall",
      "Conversion API & Pixel Tracking Architecture",
      "Transparent Weekly CPL (Cost Per Lead) & ROAS Dashboards"
    ],
    deliverables: [
      "Custom Campaign Setup & High-Converting Ad Copy",
      "Target Audience Segmentation & Lookalikes",
      "CRM / WhatsApp Direct Lead Delivery Automation",
      "Weekly Optimization & ROI Performance Reports"
    ]
  },
  {
    id: "website-design",
    title: "2. Modern Website Design & Custom Web Development",
    shortDescription: "Blazing-fast, mobile-first responsive websites, landing pages, and e-commerce stores engineered for lightning conversions.",
    fullDescription: "Your digital headquarters must load in under 2 seconds, look stunning across all mobile screens, and convert visitors into active customers. We build bespoke React, Next.js, and WordPress websites integrated with payment gateways, booking systems, and 360° tour viewers.",
    iconName: "Layout",
    tag: "Digital Storefront",
    badge: "Fast & Responsive",
    popular: true,
    features: [
      "Ultra-Fast Mobile-First Responsive Design (100% Speed Score)",
      "High-Converting Landing Pages & Multi-Page Business Portals",
      "Built-in 360° Virtual Tour & Interactive Map Embeds",
      "One-Tap WhatsApp & Direct Calling Lead Capture Sticky Bars",
      "E-commerce, Booking Engine & Payment Gateway Integrations",
      "Technical SEO Foundation & Local Schema Markup"
    ],
    deliverables: [
      "Custom UI/UX Designed for High Conversion",
      "Complete Source Code & CMS Admin Access",
      "Domain, SSL & Cloud Hosting Deployment",
      "Automated Form & WhatsApp Notification Engine"
    ]
  },
  {
    id: "social-media-all",
    title: "3. All Social Media Marketing & Management (Instagram, FB, YouTube)",
    shortDescription: "Complete social presence management: viral reels, content strategy, community engagement, and brand authority across all networks.",
    fullDescription: "Dominate Instagram, Facebook, YouTube Shorts, and LinkedIn with thumb-stopping creative reels, carousel graphics, influencer outreach, and active audience engagement customized for regional Punjab and nationwide markets.",
    iconName: "Video",
    tag: "Brand Authority",
    badge: "Viral Growth",
    popular: true,
    features: [
      "End-to-End Social Media Account Management (Instagram, FB, YouTube, LinkedIn)",
      "Trending 4K Viral Reels, Shorts & Video Production",
      "Strategic Content Calendars & Daily Story Highlights",
      "Community Engagement, DM Automation & Comment Moderation",
      "Influencer Collaboration & Local Brand Tie-Ups",
      "Monthly Growth Analytics & Reach Reports"
    ],
    deliverables: [
      "Monthly Reel Bundles with Trending Regional Audio",
      "Graphic Design Post & Story Creative Packs",
      "Targeted Hashtag & Engagement Strategy",
      "Complete Channel Growth & Follower Reports"
    ]
  },
  {
    id: "google-360-photography",
    title: "4. Google Trusted 360° Virtual Tours & Street View Certified Agency",
    shortDescription: "Official Google Street View Certified 360° spherical photography connected with blue lines for instant profile trust and massive organic reach.",
    fullDescription: "Let millions of customers walk inside your hotel, showroom, hospital, restaurant, or campus directly from Google Maps & Search. We shoot HDR 360° spherical panoramas and connect them directly into Google Street View certified blue lines.",
    iconName: "Camera",
    tag: "Google Certified",
    badge: "Certified Street View",
    popular: true,
    features: [
      "Official Google Street View Blue Line Connected Mapping",
      "Instant Google Business Profile (GBP) Verification Assistance",
      "8K HDR Panoramic Spherical Photography",
      "One-Time Setup with Lifetime Free Hosting on Google Maps",
      "Pannellum Smooth 360° Interactive Web Embed Code",
      "Custom Hotspots for Menus, Rooms, Facilities & Booking CTAs"
    ],
    deliverables: [
      "Direct Google Maps & Street View Live Publishing",
      "High-Resolution Google Business Gallery Photos",
      "Custom Web Embed Code (iFrame & React compatible)",
      "Google Business Profile Ranking Booster Optimization"
    ]
  },
  {
    id: "local-seo",
    title: "5. Google Business Profile & Local SEO Domination",
    shortDescription: "Rank #1 in Google Maps 3-Pack and 'Near Me' local searches to capture customers searching for your products and services.",
    fullDescription: "When customers in Chandigarh, Amritsar, Ludhiana, Jalandhar, or anywhere in Punjab search for your services, guarantee your business appears at the very top of Google Maps with top review ranking strategies.",
    iconName: "Search",
    tag: "Organic Traffic",
    badge: "Top 3 Rank",
    features: [
      "Google Business Profile (GBP) Full Optimization & Category Auditing",
      "Google 3-Pack Local Map Ranking Blueprint",
      "Geo-Tagged Images & Localized Keyword Injection",
      "Local Business Citations & Directory Submissions",
      "Automated 5-Star Review Generation QR Codes"
    ],
    deliverables: [
      "Complete GBP Audit & Keyword Rank Tracking",
      "Monthly Local Search Visibility Reports",
      "Review Generation Standee QR Designs",
      "Local Schema & Citation Submissions"
    ]
  },
  {
    id: "all-in-one-digital-solutions",
    title: "6. All-in-One Digital Marketing Solutions & Consulting",
    shortDescription: "Complete full-stack growth: Graphic design, brand identity, WhatsApp CRM bots, funnel consulting, and marketing audits.",
    fullDescription: "From early brand identity to high-scale performance scaling, Smart View Labs provides end-to-end digital solutions for businesses in Punjab seeking explosive footfall and revenue growth.",
    iconName: "Sparkles",
    tag: "360° Full Suite",
    badge: "Full Service",
    features: [
      "Brand Identity, Logo Design & Visual Brand Guidelines",
      "WhatsApp Business CRM & Automated Chatbot Funnels",
      "Email Marketing & Customer Retention Workflows",
      "Competitor Market Research & Growth Blueprint",
      "Dedicated Account Manager & 24/7 Priority Support"
    ],
    deliverables: [
      "Brand Asset & Graphic Design Kit",
      "Automated CRM Lead Pipeline Setup",
      "Monthly Strategic Growth Consultations",
      "Dedicated Marketing Account Manager"
    ]
  }
];

export const PUNJAB_LOCATIONS: PunjabLocation[] = [
  {
    city: "Chandigarh",
    district: "Tricity (Chandigarh, Mohali, Panchkula)",
    tagline: "Headquarters & Digital Strategy Command Center",
    address: "Sector 17 Commercial Hub & IT Park, Chandigarh",
    phone: "7508094760",
    landmark: "Near Sector 17 Plaza & Rajiv Gandhi Chandigarh Technology Park",
    servicesAvailable: ["360° Google Virtual Tours", "Street View Blue Lines", "Social Media Performance Ads", "Web Development", "Local SEO & Content"],
    coverageRadius: "Entire Tricity, Zirakpur, Kharar, Dera Bassi",
    badge: "Main HQ",
    popularHub: true
  },
  {
    city: "Amritsar",
    district: "Majha Region",
    tagline: "Hospitality, Tourism & Retail 360° Specialists",
    address: "Ranjit Avenue, District Shopping Complex, Amritsar",
    phone: "7508094760",
    landmark: "Near Golden Temple Route & Ranjit Avenue Green Belt",
    servicesAvailable: ["Hotel & Restaurant 360° Tours", "Google Maps Street View", "Local Tourism Marketing", "Social Media Campaigns"],
    coverageRadius: "Amritsar, Tarn Taran, Gurdaspur, Batala",
    badge: "High Demand",
    popularHub: true
  },
  {
    city: "Ludhiana",
    district: "Malwa Industrial Hub",
    tagline: "Industrial, Showroom & Business Growth Center",
    address: "Ferozepur Road & Model Town, Ludhiana",
    phone: "7508094760",
    landmark: "Near Westend Mall & Ghumar Mandi",
    servicesAvailable: ["Industrial Plant 360° Tours", "Retail Showroom Blue Lines", "B2B Lead Generation Ads", "SEO & Web Portals"],
    coverageRadius: "Ludhiana, Khanna, Mandi Gobindgarh, Sahnewal",
    badge: "Active Projects",
    popularHub: true
  },
  {
    city: "Jalandhar",
    district: "Doaba Central",
    tagline: "Healthcare, Sports Industry & Education Media Hub",
    address: "Model Town & BMC Chowk, Jalandhar",
    phone: "7508094760",
    landmark: "Near Model Town Market & GT Road Corridor",
    servicesAvailable: ["Hospital & Clinic 360° Tours", "Educational Campus Virtual Tours", "Meta & Google Ads", "Google Business SEO"],
    coverageRadius: "Jalandhar, Phagwara, Hoshiarpur, Kapurthala",
    badge: "Fast Dispatch",
    popularHub: true
  },
  {
    city: "Bathinda",
    district: "Southern Punjab Hub",
    tagline: "Commercial Showrooms, Clinics & Local Retailing",
    address: "Mall Road & 100 Feet Road, Bathinda",
    phone: "7508094760",
    landmark: "Near Mittal Mall & Goniana Road",
    servicesAvailable: ["Retail Store 360° Photography", "Google Street View Publishing", "Local Business Advertising", "Website Creation"],
    coverageRadius: "Bathinda, Mansa, Muktsar, Abohar, Barnala",
    badge: "Regional Center",
    popularHub: true
  },
  {
    city: "Patiala",
    district: "Heritage & Educational Hub",
    tagline: "Cafes, Colleges, Showrooms & Boutiques",
    address: "Leela Bhawan & Urban Estate, Patiala",
    phone: "7508094760",
    landmark: "Near Leela Bhawan Market & Thapar University Zone",
    servicesAvailable: ["360° Virtual Tours", "Student Academy Lead Campaigns", "Reels & Photography", "Google Maps Ranking"],
    coverageRadius: "Patiala, Nabha, Rajpura, Sangrur",
    popularHub: false
  }
];

export const CAREER_PROGRAMS: CareerOpportunity[] = [
  {
    id: "internship-digital-marketing",
    title: "Digital Marketing & Performance Ads Intern",
    type: "Internship",
    category: "Social Media & Ads",
    targetAudience: "Students",
    location: "Chandigarh / Remote / Punjab Hybrid",
    stipendOrSalary: "₹8,000 - ₹15,000 / month + Performance Bonuses",
    duration: "3 to 6 Months (Convertible to Full-Time)",
    description: "Ideal for passionate college students and recent grads who want hands-on experience running live Meta (Instagram) and Google Ads campaigns for real businesses across Punjab.",
    responsibilities: [
      "Assist senior media buyers with campaign setup, ad copywriting, and A/B testing",
      "Learn and configure WhatsApp click-to-chat lead generation funnels",
      "Monitor daily ROAS, Cost Per Lead, and generate weekly client reports",
      "Collaborate with the creative team on video script ideas and viral hooks"
    ],
    perks: [
      "Official Internship Certificate & Letter of Recommendation",
      "Live budget handling experience on real brand accounts",
      "Direct mentorship from certified Google and Meta experts",
      "PPO (Pre-Placement Offer) opportunity for top performers"
    ],
    requirements: [
      "College students (BBA, B.Com, B.Tech, Mass Comm) or fresh graduates",
      "Basic familiarity with Instagram Ads Manager, Canva, and social media trends",
      "Eager mindset, disciplined work ethic, and good communication skills"
    ],
    openings: 5
  },
  {
    id: "trainee-360-photographer",
    title: "Google 360° Street View Photographer Trainee",
    type: "Trainee",
    category: "360° Photography",
    targetAudience: "Fresh Graduates",
    location: "Punjab On-Field (Chandigarh / Ludhiana / Amritsar / Jalandhar / Bathinda)",
    stipendOrSalary: "₹12,000 - ₹22,000 / month + Travel & Project Incentives",
    duration: "Full-Time Trainee (Immediate On-Site Training)",
    description: "Learn to operate professional 360° panoramic HDR camera equipment, shoot commercial properties, stitch spherical panoramas, and connect official Google Street View blue lines.",
    responsibilities: [
      "Accompany certified Google Trusted photographers to on-site shoots (Hotels, Showrooms, Hospitals)",
      "Learn spherical panorama stitching, HDR bracketing, and nadir patching workflows",
      "Publish and link panoramas on Google Street View and Google Maps portal",
      "Ensure customer satisfaction and shot quality compliance with Google Street View standards"
    ],
    perks: [
      "Hands-on training with professional 360° camera rigs & Insta360 / Ricoh / DSLR equipment",
      "Direct pathway to Google Trusted Photographer recognition",
      "Travel allowance, meal reimbursements, and per-project bonus payouts",
      "Rapid promotion to Regional Shoot Manager"
    ],
    requirements: [
      "Passionate about photography, technology, and Google Maps",
      "Must have a two-wheeler / willingness to travel locally across designated Punjab cities",
      "Basic understanding of lighting, composition, or photo editing is a plus"
    ],
    openings: 4
  },
  {
    id: "social-media-content-creator",
    title: "Reels & Video Content Creator (Student / Trainee)",
    type: "Internship",
    category: "SEO & Content",
    targetAudience: "Students",
    location: "Chandigarh Studio / On-Location Shoots",
    stipendOrSalary: "₹10,000 - ₹18,000 / month",
    duration: "3 to 6 Months",
    description: "Create engaging viral reels, aesthetic TikTok/Instagram short-form videos, and behind-the-scenes content for our restaurant, fitness, and retail clients across Punjab.",
    responsibilities: [
      "Shoot crisp mobile video footage (iPhone/Mirrorless) at client locations",
      "Edit trendy reels with CapCut, Premiere Pro, or VN using viral music and captions",
      "Research local Punjab business trends, memes, and engaging storytelling angles",
      "Coordinate with client staff for on-camera interviews and customer testimonials"
    ],
    perks: [
      "Free access to studio lights, wireless mics, and gimbal stabilization gear",
      "Portfolio building with recognizable Punjab retail and hospitality brands",
      "Flexible schedule accommodating student college timings"
    ],
    requirements: [
      "Proficient with CapCut / Adobe Premiere / After Effects / VN Editor",
      "Deep understanding of Instagram algorithm, hook mechanics, and pacing",
      "Send portfolio or Instagram profile links with your application"
    ],
    openings: 3
  },
  {
    id: "web-dev-intern",
    title: "Frontend Web Developer Intern (React / Next.js / Tailwind)",
    type: "Internship",
    category: "Web Development",
    targetAudience: "Students",
    location: "Remote / Hybrid (Chandigarh)",
    stipendOrSalary: "₹10,000 - ₹18,000 / month",
    duration: "6 Months",
    description: "Build ultra-fast, responsive landing pages, 360° virtual tour embeds, and interactive client portals using modern TypeScript, React, and Tailwind CSS.",
    responsibilities: [
      "Develop responsive UI components matching Figma mockups",
      "Integrate interactive 360° panorama libraries and Google Maps API widgets",
      "Optimize website performance to achieve 95+ Google PageSpeed scores",
      "Implement lead capture forms and direct WhatsApp/Email dispatch hooks"
    ],
    perks: [
      "Build real production web apps used by thousands of visitors",
      "Code reviews from senior fullstack architects",
      "Full-time engineering role offer upon graduation"
    ],
    requirements: [
      "Knowledge of HTML, CSS, JavaScript/TypeScript, React or Next.js",
      "Familiarity with Tailwind CSS and responsive design principles",
      "GitHub profile or live project demos"
    ],
    openings: 2
  },
  {
    id: "business-development-executive",
    title: "Business Development & Client Advisor (Full-Time / Trainee)",
    type: "Full-Time",
    category: "Business Development",
    targetAudience: "All Welcomed",
    location: "Chandigarh / Ludhiana / Amritsar / Jalandhar / Bathinda",
    stipendOrSalary: "₹18,000 - ₹35,000 / month + Uncapped High Commissions",
    duration: "Permanent Position",
    description: "Connect with local business owners (hotel managers, restaurant owners, doctors, showroom owners) and demonstrate the proven footfall benefits of Google 360° Street View and local performance marketing.",
    responsibilities: [
      "Conduct in-person and phone demos showing our 360° virtual tour portfolios to business owners",
      "Audit local business Google Profiles and propose customized growth packages",
      "Close service agreements and coordinate shoot dates with the photography team",
      "Build long-term relationships with retail associations and merchant chambers"
    ],
    perks: [
      "Highest commission structure in the digital agency sector (earn up to ₹60,000+/mo)",
      "Official company credentials, marketing collateral, and demonstration tablets",
      "Fast-track promotion to District Business Head"
    ],
    requirements: [
      "Strong spoken Punjabi, Hindi, and English communication skills",
      "Confident, friendly personality with a consultative sales approach",
      "Freshers with great speaking skills or experienced sales reps welcome"
    ],
    openings: 6
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "grand-heritage-resort",
    businessName: "Royal Heritage Hotel & Banquets",
    city: "Amritsar",
    category: "Hospitality & Resorts",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    results: {
      viewsGrowth: "+340%",
      footfallIncrease: "+85%",
      rankingJump: "#1 in Google Maps 'Resorts near me'"
    },
    quote: "After Smart View Labs published certified 360° blue lines on Google Street View, our destination wedding banquet queries doubled within 45 days. Customers could walk through every ballroom before visiting!",
    clientName: "Harpreet Singh Sandhu",
    clientRole: "Managing Director",
    servicesUsed: ["Google Trusted 360° Tour", "Street View Blue Lines", "Google Business SEO", "Meta Ads"]
  },
  {
    id: "urban-dine-cafe",
    businessName: "The Velvet Lounge & Cafe",
    city: "Chandigarh (Sector 26)",
    category: "Food & Beverage / Nightlife",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    results: {
      viewsGrowth: "+410%",
      footfallIncrease: "+120%",
      rankingJump: "#2 in Google Local 3-Pack"
    },
    quote: "Young crowds in Tricity love seeing the vibe before stepping in. The 360° virtual tour and the high-energy Instagram reels produced by Smart View Labs made our weekend tables completely booked out.",
    clientName: "Simran Kaur",
    clientRole: "Co-Founder & Head of Marketing",
    servicesUsed: ["360° Virtual Tour", "Instagram Reels Production", "WhatsApp Click-to-Chat Ads"]
  },
  {
    id: "apex-automotive-showroom",
    businessName: "Elite Multi-Brand Luxury Auto Showroom",
    city: "Ludhiana",
    category: "Automobile & Retail Showrooms",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
    results: {
      viewsGrowth: "+275%",
      footfallIncrease: "+65%",
      rankingJump: "#1 for Luxury Car Showrooms in Punjab"
    },
    quote: "Our buyers come from Bathinda, Jalandhar, and even Delhi. Having our full showroom on Google Street View gave out-of-town buyers 100% confidence to visit and close deals on luxury vehicles.",
    clientName: "Gurpreet Gill",
    clientRole: "General Sales Manager",
    servicesUsed: ["Google Street View 360° HDR", "Website Redesign", "Google Search Ads"]
  },
  {
    id: "care-multispecialty-hospital",
    businessName: "Sanjivani Multispecialty Hospital & Scan Center",
    city: "Jalandhar",
    category: "Healthcare & Diagnostics",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    results: {
      viewsGrowth: "+190%",
      footfallIncrease: "+50%",
      rankingJump: "Top 3 Local Map Pack"
    },
    quote: "Patients and families want to see clean, high-tech ICU and OPD facilities before admission. The Google virtual tour removed patient anxiety and established immediate credibility.",
    clientName: "Dr. Raman Sharma",
    clientRole: "Chief Medical Officer",
    servicesUsed: ["Google 360° Virtual Tour", "Local SEO Optimization", "Brand Video Commercial"]
  }
];

export const PANORAMA_SCENES: PanoramaScene[] = [
  {
    id: "luxury-hotel",
    name: "Luxury Banquet & Hotel Lobby",
    category: "Hospitality",
    location: "Amritsar, Punjab",
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    description: "Certified Google 360° HDR panorama showing the grand chandelier lobby, check-in lounge, and banquet corridor.",
    hotspots: [
      { x: 28, y: 45, title: "Executive Check-in Lounge", description: "High-comfort seating area with 24/7 concierge service." },
      { x: 55, y: 52, title: "Grand Crystal Chandelier", description: "Handcrafted 18ft Austrian crystal centerpiece." },
      { x: 78, y: 40, title: "Royal Banquet Entrance", description: "Capacity of 800+ guests for grand destination celebrations." }
    ]
  },
  {
    id: "modern-cafe",
    name: "Aesthetic Rooftop Cafe & Bistro",
    category: "Food & Beverage",
    location: "Chandigarh, Tricity",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85",
    description: "Interactive 360° walk-through of the dining area, artisan espresso bar, and scenic outdoor patio.",
    hotspots: [
      { x: 32, y: 48, title: "Artisan Coffee Bar", description: "Specialty brew bar featuring single-origin roasts." },
      { x: 62, y: 55, title: "Cozy Dining Booths", description: "Intimate private booths perfect for meetings and dates." },
      { x: 85, y: 42, title: "Sunset Skyline Deck", description: "Panoramic open-air view overlooking Shivalik hills." }
    ]
  },
  {
    id: "car-showroom",
    name: "Premium Automobile Experience Center",
    category: "Automotive Showroom",
    location: "Ludhiana, Punjab",
    imageUrl: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85",
    description: "Explore the showroom floor with 360° vantage points around flagship vehicles and the customer delivery bay.",
    hotspots: [
      { x: 25, y: 50, title: "Flagship Luxury Sedan", description: "Interactive 360° walkaround of flagship executive car." },
      { x: 50, y: 42, title: "VIP Delivery Lounge", description: "Ceremonial delivery bay with custom lighting and sound." },
      { x: 75, y: 54, title: "Custom Accessories Zone", description: "Genuine parts and styling customizer station." }
    ]
  },
  {
    id: "medical-clinic",
    name: "Modern Diagnostic & Wellness Clinic",
    category: "Healthcare",
    location: "Jalandhar & Bathinda",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=85",
    description: "Step inside state-of-the-art diagnostic suites, patient consultation rooms, and comfortable waiting lounges.",
    hotspots: [
      { x: 30, y: 46, title: "Advanced MRI & CT Suite", description: "Ultra-quiet, high-precision scanning machinery." },
      { x: 65, y: 52, title: "Consultation Chamber", description: "Private doctor consultation suite with digital records." }
    ]
  }
];

export const FAQS = [
  {
    question: "What is a Google Trusted 360° Virtual Tour, and how does it help my business?",
    answer: "A Google Trusted 360° Virtual Tour allows potential customers searching on Google Maps and Google Search to virtually 'walk inside' your business premises from their phone or computer. Certified 360° photos on your Google Business Profile increase customer trust, double booking interest, and significantly boost your ranking on local 'Near Me' search results."
  },
  {
    question: "What are the 'Street View Blue Lines' and why are they certified?",
    answer: "When you view Google Maps in Street View mode, roads have continuous blue lines that let you navigate. We shoot certified 360° spherical nodes and connect them directly into your business, creating an official blue line pathway extending from the street straight into your reception, showroom, or dining hall. This guarantees instant verification and maximum organic map prominence."
  },
  {
    question: "How long does a 360° photoshoot take, and does it disrupt my daily operations?",
    answer: "A standard photoshoot for a restaurant, showroom, or clinic takes only 45 to 90 minutes. Our team uses specialized HDR 360° camera rigs with minimal footprint. We can schedule the shoot during non-peak hours or before your opening time so your normal operations remain completely uninterrupted."
  },
  {
    question: "Is the 360° Virtual Tour a one-time fee or recurring subscription?",
    answer: "Google 360° Virtual Tours shot and published by Smart View Labs are a ONE-TIME investment! Once published on Google Maps and Google Street View, they remain permanently hosted by Google with zero monthly fees or hosting charges."
  },
  {
    question: "How do your social media campaigns and lead generation work?",
    answer: "We design hyper-targeted Meta (Instagram/Facebook) and Google Ads campaigns tailored specifically for your target audience in Punjab. For instance, if you are a clinic or restaurant, we direct prospective customers straight into your WhatsApp with a pre-filled booking inquiry or call button, delivering measurable daily leads and footfall."
  },
  {
    question: "How can students or fresh graduates apply for your internship & trainee programs?",
    answer: "We actively hire students, fresh graduates, and trainees across Punjab for digital marketing, Google 360° photography, reels creation, and web development. You can submit your application directly on our Careers portal on this website or email your resume/portfolio to smartviewlabs@gmail.com. We provide paid stipends, hands-on live client projects, and PPO opportunities!"
  },
  {
    question: "Which cities in Punjab do you service?",
    answer: "Smart View Labs has dedicated teams operating across Chandigarh (Tricity / Mohali / Panchkula), Amritsar, Ludhiana, Jalandhar, Bathinda, Patiala, and all surrounding Punjab districts. We can dispatch a certified photographer to your business location within 24–48 hours."
  }
];
