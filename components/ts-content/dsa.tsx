import React from "react";

function DataStructures() {
  const topics = [
    "Arrays",
    "Linked List",
    "Stack and Queue",
    "Trees",
    "Graphs",
    "Strings",
  ];

  return (
    <div>
      <h3 className="bg-neutral-100 dark:bg-neutral-800/50 text-center text-[#00c774] py-[8px] lg:py-[13px]">
        Data Structures
      </h3>
      <div className="mt-1 flex flex-col gap-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 text-zinc-800 dark:text-white">
          {topics.map((topic, index) => (
            <h2
              key={index}
              className="h-[100px] lg:h-[134px] transition duration-500 bg-neutral-100 dark:bg-neutral-800/50 hover:bg-white dark:hover:bg-white hover:text-[#00c774] dark:hover:text-black cursor-pointer w-full flex items-center justify-center font-kanit font-semibold text-xl"
            >
              {topic}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DataStructures;