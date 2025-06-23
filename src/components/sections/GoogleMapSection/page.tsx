// components/GoogleMap.tsx
import React from "react";

const GoogleMapSection: React.FC = () => {
  return (
    <div className="h-96 w-full">
      <iframe
        title="Global Solution and Service localisation"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31838.4257399989!2d9.70205691083984!3d4.060501400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d8a7aadbb17%3A0x3d6a0f6048e759aa!2sLyc%C3%A9e%20de%20Makepe!5e0!3m2!1sfr!2scm!4v1749055023555!5m2!1sfr!2scm"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapSection;
