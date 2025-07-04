import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const SocialIcons = () => {
  const socialLinks = [
    { 
      icon: Github, 
      href: "#", 
      label: "GitHub",
      className: "bg-gray-700 hover:bg-gray-600"
    },
    { 
      icon: Linkedin, 
      href: "#", 
      label: "LinkedIn",
      className: "bg-blue-600 hover:bg-blue-500"
    },
    { 
      icon: Mail, 
      href: "mailto:williams.smith@example.com", 
      label: "Email",
      className: "bg-red-600 hover:bg-red-500"
    },
    { 
      icon: Phone, 
      href: "tel:+1234567890", 
      label: "Phone",
      className: "bg-green-600 hover:bg-green-500"
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {socialLinks.map(({ icon: Icon, href, label, className }) => (
        <a
          key={label}
          href={href}
          className={`
            p-3 rounded-xl flex items-center justify-center
            transition-all duration-300 hover:scale-110 hover:shadow-lg
            ${className}
          `}
          aria-label={label}
        >
          <Icon className="w-5 h-5 text-white" />
        </a>
      ))}
    </div>
  );
};