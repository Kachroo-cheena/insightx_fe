import React from 'react';

const Contact = () => {
  return (
    <div className="py-20 px-8 bg-primary text-textPrimary">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-secondary">Let's Work Together</h2>
        <p className="mt-4">Let’s Revolutionize Radiology Together

"Interested in seeing how InsightX can transform your radiology ​practice? Contact us today for a personalized demo or ​consultation."</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-primary rounded-lg shadow-lg hover:bg-accentGreen hover:text-white transition-all duration-300 text-center">
          <h3 className="text-xl font-bold">Email Address</h3>
          <p className="mt-2">insightxaiai@gmail.com</p>
        </div>

        <div className="p-8 bg-primary rounded-lg shadow-lg hover:bg-accentGreen hover:text-white transition-all duration-300 text-center">
          <h3 className="text-xl font-bold">Phone Number</h3>
          <p className="mt-2">+91-9876543210</p>
        </div>

        <div className="p-8 bg-primary rounded-lg shadow-lg hover:bg-accentGreen hover:text-white transition-all duration-300 text-center">
          <h3 className="text-xl font-bold">Office Location</h3>
          <p className="mt-2">Vadodara,Gujarat</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
