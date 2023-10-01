import Image from 'next/image';
import Link from 'next/link';
import { comfortaa } from '../fonts';
import Button from '../components/button';

const Card = () => (
  <div className="text-center">
    <figure className="flex flex-col items-center">
      <Image className="block mb-5" src="https://placehold.co/478x478.svg" width={478} height={478} />
      <figcaption className={`${comfortaa.className} font-semibold text-lg text-teal-950 leading-4 mb-5`}>Lorem Ipsum Dolor sit Amet</figcaption>
    </figure>
    <Button href="#">Explore</Button>
  </div>
);

export default Card;
