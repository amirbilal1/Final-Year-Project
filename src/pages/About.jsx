import React from 'react';
import Hero from '../components/Hero';

const About = () => {
  return (
    <div>
      <Hero
        title="About Us"
        subtitle="Learn more about our mission and vision."
        showSearchBar={false}
      />
      {/* Other page content */}
    </div>
  );
};

export default About;
