import "../styles/form.css";

export default function Button({ label, type="button", variant="btn-primary", onClick }) {
  return (
    <button type={type} className={variant} onClick={onClick}>
      {label}
    </button>
  );
}
