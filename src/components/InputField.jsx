import "../styles/form.css";

export default function InputField({ label, type="text", placeholder }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      {/* ✅ value fix: shows Marry Doe, not editable */}
      <input type={type} value={placeholder} readOnly />
    </div>
  );
}

