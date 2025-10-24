import React from "react";

interface CompanyContextModel {
  company: string;
  setCompany: (company: string) => void;
}

export const CompanyContext = React.createContext<CompanyContextModel>(undefined);

export const CompanyProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [company, setCompany] = React.useState("lemoncode");

  return (
    <CompanyContext.Provider value={{ company, setCompany }}>
      {children}
    </CompanyContext.Provider>
  );
};
