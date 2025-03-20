
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import QuestionnaireModal from './QuestionnaireModal';

const UploadSection: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState('');
  const [isUploaded, setIsUploaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Check file type
    const fileType = file.name.split('.').pop()?.toLowerCase();
    if (!['pdf', 'docx', 'txt'].includes(fileType || '')) {
      alert('Please upload a PDF, DOCX, or TXT file');
      return;
    }
    
    setFileName(file.name);
    setIsUploaded(true);
  };

  const handleScanResume = (e: React.FormEvent) => {
    e.preventDefault();
    if (isUploaded) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <section id="upload" className="bg-white py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Get Started
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Upload Your Resume</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Upload your resume and Resumify will generate interview questions based on your skills and experience to help you prepare effectively.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mt-12">
            <form onSubmit={handleScanResume}>
              <div
                className={cn(
                  "file-input-wrapper transition duration-300",
                  isDragging ? "border-primary bg-primary/5" : "",
                  isUploaded ? "border-green-500 bg-green-50" : ""
                )}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  id="resume-file"
                  className="custom-file-input"
                  accept=".pdf,.docx,.txt"
                  onChange={handleFileChange}
                />
                
                <div className="pointer-events-none">
                  {isUploaded ? (
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-500 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-green-600">File uploaded successfully</p>
                      <p className="text-xs text-green-600/70 mt-1">{fileName}</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Drag and drop your resume, or click to browse</p>
                      <p className="text-xs text-foreground/60 mt-1">Supports PDF, DOCX, TXT (Max 5MB)</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className={cn(
                    "btn btn-primary shadow-lg shadow-primary/20 transition-all duration-300 transform",
                    isUploaded ? "scale-105" : "opacity-70",
                    "hover:scale-105 active:scale-95"
                  )}
                  disabled={!isUploaded}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Scan Resume
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      <QuestionnaireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default UploadSection;
