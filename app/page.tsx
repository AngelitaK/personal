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
  Download,
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
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
            Final Year Software Engineering student at{" "}
            <span className="text-card-foreground font-semibold">
              Singapore Management University
            </span>
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Passionate about creating innovative solutions and building
            meaningful software that makes a difference. Currently exploring
            full-stack development, cybersecurity, and modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Button
              size="lg"
              variant="outline"
              className="flex items-center gap-2 px-8 py-3 text-lg bg-transparent"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Angelita_Kng_Resume.pdf";
                link.download = "Angelita_Kng_Resume.pdf";
                link.click();
              }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
            <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-card-foreground">
                    PokéRivals
                  </CardTitle>
                </div>
                <CardDescription>
                  Engaging ELO-based Pokémon battle tournament platform
                  featuring a unique and functional betting system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Next.JS</Badge>
                  <Badge variant="secondary">Chakra UI</Badge>
                  <Badge variant="secondary">Express.JS</Badge>
                  <Badge variant="secondary">Spring Boot</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">Stripe</Badge>
                  <Badge variant="secondary">AWS</Badge>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/AngelitaK/pokerivals"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-2 bg-transparent"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </a>

                  <a
                    href="https://pokerivals.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </a>
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
                  A microservices project to simulate a seamless event booking
                  and ticketing system with real-time updates on concerts in
                  Singapore
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React.JS</Badge>
                  <Badge variant="secondary">Express.JS</Badge>
                  <Badge variant="secondary">Spring Boot</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Stripe</Badge>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/AngelitaK/ticketblaster"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-2 bg-transparent"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </a>
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
                  Developed a scalable e-commerce platform for second-hand
                  fashion, facilitating seamless item uploads for sellers and
                  easy access for buyers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React.JS</Badge>
                  <Badge variant="secondary">Express.JS</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">Material UI</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/AngelitaK/revogue"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-2 bg-transparent"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </a>

                  <a
                    href="https://revogue.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </a>
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
                  A community platform for fashion enthusiasts to share and
                  discover personal lookbooks by other users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Next.JS</Badge>
                  <Badge variant="secondary">Express.JS</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">Firebase</Badge>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/AngelitaK/thesinglets"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-2 bg-transparent"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </a>
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
            <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
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
                <ul className="space-y-5 text-muted-foreground">
                  <li>
                    • Developed end-to-end solutions, including both Angular
                    frontends and Java Spring Boot backends with Kafka and
                    Docker.
                  </li>
                  <li>
                    • Executed over 30 unit tests using JUnit and Mockito to
                    ensure strict alignment with functional specifications
                  </li>
                  <li>
                    • Supported issue analysis and resolution in both test and
                    production environments through team collaboration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
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
                <ul className="space-y-5 text-muted-foreground">
                  <li>
                    • Designed over 20 mockups and concepts, converting them
                    into fully responsive, cross-device functional solutions
                    following the SDLC
                  </li>
                  <li>
                    • Authored over 20 unit tests for two product websites built
                    with the FERN stack (Firebase, ExpressJS, ReactJS, NodeJS),
                    Chakra UI, and SendGrid, ensuring robust functionality
                    before deployment
                  </li>
                  <li>
                    • Drove a 150-user increase in site traffic within two
                    months of implementing site improvements on the newly
                    deployed platform
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
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
                <ul className="space-y-5 text-muted-foreground">
                  <li>
                    • Developed an internal application with ASP.NET and MySQL,
                    improving departmental efficiency by 15% through
                    self-directed learning of a new framework
                  </li>
                  <li>
                    • Streamlined the UAT process for a full system feature,
                    completing testing two weeks ahead of schedule by rapidly
                    acquiring new development environment skills
                  </li>
                  <li>
                    • Collaborated in a team of five to improve operational
                    efficiency by applying newly learned web application
                    development knowledge to streamline processes and meet team
                    goals
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
            <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground text-center">
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-yellow-400 text-gray-900">Java</Badge>
                  <Badge className="bg-yellow-400 text-gray-900">Python</Badge>
                  <Badge className="bg-yellow-400 text-gray-900">
                    JavaScript
                  </Badge>
                  <Badge className="bg-yellow-400 text-gray-900">
                    Spring Boot
                  </Badge>
                  <Badge className="bg-yellow-400 text-gray-900">
                    TypeScript
                  </Badge>
                  <Badge className="bg-yellow-400 text-gray-900">PHP</Badge>
                  <Badge className="bg-yellow-400 text-gray-900">HTML</Badge>
                  <Badge className="bg-yellow-400 text-gray-900">Ionic</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground text-center">
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-primary text-primary-foreground">
                    React.JS
                  </Badge>
                  <Badge className="bg-primary text-primary-foreground">
                    Next.JS
                  </Badge>
                  <Badge className="bg-primary text-primary-foreground">
                    Express.JS
                  </Badge>
                  <Badge className="bg-primary text-primary-foreground">
                    Angular.JS
                  </Badge>
                  <Badge className="bg-primary text-primary-foreground">
                    Tailwind CSS
                  </Badge>
                  <Badge className="bg-primary text-primary-foreground">
                    Chakra UI
                  </Badge>
                  <Badge className="bg-primary text-primary-foreground">
                    Material UI
                  </Badge>
                  <Badge className="bg-primary text-primary-foreground">
                    Vite
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground text-center">
                  Database
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-secondary text-secondary-foreground">
                    Firebase
                  </Badge>
                  <Badge className="bg-secondary text-secondary-foreground">
                    PostgreSQL
                  </Badge>
                  <Badge className="bg-secondary text-secondary-foreground">
                    MongoDB
                  </Badge>
                  <Badge className="bg-secondary text-secondary-foreground">
                    MySQL
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground text-center">
                  Tools & Others
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">Git</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">Apache Kafka</Badge>
                  <Badge variant="outline">AWS</Badge>
                  <Badge variant="outline">Hostinger</Badge>
                  <Badge variant="outline">Cloudflare</Badge>
                  <Badge variant="outline">Vercel</Badge>
                  <Badge variant="outline">Figma</Badge>
                  <Badge variant="outline">Linux</Badge>
                  <Badge variant="outline">WinSCP</Badge>
                  <Badge variant="outline">JUnit Testing</Badge>
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
            , or by connecting with me via my socials!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {/* Email */}
            <a href="mailto:angelitakng.2022@scis.smu.edu.sg">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 bg-transparent"
              >
                <Mail className="w-5 h-5" />
                Email
              </Button>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/AngelitaK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 bg-transparent"
              >
                <Github className="w-5 h-5" />
                GitHub
              </Button>
            </a>

            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/angelitakng/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 bg-transparent"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
            </a>

            {/* Resume */}
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 bg-transparent"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Angelita_Kng_Resume.pdf";
                link.download = "Angelita_Kng_Resume.pdf";
                link.click();
              }}
            >
              <Download className="w-5 h-5" />
              Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
