import React from 'react';

const About = () => {
  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-red-500">Hi,</h1>
      <p className='font-semibold'>
        My Portfolio:{" "}
        <a href="https://tanisha-saxena-portfolio.netlify.app/" target='_blank' className="text-blue-600 hover:underline ">
          https://tanisha-saxena-portfolio.netlify.app/
        </a>
      </p>
      <p className="mb-2 mt-5">
        My name is <span className="font-bold text-red-500">Tanisha Saxena</span>, currently pursuing B.TECH CSE final year. I am eagerly looking for Frontend Web Development Internships to get hands-on experience in the industry and to unfold my potential in contributing to the success of your organization.
      </p>
      <p className="mb-2">
        I am a tech enthusiast with deep knowledge of front-end development, proficient in HTML, CSS, JavaScript, and React.js. I have extensive experience using React.js and its libraries, including React Router, Redux, and Context API, to build dynamic and responsive web applications. My design skills encompass UI/UX principles, ensuring that applications are both visually appealing and user-friendly. I am familiar with design frameworks like Tailwind CSS, Material-UI, and Bootstrap to create clean, efficient, and scalable code. Additionally, I am aware of the basics of Framer-Motion for creating animations.
      </p>
      <p className="mb-2">
        Apart from technical proficiencies, I excel in articulating ideas and fostering more impactful and clear communication. I outshine in collaborative environments and contribute actively to team success.
      </p>
      <p className="mb-4">Thanking you,</p>
      <p className="font-bold">Tanisha Saxena</p>
      <p>
        <a href="mailto:tanishasaxena2412@gmail.com" className="text-blue-600 hover:underline">
          tanishasaxena2412@gmail.com
        </a>
      </p>
      <p>9997377223</p>
      <p>Bareilly, UP, India</p>
     
    </div>
  );
};

export default About;
