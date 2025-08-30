import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, MapPin } from "lucide-react";

const About = () => {
  const skills = [
    "C++", "Java", "Python", "JavaScript", "C",
    "HTML", "CSS", "Tailwind CSS", "React.js", "Next.js",
    "MongoDB", "MySQL", "Git", "GitHub",
    "AWS", "Azure AI", "Cloud Computing"
  ];

  const coursework = [
    "Data Structures & Algorithms", "Object-Oriented Programming",
    "Operating Systems", "Database Management Systems", "Computer Networks"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-space text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="bg-accent-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A passionate developer with a strong foundation in computer science and hands-on experience in full-stack development.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Education */}
            <Card className="bg-card-gradient border-border shadow-glow-primary">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-space text-2xl font-semibold text-foreground">Education</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-6">
                    <h4 className="font-semibold text-lg text-foreground">B.Tech in Computer Science and Engineering</h4>
                    <p className="text-accent font-medium">Vellore Institute of Technology</p>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>Vellore, India</span>
                    </div>
                    <p className="text-muted-foreground">2022 - Present</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="font-semibold text-foreground">CGPA: 8.33/10.0</span>
                    </div>
                  </div>
                  
                  <div className="border-l-2 border-secondary pl-6">
                    <h4 className="font-semibold text-lg text-foreground">Senior Secondary School</h4>
                    <p className="text-accent font-medium">Bapu Inter College</p>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>Salempur, India</span>
                    </div>
                    <p className="text-muted-foreground">2019 - 2021</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="font-semibold text-foreground">Grade: 80.0%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-card-gradient border-border shadow-glow-accent">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-accent/10 mr-4">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-space text-2xl font-semibold text-foreground">Certifications</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-background/50 border border-border">
                    <h4 className="font-semibold text-foreground">AWS Certified Solutions Architect - Associate</h4>
                    <p className="text-muted-foreground text-sm">Jun 2025</p>
                    <p className="text-sm text-foreground/80 mt-1">Cloud architecture, deployment, scalability, security, and cost optimization</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-background/50 border border-border">
                    <h4 className="font-semibold text-foreground">Microsoft Certified: Azure AI-900</h4>
                    <p className="text-muted-foreground text-sm">AI Engineer Certification</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-background/50 border border-border">
                    <h4 className="font-semibold text-foreground">Web Development Bootcamp</h4>
                    <p className="text-muted-foreground text-sm">Full-stack development certification</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technical Skills */}
          <Card className="bg-card-gradient border-border mb-8">
            <CardContent className="p-8">
              <h3 className="font-space text-2xl font-semibold text-center mb-8 text-foreground">
                Technical <span className="bg-accent-gradient bg-clip-text text-transparent">Skills</span>
              </h3>
              
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium bg-secondary/80 hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Relevant Coursework */}
          <Card className="bg-card-gradient border-border">
            <CardContent className="p-8">
              <h3 className="font-space text-2xl font-semibold text-center mb-8 text-foreground">
                Relevant <span className="bg-accent-gradient bg-clip-text text-transparent">Coursework</span>
              </h3>
              
              <div className="flex flex-wrap gap-3 justify-center">
                {coursework.map((course, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="px-4 py-2 text-sm font-medium border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {course}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;