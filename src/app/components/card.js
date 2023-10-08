import Image from 'next/image';
import { comfortaa } from '../fonts';
import Button from '../components/button';
import Link from 'next/link';
import './card.sass';

const Card = ({ imageUrl, imageAlt, imageWidth, imageHeight, title, href, ctaText, isHidden}) => {
  if (isHidden) return null;

  return (
    <div className="text-center">
      <Link href={href} aria-label={ctaText || 'Explore artwork'}>
        <figure className="flex flex-col items-center card_image mb-5">
          <Image className="block" alt={imageAlt} src={imageUrl} width={imageWidth} height={imageHeight} />
        </figure>
      </Link>
      <div className={`${comfortaa.className} font-semibold text-lg text-teal-950 leading-4 mb-5`}>{title}</div>
      <Button href={href}>{ctaText || 'Explore'}</Button>
    </div>
  );
};

export default Card;
