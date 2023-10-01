import Button from '@/app/components/button';
import Container from '@/app/components/container';
import { comfortaa } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import Slider from '@/app/components/slider';

const sliderItems = [
  <Image key="1" alt="" src="https://placehold.co/604x604.svg" width={604} height={604} />,
  <Image key="2" alt="" src="https://placehold.co/604x604.svg" width={604} height={604} />,
  <Image key="2" alt="" src="https://placehold.co/604x604.svg" width={604} height={604} />
];

const ArtDetails = () => (
  <Container className="pb-12 grid grid-cols-2 gap-x-8">
    <Slider items={sliderItems} />
    <div>
      <Link href="/gallery" className='block mb-3 text-teal-950'>Type</Link>
      <h1 className={`${comfortaa.className} text-4xl font-semibold text-teal-950 mb-6`}>
        Title
      </h1>
      <p className='mb-6'>Size</p>
      <p className='mb-6'>Aliquam eget dictum turpis. Etiam tristique luctus elit quis aliquet. Praesent lobortis malesuada tortor, eu efficitur ex sodales vel. Etiam volutpat nibh nec tortor placerat, in eleifend purus sodales. Phasellus a rhoncus orci. Curabitur magna est, volutpat a urna id, scelerisque tempor lorem. Morbi finibus porta erat.</p>
      <Button href="/contact">Request a Quote</Button>
    </div>
  </Container>
);

export default ArtDetails;
