"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUploadContext } from '../context/UploadContext';

export default function UploadForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [file, setFile] = useState<File | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { setResponseData } = useUploadContext();
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file || !firstName || !lastName || !dateOfBirth) {
      alert("Please fill in all fields and upload a file.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('dateOfBirth', dateOfBirth);

    try {
      const res = await fetch('http://localhost:5005/api/upload', {
        method: 'POST',
        body: formData,
      });

      const resultData = await res.json();
      setResponseData(resultData);
      router.push('/result');
    } catch (error) {
      console.error('Fetch error:', error);
      alert('An error occurred while uploading the file. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Upload Your Document</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border rounded w-full p-3"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border rounded w-full p-3"
          />
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="border rounded w-full p-3"
          />
          <input
            type="file"
            onChange={handleFileChange}
            className="border rounded w-full p-3"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold">
            Upload and Process
          </button>
        </form>
      </div>
    </div>
  );
}
