import Image from 'next/image';
import Link from 'next/link';
import Container from './container';
import { comfortaa } from '../fonts';

const Header = () => (
  <Container>
    <header className="flex flex-col items-center py-12">
      <Link href="/" className="block mb-7">
        <Image src="https://placehold.co/240x140.svg" width={240} height={140} />
      </Link>
      <nav className={`flex gap-x-10 ${comfortaa.className} font-light text-lg`}>
        <Link href="/gallery">Gallery</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  </Container>
);

export default Header;
