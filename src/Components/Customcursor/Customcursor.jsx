import React, { useEffect } from 'react';
import './CustomCursor.css'; // Create a CSS file for styles

const Customcursor = () => {
  useEffect(() => {
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      cursorDot.style.left = `${clientX}px`;
      cursorDot.style.top = `${clientY}px`;

      cursorOutline.style.left = `${clientX}px`;
      cursorOutline.style.top = `${clientY}px`;

      cursorOutline.animate({
        left: `${clientX}px`,
        top: `${clientY}px`,
      },{duration: 500, fill: "forwards"})
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div>
    </>
  );
};

export default Customcursor;
