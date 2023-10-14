import Image from 'next/image';
import Link from 'next/link';
import Container from '../components/container';
import textLogo from '../../assets/logo-text.svg';

const Footer = () => (
  <footer className="py-10 bg-grey-50">
    <Container className="flex flex-col md:flex-row justify-between">
      <Image src={textLogo} alt="naydenova.studio" width="180" />
      <div className="flex flex-col justify-center">
        <Link href="#" className='block mb-2'>Privacy Policy</Link>
        <p>&copy; Naydenova.studio 2023. All rights reserved.</p>
      </div>
    </Container>
  </footer>
);

export default Footer;
