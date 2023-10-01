import Image from 'next/image';
import Slider, { Slide } from './components/slider';
import Card from './components/card';
import Container from './components/container';
import { comfortaa } from './fonts';

const Home = () => (
  <Container>
    <section className="pb-6">
      <Slider>
        <Slide>
          <Image src="https://placehold.co/1496x720.svg" width="1496" height="720" />
        </Slide>
      </Slider>
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
