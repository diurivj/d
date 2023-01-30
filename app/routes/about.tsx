import type { MetaFunction } from '@remix-run/node';
import horns from '~/images/horns.svg';

const EXPERIENCE: {
  jobTitle: string;
  company: string;
  duration: string;
  description: string[];
}[] = [
  {
    jobTitle: 'Lead Software Engineer',
    company: 'SuperRare Labs',
    duration: 'January 2022 - January 2023',
    description: [
      `In my third year as Lead Software Engineer I made decisions about
      which projects would have the most impact and which would be most
      worthwhile, evaluating the time it would take to execute the
      requested features.`,
      `We created cross-functional pods and I was the leader of one of
      them. I reviewed all the work executed by the members of the pod,
      deciding and approving the additions to the codebase.`,
      `I was the main communication between project managers, designers,
      engineering managers and the pod.`,
      `I was in charge of the projects
      assigned to my pod, being responsable of assessing the project,
      creating tickets, deploying an environment so stakeholders could
      see the progress of the project and making the decisions to set
      deadlines with the product team and release the changes to
      production.`,
    ],
  },
  {
    jobTitle: 'Teach Lead',
    company: 'SuperRare Labs',
    duration: 'January 2021 - December 2021',
    description: [
      `In my second year as Tech Lead I spent part of my time recruiting in order to build a solid team of frontend developers. 
      I trained new developers and built cross-functional teams.`,
      `I managed teams and made decisions to deliver projects in an efficient, scalable, 
      performant and timely manner. I optimized the source code, rewriting part of it and proposing new technologies to use.`,
      `I estimated several projects between project managers, designers and developers
      in order to create tasks tickets for the frontend and backend developers`,
    ],
  },
  {
    jobTitle: 'Senior Software Engineer',
    company: 'SuperRare Labs',
    duration: 'July 2020 - December 2020',
    description: [
      `I was the first engineer hired by the company. In my first year at SuperRare Labs, 
      most of my work consisted of consolidating clean and scalable code.`,
      `Started creating documentation around the frontend and backend projects, 
      creating the internal conventions for writing code and the internal patterns to follow for scaling the product.`,
      `Together with the CTO, we created the smart contracts that were implemented in SuperRare's marketplace for over a year.`,
    ],
  },
  {
    jobTitle: 'Mid Frontend Developer',
    company: 'Magic Mirror',
    duration: 'January 2020 - June 2020',
    description: [
      `Developed the website of the company, integrated many payment methods to our client 
      applications and improved workflows with different management tools.`,
    ],
  },
  {
    jobTitle: 'Lead Teacher',
    company: 'Ironhack',
    duration: 'March 2019 - June 2020',
    description: [
      `Improved the curriculum of the web development course and improved student satisfaction metrics. 
      Created new and updated learning materials for the web development curriculum.
      Supported and helped more than 300 students.`,
    ],
  },
  {
    jobTitle: 'Teaching Assistant',
    company: 'Ironhack',
    duration: 'June 2018 - February 2019',
    description: [
      `Created and developed a platform for managing internal projects.
      Supported and helped more than 100 students, developing performance solutions for their personal projects.
      Designed a web development curriculum for Google Mexico.`,
    ],
  },
];

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
          <h1 className='font-merriweather font-bold text-3xl md:text-6xl'>
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
