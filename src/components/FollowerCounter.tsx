import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

export const FollowerCounter = () => {
  const [followers, setFollowers] = useState(0);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Get stored followers count and IP tracking
    const storedFollowers = localStorage.getItem('portfolio_followers');
    const visitorIPs = JSON.parse(localStorage.getItem('visitor_ips') || '[]');
    
    // Simulate getting visitor IP (in real app, you'd use a service)
    const getVisitorIdentifier = () => {
      const identifier = localStorage.getItem('visitor_id');
      if (identifier) return identifier;
      
      const newId = Math.random().toString(36).substring(2, 15);
      localStorage.setItem('visitor_id', newId);
      return newId;
    };

    const visitorId = getVisitorIdentifier();
    const initialCount = storedFollowers ? parseInt(storedFollowers) : 1247;
    
    setFollowers(initialCount);
    
    // Check if this visitor has already been counted
    if (!visitorIPs.includes(visitorId)) {
      setHasVisited(true);
      const newCount = initialCount + 1;
      setFollowers(newCount);
      
      // Store the new count and add this visitor to the list
      localStorage.setItem('portfolio_followers', newCount.toString());
      const updatedIPs = [...visitorIPs, visitorId];
      localStorage.setItem('visitor_ips', JSON.stringify(updatedIPs));
      
      // Animate the count increase
      setTimeout(() => {
        setHasVisited(false);
      }, 2000);
    }
  }, []);

  return (
    <div className="text-center">
      <div className="mb-4 flex justify-center">
        <Heart 
          className={`w-16 h-16 transition-all duration-500 ${
            hasVisited ? 'text-red-500 animate-bounce-soft' : 'text-red-400'
          }`}
          fill="currentColor"
        />
      </div>
      <div 
        className={`text-4xl font-bold text-white mb-2 transition-all duration-500 ${
          hasVisited ? 'animate-count-up text-primary' : ''
        }`}
      >
        {followers.toLocaleString()}
      </div>
      <p className="text-muted-foreground text-sm">Users Followed</p>
    </div>
  );
};