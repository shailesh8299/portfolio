import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Plane, Mountain, User } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Flight Booking & Management Platform",
      description: "A comprehensive Python-based flight management system inspired by MakeMyTrip, featuring efficient data management and intuitive user interface.",
      technologies: ["Python", "MySQL", "Tkinter", "SQL"],
      features: [
        "Created a Python-based flight management system with MakeMyTrip-like functionality",
        "Incorporated MySQL to efficiently manage 50+ flight records, boosting data retrieval speed by 30%",
        "Built intuitive Tkinter GUI for user-friendly flight search, booking, and management"
      ],
      icon: Plane,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Camp India",
      description: "A platform for discovering and reviewing camping grounds with over 100 campgrounds, tailored for camping enthusiasts across India.",
      technologies: ["Node.js", "Express", "MongoDB", "Bootstrap"],
      features: [
        "Currently developing a platform with 100+ campgrounds for camping enthusiasts",
        "Implemented user authentication to ensure genuine feedback and secure management",
        "Enabled users to create, edit, and delete campgrounds with advanced search and sorting"
      ],
      icon: Mountain,
      gradient: "from-green-500 to-teal-600",
      status: "In Development"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive personal portfolio website showcasing skills, projects, and achievements with modern design and interactive features.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: [
        "Developed a responsive personal portfolio website to showcase skills",
        "Implemented interactive features optimized for desktop and mobile devices",
        "Deployed the site online for recruiters and employers to easily access"
      ],
      icon: User,
      gradient: "from-pink-500 to-orange-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-space text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="bg-accent-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating full-stack development skills and problem-solving abilities.
          </p>

          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={project.id} className="bg-card-gradient border-border overflow-hidden group hover:shadow-glow-primary transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      {/* Project Icon/Visual */}
                      <div className="lg:w-1/3 bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex items-center justify-center">
                        <div className={`p-8 rounded-full bg-gradient-to-br ${project.gradient} shadow-glow-accent`}>
                          <IconComponent className="w-16 h-16 text-white" />
                        </div>
                      </div>
                      
                      {/* Project Details */}
                      <div className="lg:w-2/3 p-8">
                        <CardHeader className="p-0 mb-6">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <CardTitle className="font-space text-2xl text-foreground">{project.title}</CardTitle>
                            {project.status && (
                              <Badge variant="outline" className="border-accent text-accent">
                                {project.status}
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                        </CardHeader>
                        
                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-3 text-foreground/80">
                                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm leading-relaxed">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge 
                                key={techIndex} 
                                variant="secondary" 
                                className="bg-secondary/60 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <Button 
                            variant="default" 
                            size="sm"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;