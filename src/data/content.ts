// PEC Media Production - Content Data

export const businessInfo = {
  name: "PEC Media Production",
  logo: "/logo/PEC.png",
  tagline: "Creative Media & Digital Solutions Agency",
  description: "A creative media agency dedicated to delivering high-quality visual and digital solutions for individuals, businesses, and organizations.",
  clientName: "Edemu Precious Confidence",
  contactPerson: "Edemu Precious Confidence",
  email: "edemu34@gmail.com",
  phone: "08133678261",
  phoneHref: "+2348133678261",
  whatsappUrl: "https://wa.me/2348133678261",
  address: "18, Chief Nnadokoye Street, Ajao Estate",
  youtubePlaylist: "https://www.youtube.com/playlist?list=PLmR5CYd4sL43K-ornduhRyAIVY_7xcREw",
  graphicsDrive: "https://drive.google.com/drive/folders/1vGiPgj6mtBaZkoGKZS6G4T5RWusuxun0?usp=drive_link",
  socialMedia: {
    youtube: "https://www.youtube.com/playlist?list=PLmR5CYd4sL43K-ornduhRyAIVY_7xcREw",
    instagram: "https://www.instagram.com/precious_edemu?igsh=MTFsYWlnMWNxNHJreA%3D%3D&utm_source=qr",
    facebook: "https://www.facebook.com/share/18qjxAcV5N/?mibextid=wwXIfr",
    tiktok: "https://www.tiktok.com/@precious_edemu?_r=1&_t=ZS-97fblKXta1Y",
    linkedin: "https://www.linkedin.com/in/edemu-precious-b-sc-86a06619b"
  }
};

export const services = [
  {
    id: "video-production",
    title: "Video Production",
    shortDescription: "End-to-end video production services from concept to final delivery.",
    fullDescription: "Professional end-to-end video production services including concept development, scripting, filming, directing, and post-production for corporate, commercial, promotional, and social media content. We transform your vision into compelling visual stories that engage and convert.",
    icon: "Video",
    features: ["Concept Development", "Scriptwriting", "Filming & Directing", "Post-Production", "Corporate Videos", "Commercial Content"],
    tools: ["Premiere Pro", "CapCut"]
  },
  {
    id: "video-editing",
    title: "Video Editing",
    shortDescription: "Professional editing that transforms raw footage into polished content.",
    fullDescription: "Professional editing services that transform raw footage into polished, engaging, and high-quality visual content tailored to client objectives. Our editing process ensures seamless transitions, perfect pacing, and visual consistency.",
    icon: "Scissors",
    features: ["Raw Footage Processing", "Timeline Editing", "Audio Syncing", "Transition Effects", "Format Optimization", "Platform-Specific Edits"],
    tools: ["Premiere Pro", "CapCut"]
  },
  {
    id: "ai-video-editing",
    title: "AI-Powered Video Editing",
    shortDescription: "Cutting-edge AI tools for enhanced video quality and efficiency.",
    fullDescription: "Utilization of advanced artificial intelligence tools to enhance video quality, automate editing processes, generate visual effects, improve workflow efficiency, and create innovative video content that stands out in today's competitive landscape.",
    icon: "Cpu",
    features: ["AI-Enhanced Quality", "Automated Editing", "Smart Effects Generation", "Workflow Optimization", "Content Analysis", "Innovative Visuals"],
    tools: ["AI Tools", "Premiere Pro"]
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics",
    shortDescription: "Engaging animations and visual effects that bring stories to life.",
    fullDescription: "Design and animation of engaging motion graphics, animated titles, explainer videos, logo animations, lower thirds, and visual effects that enhance storytelling and audience engagement across all platforms.",
    icon: "Sparkles",
    features: ["Animated Titles", "Logo Animations", "Explainer Videos", "Lower Thirds", "Visual Effects", "Kinetic Typography"],
    tools: ["After Effects", "Premiere Pro"]
  },
  {
    id: "colour-grading",
    title: "Colour Grading",
    shortDescription: "Professional color correction for cinematic visual consistency.",
    fullDescription: "Professional colour correction and colour grading services to improve visual consistency, enhance mood, strengthen brand identity, and achieve a cinematic look across all video productions.",
    icon: "Palette",
    features: ["Color Correction", "Cinematic Grading", "Mood Enhancement", "Brand Color Matching", "Visual Consistency", "HDR Processing"],
    tools: ["DaVinci Resolve", "Premiere Pro"]
  },
  {
    id: "photography",
    title: "Photography",
    shortDescription: "Professional photography for events, products, and brands.",
    fullDescription: "Professional photography services covering corporate events, portraits, product photography, brand campaigns, lifestyle shoots, and special occasions. We capture moments that tell your unique story.",
    icon: "Camera",
    features: ["Corporate Events", "Portrait Sessions", "Product Photography", "Brand Campaigns", "Lifestyle Shoots", "Special Occasions"],
    tools: ["Photoshop", "Lightroom"]
  },
  {
    id: "graphics-design",
    title: "Graphics Design",
    shortDescription: "Visually compelling designs for branding and marketing.",
    fullDescription: "Creation of visually compelling designs for branding, marketing, advertising, social media, print materials, and corporate communications that capture attention and communicate effectively.",
    icon: "PenTool",
    features: ["Brand Identity", "Marketing Materials", "Social Media Graphics", "Print Design", "Advertising Creative", "Corporate Communications"],
    tools: ["Photoshop", "Canva", "Illustrator"]
  },
  {
    id: "cinematography",
    title: "Cinematography",
    shortDescription: "High-quality cinematic footage for films and digital media.",
    fullDescription: "Professional camera operation and visual storytelling services, delivering high-quality cinematic footage for films, documentaries, commercials, events, and digital media projects.",
    icon: "Film",
    features: ["Film Production", "Documentary", "Commercial Shoots", "Event Coverage", "Digital Media", "Visual Storytelling"],
    tools: ["Professional Cameras", "Gimbals", "Lighting Kits"]
  },
  {
    id: "cv-services",
    title: "CV Creation & Revamp",
    shortDescription: "Professional CV development to showcase your qualifications.",
    fullDescription: "Professional development, redesign, and optimization of Curriculum Vitae (CVs) to effectively showcase qualifications, skills, achievements, and career experiences. Creating new CVs from scratch and enhancing existing ones.",
    icon: "FileText",
    features: ["CV Writing", "Resume Design", "LinkedIn Optimization", "Cover Letters", "Professional Branding", "ATS Optimization"],
    tools: ["Canva", "Adobe InDesign"]
  },
  {
    id: "consultancy",
    title: "Creative Media Consultancy",
    shortDescription: "Strategic guidance for media production and branding.",
    fullDescription: "Strategic guidance on media production, visual branding, content creation, and digital communication to help individuals and organizations achieve their communication and marketing goals.",
    icon: "Lightbulb",
    features: ["Media Strategy", "Brand Consulting", "Content Planning", "Digital Communication", "Campaign Planning", "Training & Workshops"],
    tools: ["Analytics Tools", "Project Management"]
  }
];

