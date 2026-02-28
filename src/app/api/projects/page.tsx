"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Zap } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="bg-black min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Engineering <span className="text-primary">Excellence</span>
          </motion.h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Showcasing our track record in delivering high-performance solar infrastructure 
            across Mumbai and Maharashtra’s industrial landscape.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="aspect-video bg-gray-800 relative overflow-hidden">
                {/* Image Placeholder - Replace with actual Image components when you have assets */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/30">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.specs.map(spec => (
                    <span key={spec} className="text-[10px] text-white/60 flex items-center gap-1 uppercase tracking-wider">
                      <Zap className="w-3 h-3 text-primary" /> {spec}
                    </span>
                  ))}
                </div>

                <Link 
                  href={`/contact?service=${project.id}`}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Inquire About Similar Project <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}