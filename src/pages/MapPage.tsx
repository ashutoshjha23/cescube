import React, { useState, useEffect } from "react";

const MapPage = () => {
  const [loading, setLoading] = useState(true);

  // Disable page scroll completely
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 overflow-hidden relative">

      {/* Loader */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-400 border-t-transparent"></div>
        </div>
      )}

      {/* FULL SCREEN IFRAME */}
      <iframe
        src="https://lookerstudio.google.com/embed/reporting/8fdba78f-cd2a-4a3f-a370-f7f9386d6cfb/page/sCofF"
        className={`w-full h-full transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        frameBorder="0"
        allowFullScreen
        style={{ border: 0 }}
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        onLoad={() => setLoading(false)}
      ></iframe>

    </div>
  );
};

export default MapPage;
