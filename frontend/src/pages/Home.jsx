
import { useEffect, useState } from "react";
import CompanyCard from "../components/CompanyCard";
import CompanyForm from "../components/CompanyForm";

export default function Home() {
  const [companies, setCompanies] = useState([]);

  const fetchCompanies = async () => {
    const res = await fetch("http://localhost:8000/companies");
    const data = await res.json();
    setCompanies(data);
  };

  const addCompany = async (company) => {
    const res = await fetch("http://localhost:8000/companies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(company),
    });
    const newCompany = await res.json();
    setCompanies([...companies, newCompany]);
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <CompanyForm onAdd={addCompany} />
      <div className="grid grid-cols-1 gap-4">
        {companies.map((c) => (
          <CompanyCard key={c.id} company={c} />
        ))}
      </div>
    </div>
  );
}
