import Slider from './components/slider';
import Card from './components/card';
import Container from './components/container';
import Image from 'next/image';

async function fetchSlides() {
  const res = await fetch('https://naydenova.art/cms/wp-json/wp/v2/homepage-slides?acf_format=standard&_fields=title,acf');
  const slides = await res.json();
  return Array.from(slides);
}

const Home = async () => {
  const slides = await fetchSlides();

  const sliderItems = slides.map(slide => <Image key={slide.Title} alt={slide.Title} src={slide.acf.image} className="block mx-auto" width="1496" height="720" />);

  return (
    <>
      <section className="pb-12">
        <Slider items={sliderItems} />
      </section>
      <Container>
        <section className="pt-12 pb-24">
          <h1 className="text-4xl text-teal-950 text-center mb-12">Latest works</h1>
          <div className="grid grid-cols-4 gap-x-8">
            <Card
              imageUrl="https://placehold.co/478x478.svg"
              imageAlt=""
              imageWidth={478}
              imageHeight={478}
              title="Lorem ipsum dolor sit amet"
              href="/gallery/test"
              ctaText="Explore"  
            />
            <Card
              imageUrl="https://placehold.co/478x478.svg"
              imageAlt=""
              imageWidth={478}
              imageHeight={478}
              title="Lorem ipsum dolor sit amet"
              href="/gallery/test"
              ctaText="Explore"  
            />
            <Card
              imageUrl="https://placehold.co/478x478.svg"
              imageAlt=""
              imageWidth={478}
              imageHeight={478}
              title="Lorem ipsum dolor sit amet"
              href="/gallery/test"
              ctaText="Explore"  
            />
            <Card
              imageUrl="https://placehold.co/478x478.svg"
              imageAlt=""
              imageWidth={478}
              imageHeight={478}
              title="Lorem ipsum dolor sit amet"
              href="/gallery/test"
              ctaText="Explore"  
            />
          </div>
        </section>
      </Container>
    </> 
  );
};

export default Home;
