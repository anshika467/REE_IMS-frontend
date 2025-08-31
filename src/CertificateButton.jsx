import axios from "axios";
import React from "react";

const CertificateButton = ({ applicationId }) => {
  const handleDownload = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/api/generateCertificate/download/${applicationId}`,
        {
          responseType: "blob", // Important for binary data
        }
      );

      const file = new Blob([response.data], { type: "application/pdf" });
      const fileURL = window.URL.createObjectURL(file);

      const link = document.createElement("a");
      link.href = fileURL;
      link.setAttribute("download", `certificate_${applicationId}.pdf`);
      document.body.appendChild(link);
      link.click();

      //Cleanup

      document.body.removeChild(link);
      window.URL.revokeObjectURL(fileURL);


    } catch (error) {
      console.error("Error downloading certificate:", error);
      alert("Something went wrong while downloading the certificate.");
    }
  };

  return (
    <div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={handleDownload}>
        Download Certificate
      </button>
    </div>
  );
};

export default CertificateButton;
