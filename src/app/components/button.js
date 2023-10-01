const Button = ({ href, onClick, children }) => {
  const classNames = 'inline-block px-4 py-1 bg-teal-700 text-white rounded-sm hover:bg-teal-600 focus:bg-teal-800 transition';

  if (href) {
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
