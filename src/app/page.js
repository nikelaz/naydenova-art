import Slider from './components/slider';
import Card from './components/card';
import Container from './components/container';
import { comfortaa } from './fonts';
import Image from 'next/image';

const sliderItems = [
  <Image key="1" alt="" src="https://placehold.co/1496x720.svg" width="1496" height="720" />,
  <Image key="2" alt="" src="https://placehold.co/1496x720.svg" width="1496" height="720" />,
  <Image key="3" alt="" src="https://placehold.co/1496x720.svg" width="1496" height="720" />
];

const Home = () => (
  <Container>
    <section className="pb-6">
      <Slider items={sliderItems} />
    </section>
    <section className="pt-6 pb-12">
      <h1 className={`${comfortaa.className} text-4xl font-semibold text-teal-950 text-center mb-12`}>Latest works</h1>
      <div className="grid grid-cols-4 gap-x-8">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  </Container>
);

export default Home;
