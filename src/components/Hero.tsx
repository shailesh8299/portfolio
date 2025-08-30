import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-hero-gradient opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Name and Title */}
          <h1 className="font-space text-5xl md:text-7xl font-bold mb-6 text-foreground">
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              Shailesh Mishra
            </span>
          </h1>
          
          <h2 className="font-inter text-xl md:text-2xl text-muted-foreground mb-4">
            Full Stack Developer & Computer Science Student
          </h2>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-4 h-4" />
            <span>Deoria, Uttar Pradesh, India</span>
          </div>
          
          <p className="font-inter text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about building innovative web applications with modern technologies. 
            Currently pursuing B.Tech in Computer Science at VIT Vellore with expertise in 
            React, Python, and cloud platforms.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 shadow-glow-primary"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-medium px-8 py-6"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/your-github-profile" 
              className="p-3 rounded-full bg-card hover:bg-card/80 transition-colors shadow-glow-accent"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6 text-foreground" />
            </a>
            <a 
              href="https://www.linkedin.com/in/your-linkedin-profile/" 
              className="p-3 rounded-full bg-card hover:bg-card/80 transition-colors shadow-glow-accent"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6 text-foreground" />
            </a>
            <a 
              href="mailto:mishrashailesh154@gmail.com" 
              className="p-3 rounded-full bg-card hover:bg-card/80 transition-colors shadow-glow-accent"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6 text-foreground" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;