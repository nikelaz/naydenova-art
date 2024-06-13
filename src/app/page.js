import Slider from './components/slider';
import Card from './components/card';
import Container from './components/container';
import Image from 'next/image';
import config from './config';
import './page.sass';

async function fetchSlides() {
  const res = await fetch(`${config.apiUrl}/wp/v2/homepage-slides?acf_format=standard&_fields=title,acf`);
  const slides = await res.json();
  return Array.from(slides);
}

async function fetchLatestArt() {
  const res = await fetch(`${config.apiUrl}/wp/v2/art?acf_format=standard&_fields=id,slug,title,acf&per_page=4`);
  const art = await res.json();
  return Array.from(art);
}

const Home = async () => {
  const [slides, art] = await Promise.all([
    fetchSlides(),
    fetchLatestArt()
  ]);

  const sliderItems = slides.map(slide => (
    <div className="slider_image" key={slide.Title}>
      <Image alt={slide.Title} src={slide.acf.image} className="block mx-auto" width="1496" height="720" />
    </div>
  ));

  return (
    <>
      <section className="pb-12">
        <Slider items={sliderItems} />
      </section>
      <Container>
        <section className="pt-4 pb-10 md:pt-12 md:pb-24">
          <h1 className="text-4xl text-teal-950 text-center mb-12">Какво Ново?</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {art.map(item => (
              <Card
                key={item.id}
                imageUrl={item.acf.image_1}
                imageAlt="thumbnail"
                imageWidth={478}
                imageHeight={478}
                title={item.title.rendered}
                href={`/gallery/${item.slug}`}
                ctaText="Виж Повече"  
              />
            ))}
          </div>
        </section>
      </Container>
    </> 
  );
};

export default Home;
