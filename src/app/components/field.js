export const fieldTypes = {
  TEXT: 'TEXT',
  EMAIL: 'EMAIL',
  TEXTAREA: 'TEXTAREA'
};

const Field = ({ id, label, type, required }) => {
  const fieldStyles = "block border rounded w-96 py-1";

  return (
    <div className="mb-3">
      <label id={id} className="block">{label}</label>
      { type === fieldTypes.TEXT || type === fieldTypes.EMAIL ? <input type={type.toLowerCase()} className={fieldStyles} id={id} required={required} name={id} /> : null }
      { type === fieldTypes.TEXTAREA ? <textarea className={fieldStyles} id={id} required={required} name={id} /> : null }
    </div>
  );
};

export default Field;