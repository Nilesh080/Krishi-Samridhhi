import React from "react";

const DiseaseChecker = () => {
  return (
    <div className="relative w-full h-screen">
      <iframe
        src="https://8fd01a46fcebf2944b.gradio.live/?__theme=light"
        title="Disease Checker"
        width="100%"
        height="100%"
        className="absolute top-0 left-0 w-full h-[92%] border-0"
        allow="fullscreen"
      ></iframe>
    </div>
  );
};

export default DiseaseChecker;
// import React, { useEffect } from "react";

// const DiseaseDetection = () => {
//   useEffect(() => {
//     window.open("http://localhost:7860", "_blank");
//   }, []);

//   return <div>Redirecting to Plant Disease Detection...</div>;
// };

// export default DiseaseDetection;
