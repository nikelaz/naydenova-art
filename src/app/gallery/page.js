import Container from '../components/container';
import Card from '../components/card';
import FilterButton from '../components/filter-button';

const Gallery = () => (
  <Container className="pb-12">
    <h1 className="text-4xl font-semibold text-teal-950 text-center mb-12">Gallery</h1>
    <div className="flex gap-1 justify-center mb-7">
      <FilterButton isActive={true}>All</FilterButton>
      <FilterButton>Acryllic</FilterButton>
      <FilterButton>Digital</FilterButton>
    </div>
    <div className="grid grid-cols-3 gap-8">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </Container>
);

export default Gallery;
