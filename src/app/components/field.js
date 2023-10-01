export const fieldTypes = {
  TEXT: 'TEXT',
  EMAIL: 'EMAIL',
  TEXTAREA: 'TEXTAREA'
};

const Field = ({ id, label, type, required }) => {
  const fieldStyles = "block border border-grey-100 focus:border-grey-500 transition outline-none rounded w-full py-1 px-3";

  return (
    <div className="mb-4">
      <label id={id} className="block text-sm">{label}</label>
      { type === fieldTypes.TEXT || type === fieldTypes.EMAIL ? <input type={type.toLowerCase()} className={fieldStyles} id={id} required={required} name={id} /> : null }
      { type === fieldTypes.TEXTAREA ? <textarea rows="5" className={fieldStyles} id={id} required={required} name={id} /> : null }
    </div>
  );
};

export default Field;