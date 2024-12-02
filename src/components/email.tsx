import emailjs from 'emailjs-com';

export interface EmailPayload {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (payload: EmailPayload) => {
  const { name, email, message } = payload;

  try {
    const response = await emailjs.send(
      'service_lhw345q', // Replace with your EmailJS Service ID
      'template_d6qx9pm', // Replace with your EmailJS Template ID
      { name, email, message }, // Template parameters
      'iKaSM5RskGMs8dWLk' // Replace with your EmailJS Public Key
    );
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, error };
  }
};
