import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOnDarkBackground, setIsOnDarkBackground] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if cursor is over a dark background element
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const bgColor = window.getComputedStyle(element.closest('section') || element).backgroundColor;
        // Check if background is dark (black or very dark)
        const isDark = bgColor === 'rgb(0, 0, 0)' || bgColor.includes('rgb(0, 0, 0)');
        setIsOnDarkBackground(isDark);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      id="cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundColor: isOnDarkBackground ? 'white' : 'black',
      }}
    />
  );
};
