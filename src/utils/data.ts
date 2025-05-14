import { Project, Service, Testimonial, BlogPost, TeamMember } from './types';
import { Briefcase, Code, PenTool, BarChart3, Smartphone, Globe } from 'lucide-react';

export const projects: Project[] = [
  {
    id: 1,
    title: "Azure Wellness Spa",
    category: "Health & Wellness",
    description: "A serene and elegant website for a luxury spa that focuses on the user experience with smooth animations and an easy-to-use booking system.",
    image: "https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    clientName: "Azure Wellness",
    technology: ["React", "TailwindCSS", "NodeJS", "MongoDB"],
    link: "#",
    results: {
      bookings: "+150%",
      revenue: "+85%",
      engagement: "4.5min avg"
    }
  },
  {
    id: 2,
    title: "Culinary Delights",
    category: "Food & Restaurant",
    description: "An immersive restaurant website with dynamic menu ordering capabilities and reservation system that boosted online orders by 45%.",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    clientName: "Culinary Delights Inc.",
    technology: ["NextJS", "TailwindCSS", "Stripe", "Firebase"],
    link: "#",
    results: {
      orders: "+45%",
      revenue: "+60%",
      retention: "+35%"
    }
  },
  {
    id: 3,
    title: "EcoTech Solutions",
    category: "Technology",
    description: "A modern tech company website showcasing their sustainable solutions, featuring interactive product demonstrations and case studies.",
    image: "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    clientName: "EcoTech Inc.",
    technology: ["React", "TailwindCSS", "ThreeJS", "Supabase"],
    link: "#",
    results: {
      leads: "+120%",
      conversion: "+75%",
      engagement: "5.2min avg"
    }
  }
];

