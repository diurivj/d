import type { MetaFunction } from '@remix-run/node';
import { Form } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return {
    title: 'Contact Diego Vazquez',
  };
};

export default function Contact() {
  return (
    <section className='space-y-20'>
      <h1 className='font-merriweather font-bold text-4xl text-center mb-10'>
        Contact me
      </h1>
      <Form className='space-y-10'>
        <div className='flex flex-col space-y-2'>
          <label
            htmlFor='name'
            className='font-merriweather border border-black p-4 shadow-brutalism-md w-1/3 text-center'
          >
            Name
          </label>
          <input
            required
            type='text'
            id='name'
            name='name'
            placeholder='John Doe'
            className='border font-lato border-black w-full p-4 shadow-brutalism-md focus:outline-none focus:ring-1 focus:ring-black'
          />
        </div>

        <div className='flex flex-col space-y-2'>
          <label
            htmlFor='email'
            className='font-merriweather border border-black p-4 shadow-brutalism-md w-1/3 text-center'
          >
            Email
          </label>
          <input
            required
            type='email'
            id='email'
            name='email'
            placeholder='john@doe.com'
            className='border font-lato border-black w-full p-4 shadow-brutalism-md focus:outline-none focus:ring-1 focus:ring-black'
          />
        </div>

        <div className='flex flex-col space-y-2'>
          <label
            htmlFor='subject'
            className='font-merriweather border border-black p-4 shadow-brutalism-md w-1/3 text-center'
          >
            Subject
          </label>
          <input
            required
            type='text'
            id='subject'
            name='subject'
            placeholder='I want to hire you!'
            className='border font-lato border-black w-full p-4 shadow-brutalism-md focus:outline-none focus:ring-1 focus:ring-black'
          />
        </div>

        <div className='flex flex-col space-y-2'>
          <label
            htmlFor='message'
            className='font-merriweather border border-black p-4 shadow-brutalism-md w-1/3 text-center'
          >
            Message
          </label>
          <textarea
            required
            id='message'
            name='message'
            rows={7}
            placeholder='Hi Diego, I want to hire you!'
            className='border font-lato border-black w-full p-4 shadow-brutalism-md focus:outline-none focus:ring-1 focus:ring-black'
          />
        </div>

        <button
          type='submit'
          className='p-4 w-full shadow-brutalism-md border border-black bg-white font-merriweather text-black hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-black active:shadow-brutalism-sm active:translate-x-1 active:translate-y-1 ease-in-out duration-150'
        >
          Submit
        </button>
      </Form>
    </section>
  );
}
