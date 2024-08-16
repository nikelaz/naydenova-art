'use client';
import Field, { fieldTypes } from '../components/field';
import Button from '../components/button';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const searchParams = useSearchParams();
  const product = searchParams.get('art');
  const productUrl = product ? `https://naydenova.studio/gallery/${product}` : '';

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSuccessMessage(null);
    setErrorMessage(null);
    setIsLoading(true);
    
    const formData = new FormData(event.target);

    const reqOptions = {
      method: 'POST',
      body: formData
    };
    
    const res = await fetch('https://naydenova.studio/cms/wp-json/contact-form-7/v1/contact-forms/33/feedback', reqOptions);
    const json = await res.json();

    if (!json.message) {
      setIsLoading(false);
      return;
    }

    if (json.status === 'mail_sent') {
      setSuccessMessage(json.message);
      setIsLoading(false);
      return;
    }
    
    setErrorMessage(json.message);
    setIsLoading(false);
  };

  if (successMessage) {
    return (
      <div className="bg-grey-50 p-5 mb-5 rounded">
        <div className="flex items-center gap-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={34} height={34}>
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
          </svg>
          <div className="comfortaa text-xl font-semibold">{successMessage}</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Field
          id="full_name"
          label="Име"
          required={true}
          type={fieldTypes.TEXT}
        />

        <Field
          id="email"
          label="Имейл"
          required={true}
          type={fieldTypes.EMAIL}
        />

        <Field
          id="phone"
          label="Телефон"
          required={true}
          type={fieldTypes.TEL}
        />

        <Field
          id="message"
          label="Съобщение"
          required={false}
          type={fieldTypes.TEXTAREA}
        />

        <input type="hidden" name="product" defaultValue={productUrl}/>

        { errorMessage && <p class="text-red mb-2">{errorMessage}</p> }

        <Button isLarge={true} disabled={isLoading}>{isLoading ? 'Моля изчакайте...' : 'Изпрати'}</Button>
      </form>
    </>
  );
};

export default ContactForm;
