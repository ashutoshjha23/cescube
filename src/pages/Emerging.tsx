import { useState, useEffect } from "react";
import bgImage from "../assets/4.png";

const Disruptive = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Background Image */}
      <div
        className="mt-[0px] w-full overflow-hidden"
        style={{
          opacity: 1 - scrollY / 300,
          transition: "opacity 0.3s ease-out",
        }}
      >
        <img
          src={bgImage}
          alt="Disruptive Defense Technologies"
          className="w-full object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 p-6 flex justify-center items-center min-h-screen">
        {scrollY < 200 ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              Disruptive Defense Technologies
            </h1>
            <p>
              Scroll down to see what's next...
            </p>
          </div>
        ) : (
          <h1 className="text-4xl font-bold text-gray-600"> Coming Soon</h1>
        )}
      </div>
    </div>
  );
};

export default Disruptive;