export const tools = [
  { name: "CapCut", category: "Video Editing", icon: "Scissors" },
  { name: "Premiere Pro", category: "Video Editing", icon: "Video" },
  { name: "Photoshop", category: "Design", icon: "Image" },
  { name: "Canva", category: "Design", icon: "Palette" }
];

export const targetAudience = [
  "Corporate organizations",
  "Small and medium-sized businesses (SMEs)",
  "Entrepreneurs and startups",
  "Personal brands and content creators",
  "Job seekers and professionals",
  "Event organizers",
  "Marketing and advertising agencies"
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp Nigeria",
    content: "PEC Media Production transformed our brand story into a compelling video that increased our engagement by 300%. Their attention to detail and creative vision exceeded our expectations.",
    rating: 5,
    service: "Video Production"
  },
  {
    id: 2,
    name: "Michael Adeyemi",
    role: "CEO",
    company: "StartUp Hub",
    content: "The team at PEC delivered exceptional work on our product launch video. Professional, creative, and always on time. Highly recommended for any media production needs.",
    rating: 5,
    service: "Video Production"
  },
  {
    id: 3,
    name: "Amanda Okonkwo",
    role: "HR Manager",
    company: "Global Solutions Ltd",
    content: "The CV revamp service completely transformed my professional profile. I started getting interview calls within weeks. Their understanding of industry standards is impressive.",
    rating: 5,
    service: "CV Creation & Revamp"
  },
  {
    id: 4,
    name: "David Chen",
    role: "Event Coordinator",
    company: "LuxEvents",
    content: "PEC Media captured our corporate event beautifully. The photos and videos were stunning, and they managed to capture every important moment without being intrusive.",
    rating: 5,
    service: "Photography"
  }
];

