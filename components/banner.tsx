import Image from "next/image";
import React from "react";
import TSContent from "./ts-content/ts-content";
import Features from "./features";
import { framework } from "@/constant/framework";
import { FaGithub } from "react-icons/fa";
import { check } from "@/constant/check";
import { FaCheck } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { FiMessageCircle } from "react-icons/fi";

function Banner() {
  return (
    <div className="border w-[98%] lg:w-[84%] py-8 lg:py-12 rounded flex flex-col gap-24">
      {/** Main Heading with buttons */}
      <div className="space-y-6 px-3 lg:px-5">
        <div className="space-y-1">
          <span className="text-xs lg:text-sm font-semibold font-poppins text-[#00c774]">
            Turbostrix
          </span>
          <h1 className="text-2xl lg:text-4xl max-w-lg lg:max-w-2xl font-poppins font-medium text-[#111] dark:text-neutral-200">
            Empowering the new dimension of learning with our comprehensive
            documentation
          </h1>
        </div>
        <p className="text-sm lg:text-base font-inter max-w-xl lg:max-w-2xl text-neutral-500 dark:text-neutral-400">
          Turbostrix is a <strong>beautiful & robust</strong> documentation to
          learn <strong>engineering</strong>. Unlocking Potential, Igniting{" "}
          <strong>curiosity</strong>, Explore turbostrix docs
        </p>
        <div className="space-x-4 w-fit">
          <button className="text-xs lg:text-sm font-medium font-poppins rounded-full px-4 py-2 text-neutral-100 dark:text-[#333] bg-gradient-to-b from-neutral-800 to-neutral-500 hover:from-neutral-800 hover:to-neutral-800 dark:from-neutral-200 dark:to-neutral-400 dark:hover:from-neutral-200 dark:hover:to-neutral-200">
            Getting started
          </button>
          <button className="text-xs lg:text-sm font-medium font-poppins rounded-full px-4 py-2 shadow-md text-neutral-700 dark:text-neutral-200 bg-gradient-to-b from-neutral-300 to-neutral-100 hover:from-neutral-300 hover:to-neutral-300 dark:from-neutral-800 dark:to-neutral-600 dark:hover:from-neutral-800 dark:hover:to-neutral-800">
            ⚡️ Docs
          </button>
        </div>
      </div>

      <Features />

      {/** Showcase card */}
      <div className="px-4 flex flex-col items-center justify-center gap-5 lg:gap-7">
        <h2 className="text-sm lg:text-base font-medium font-poppins text-zinc-500">
          Trusted by awesome teams and developers
        </h2>
        <div className="border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-neutral-900 dark:to-neutral-800 rounded-md p-3 space-y-4">
          <h2 className="text-xs lg:text-sm font-medium font-inter text-[#333] dark:text-zinc-300">
            " A gorgeous and beautifully written documentation that composes
            into the concepts."
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/logo-light.png"
                alt=""
                width={20}
                height={20}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xs font-medium font-inter text-[#333] dark:text-zinc-100">
                  Sahil Ahmed
                </h3>
                <h3 className="text-xs font-mukta text-zinc-500 dark:text-zinc-400">
                  sahilahmed466@gmail.com
                </h3>
              </div>
            </div>
            <button className="text-xs font-inter font-medium rounded-md text-[#00c774] bg-gradient-to-b from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 px-3 py-1 lg:px-4 lg:py-2">
              Showcase
            </button>
          </div>
        </div>
      </div>

      <TSContent />

      <div className="flex flex-col lg:flex-row items-center gap-10 px-3 lg:px-5 my-8">
        <h2 className="flex flex-col text-center lg:text-start text-zinc-700 dark:text-zinc-400 font-medium font-inter text-2xl lg:text-4xl">
          Use Turbostrix for
          <span className="text-black dark:text-white">any framework</span>
        </h2>
        <div className="lg:flex-1 grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 items-center justify-center gap-8 lg:gap-5 px-8 lg:px-0 w-[80%]">
          {framework.map((data, index) => (
            <span key={index} className="flex items-center justify-center">
              <data.icon className="text-3xl lg:text-4xl text-neutral-600 dark:text-neutral-400" />
            </span>
          ))}
        </div>
      </div>

      <div className="px-3 lg:px-5 space-y-5 mb-8 flex flex-col items-start lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-5">
          <h2 className="font-ubuntu text-zinc-600 dark:text-neutral-500 text-base">Blog Section</h2>
          <h2 className="max-w-md text-zinc-700 dark:text-neutral-400 font-inter font-medium text-2xl lg:text-4xl">
            <span className="text-black dark:text-white">Creative</span> Blogs to enhance your knowledge
          </h2>
          <p className="max-w-lg font-inter text-zinc-500 font-medium lg:text-lg">
            See how Turbostrix empowers concepts of all technologies to
            accelerate your growth and streamline your work.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="border border-[#00c774] bg-[#00c77493] hover:border-green-600 dark:hover:border-emerald-300 text-[#333] dark:text-zinc-100 rounded-md px-3 py-1 text-xs font-semibold font-mukta">
            View all blogs
          </button>
          <button className="flex items-center gap-1 border border-neutral-300 dark:border-neutral-700 bg-zinc-100 dark:bg-zinc-800/50 hover:border-neutral-400 dark:hover:border-neutral-600 text-[#333] dark:text-zinc-100 rounded-md px-3 py-1 text-xs font-semibold font-mukta">
            <FaGithub />
            Official Github repo
          </button>
        </div>
      </div>

      <div className="px-3 lg:px-5 my-10 flex flex-col items-center justify-center gap-8">
        <h2 className="max-w-md lg:max-w-3xl text-2xl lg:text-4xl text-center text-zinc-700 dark:text-neutral-400 font-inter font-medium">
          <span className="text-black dark:text-white">Stay productive and manage your learning </span>
          with Turbostrix documentations and blogs
        </h2>
        <div className="flex items-center justify-center gap-4">
          <button className="border border-[#00c774] text-[#00c774] rounded-full px-4 py-1 lg:px-10 lg:py-2 text-sm font-normal font-openSans">Docs</button>
          <button className="border border-zinc-300 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-full px-4 py-1 lg:px-10 lg:py-2 text-sm font-normal font-openSans">Blogs</button>
          <button className="border border-zinc-300 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-full px-4 py-1 lg:px-10 lg:py-2 text-sm font-normal font-openSans">Policies</button>
        </div>
        <div className="mb-5 flex flex-wrap items-center justify-center gap-5 lg:gap-8">
          {check.map((chk, index) => (
            <div key={index} className="flex items-center justify-center whitespace-nowrap text-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white">
              <FaCheck className="text-xs lg:text-sm" />
              <h2 className="text-sm font-mukta font-medium">{chk.title}</h2>
            </div>
          ))}
        </div>
        <div className="border rounded-2xl p-2 flex flex-col">
          <BsThreeDots className="text-3xl text-zinc-400 dark:text-zinc-600 ml-2" />
          <Image
            src="/image-12345.jpg"
            alt=""
            width={800}
            height={1000}
            className="border p-1 rounded-xl"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center gap-7">
        <div className="flex flex-col gap-3">
        <h2 className="text-2xl lg:text-4xl text-center text-[#333] dark:text-neutral-200 font-inter font-medium">
          Join the community
        </h2>
        <p className="max-w-[300px] lg:max-w-full font-inter text-zinc-600 dark:text-zinc-400 font-medium text-sm">
          Discover what our community has to say about their Turbostrix experience.
        </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 border border-neutral-300 dark:border-neutral-700 bg-zinc-100 dark:bg-zinc-800/50 hover:border-neutral-400 dark:hover:border-neutral-600 text-[#333] dark:text-zinc-100 rounded-md px-4 py-2 text-xs font-semibold font-mukta">
            Github discussions
            <FiMessageCircle className="text-lg" />
          </button>
          <button className="flex items-center gap-2 border border-neutral-300 dark:border-neutral-700 bg-zinc-100 dark:bg-zinc-800/50 hover:border-neutral-400 dark:hover:border-neutral-600 text-[#333] dark:text-zinc-100 rounded-md px-4 py-2 text-xs font-semibold font-mukta">
            Discord
            <FiMessageCircle className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
