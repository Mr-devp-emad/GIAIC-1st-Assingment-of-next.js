


function About() {
    return (
      <div className="items-center p-7">
        <div className="pt-10">
          <h1 className="text-2xl border-spacing-2 bg-slate-300">
            Hello, I'am Emad Ahmed and I am 23 years old. I am an IT student at GIAIC.
            Currently, I'm learning the essentials of HTML, CSS, JavaScript, TypeScript,
            and Tailwind CSS to create responsive and functional websites. Looking ahead,
            I'm also planning to dive deeper into frameworks like React and Next.js to enhance
            my ability to deliver high-quality modern web solutions. My goal is to combine my passion
            for learning with technical expertise to create efficient, user-friendly digital experiences.
            Let's collaborate and bring your ideas to life!
          </h1>
          <h2 className="text-xl font-bold mt-4">My Skills:</h2>
  
          {/* Flex container to align boxes horizontally */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {/* Each skill in a horizontally aligned flexbox */}
            <ol className="bg-lime-400 w-[300px] p-[50px] rounded-xl">
              <li className="text-2xl">HTML</li>
              <p> or HyperText Markup Language, is the standard language used to create and design documents on the web. </p>
              
            </ol>
  
            <ol className="bg-lime-400 w-[300px] p-[60px] rounded-xl">
              <li className="text-2xl">React</li>
              <p>React is a JavaScript library for building user interfaces, allowing developers to create reusable UI components and manage the state of applications efficiently.</p>
            </ol>
  
            <ol className="bg-lime-400 w-[300px] p-[60px] rounded-xl">
              <li className="text-2xl">TypeScript</li>
              <p>TypeScript is a superset of JavaScript that adds static typing, enabling developers to catch errors early and improve code quality while developing large-scale applications.</p>
            </ol>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
  