import Container from '../components/container';
import Image from 'next/image';
import Field, { fieldTypes } from '../components/field';
import Button from '../components/button';

const Contact = () => (
  <Container className="grid grid-cols-12 gap-8 pt-12 pb-24 px-5">
    <div className="col-start-3 col-end-6">
      <Image src="https://placehold.co/350x300.svg" width={350} height={300} className="mb-5" />
      <p className="mb-2">Contact me when you fill the contact form</p>
      <p>Or email me at <a href="mailto:dora@naydenova.art">dora@naydenova.art</a></p>
    </div>
    <div className="col-start-7 col-end-11">
      <form action="#">
        <Field
          id="name"
          label="Name"
          required={true}
          type={fieldTypes.TEXT}
        />

        <Field
          id="email"
          label="Email"
          required={true}
          type={fieldTypes.EMAIL}
        />

        <Field
          id="phone"
          label="Phone"
          required={true}
          type={fieldTypes.TEXT}
        />

        <Field
          id="message"
          label="Message"
          required={false}
          type={fieldTypes.TEXTAREA}
        />

        <Button isLarge={true}>Submit</Button>
      </form>
    </div>
  </Container>
);

export default Contact;
