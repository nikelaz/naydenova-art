import Image from 'next/image';
import Link from 'next/link'
import NavLink from './nav-link';
import Container from './container';
import { comfortaa } from '../fonts';
import logo from '../../assets/logo.svg';
import './header.sass';

const Header = () => (
  <Container>
    <header className="flex flex-col items-center pt-8 pb-12">
      <Link href="/" className="block mb-7 hover:opacity-80 transition">
        <Image src={logo} alt="naydenova.studio logo" width={240} height={111} />
      </Link>
      <nav className={`nav flex gap-x-10 ${comfortaa.className} font-light text-lg`}>
        <NavLink href="/gallery" className='navLink'>Gallery</NavLink>
        <NavLink href="/about" className='navLink'>About</NavLink>
        <NavLink href="/blog" className='navLink'>Blog</NavLink>
        <NavLink href="/contact" className='navLink'>Contact</NavLink>
      </nav>
    </header>
  </Container>
);

export default Header;