export const services: Service[] = [
  {
    id: 1,
    title: "Web Design",
    description: "Beautiful, modern websites that attract and engage your target audience.",
    icon: "PenTool",
    features: [
      "Custom responsive design",
      "UX/UI optimization",
      "Brand integration",
      "Mobile-first approach",
      "Interactive prototypes"
    ],
    packages: [
      {
        name: "Starter",
        price: "£495",
        features: [
          "3-5 pages",
          "Mobile responsive",
          "Basic SEO",
          "Contact form",
          "Social media integration"
        ]
      },
      {
        name: "Business",
        price: "£995",
        features: [
          "5-8 pages",
          "Advanced animations",
          "Enhanced SEO",
          "Blog integration",
          "Newsletter signup",
          "Live chat integration"
        ]
      },
      {
        name: "Pro",
        price: "£1,495",
        features: [
          "10+ pages",
          "Custom animations",
          "Advanced SEO",
          "E-commerce integration",
          "Custom CMS",
          "Priority support"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Web Development",
    description: "Robust, scalable websites and web applications built with modern technologies.",
    icon: "Code",
    features: [
      "Front-end development",
      "Back-end integration",
      "CMS implementation",
      "E-commerce solutions",
      "Performance optimization"
    ],
    price: "Starting at $5,000"
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Strategic marketing solutions to drive traffic and increase conversions.",
    icon: "BarChart3",
    features: [
      "SEO optimization",
      "Content strategy",
      "Social media marketing",
      "Email campaigns",
      "Analytics & reporting"
    ],
    price: "Starting at $1,500/month"
  },
  {
    id: 4,
    title: "Brand Strategy",
    description: "Comprehensive brand development to establish a strong market presence.",
    icon: "Briefcase",
    features: [
      "Brand identity development",
      "Logo design",
      "Style guides",
      "Market positioning",
      "Voice & messaging"
    ],
    price: "Starting at $3,000"
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: "Smartphone",
    features: [
      "iOS & Android development",
      "React Native solutions",
      "App Store optimization",
      "Maintenance & updates",
      "API integration"
    ],
    price: "Starting at $8,000"
  },
  {
    id: 6,
    title: "E-commerce Solutions",
    description: "Complete online store implementation with secure payment processing.",
    icon: "Globe",
    features: [
      "Shopping cart integration",
      "Payment gateway setup",
      "Inventory management",
      "Product showcase",
      "Order fulfillment"
    ],
    price: "Starting at $6,000"
  }
];

export const companyInfo = {
  name: "BrightSites Digital",
  tagline: "Designing Brighter Digital Futures",
  founded: 2020,
  location: {
    address: "123 Digital Hub",
    city: "Manchester",
    postcode: "M1 1AB",
    country: "United Kingdom",
    coordinates: {
      lat: 53.4808,
      lng: -2.2426
    }
  },
  contact: {
    email: "hello@brightsitesdigital.com",
    phone: "+44 (0) 161 123 4567",
    social: {
      twitter: "https://twitter.com/brightsitesdigital",
      linkedin: "https://linkedin.com/company/brightsitesdigital",
      instagram: "https://instagram.com/brightsitesdigital"
    }
  },
  mission: "At BrightSites Digital, we're on a mission to transform businesses through exceptional digital experiences. We combine creative design with technical excellence to deliver websites that not only look stunning but drive real business results.",
  values: [
    {
      title: "Innovation",
      description: "We stay ahead of digital trends to deliver cutting-edge solutions."
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in every project we undertake."
    },
    {
      title: "Partnership",
      description: "We work closely with our clients to ensure their vision becomes reality."
    }
  ]
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO",
    company: "Azure Wellness",
    testimonial: "BrightSites Digital transformed our online presence completely. Their attention to detail and focus on user experience resulted in a website that truly represents our brand and has significantly increased our bookings.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    position: "Marketing Director",
    company: "Culinary Delights",
    testimonial: "Working with BrightSites was an absolute pleasure. They understood our vision and created a website that not only looks stunning but also performs exceptionally well. Our online orders have increased by 45% since launch!",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Emily Chen",
    position: "Founder",
    company: "EcoTech Solutions",
    testimonial: "The team at BrightSites Digital exceeded our expectations at every turn. They delivered a website that perfectly communicates our mission and values, with interactive elements that showcase our products effectively.",
    image: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Operations Manager",
    company: "Mountain Explorer",
    testimonial: "BrightSites transformed our outdated website into an immersive platform that truly captures the spirit of adventure. The booking system they implemented is intuitive and has streamlined our entire operation.",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Web Design Trends to Watch in 2025",
    excerpt: "Explore the cutting-edge design trends shaping the digital landscape in 2025 and how to implement them in your projects.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl sit amet nunc.",
    author: "Alex Martinez",
    date: "June 15, 2025",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Design"
  },
  {
    id: 2,
    title: "Why Performance Matters: Optimizing Your Website Speed",
    excerpt: "Learn how website speed impacts user experience, SEO rankings, and conversion rates—and what you can do about it.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl sit amet nunc.",
    author: "Taylor Wong",
    date: "May 22, 2025",
    image: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Development"
  },
  {
    id: 3,
    title: "The ROI of Great UX: Why User Experience Is Worth Investing In",
    excerpt: "Discover how investing in user experience design can dramatically improve your bottom line and customer satisfaction.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl sit amet nunc. Sed euismod, nunc sit amet ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nunc nisl sit amet nunc.",
    author: "Jamie Rivera",
    date: "April 10, 2025",
    image: "https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "UX Design"
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Jessica Thompson",
    position: "Founder & Creative Director",
    bio: "With over 15 years of experience in design and brand strategy, Jessica leads our creative vision with passion and precision.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    }
  },
  {
    id: 2,
    name: "Mark Rodriguez",
    position: "Lead Developer",
    bio: "Mark brings technical excellence to every project, specializing in creating robust, scalable web applications with modern technologies.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: 3,
    name: "Sophia Chen",
    position: "UX/UI Designer",
    bio: "Sophia creates intuitive, beautiful interfaces that delight users and drive conversions, with a keen eye for detail and usability.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 4,
    name: "James Wilson",
    position: "Digital Marketing Strategist",
    bio: "James crafts data-driven marketing strategies that amplify brand presence and drive meaningful results for our clients.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  }
];

export const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'PenTool':
      return PenTool;
    case 'Code':
      return Code;
    case 'BarChart3':
      return BarChart3;
    case 'Briefcase':
      return Briefcase;
    case 'Smartphone':
      return Smartphone;
    case 'Globe':
      return Globe;
    default:
      return PenTool;
  }
};