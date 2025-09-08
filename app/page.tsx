"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Calendar,
} from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Landing Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-64 h-64 rounded-full mx-auto mb-6 object-cover border-4 border-primary/20"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Hi, I'm <span className="text-primary">Angelita</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
            Final Year Software Engineering Student at{" "}
            <span className="text-card-foreground font-semibold">
              Singapore Management University
            </span>
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Passionate about creating innovative solutions and building
            meaningful software that makes a difference. Currently exploring
            full-stack development, cybersecurity, and modern web technologies.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-card-foreground">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Some projects I dabbled on
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-card-foreground">
                    PokéRivals
                  </CardTitle>
                </div>
                <CardDescription>
                  ELO-based Pokemon tournament system with unique betting
                  features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">Stripe</Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-2 bg-transparent"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-card-foreground">
                    Ticket Blaster
                  </CardTitle>
                </div>
                <CardDescription>
                  Mashup ticketing platform with real-time updates on concerts in Singapore
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-2 bg-transparent"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-card-foreground">
                    Revouge
                  </CardTitle>
                </div>
                <CardDescription>
                  E-commerce platform for second hand fashion items
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-2 bg-transparent"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-card-foreground">
                    The Singlets
                  </CardTitle>
                </div>
                <CardDescription>
                  To fix this part
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-2 bg-transparent"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Work Experience
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            My professional internships experiences
          </p>

          <div className="space-y-8">

            <Card className="border-border bg-card">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-card-foreground">
                      Software Developer Intern
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-secondary">
                      IDEMIA
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>May 2025 - Present</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Singapore</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • Implemented end-to-end solutions by developing backend
                    services with Java Spring Boot, Apache Kafka, and Docker,
                    while also building client-facing frontend applications
                    using AngularJS
                  </li>
                  <li>
                    • Executed comprehensive code development and component
                    testing, authoring over 30+ unit test cases with JUnit and
                    Mockito to ensure strict alignment with functional
                    specifications
                  </li>
                  <li>
                    • Contributed to issue analysis and resolution across test
                    phases and production, demonstrating support for technical
                    solutions and team collaboration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-card-foreground">
                      Fullstack Developer Intern
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-secondary">
                      Radach Family & Co.
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>May 2024 - Nov 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Bangkok</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • Created over 20 mock ups and design concepts, converting
                    into fully functional solutions with 100% cross-device
                    compatibility and responsiveness, adhering to the principles
                    of the SDLC lifecycle
                  </li>
                  <li>
                    • Conducted over 20-unit tests to ensure robust
                    functionality of the 2 product line websites developed using
                    the FERN (Firebase, ExpressJS, ReactJs, NodeJS) stack with
                    Chakra UI and SendGrid, prior to their successful deployment
                    on Hostinger
                  </li>
                  <li>
                    • Facilitated the acquisition of 150 new users viewing the
                    website within 2 months of implementing site improvements on
                    the newly deployed platform
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-card-foreground">
                      Web Development Intern
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-secondary">
                      A*STAR Experimental Drug Development Centre
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Sep 2021 - Feb 2022</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Singapore</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • Developed an internal application using ASP.NET and MySQL,
                    achieving a 15% efficiency enhancement for the department,
                    involving self-directed learning of the new framework during
                    development
                  </li>
                  <li>
                    • Streamlined the UAT process for a whole system feature,
                    completing testing two weeks ahead of schedule, a success
                    supported by the rapid acquisition of skills in this new
                    development environment while building the application
                  </li>
                  <li>
                    • Partnered with a team of over 5 members to improve
                    operational efficiency by implementing streamlined
                    processes, effectively applying newly learned web
                    application development knowledge to contribute to team
                    goalF
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-card-foreground">
            Skills
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Technologies and tools I work with
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground text-center">
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-primary text-primary-foreground">
                    React
                  </Badge>
                  <Badge className="bg-primary text-primary-foreground">
                    Next.js
                  </Badge>
                  <Badge className="bg-primary text-primary-foreground">
                    Vue.js
                  </Badge>
                  <Badge className="bg-primary text-primary-foreground">
                    TypeScript
                  </Badge>
                  <Badge className="bg-primary text-primary-foreground">
                    Tailwind CSS
                  </Badge>
                  <Badge className="bg-primary text-primary-foreground">
                    HTML/CSS
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground text-center">
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-secondary text-secondary-foreground">
                    Node.js
                  </Badge>
                  <Badge className="bg-secondary text-secondary-foreground">
                    Python
                  </Badge>
                  <Badge className="bg-secondary text-secondary-foreground">
                    Express
                  </Badge>
                  <Badge className="bg-secondary text-secondary-foreground">
                    FastAPI
                  </Badge>
                  <Badge className="bg-secondary text-secondary-foreground">
                    PostgreSQL
                  </Badge>
                  <Badge className="bg-secondary text-secondary-foreground">
                    MongoDB
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground text-center">
                  Tools & Others
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">Git</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">AWS</Badge>
                  <Badge variant="outline">Vercel</Badge>
                  <Badge variant="outline">Figma</Badge>
                  <Badge variant="outline">Linux</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Thank you for taking the time to look at my portfolio. Please feel
            free to contact me by email at{" "}
            <a
              href="mailto:angelitakng.2022@scis.smu.edu.sg"
              className="text-accent font-medium hover:text-accent/80 transition-colors"
            >
              angelitakng.2022@scis.smu.edu.sg
            </a>
            , or by connecting with me on social media!
          </p>

          <div className="flex justify-center gap-6">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 bg-transparent"
            >
              <Mail className="w-5 h-5" />
              Email
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 bg-transparent"
            >
              <Github className="w-5 h-5" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 bg-transparent"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
