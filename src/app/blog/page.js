import Container from '../components/container';
import Image from 'next/image';
import Link from 'next/link';
import { comfortaa } from '../fonts';

const Blog = () => (
	<Container className="grid grid-cols-2 gap-12 pb-12">
    <BlogPost />
    <BlogPost />
    <BlogPost />
  </Container>
);

const BlogPost = () => (
  <div>
    <Image className="mb-6" src="https://placehold.co/596x336.svg" width={596} height={336} />
    <Link href="#" className={`${comfortaa.className} block text-2xl font-semibold text-teal-800 hover:text-teal-950 transition mb-2`}>In rutrum id magna et elit pulvinar.</Link>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat enim at imperdiet ornare. Aenean egestas neque velit, ac finibus nunc sollicitudin sed. Vestibulum bibendum facilisis malesuada. Maecenas vehicula auctor sagittis finibus nunc sollicitudin...
    </p>
  </div>
);

export default Blog;