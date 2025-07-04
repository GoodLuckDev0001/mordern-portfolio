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
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
          
          {/* Project Complete - Top Left */}
          <PortfolioCard className="flex flex-col items-center justify-center text-center">
            <h3 className="text-lg font-semibold text-muted-foreground mb-4">Project Complete</h3>
            <AnimatedProgress value={100} />
            <div className="mt-6">
              <div className="text-4xl font-bold text-white mb-2">58+</div>
              <p className="text-muted-foreground text-sm">Completed 58+ Projects</p>
            </div>
          </PortfolioCard>

          {/* Full Name Card - Top Center */}
          <PortfolioCard gradient="blue" className="flex flex-col justify-center">
            <p className="text-sm text-blue-100 mb-2">Full Name</p>
            <h2 className="text-3xl font-bold text-white">Williams Smith</h2>
          </PortfolioCard>

          {/* Headline Card - Top Center Right */}
          <PortfolioCard gradient="purple" className="flex flex-col justify-center">
            <p className="text-sm text-purple-100 mb-2">Headline</p>
            <CyclingHeadline headlines={headlines} />
          </PortfolioCard>

          {/* Testimonial - Top Right */}
          <PortfolioCard className="flex flex-col items-center justify-center text-center">
            <h3 className="text-lg font-semibold text-muted-foreground mb-4">Testimonial</h3>
            <div className="mb-4">
              <ThumbsUp className="w-16 h-16 text-orange fill-orange" />
            </div>
            <div className="text-4xl font-bold text-white mb-2">58+</div>
            <p className="text-muted-foreground text-sm">Completed 58+ Projects</p>
          </PortfolioCard>

          {/* Total Followers - Bottom Left */}
          <PortfolioCard className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-muted-foreground mb-4">Total Followers</h3>
            <FollowerCounter />
          </PortfolioCard>

          {/* Profile Image - Center */}
          <div className="md:col-span-2 flex items-center justify-center">
            <div className="relative">
              <img
                src={heroImage}
                alt="Williams Smith - Full Stack Developer"
                className="w-80 h-80 object-cover rounded-3xl shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-3xl"></div>
            </div>
          </div>

          {/* Contact Info - Bottom Right */}
          <PortfolioCard className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-muted-foreground mb-6">Contact Info</h3>
            <SocialIcons />
          </PortfolioCard>

          {/* Experience Card - Bottom Left */}
          <PortfolioCard gradient="orange" className="flex flex-col justify-center">
            <p className="text-sm text-orange-100 mb-2">Experience</p>
            <div className="text-6xl font-bold text-white">7<span className="text-3xl">y</span></div>
          </PortfolioCard>

          {/* Skills Card - Bottom Center */}
          <PortfolioCard gradient="green" className="flex flex-col justify-center">
            <p className="text-sm text-green-100 mb-2">Skills</p>
            <div className="text-6xl font-bold text-white">30</div>
            <p className="text-green-100 text-sm mt-2">Programming Languages</p>
          </PortfolioCard>

        </div>
      </div>
    </div>
  );
};

export default Index;
