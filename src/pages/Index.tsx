import { PortfolioCard } from "@/components/PortfolioCard";
import { CyclingHeadline } from "@/components/CyclingHeadline";
import { FollowerCounter } from "@/components/FollowerCounter";
import { AnimatedProgress } from "@/components/AnimatedProgress";
import { SocialIcons } from "@/components/SocialIcons";
import { ThumbsUp } from "lucide-react";
import heroImage from "@/assets/williams-smith-headshot.jpg";

const Index = () => {
  const headlines = ["Full Stack Developer", "Frontend Developer", "Backend Developer"];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[600px]">
          
          {/* Project Complete - Top Left */}
          <PortfolioCard className="col-span-1 row-span-1 flex flex-col items-center justify-center text-center">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Project Complete</h3>
            <AnimatedProgress value={100} size={100} />
            <div className="mt-4">
              <div className="text-2xl font-bold text-white mb-1">58+</div>
              <p className="text-muted-foreground text-xs">Completed 58+ Projects</p>
            </div>
          </PortfolioCard>

          {/* Full Name Card - Top Center */}
          <PortfolioCard gradient="blue" className="col-span-1 row-span-1 flex flex-col justify-center">
            <p className="text-xs text-blue-100 mb-1">Full Name</p>
            <h2 className="text-xl font-bold text-white">Williams Smith</h2>
          </PortfolioCard>

          {/* Headline Card - Top Center Right */}
          <PortfolioCard gradient="purple" className="col-span-1 row-span-1 flex flex-col justify-center">
            <p className="text-xs text-purple-100 mb-1">Headline</p>
            <CyclingHeadline headlines={headlines} />
          </PortfolioCard>

          {/* Testimonial - Top Right */}
          <PortfolioCard className="col-span-1 row-span-1 flex flex-col items-center justify-center text-center">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Testimonial</h3>
            <div className="mb-3">
              <ThumbsUp className="w-12 h-12 text-orange fill-orange" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">58+</div>
            <p className="text-muted-foreground text-xs">Completed 58+ Projects</p>
          </PortfolioCard>

          {/* Total Followers - Bottom Left */}
          <PortfolioCard className="col-span-1 row-span-1 flex flex-col justify-center">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Total Followers</h3>
            <FollowerCounter />
          </PortfolioCard>

          {/* Profile Image - Center */}
          <div className="col-span-2 row-span-2 flex items-center justify-center">
            <div className="relative">
              <img
                src={heroImage}
                alt="Williams Smith - Full Stack Developer"
                className="w-64 h-64 object-cover rounded-2xl shadow-card"
              />
            </div>
          </div>

          {/* Contact Info - Bottom Right */}
          <PortfolioCard className="col-span-1 row-span-1 flex flex-col justify-center">
            <h3 className="text-sm font-medium text-muted-foreground mb-4">Contact Info</h3>
            <SocialIcons />
          </PortfolioCard>

          {/* Experience Card - Bottom Left */}
          <PortfolioCard gradient="orange" className="col-span-1 row-span-1 flex flex-col justify-center">
            <p className="text-xs text-orange-100 mb-1">Experience</p>
            <div className="text-4xl font-bold text-white">7<span className="text-xl">y</span></div>
          </PortfolioCard>

          {/* Skills Card - Bottom Center */}
          <PortfolioCard gradient="green" className="col-span-1 row-span-1 flex flex-col justify-center">
            <p className="text-xs text-green-100 mb-1">Skills</p>
            <div className="text-4xl font-bold text-white">30</div>
            <p className="text-green-100 text-xs mt-1">Programming Languages</p>
          </PortfolioCard>

        </div>
      </div>
    </div>
  );
};

export default Index;
