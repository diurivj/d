type Experience = {
  jobTitle: string;
  company: string;
  duration: string;
  description: string[];
};

export const EXPERIENCE: Experience[] = [
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
