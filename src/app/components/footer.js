import Image from 'next/image';
import Link from 'next/link';
import Container from '../components/container';

const Footer = () => (
  <footer className="bg-teal-800 py-12 text-white">
    <Container className="flex justify-between">
      <Image src="https://placehold.co/120x70.svg" width={120} height={70} />
      <div className="flex flex-col justify-center">
        <Link href="#">Privacy Policy</Link>
        <p>&copy; Naydenova.art 2023. All rights reserved.</p>
      </div>
    </Container>
  </footer>
);

export default Footer;
