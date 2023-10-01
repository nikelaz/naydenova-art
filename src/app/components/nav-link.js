'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ActiveLink = ({children, ...rest}) => {
  const { href, className } = rest;
  const pathName = usePathname();
  const isActive = pathName === href;
  
  let classes = '';

  if (className) classes += className;
  if (isActive) classes += ' is-active';
  
  return (
    <Link {...rest} className={classes}> 
      {children}
    </Link>
  );
};

export default ActiveLink;
