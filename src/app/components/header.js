import Image from 'next/image';
import Link from 'next/link'
import Container from './container';
import logo from '../../assets/logo.svg';
import Nav from './nav';
import './header.sass';

const Header = () => (
  <Container>
    <header className="flex justify-between items-center pt-5 pb-5 sm:pt-8 sm:pb-12 sm:flex-col">
      <Link href="/" className="block sm:mb-7 hover:opacity-80 transition">
        <Image className="w-48 sm:w-auto" src={logo} alt="naydenova.studio logo" width={240} height={111} />
      </Link>
      <Nav />
    </header>
  </Container>
);

export default Header;
