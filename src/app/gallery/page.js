import Container from '../components/container';
import FilteredView from '../components/filtered-view';

async function fetchArt() {
  const res = await fetch('https://naydenova.art/cms/wp-json/wp/v2/art?acf_format=standard&_fields=id,slug,title,acf');
  const art = await res.json();
  return Array.from(art);
}

const Gallery = async () => {
  const artworks = await fetchArt();

  return (
    <Container className="pt-12 pb-24">
      <FilteredView artworks={artworks} />
    </Container>
  );
};

export default Gallery;
