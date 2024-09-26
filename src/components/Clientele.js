import React from 'react';

const Clientele = () => {
  return (
    <div className="py-20 px-8 bg-primary text-textPrimary">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-secondary">Our Global Clientele</h2>
        <p className="mt-4">Our reach spans across continents, with healthcare facilities in the US, ​Europe, and Asia leveraging InsightX’s advanced AI tools to streamline their ​diagnostic operations. We are proud to be making an impact on healthcare ​worldwide, providing technology that transforms lives through faster, more ​accurate diagnostics.</p>
      </div>

      <div className="flex justify-center">
        <img
          src="/images/worldmap.jpg"
          alt="Global Clientele"
          className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-blend-lighten"
        />
      </div>
    </div>
  );
};

export default Clientele;
