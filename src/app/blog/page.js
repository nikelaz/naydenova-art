import Container from '../components/container';
import Image from 'next/image';
import Link from 'next/link';
import { comfortaa } from '../fonts';
import config from '../config';
import './page.sass';

async function fetchPosts() {
  const res = await fetch(`${config.apiUrl}/wp/v2/posts?_embed=wp:featuredmedia&per_page=100`);
  const posts = await res.json();
  return posts;
}

const Blog = async () => {
  const posts = await fetchPosts();

  return (
	<Container className="grid grid-cols-1 xl:grid-cols-12 gap-8 pt-12 pb-24">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:col-start-3 xl:col-end-11">
      {posts.map(post => <BlogPost title={post.title.rendered} imageUrl={post['_embedded']['wp:featuredmedia'][0]['source_url']} slug={post.slug} desc={post.excerpt.rendered} key={post.id} />)}
    </div>
  </Container>
  );
};

const BlogPost = ({slug, imageUrl, title, desc}) => (
  <div>
    <Link href={`/blog/${slug}`} className="blog_image mb-5">
      <Image className="mb-6" src={imageUrl} alt="thumbnail" width={596} height={336} />
    </Link>
    <Link href={`/blog/${slug}`} className={`${comfortaa.className} block text-2xl font-semibold text-teal-800 hover:text-teal-950 transition mb-2 no-underline`}>{title}</Link>
    <div className="text-justify" dangerouslySetInnerHTML={{__html: desc}} />
  </div>
);

export default Blog;