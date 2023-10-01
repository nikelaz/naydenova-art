import Container from '../components/container';
import Card from '../components/card';
import FilterButton from '../components/filter-button';

async function fetchArt() {
  const res = await fetch('https://naydenova.art/cms/wp-json/wp/v2/art?acf_format=standard&_fields=title,acf');
  const art = await res.json();
  return Array.from(art);
}

const Gallery = async () => {
  const art = await fetchArt();
  console.log('art', art);
  return (
    <Container className="pt-12 pb-24">
      <div className="flex gap-6 justify-center mb-12">
        <FilterButton isActive={true}>All</FilterButton>
        <FilterButton>Acryllic</FilterButton>
        <FilterButton>Digital</FilterButton>
      </div>
      <div className="grid grid-cols-3 gap-8">
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
    </Container>
  );
};

export default Gallery;
