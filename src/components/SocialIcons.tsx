import { Github, Mail } from "lucide-react";

// Placeholder SVGs for Discord and Telegram
const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.1a.486.486 0 0 0-.515.243c-.211.375-.444.864-.608 1.249a18.365 18.365 0 0 0-5.524 0c-.164-.385-.397-.874-.608-1.249a.486.486 0 0 0-.515-.243A19.791 19.791 0 0 0 3.683 4.369a.457.457 0 0 0-.21.188C.533 9.046-.32 13.522.099 17.945a.48.48 0 0 0 .18.326c2.104 1.547 4.13 2.488 6.13 3.104a.485.485 0 0 0 .527-.176c.472-.65.892-1.34 1.253-2.062a.486.486 0 0 0-.27-.67c-.693-.23-1.35-.51-1.98-.83a.486.486 0 0 1-.23-.65c.06-.13.22-.19.35-.13 4.13 1.89 8.6 1.89 12.73 0 .13-.06.29 0 .35.13a.486.486 0 0 1-.23.65c-.63.32-1.29.6-1.98.83a.486.486 0 0 0-.27.67c.36.72.78 1.41 1.25 2.06a.485.485 0 0 0 .53.18c2-.62 4.03-1.56 6.13-3.1a.48.48 0 0 0 .18-.33c.42-4.42-.43-8.9-3.37-13.39a.457.457 0 0 0-.21-.19zM8.02 15.33c-1.18 0-2.15-1.08-2.15-2.41 0-1.33.95-2.41 2.15-2.41 1.19 0 2.15 1.08 2.15 2.41 0 1.33-.96 2.41-2.15 2.41zm7.96 0c-1.18 0-2.15-1.08-2.15-2.41 0-1.33.95-2.41 2.15-2.41 1.19 0 2.15 1.08 2.15 2.41 0 1.33-.96 2.41-2.15 2.41z" />
  </svg>
);

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.05 2.93L2.95 10.18c-1.01.39-.99.94-.18 1.19l4.65 1.45 1.78 5.44c.23.7.6.87 1.22.54l2.45-1.78 5.08 3.75c.93.51 1.6.25 1.83-.86l3.32-15.59c.34-1.36-.52-1.98-1.65-1.23z" />
  </svg>
);

export const SocialIcons = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Robin07130201",
      label: "GitHub",
      className: "bg-gray-700 hover:bg-gray-600"
    },
    {
      icon: DiscordIcon,
      href: "https://discord.com/user/1368778162837651466",
      label: "Discord",
      className: "bg-indigo-600 hover:bg-indigo-500"
    },
    {
      icon: TelegramIcon,
      href: "https://t.me/elsa1019",
      label: "Telegram",
      className: "bg-blue-400 hover:bg-blue-300"
    },
    {
      icon: Mail,
      href: "mailto:professionalwriter81@gmail.com",
      label: "Gmail",
      className: "bg-red-600 hover:bg-red-500"
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
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="w-5 h-5 text-white" />
        </a>
      ))}
    </div>
  );
};