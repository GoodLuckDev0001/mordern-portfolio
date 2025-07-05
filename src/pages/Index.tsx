import { useState } from "react";
import { PortfolioCard } from "@/components/PortfolioCard";
import { CyclingHeadline } from "@/components/CyclingHeadline";
import { FollowerCounter } from "@/components/FollowerCounter";
import { AnimatedProgress } from "@/components/AnimatedProgress";
import { SocialIcons } from "@/components/SocialIcons";
import { ThumbsUp, Star, User, ExternalLink, X, MapPin, Calendar, Clock, Link2 } from "lucide-react";
import heroImage from "@/assets/williams-smith-headshot.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ProfileModal } from "@/components/ProfileModal";
import { motion } from 'framer-motion';

// Testimonials data
const testimonials = [
  {
    name: "Wender Roberto",
    title: "Founder of Farmineland",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    review: `I've hired Tadashi as a full-stack developer, and I can't overstate how impressed I am with his talent. He not only solves complex backend issues and handles Web3 contract integrations with remarkable speed, but also maintains a level of professionalism that's rare these days. His rates are fair, and he doesn't take advantage of unexpected challenges to increase the price, something many developers do. What impresses me the most is that Tadashi is doing the work of three people on his own, and delivering exceptional quality. He's definitely a great asset to our project.`,
    rating: 5
  },
  {
    name: "Jane Doe",
    title: "CTO of TechNova",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    review: `Tadashi's attention to detail and ability to deliver on time is unmatched. He communicates clearly and always goes the extra mile to ensure project success. Highly recommended!`,
    rating: 5
  },
  {
    name: "Alex Kim",
    title: "Product Manager at InnovateX",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    review: `Working with Tadashi was a pleasure. He quickly understood our requirements and delivered a robust solution. His technical skills and professionalism are top-notch.`,
    rating: 5
  }
];

// Projects data
const projects = [
  {
    image: "https://octodex.github.com/images/original.png",
    title: "Farmineland",
    subtitle: "Unity Game related web3 project",
    author: "Wender Roberto",
    authorTitle: "Founder of Farmineland",
    authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    description: `Project is Polygon based game project and Wender ask me to update the Frontend fully and build the landcoin system with admin feature. I developed the full frontend again using Next.js + TypeScript + Tailwind CSS. Also need to update backend for the additional Lancoins feature and build Smart Contract, integrate with Backend.`,
    github: "https://github.com/yourusername/farmineland"
  },
  {
    image: "https://octodex.github.com/images/dojocat.jpg",
    title: "CryptoDash",
    subtitle: "Crypto Dashboard Platform",
    author: "Jane Doe",
    authorTitle: "CTO of TechNova",
    authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    description: `Developed a real-time dashboard for tracking crypto assets, with advanced analytics and alerting. Built with React, TypeScript, and WebSocket integration for live updates.`,
    github: "https://github.com/yourusername/cryptodash"
  },
  {
    image: "https://octodex.github.com/images/daftpunktocat-guy.gif",
    title: "InnovateX Portal",
    subtitle: "Enterprise SaaS Portal",
    author: "Alex Kim",
    authorTitle: "Product Manager at InnovateX",
    authorAvatar: "https://randomuser.me/api/portraits/men/65.jpg",
    description: `Led the frontend and backend development for a SaaS portal, including authentication, billing, and user management. Used Next.js, Node.js, and AWS.`,
    github: "https://github.com/yourusername/innovatex-portal"
  }
];

// Skills data
const skills = [
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="Html" className="w-10 h-10" />, label: "Html", years: 7 },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-10 h-10" />, label: "CSS", years: 7 },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10" />, label: "JavaScript", years: 7 },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-10 h-10" />, label: "TypeScript", years: 6 },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="w-10 h-10" />, label: "PHP", years: 6 },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="NextJS" className="w-10 h-10" />, label: "NextJS", years: 5 },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="ReactJS" className="w-10 h-10" />, label: "ReactJS", years: 5 },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS" className="w-10 h-10" />, label: "NodeJS", years: 5 },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" className="w-10 h-10" />, label: "Angular", years: 5 },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-10 h-10" />, label: "Python", years: 4 },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" className="w-10 h-10" />, label: "AWS", years: 4 },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="GraphQL" className="w-10 h-10" />, label: "GraphQL", years: 4 },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" alt="Solidity" className="w-10 h-10" />, label: "Solidity", years: 4 }
];

