const Container = ({children, className}) => (
  <div className={`container mx-auto pl-5 pr-5 ${className}`}>
    {children}
  </div>
);

export default Container;
