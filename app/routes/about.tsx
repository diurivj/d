import type { MetaFunction } from '@remix-run/node';
import { EXPERIENCE } from '~/utils/experience_data';
import horns from '~/images/horns.svg';

export const meta: MetaFunction = () => {
  return {
    title: 'About Diego Vazquez',
  };
};

export default function About() {
  return (
    <div className='space-y-24'>
      {/* Header */}
      <section className='flex flex-col space-y-8 items-center md:flex-row-reverse md:space-y-0 md:items-center md:justify-evenly'>
        <img src={horns} alt='horns' className='h-40 w-40 -ml-4' />
        <article className='space-y-2'>
          <h1 className='font-merriweather font-bold text-4xl md:text-6xl'>
            Hi, I'm Diego Vazquez, I'm a software engineer.
          </h1>
          <p className='font-lato text-xl opacity-60 md:text-2xl'>
            I am passionate about creating compelling solutions through code.
          </p>
        </article>
      </section>

      {/* Alter title */}
      <section>
        <article className='space-y-4'>
          <h2 className='font-merriweather font-bold text-2xl md:text-4xl'>
            About me
          </h2>
          <p className='font-lato text-lg text-justify md:text-xl'>
            I started my journey in this career back in 2011 when I was learning
            Assembly and got a technician degree in Digital Systems.
          </p>
          <p className='font-lato text-lg text-justify md:text-xl'>
            After that, I started studying Communications and Electronics
            Engineering but I realized the school was not for me,{' '}
            <a
              target='_blank'
              rel='noreferrer'
              className='italic underline'
              href='https://en.wikipedia.org/wiki/2017_Puebla_earthquake'
            >
              (and also the school got demolished by an earthquake)
            </a>{' '}
            so I quit.
          </p>
          <p className='font-lato text-lg text-justify md:text-xl'>
            Some months after I decided to study Web Development in{' '}
            <a
              target='_blank'
              rel='noreferrer'
              className='underline'
              href='https://www.ironhack.com/en/mexico-city'
            >
              Ironhack Mexico.
            </a>{' '}
            Ahh, almost forgot, I'm from Mexico.
          </p>
        </article>
      </section>

      {/* Experience */}
      <section>
        <h2 className='font-merriweather font-bold text-2xl mb-4 md:text-4xl'>
          Experience
        </h2>
        <article className='space-y-14'>
          {EXPERIENCE.map((experience, idx) => (
            <div className='space-y-4' key={idx}>
              <span>
                <h4 className='font-merriweather font-bold text-xl md:text-2xl'>
                  {experience.jobTitle}
                </h4>
                <p className='font-lato italic md:text-lg'>
                  {experience.company} | {experience.duration}
                </p>
              </span>
              {experience.description.map((description) => (
                <p
                  className='font-lato text-lg text-justify md:text-xl'
                  key={description}
                >
                  {description}
                </p>
              ))}
            </div>
          ))}
        </article>
      </section>
    </div>
  );
}
