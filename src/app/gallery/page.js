import Container from '../components/container';
import FilteredView from '../components/filtered-view';
import config from '../config';

async function fetchArt() {
  const res = await fetch(`${config.apiUrl}/wp/v2/art?acf_format=standard&_fields=id,slug,title,acf&per_page=100`);
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
