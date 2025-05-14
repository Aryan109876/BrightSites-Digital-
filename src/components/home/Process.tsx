import React from 'react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Discovery",
    description: "We start by understanding your business, goals, target audience, and competition to establish a clear direction for your project."
  },
  {
    number: 2,
    title: "Strategy",
    description: "Based on our findings, we develop a comprehensive strategy that outlines the approach, timeline, and deliverables for your project."
  },
  {
    number: 3,
    title: "Design",
    description: "Our designers create beautiful, user-focused designs that align with your brand and engage your target audience effectively."
  },
  {
    number: 4,
    title: "Development",
    description: "Our development team brings the designs to life with clean, efficient code, ensuring your website is fast, responsive, and secure."
  },
  {
    number: 5,
    title: "Testing",
    description: "We rigorously test your website across devices and browsers to ensure everything works flawlessly before launch."
  },
  {
    number: 6,
    title: "Launch",
    description: "Once approved, we deploy your website to your hosting environment and make sure everything is working correctly."
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a proven process to ensure every project is completed on time, on budget, and exceeds expectations.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 relative">
            {processSteps.map((step, index) => (
              <div 
                key={step.number} 
                className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="hidden md:block md:w-1/2"></div>
                
                {/* Number indicator */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-900 text-white items-center justify-center font-bold text-xl shadow-lg">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow relative md:ml-10 md:mr-10">
                  {/* Mobile number indicator */}
                  <div className="md:hidden w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xl shadow-lg mb-4">
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;