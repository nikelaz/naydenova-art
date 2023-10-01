const Button = ({ href, onClick, children, isLarge }) => {
  const classes = `button ${isLarge ? 'button-lg' : ''}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
