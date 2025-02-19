import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-gray-800 scroll py-6 bottom-0 left-0 right-0 z-50">
      <div className="container mx-auto text-center">
        <p className="text-white">
          &copy; {new Date().getFullYear()} Digital Escape Room Adventure. All Rights Reserved.
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Current Time: {currentTime.toLocaleTimeString()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
