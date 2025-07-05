import React, { useEffect, useState } from "react";
import { X, Link2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface ProfileModalProps {
  open: boolean;
  onClose: () => void;
  profile: {
    avatar: string;
    name: string;
    subtitle: string;
    details: Array<{ icon: React.ReactNode; value: string; link?: string }>;
  };
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ open, onClose, profile }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (open) {
      setShowContent(false);
      const timer = setTimeout(() => setShowContent(true), 700);
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80">
      <button className="absolute top-8 right-10 text-2xl text-white z-[10001]" onClick={onClose}><X size={28} /></button>
      {/* Animated left panel */}
      <div className="fixed left-0 top-0 h-full w-1/2 bg-[#232226] animate-slide-in-left" style={{zIndex: 10000}} />
      {/* Animated right panel */}
      <div className="fixed right-0 top-0 h-full w-1/2 bg-[#232226] animate-slide-in-right" style={{zIndex: 10000}} />
      {/* Centered profile content, fade in after panels */}
      <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-[10001] w-full max-w-md transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <img src={profile.avatar} alt={profile.name} className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-white shadow-lg" />
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
                hidden: { transition: { staggerChildren: 0.1, staggerDirection: -1 } }
              }}
              className="flex flex-col items-center w-full"
            >
              <motion.h2
                className="text-3xl font-extrabold text-white mb-2"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4 }}
              >
                {profile.name}
              </motion.h2>
              <motion.div
                className="text-gray-400 mb-6 font-medium"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4 }}
              >
                {profile.subtitle}
              </motion.div>
              <div className="flex flex-col gap-3 text-white text-lg w-full max-w-xs">
                <AnimatePresence>
                  {profile.details.map((detail, idx) => (
                    <motion.div
                      className="flex items-center gap-3"
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.15 }}
                    >
                      {detail.icon}
                      {detail.link ? (
                        <a href={detail.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <span className="text-base">{detail.value}</span>
                          <Link2 size={16} className="ml-1" />
                        </a>
                      ) : (
                        <span className="text-base">{detail.value}</span>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <style>{`
        @keyframes slide-in-left {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        @keyframes slide-in-right {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        .animate-slide-in-left { animation: slide-in-left 0.7s cubic-bezier(0.4,0,0.2,1) forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.7s cubic-bezier(0.4,0,0.2,1) forwards; }
      `}</style>
    </div>
  );
}; 