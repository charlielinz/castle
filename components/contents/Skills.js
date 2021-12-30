import { useState } from "react";

const Skills = () => {
  const skills = [
    {
      icon: "fab fa-python text-5xl text-yellow-400",
      name: "Python",
      description:
        "As a self-study programmer, I choose Python to be my primary programming language.",
    },
    {
      icon: "fab fa-html5 text-5xl text-yellow-600",
      name: "HTML",
      description:
        "To organize a nice structure on your page, HTML is a must-have language.",
    },
    {
      icon: "fab fa-css3-alt text-5xl text-blue-600",
      name: "CSS",
      description:
        "CSS is your best friend to get HTML elements dressed. I used to use Bootstrap as my CSS framework, now I'm using TailwindCSS.",
    },
    {
      icon: "fab fa-js text-5xl text-yellow-300",
      name: "JavaScript",
      description:
        "On client side we got HTML and CSS, but still need some Javascript to make it lively. I use React + Next.js for my first option. React easy to learn and Next.js help me handle routing.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = skills.length;

  const nextCard = () => {
    setCurrent((current) => {
      if (current === length - 1) {
        return 0;
      } else {
        return current + 1;
      }
    });
  };
  const previousCard = () => {
    setCurrent((current) => {
      if (current === 0) {
        return length - 1;
      } else {
        return current - 1;
      }
    });
  };

  const cardIndexArray = (num) => {
    if (num === 0) {
      return [length - 1, num, num + 1];
    } else if (num === length - 1) {
      return [num - 1, num, 0];
    } else {
      return [num - 1, num, num + 1];
    }
  };

  return (
    <>
      <div className="relative flex justify-center items-center h-72 w-full">
        <button
          className="absolute top-1/2 left-1 lg:left-3 z-10 text-3xl text-gray-400 select-none"
          onClick={previousCard}
        >
          <i className="fas fa-chevron-left" />
        </button>
        {skills.map((skill, index) => {
          const cardClassName = (index) => {
            if (index === cardIndexArray(current)[1]) {
              return "absolute justify-center lg:z-30";
            } else if (index === cardIndexArray(current)[0]) {
              return "absolute invisible lg:visible lg:-translate-x-80 lg:scale-75 lg:opacity-75 lg:z-20";
            } else if (index === cardIndexArray(current)[2]) {
              return "absolute invisible lg:visible lg:translate-x-80 lg:scale-75 lg:opacity-75 lg:z-20";
            } else {
              return "absolute invisible lg:visible lg:z-10 lg:scale-50 lg:opacity-0";
            }
          };
          return (
            <div
              className={`${cardClassName(index)} transition-all duration-300`}
            >
              <div
                className="flex item-stretch w-64 lg:w-80 lg:h-80"
                key={index}
              >
                <div className="bg-gray-100 shadow-md rounded-lg grid grid-cols-5 auto-rows-min p-5 lg:px-6 lg:py-8">
                  <div className="h-12 w-12">
                    <i className={skill.icon} />
                  </div>
                  <div className="col-start-2 col-end-6 flex items-center ml-1">
                    <p className="text-xl font-extrabold">{skill.name}</p>
                  </div>
                  <div className="col-start-2 col-end-6 mt-3 ml-1">
                    <p>{skill.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <button
          className="absolute top-1/2 right-1 lg:right-3 z-10 text-3xl text-gray-400 select-none"
          onClick={nextCard}
        >
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </>
  );
};

export default Skills;
