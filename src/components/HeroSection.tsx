
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white pt-20">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Your Resume Assistant
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Scan Your Resume and Prepare for Interviews
            </h1>
            <p className="text-lg text-foreground/70 max-w-xl mx-auto">
              Resumify helps analyze your resume and generate relevant questions based on its content. Answer these questions to improve your resume and prepare for interviews effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
              <a href="#upload" className="btn btn-primary shadow-lg shadow-primary/20">
                Upload Your Resume
              </a>
              <a href="#about" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
