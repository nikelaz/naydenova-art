import Link from 'next/link';

const Button = ({ href, onClick, children, isLarge, disabled }) => {
  const classes = `button ${isLarge ? 'button-lg' : ''}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
};

export default Button;