export const portfolioProjects = [
  {
    id: "corporate-video-techcorp",
    title: "TechCorp Corporate Overview",
    category: "Video Production",
    description: "A comprehensive corporate video showcasing TechCorp's innovative solutions and company culture.",
    challenge: "Needed to communicate complex technical services in an engaging, accessible way.",
    solution: "Created a dynamic corporate video combining interviews, B-roll footage, and motion graphics to simplify technical concepts.",
    results: "300% increase in website engagement and 50% boost in lead generation.",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    videoUrl: "https://www.youtube.com/playlist?list=PLmR5CYd4sL43K-ornduhRyAIVY_7xcREw",
    technologies: ["Premiere Pro", "After Effects"]
  },
  {
    id: "product-launch",
    title: "Product Launch Campaign",
    category: "Motion Graphics",
    description: "High-energy product launch video with dynamic motion graphics and visual effects.",
    challenge: "Needed to create excitement and drive pre-orders for a new tech product.",
    solution: "Developed a fast-paced, visually striking video with bold typography and energetic motion graphics.",
    results: "Achieved 10,000 pre-orders within the first week of launch.",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
    videoUrl: "https://www.youtube.com/playlist?list=PLmR5CYd4sL43K-ornduhRyAIVY_7xcREw",
    technologies: ["After Effects", "Cinema 4D"]
  },
  {
    id: "brand-identity",
    title: "Brand Identity System",
    category: "Graphics Design",
    description: "Complete brand identity including logo, color palette, and marketing materials.",
    challenge: "Startup needed a cohesive brand identity to compete in a crowded market.",
    solution: "Created a modern, memorable brand system that communicated innovation and reliability.",
    results: "Successful brand launch with positive market reception and increased brand recognition.",
    thumbnail: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
    imageUrl: "https://drive.google.com/drive/folders/1vGiPgj6mtBaZkoGKZS6G4T5RWusuxun0?usp=drive_link",
    technologies: ["Photoshop", "Illustrator"]
  },
  {
    id: "corporate-event",
    title: "Annual Gala Documentation",
    category: "Photography",
    description: "Professional photography coverage of a corporate gala event.",
    challenge: "Capture the elegance and key moments of a high-profile corporate event.",
    solution: "Provided comprehensive coverage with a mix of candid and staged shots, ensuring no important moment was missed.",
    results: "Client received 500+ edited photos within 48 hours, used for marketing and internal communications.",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    imageUrl: "https://drive.google.com/drive/folders/1vGiPgj6mtBaZkoGKZS6G4T5RWusuxun0?usp=drive_link",
    technologies: ["Photoshop", "Lightroom"]
  },
  {
    id: "color-grading",
    title: "Documentary Color Grade",
    category: "Colour Grading",
    description: "Cinematic color grading for an independent documentary film.",
    challenge: "Different footage sources needed visual consistency and emotional tone enhancement.",
    solution: "Applied custom LUTs and detailed color correction to achieve a cohesive, cinematic look.",
    results: "Documentary accepted into three international film festivals.",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    videoUrl: "https://www.youtube.com/playlist?list=PLmR5CYd4sL43K-ornduhRyAIVY_7xcREw",
    technologies: ["DaVinci Resolve"]
  },
  {
    id: "ai-enhanced",
    title: "AI-Enhanced Marketing Video",
    category: "AI-Powered Video Editing",
    description: "Marketing video enhanced with AI tools for upscaling and automated editing.",
    challenge: "Legacy footage needed quality enhancement and modern editing techniques.",
    solution: "Utilized AI upscaling, smart cuts, and automated color matching to modernize old footage.",
    results: "Reduced editing time by 60% while significantly improving video quality.",
    thumbnail: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80",
    videoUrl: "https://www.youtube.com/playlist?list=PLmR5CYd4sL43K-ornduhRyAIVY_7xcREw",
    technologies: ["AI Tools", "Premiere Pro"]
  }
];

export const blogPosts = [
  {
    id: "video-trends-2024",
    title: "Video Production Trends Shaping 2024",
    excerpt: "Discover the latest trends in video production that are transforming how brands connect with their audiences.",
    content: "Full article content here...",
    date: "2024-01-15",
    author: "Edemu Precious",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    readTime: "5 min read"
  },
  {
    id: "ai-video-editing",
    title: "How AI is Revolutionizing Video Editing",
    excerpt: "Explore how artificial intelligence is making video editing faster, smarter, and more accessible than ever before.",
    content: "Full article content here...",
    date: "2024-01-10",
    author: "Edemu Precious",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    readTime: "7 min read"
  },
  {
    id: "brand-storytelling",
    title: "The Art of Brand Storytelling Through Video",
    excerpt: "Learn how to craft compelling brand narratives that resonate with your target audience and drive engagement.",
    content: "Full article content here...",
    date: "2024-01-05",
    author: "Edemu Precious",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    readTime: "6 min read"
  }
];

export const brandPersonality = [
  "Professional",
  "Creative", 
  "Innovative",
  "Reliable",
  "Results-Driven",
  "Client-Focused"
];

export const whyChooseUs = [
  {
    title: "Expertise",
    description: "Years of experience in media production with a portfolio spanning multiple industries.",
    icon: "Award"
  },
  {
    title: "Quality",
    description: "Commitment to delivering high-quality outputs that exceed client expectations.",
    icon: "Star"
  },
  {
    title: "Innovation",
    description: "Embracing cutting-edge technologies including AI-powered solutions for better results.",
    icon: "Zap"
  },
  {
    title: "Reliability",
    description: "Consistent delivery on time and within budget, every single time.",
    icon: "Shield"
  }
];
