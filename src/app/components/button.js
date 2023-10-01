const Button = ({ href, onClick, children, isLarge, disabled }) => {
  const classes = `button ${isLarge ? 'button-lg' : ''}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
};

export default Button;
