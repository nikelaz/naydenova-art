import Button from '@/app/components/button';
import Container from '@/app/components/container';
import { comfortaa } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import Slider from '@/app/components/slider';

async function fetchArtBySlug(slug) {
  const res = await fetch(`https://naydenova.art/cms/wp-json/wp/v2/art?acf_format=standard&_fields=id,title,acf,slug&slug=${slug}`);
  const art = await res.json();
  return art[0];
}

function getSliderItems(art) {
  const sliderItems = [];

  for (let i = 0; i < 6; i++) {
    const imgUrl = art.acf[`image_${i}`]; 
    if (imgUrl) sliderItems.push(imgUrl);
  }

  return sliderItems.map((item, index) => (
    <Image key={index} alt="" src={item} width={604} height={604} />
  ));
}

const ArtDetails = async ({params}) => {
  const art = await fetchArtBySlug(params.slug);
  const sliderItems = getSliderItems(art);

  return (
    <Container className="pt-12 pb-24 grid grid-cols-12 gap-x-8">
      <Slider className="col-start-2 col-end-7" items={sliderItems} />
      <div className="col-start-7 col-end-12">
        <Link href={`/gallery?category=${art.acf.category.slug}`} className='block mb-3 text-teal-950'>{art.acf.category.name}</Link>
        <h1 className={`${comfortaa.className} text-4xl font-semibold text-teal-950 mb-6`}>
          {art.title.rendered}
        </h1>
        <p className='mb-6'>{art.acf.size}</p>
        <p className='mb-6'>{art.acf.description}</p>
        <Button href={`/contact?art=${art.id}`} isLarge={true}>Request a Quote</Button>
      </div>
    </Container>
  );
};

async function fetchArtSlugs() {
  const res = await fetch('https://naydenova.art/cms/wp-json/wp/v2/art?_fields=slug');
  const slugs = await res.json();
  return slugs;
}

export async function generateStaticParams() {
  const posts = await fetchArtSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default ArtDetails;
