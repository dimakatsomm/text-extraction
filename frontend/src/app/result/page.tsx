"use client"

import { useUploadContext } from '../context/UploadContext';

export default function Result() {
  const { responseData } = useUploadContext();

  if (!responseData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="max-w-md w-full bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">No Data Available</h1>
          <p>Please upload a document to see the results.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Results</h1>
        <p><strong>Full Name:</strong> {responseData.fullName}</p>
        <p><strong>Age:</strong> {responseData.age}</p>
        <h2 className="mt-4 font-semibold">Extracted Text:</h2>
        <p className="mt-2">{responseData.extractedText}</p>
      </div>
    </div>
  );
}
