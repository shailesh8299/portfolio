import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-space text-4xl md:text-5xl font-bold text-center mb-4">
            Professional <span className="bg-accent-gradient bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Hands-on experience in full-stack development and leadership roles that have shaped my technical expertise.
          </p>

          <div className="space-y-8">
            {/* VaultOfCodes Internship */}
            <Card className="bg-card-gradient border-border shadow-glow-primary">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-1/4">
                    <div className="p-4 rounded-full bg-primary/10 w-fit">
                      <Briefcase className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="lg:w-3/4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="font-space text-2xl font-semibold text-foreground">Full Stack Intern</h3>
                        <p className="text-accent font-medium text-lg">VaultOfCodes</p>
                      </div>
                      <div className="flex flex-col sm:items-end text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>May 2025 - July 2025</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>Remote</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid gap-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-foreground/80 leading-relaxed">
                            Gained hands-on experience in building full web applications from scratch using HTML, CSS, and React.js, 
                            developing strong foundational skills in modern web development technologies.
                          </p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-foreground/80 leading-relaxed">
                            Translated UI/UX designs into responsive, functional web applications, ensuring seamless user experience 
                            across different devices and screen sizes.
                          </p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-foreground/80 leading-relaxed">
                            Improved the company's website performance and user interface for better usability and engagement, 
                            contributing to enhanced user satisfaction and business metrics.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-6">
                        {["HTML", "CSS", "React.js", "JavaScript", "UI/UX", "Web Performance"].map((skill, index) => (
                          <Badge 
                            key={index} 
                            variant="secondary" 
                            className="bg-secondary/60 text-secondary-foreground"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* IEEE Leadership Role */}
            <Card className="bg-card-gradient border-border shadow-glow-accent">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-1/4">
                    <div className="p-4 rounded-full bg-accent/10 w-fit">
                      <Users className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  
                  <div className="lg:w-3/4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="font-space text-2xl font-semibold text-foreground">Publicity Head</h3>
                        <p className="text-accent font-medium text-lg">IEEE Information and Theory Society, VIT Vellore</p>
                      </div>
                      <div className="flex flex-col sm:items-end text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Jan 2024 - Jan 2025</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>Vellore, India</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid gap-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-foreground/80 leading-relaxed">
                            Spearheaded outreach for IC-ETITE'24, an international IEEE conference with <strong>1600+ applications</strong>, 
                            <strong>300+ paper presentations</strong>, and <strong>20+ keynote sessions</strong>, demonstrating exceptional 
                            organizational and promotional skills.
                          </p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-foreground/80 leading-relaxed">
                            Led coordination for logistics, speaker scheduling, and <strong>25+ volunteers</strong>, ensuring seamless 
                            execution of <strong>5+ high-impact technical events</strong> while maintaining quality standards.
                          </p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-foreground/80 leading-relaxed">
                            Increased event engagement by <strong>45%</strong> through targeted publicity campaigns across social and 
                            on-campus platforms, significantly boosting the society's visibility and participation.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-6">
                        {["Event Management", "Team Leadership", "Digital Marketing", "Strategic Planning", "Volunteer Coordination"].map((skill, index) => (
                          <Badge 
                            key={index} 
                            variant="outline" 
                            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;