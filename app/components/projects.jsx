"use client";

import { Briefcase, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Mirabel Beauty Salon",
      description: "A modern, elegant website for Mirabel Beauty Salon, featuring services, booking capabilities, and a showcase of their work.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      link: "https://mirabel-beauty-salon.vercel.app/",
      image: "/mirabel-salon.png",
      openInNewTab: true
    },
    {
      title: "Tekitool Solutions",
      description: "A dynamic website for a social media and marketing agency, showcasing their strategies and client success stories.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      link: "https://tekitool-site.vercel.app/",
      image: "/tekitool-solutions.png",
      openInNewTab: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management platform with real-time updates and team synchronization.",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      link: "#",
      image: "/task-app.jpeg",
      openInNewTab: true
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization dashboard with interactive charts and customizable widgets.",
      tech: ["React", "D3.js", "GraphQL", "PostgreSQL"],
      link: "#",
      image: "/analytics.png",
      openInNewTab: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="backdrop-blur-xl bg-white/10 rounded-3xl overflow-hidden border border-purple-500/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-purple-500/30"
            >
              <div className="grid md:grid-cols-2">
                {/* Image Section */}
                <div className="relative h-64 md:h-auto overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-transparent to-transparent"></div>

                  {/* Briefcase Icon Overlay */}
                  <div className="absolute top-4 left-4 p-2 rounded-full backdrop-blur-xl bg-white/10 border border-purple-500/30">
                    <Briefcase className="text-white-300" size={14} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <a
                        href={project.link}
                        target={project.openInNewTab ? "_blank" : undefined}
                        rel={project.openInNewTab ? "noopener noreferrer" : undefined}
                        className="text-purple-400 hover:text-purple-300 transition-colors hover:scale-110 transform duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1.5 rounded-full backdrop-blur-xl bg-purple-600/20 border border-purple-400/30 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}