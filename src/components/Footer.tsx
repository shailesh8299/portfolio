import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/your-github-profile",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/your-linkedin-profile/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:mishrashailesh154@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-space text-2xl font-bold">
              <span className="bg-accent-gradient bg-clip-text text-transparent">
                Shailesh Mishra
              </span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Developer passionate about creating innovative web applications 
              and solving complex technical challenges.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-background hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-lg">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-muted-foreground hover:text-accent transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-lg">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Email:</span><br />
                <a 
                  href="mailto:mishrashailesh154@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  mishrashailesh154@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Phone:</span><br />
                <a 
                  href="tel:+918808508091"
                  className="hover:text-accent transition-colors"
                >
                  +91 88085 08091
                </a>
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Location:</span><br />
                Deoria, Uttar Pradesh, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Shailesh Mishra. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;