import React from 'react'

import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const phoneNumber = '+201030065440'; 
    const message = `Hello, my phone number is ${data.phone}. ${data.message}`;
    const encodedMessage = encodeURIComponent(message);
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <>
    <div className='container text-white my-5 w-75 mx-auto'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className='fs-5 fw-smibold'>Phone Number:</label>
        <input 
        className='form-control w-100 rounded-3 border border-3 border-warning my-3'
          type="text" 
          {...register('phone', { required: true, pattern: /^01[0125][0-9]{8}$/ })} 
        />
        {errors.phone && <span>Please enter a valid phone number.</span>}
      </div>
      <div>
        <label className='fs-5 fw-smibold'>Your Message:</label>
        <textarea 
         className='form-control w-100  rounded-3 border border-3 border-warning my-3 align-text-top'
          {...register('message', { required: true })} 
        />
        {errors.message && <span>Please enter a message.</span>}
      </div>
      <div className=''>
      <button className='btn btn-outline-warning fs-5 fw-smibold' type="submit">Send via WhatsApp</button></div>
    </form>
    </div>
    </>
  )
}

export default Contact