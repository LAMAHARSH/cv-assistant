
// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    // Get reference to important DOM elements
    const uploadForm = document.getElementById('upload-form');
    const resumeFile = document.getElementById('resume-file');
    const questionnaire = document.getElementById('questionnaire');
    const questionsContainer = document.getElementById('questions-container');
    const submitAnswers = document.getElementById('submit-answers');
    const contactForm = document.getElementById('contact-form');

    // Hide questionnaire initially
    questionnaire.style.display = 'none';

    // Handle resume upload and form submission
    uploadForm.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();
        
        // Check if a file was selected
        const file = resumeFile.files[0];
        if (file) {
            // Call function to scan resume and get questions
            scanResume(file).then(displayQuestions);
        } else {
            alert('Please select a file first.');
        }
    });

    // Mock function to simulate resume scanning and question generation
    function scanResume(file) {
        // Show loading state
        questionsContainer.innerHTML = '<p>Analyzing your resume...</p>';
        questionnaire.style.display = 'block';
        
        // Return a promise that resolves with questions after a delay
        return new Promise((resolve) => {
            // Simulate API call delay
            setTimeout(() => {
                // Generate mock questions based on file name to simulate personalization
                const questions = [
                    "What is your most significant achievement in your most recent role?",
                    "Can you describe a project where you demonstrated leadership skills?",
                    "What technical skills from your resume are you most proficient in?",
                    "How do you stay current with industry trends and developments?",
                    "Describe a challenging situation from your work experience and how you resolved it."
                ];
                resolve(questions);
            }, 1500); // 1.5 second delay to simulate processing
        });
    }

    // Function to display questions in the questionnaire
    function displayQuestions(questions) {
        // Clear previous content
        questionsContainer.innerHTML = '';
        
        // Create HTML elements for each question
        questions.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question-item';
            
            const questionLabel = document.createElement('label');
            questionLabel.textContent = `${index + 1}. ${question}`;
            questionLabel.setAttribute('for', `answer-${index}`);
            
            const answerTextarea = document.createElement('textarea');
            answerTextarea.id = `answer-${index}`;
            answerTextarea.required = true;
            answerTextarea.placeholder = 'Type your answer here...';
            
            // Add elements to the container
            questionDiv.appendChild(questionLabel);
            questionDiv.appendChild(answerTextarea);
            questionsContainer.appendChild(questionDiv);
        });
        
        // Show the questionnaire
        questionnaire.style.display = 'block';
        
        // Scroll to the questionnaire
        questionnaire.scrollIntoView({ behavior: 'smooth' });
    }

    // Handle answer submission
    submitAnswers.addEventListener('click', function() {
        // Get all textareas
        const answerFields = questionsContainer.querySelectorAll('textarea');
        
        // Check if all fields have been filled
        let allFilled = true;
        answerFields.forEach(field => {
            if (!field.value.trim()) {
                allFilled = false;
                field.style.borderColor = 'red';
            } else {
                field.style.borderColor = '#ddd';
            }
        });
        
        if (allFilled) {
            // Collect answers
            const answers = [];
            answerFields.forEach(field => {
                answers.push(field.value);
            });
            
            // In a real app, you would send these answers to your server
            console.log("Answers collected:", answers);
            
            // Show success message
            alert('Thank you! Your answers have been submitted successfully.');
            
            // Reset the form
            uploadForm.reset();
            questionnaire.style.display = 'none';
        } else {
            alert('Please answer all questions before submitting.');
        }
    });

    // Handle contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this data to your server
            console.log("Contact form submission:", { name, email, message });
            
            // Show success message
            alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`);
            
            // Reset the form
            contactForm.reset();
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
