import { useState } from 'react';
import axios from 'axios';

const useContactForm = (submitButtonId) => {
  const [submitMessage, setSubmitMessage] = useState('');

  const submitForm = async (formData, reset) => {
    try {
      const submitButton = document.getElementById(submitButtonId);

      if (submitButton) {
        submitButton.innerText = 'Please Wait';
        submitButton.setAttribute('disabled', 'disabled');
      }

      const response = await axios.post(
        './contact-process.php',
        formData
      );

      if (submitButton) {
        submitButton.removeAttribute('disabled');
        submitButton.innerText = 'Submit';
      }

      if (response.data.status === 'OK') {
        setSubmitMessage(
          <span style={{ color: 'green', fontWeight: 'bold' }}>
            Email Sent Successfully!
          </span>
        );
        reset(); // Reset the form values
      } else {
        setSubmitMessage(
          <span style={{ color: 'red' }}>
            {response.data.message}
          </span>
        );
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitMessage(
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          Failed to send email. Please try again.
        </span>
      );
    }
  };

  return { submitMessage, submitForm };
};

export default useContactForm;
