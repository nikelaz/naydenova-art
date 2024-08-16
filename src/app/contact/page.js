import ContactForm from '../components/contact-form';
import Container from '../components/container';
import Image from 'next/image';
import contactImage from '../../assets/dora-naydenova-contact-image.webp';

const Contact = () => (
  <Container className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-8 pt-12 pb-24 px-5">
    <div className="xl:col-start-3 xl:col-end-6">
      <Image src={contactImage} width={350} height={300} className="mb-5" alt="Дора Найденова" />
      <p className="mb-2">Имаш идея за картина?</p>
      <p>Остави ми запитване.</p>
    </div>
    <div className="xl:col-start-7 xl:col-end-11">
      <ContactForm />
    </div>
  </Container>
);

export default Contact;
