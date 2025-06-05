export default function CompanyCard({ company }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
      <h3 className="text-lg font-bold">{company.name}</h3>
      <p className="text-gray-600">📍 {company.location}</p>
    </div>
  );
}