const profileData = {
  avatar: heroImage,
  name: "Tadashi Amano",
  subtitle: "Root System | Perazam | Levenue",
  details: [
    { icon: <MapPin size={20} />, value: "New York, US" },
    { icon: <Calendar size={20} />, value: "16th, April, 1994" },
    { icon: <Clock size={20} />, value: "EST time zone" },
    { icon: <User size={20} />, value: "shinobi8894", link: "#" },
    { icon: <User size={20} />, value: "shinobi8894", link: "#" },
  ],
};

const Index = () => {
  const headlines = ["Full Stack Developer", "Frontend Developer", "Backend Developer"];
  const [testimonialOpen, setTestimonialOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [projectOpen, setProjectOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // Handlers for navigation
  const nextTestimonial = () => setTestimonialIndex((i) => (i + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const nextProject = () => setProjectIndex((i) => (i + 1) % projects.length);
  const prevProject = () => setProjectIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full" style={{ maxWidth: "66rem" }}>
        {/* Main Grid Layout */}
        <div className="grid grid-cols-2 grid-rows-8 md:grid-cols-[24%_26%_21%_24%] md:grid-rows-[27%_20%_19%_27%] gap-4 w-full h-auto md:w-full md:h-[669px] mx-auto">
          {/* Top left: Project Complete */}
          <PortfolioCard className="flex flex-col items-center justify-center text-center bg-[#181A20] text-white shadow-lg col-span-1 row-span-1 md:col-start-1 md:row-start-1 md:row-span-2" style={{ height: '100%', width: '100%' }} onClick={() => setProjectOpen(true)}>
            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}>
              <h3 className="text-md font-bold mb-3">Project Complete</h3>
              <AnimatedProgress value={100} size={90} color="#43A047" />
              <div className="mt-4">
                <div className="text-3xl font-extrabold text-white mb-1">58+</div>
                <p className="text-white text-sm">Completed 58+ Projects</p>
              </div>
            </motion.div>
          </PortfolioCard>
          {/* Top right: Testimonial */}
          <PortfolioCard className="flex flex-col items-center justify-center text-center bg-[#181A20] text-white shadow-lg col-span-1 row-span-1 md:col-start-4 md:row-start-1 md:row-span-2" style={{ height: '100%', width: '100%' }} onClick={() => setTestimonialOpen(true)}>
            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}>
              <h3 className="text-md font-bold mb-3">Testimonial</h3>
              <div className="mb-3">
                <img src="https://em-content.zobj.net/source/microsoft-teams/363/thumbs-up_1f44d.png" alt="thumbs up" className="w-16 h-16 mx-auto" />
              </div>
              <div className="text-3xl font-extrabold text-white mb-1">58+</div>
              <p className="text-white text-sm">Completed 58+ Projects</p>
            </motion.div>
          </PortfolioCard>
          <div className="flex bg-[#181A20] rounded-2xl relative justify-center col-span-2 row-span-2 md:col-start-2 md:row-start-2 md:col-span-2 md:row-span-2" style={{ height: '100%', width: '100%', alignItems: 'self-end' }}>
            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}>
              <img
                src={heroImage}
                style={{ position: "relative", zIndex: "2" }}
                alt="Tadashi Amano - Backend Developer"
              />
            </motion.div>
          </div>
          {/* Bottom left: Total Followers */}
          <PortfolioCard className="flex flex-col justify-center bg-[#181A20] text-white shadow-lg col-span-1 row-span-1 md:col-start-1 md:row-start-3 md:row-span-2" style={{ height: '100%', width: '100%' }}>
            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}>
              <h3 className="text-md font-bold mb-3">Total Followers</h3>
              <div className="mb-3 flex justify-center">
                <img src="https://em-content.zobj.net/source/microsoft-teams/363/heart-suit_2665-fe0f.png" alt="heart" className="w-16 h-16" />
              </div>
              <div className="text-3xl font-extrabold text-white mb-1">1117</div>
              <p className="text-white text-sm">1117 Users Followed</p>
            </motion.div>
          </PortfolioCard>
          {/* Bottom right: Contact Info */}
          <PortfolioCard className="flex flex-col justify-center bg-[#181A20] text-white shadow-lg col-span-1 row-span-1 md:col-start-4 md:row-start-3 md:row-span-2" style={{ height: '100%', width: '100%' }}>
            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}>
              <h3 className="text-md font-bold mb-4">Contact Info</h3>
              <SocialIcons />
            </motion.div>
          </PortfolioCard>

          {/* Center grid: 2x2 cards and photo */}
          {/* Top center left: Full Name */}
          <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <PortfolioCard className="flex md:grid-cols-2 flex-col justify-center bg-[#1976D2] text-white shadow-lg col-span-1 row-span-1 md:col-start-2 md:row-start-1" style={{ height: '100%', width: '100%' }} onClick={() => setProfileOpen(true)}>
              <h6 className="font-mont font-bold text-sm md:text-sm lg:text-lg mb-2" style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }}>Full Name</h6>
              <span className="block text-2xl font-extrabold leading-tight">Tadashi Amano</span>
            </PortfolioCard>
          </motion.div>
          {/* Top center right: Headline */}
          <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}>
            <PortfolioCard className="flex flex-col justify-center bg-[#7B1FA2] text-white shadow-lg col-span-1 row-span-1 md:col-start-3 md:row-start-1" style={{ height: '100%', width: '100%' }}>
              <h6 className="font-mont font-bold text-sm md:text-sm lg:text-lg mb-2" style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }}>Headline</h6>
              <div className="block text-2xl font-extrabold leading-tight">
                <CyclingHeadline headlines={headlines} />
              </div>
            </PortfolioCard>
          </motion.div>
          {/* Bottom center left: Experience */}
          <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}>
            <PortfolioCard className="flex flex-col justify-center bg-[#FFA726] text-white shadow-lg col-span-1 row-span-1 md:col-start-2 md:row-start-4" style={{ height: '100%', width: '100%' }}>
              <h6 className="font-mont font-bold text-sm md:text-sm lg:text-lg mb-2" style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }}>Experience</h6>
              <div className="flex flex-col w-full items-center justify-center flex-1" style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }}><h1 className="font-mont font-bold text-4xl md:text-5xl lg:text-6xl ">7<span className="text-xl">y</span></h1></div>
            </PortfolioCard>
          </motion.div>
          {/* Bottom center right: Skills */}
          <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}>
            <PortfolioCard className="flex flex-col justify-center bg-[#17c964] text-white shadow-lg col-span-1 row-span-1 md:col-start-3 md:row-start-4" style={{ height: '100%', width: '100%' }} onClick={() => setSkillsOpen(true)}>
              <h6 className="font-mont font-bold text-sm md:text-sm lg:text-lg mb-2" style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }}>Skills</h6>
              <div className="flex flex-col w-full items-center justify-center flex-1" style={{ translate: "none", rotate: "none", scale: "none", opacity: 1, transform: "translate(0px, 0px)" }}><h1 className="font-mont font-bold text-4xl md:text-5xl lg:text-6xl ">32</h1></div>
            </PortfolioCard>
          </motion.div>
          {/* Center photo: spans 2 cols and 2 rows */}

        </div>
      </div>

      {/* Testimonial Slider (Right) */}
      <Sheet open={testimonialOpen} onOpenChange={setTestimonialOpen}>
        <SheetContent side="right" className="h-full max-w-md w-full rounded-none flex flex-col justify-between bg-[#23272f] text-white shadow-2xl p-8">
          <div>
            <SheetHeader>
              <SheetTitle className="text-xl mb-2">Recent Testimonial</SheetTitle>
            </SheetHeader>
            <div className="flex items-center gap-3 mb-2">
              <img src={testimonials[testimonialIndex].avatar} alt={testimonials[testimonialIndex].name} className="w-10 h-10 rounded-full" />
              <div>
                <div className="font-semibold">{testimonials[testimonialIndex].name}</div>
                <div className="text-xs text-gray-400">{testimonials[testimonialIndex].title}</div>
              </div>
            </div>
            <div className="mb-2">
              <div className="font-bold mb-1">Review</div>
              <div className="text-sm text-gray-200 mb-2">{testimonials[testimonialIndex].review}</div>
              <div className="flex gap-1">
                {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-gray-700 pt-4">
            <button className="text-red-400 hover:underline" onClick={() => setTestimonialOpen(false)}>Close</button>
            <div className="flex gap-2">
              <button className="px-4 py-1 rounded bg-gray-700 hover:bg-gray-600" onClick={prevTestimonial}>Previous</button>
              <button className="px-4 py-1 rounded bg-blue-700 hover:bg-blue-600" onClick={nextTestimonial}>Next</button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Project Slider (Left) */}
      <Sheet open={projectOpen} onOpenChange={setProjectOpen}>
        <SheetContent side="left" className="h-full max-w-md w-full rounded-none flex flex-col justify-between bg-[#23272f] text-white shadow-2xl p-8">
          <div>
            <SheetHeader>
              <SheetTitle className="text-xl mb-2">Recent Projects</SheetTitle>
            </SheetHeader>
            <a href={projects[projectIndex].github} target="_blank" rel="noopener noreferrer">
              <img src={projects[projectIndex].image} alt={projects[projectIndex].title} className="w-full h-40 object-cover rounded mb-3 transition-transform hover:scale-105" />
            </a>
            <div className="flex justify-end mb-2">
              <a href={projects[projectIndex].github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1 bg-gray-800 rounded hover:bg-gray-700">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" /></svg>
                <span className="text-xs font-semibold">GitHub</span>
              </a>
            </div>
            <div className="font-bold text-lg mb-1">{projects[projectIndex].title}</div>
            <div className="text-xs text-gray-400 mb-2">{projects[projectIndex].subtitle}</div>
            <div className="flex items-center gap-2 mb-2">
              <img src={projects[projectIndex].authorAvatar} alt={projects[projectIndex].author} className="w-8 h-8 rounded-full" />
              <div>
                <div className="font-semibold text-sm">{projects[projectIndex].author}</div>
                <div className="text-xs text-gray-400">{projects[projectIndex].authorTitle}</div>
              </div>
            </div>
            <div className="mb-2">
              <div className="font-bold mb-1">About the project</div>
              <div className="text-sm text-gray-200">{projects[projectIndex].description}</div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4 border-t border-gray-700 pt-4">
            <button className="text-red-400 hover:underline" onClick={() => setProjectOpen(false)}>Close</button>
            <div className="flex gap-2">
              <button className="px-4 py-1 rounded bg-gray-700 hover:bg-gray-600" onClick={prevProject}>Previous</button>
              <button className="px-4 py-1 rounded bg-blue-700 hover:bg-blue-600" onClick={nextProject}>Next</button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Skills Modal (Center) */}
      <Dialog open={skillsOpen} onOpenChange={setSkillsOpen}>
        <DialogContent className="flex flex-col items-center justify-center max-w-lg w-full">
          <DialogHeader>
            <DialogTitle className="text-xl mb-4">Skill set</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-4 gap-6 mb-4">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex flex-col items-center relative">
                <span className="absolute top-0 right-0 text-xs text-pink-400 font-bold bg-black bg-opacity-70 rounded px-1 z-10" style={{ transform: 'translate(40%, -40%)' }}>{skill.years}y</span>
                {skill.icon}
                <span className="mt-2 text-sm font-semibold text-white">{skill.label}</span>
              </div>
            ))}
          </div>
          <button className="text-red-400 hover:underline mt-2" onClick={() => setSkillsOpen(false)}>Close</button>
        </DialogContent>
      </Dialog>

      <ProfileModal open={profileOpen} onClose={() => setProfileOpen(false)} profile={profileData} />
    </div>
  );
};

export default Index;
