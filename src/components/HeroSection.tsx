
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white pt-20">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 animate-fade-in-left">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Your Resume Assistant
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Scan Your Resume and Prepare for Interviews
            </h1>
            <p className="text-lg text-foreground/70 max-w-xl">
              Resumify helps analyze your resume and generate relevant questions based on its content. Answer these questions to improve your resume and prepare for interviews effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#upload" className="btn btn-primary shadow-lg shadow-primary/20">
                Upload Your Resume
              </a>
              <a href="#about" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-fade-in-right">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse-slow"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse-slow"></div>
              <img 
                src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?q=80&w=2070" 
                alt="Resume review illustration" 
                className="rounded-2xl shadow-2xl relative z-10 max-w-full h-auto animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
