import React from "react";

const GoogleMapSection: React.FC = () => {
  return (
    <div className="h-96 w-full">
      <iframe
        title="TechWorld Revolution localisation"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7959.677124726949!2d9.746669999999991!3d4.053327000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scm!4v1759260590633!5m2!1sfr!2scm"
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
