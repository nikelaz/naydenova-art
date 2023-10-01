import Container from '../components/container';
import Image from 'next/image';

const About = () => (
	<Container className="flex justify-center items-start gap-8 pb-12">
    <Image src="https://placehold.co/450x600.svg" width={450} height={600} />
    <div className="flex-1 prose max-w-none">
      <h1>In rutrum id magna et pulvinar.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat enim at imperdiet ornare. Aenean egestas neque velit, ac finibus nunc sollicitudin sed. Vestibulum bibendum facilisis malesuada. Maecenas vehicula auctor sagittis. Integer non elit ultricies, varius nulla vel, viverra arcu. Sed pharetra commodo magna, eu dapibus risus rutrum sed. Proin feugiat vel nibh eget lacinia. Duis nunc elit, tincidunt in eros vitae, imperdiet aliquam lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut magna ut mauris tincidunt finibus. Vivamus convallis sem erat, id placerat leo volutpat eget. Proin tristique tempus orci, nec efficitur purus consectetur fringilla. Cras sodales lectus tincidunt varius efficitur. Morbi placerat erat sit amet tincidunt viverra. Nunc in augue id arcu placerat aliquam.
      </p>
      <h2>Praesent sed nibh viverra</h2>
      <p>
        Praesent ultrices, ligula non viverra luctus, est dolor molestie velit, quis rutrum leo turpis vel enim.
      </p>
    </div>
  </Container>
);

export default About;