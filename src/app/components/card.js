import Image from 'next/image';
import Link from 'next/link';
import { comfortaa } from '../fonts';
import Button from '../components/button';

const Card = ({ imageUrl, imageAlt, imageWidth, imageHeight, title, href, ctaText, isHidden}) => {
  if (isHidden) return null;

  return (
    <div className="text-center">
      <figure className="flex flex-col items-center">
        <Image className="block mb-5" alt={imageAlt} src={imageUrl} width={imageWidth} height={imageHeight} />
        <figcaption className={`${comfortaa.className} font-semibold text-lg text-teal-950 leading-4 mb-5`}>{title}</figcaption>
      </figure>
      <Button href={href}>{ctaText || 'Explore'}</Button>
    </div>
  );
};

export default Card;
