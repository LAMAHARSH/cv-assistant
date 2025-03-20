
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const demoScores = [
  { date: 'May 21, 2025', score: 85, feedback: 'Strong leadership skills, but add more achievements.' },
  { date: 'April 15, 2025', score: 72, feedback: 'Good technical skills, improve project descriptions.' },
  { date: 'March 8, 2025', score: 78, feedback: 'Solid experience, consider adding more metrics.' },
];

const ScoresSection: React.FC = () => {
  const [scores] = useState(demoScores);

  return (
    <section id="scores" className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Performance Tracking
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Review Your Past Scores</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Track your progress and see how your resume has improved over time with detailed feedback.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl shadow-lg bg-white">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/40 border-b">
                    <th className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium text-foreground/80">Date</th>
                    <th className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium text-foreground/80">Score</th>
                    <th className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium text-foreground/80">Feedback</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {scores.map((item, index) => (
                    <tr 
                      key={index} 
                      className="hover:bg-muted/20 transition-colors"
                    >
                      <td className="whitespace-nowrap px-6 py-4 text-sm">{item.date}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center">
                          <div className={cn(
                            "w-12 text-center rounded-full px-2.5 py-0.5 text-sm font-medium",
                            item.score >= 80 ? "bg-green-100 text-green-700" :
                            item.score >= 70 ? "bg-yellow-100 text-yellow-700" : 
                            "bg-red-100 text-red-700"
                          )}>
                            {item.score}%
                          </div>
                          <div className="ml-4 w-36 bg-muted/40 rounded-full h-2">
                            <div 
                              className={cn(
                                "h-2 rounded-full",
                                item.score >= 80 ? "bg-green-500" :
                                item.score >= 70 ? "bg-yellow-500" : 
                                "bg-red-500"
                              )}
                              style={{ width: `${item.score}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground/80">{item.feedback}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t text-center">
              <button className="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Complete Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScoresSection;
