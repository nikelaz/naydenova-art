import ContactForm from '../components/contact-form';
import Container from '../components/container';
import Image from 'next/image';

const Contact = () => (
  <Container className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-8 pt-12 pb-24 px-5">
    <div className="xl:col-start-3 xl:col-end-6">
      <Image src="https://placehold.co/350x300.svg" width={350} height={300} className="mb-5" />
      <p className="mb-2">Contact me when you fill the contact form</p>
      <p>Or email me at <a href="mailto:dora@naydenova.studio">dora@naydenova.studio</a></p>
    </div>
    <div className="xl:col-start-7 xl:col-end-11">
      <ContactForm />
    </div>
  </Container>
);

export default Contact;
