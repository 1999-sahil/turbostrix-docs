import React from "react";

function Reactjs() {
  const topics = [
    "React Hooks",
    "Lifecycle Methods",
    "Components",
    "Context",
    "Props & State",
    "Virtual DOM",
  ];

  return (
    <div>
      <h3 className="bg-neutral-100 dark:bg-neutral-800/50 text-center text-[14px] font-semibold font-poppins text-[#00c774] py-[8px] lg:py-[13px]">
        Essentials of React.js
      </h3>
      <div className="mt-1 flex flex-col gap-1">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 text-zinc-800 dark:text-white">
          {topics.map((topic, index) => (
            <h2
              key={index}
              className="h-[100px] lg:h-[134px] bg-neutral-100 dark:bg-neutral-800/50 hover:bg-white dark:hover:bg-white transition duration-500 hover:text-[#00c774] dark:hover:text-black cursor-pointer w-full flex items-center justify-center font-kanit font-semibold text-center text-lg lg:text-xl"
            >
              {topic}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reactjs;