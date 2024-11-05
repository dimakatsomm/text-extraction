"use client";

import { createContext, useContext, useState } from 'react';
import { IUploadResult } from '../interfaces/UploadResult';

interface UploadContextType {
  responseData: IUploadResult | null;
  setResponseData: React.Dispatch<React.SetStateAction<IUploadResult | null>>;
}

const UploadContext = createContext<UploadContextType | undefined>(undefined);

export const UploadProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [responseData, setResponseData] = useState<IUploadResult | null>(null);
  return (
    <UploadContext.Provider value={{ responseData, setResponseData }}>
      {children}
    </UploadContext.Provider>
  );
};

export const useUploadContext = () => {
  const context = useContext(UploadContext);
  if (!context) {
    throw new Error('useUploadContext must be used within an UploadProvider');
  }
  return context;
};
