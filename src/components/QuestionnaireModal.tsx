
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface QuestionnaireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuestionnaireModal: React.FC<QuestionnaireModalProps> = ({ isOpen, onClose }) => {
  const [questions, setQuestions] = useState<{id: number, text: string, answer: string}[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    if (isOpen) {
      // Simulate loading questions from the resume
      setTimeout(() => {
        setQuestions([
          { id: 1, text: "Describe your experience with React.js and how you've used it in your previous projects.", answer: "" },
          { id: 2, text: "Tell me about a challenging project you worked on and how you overcame obstacles.", answer: "" },
          { id: 3, text: "How do you stay updated with the latest trends in your field?", answer: "" },
          { id: 4, text: "Describe your approach to problem-solving and provide an example.", answer: "" },
          { id: 5, text: "What are your career goals for the next 3-5 years?", answer: "" }
        ]);
      }, 1000);
    } else {
      // Reset state when modal closes
      setQuestions([]);
      setIsSubmitting(false);
      setIsComplete(false);
    }
  }, [isOpen]);

  const handleAnswerChange = (id: number, answer: string) => {
    setQuestions(prevQuestions => 
      prevQuestions.map(q => q.id === id ? { ...q, answer } : q)
    );
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
      setScore(85);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden flex flex-col animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <h3 className="text-xl font-semibold">Questions Based on Your Resume</h3>
          <button 
            onClick={onClose}
            className="rounded-full p-2 hover:bg-muted transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="overflow-y-auto flex-grow p-6">
          {questions.length === 0 ? (
            <div className="flex items-center justify-center h-60">
              <div className="text-center animate-pulse">
                <div className="inline-block rounded-full h-12 w-12 bg-primary/20 mb-4 flex items-center justify-center">
                  <svg className="animate-spin h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <p className="text-foreground/70">Analyzing your resume...</p>
              </div>
            </div>
          ) : isComplete ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-2">Answers Submitted!</h4>
              <p className="text-foreground/70 mb-6">Your resume review score:</p>
              
              <div className="text-5xl font-bold text-primary mb-6">{score}%</div>
              
              <div className="bg-muted p-6 rounded-lg text-left">
                <h5 className="font-semibold mb-2">Feedback Summary:</h5>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Strong presentation of technical skills</li>
                  <li>Good articulation of project experiences</li>
                  <li>Consider adding more quantifiable achievements</li>
                  <li>Elaborate more on leadership experiences</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {questions.map((question, index) => (
                <div key={question.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <label className="block font-medium mb-2">
                    {index + 1}. {question.text}
                  </label>
                  <textarea
                    value={question.answer}
                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                    className="input-field min-h-24 w-full"
                    placeholder="Type your answer here..."
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        
        {questions.length > 0 && !isComplete && (
          <div className="p-6 border-t bg-muted/30">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={cn(
                "btn btn-primary shadow-lg shadow-primary/20 w-full transition-all duration-300",
                isSubmitting ? "opacity-70" : ""
              )}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : "Submit Answers"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionnaireModal;
