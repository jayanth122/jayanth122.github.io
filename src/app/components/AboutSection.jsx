"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-6'>
        <li>NextJS</li>
        <li>Angular</li>
        <li>SpringBoot</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Docker</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-6'>
        <li>University of Waterloo, Ontario <i>(MEng, Spec. in Software)</i></li>
        <ul>
          <li>GPA: 3.7/4</li>
        </ul>
        <li>Vellore Institute of Technology, Amaravati <i>(Bachelor of Technology)</i></li>
        <ul>
          <li>GPA: 8.9/10</li>
        </ul>
      </ul>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className='list-disc pl-6'>
        <li><i><i>Full Stack Developer</i>, AI Focal, Canada</i></li>
        <li><i>Teaching Assistant</i>, ECE459 Programming for Performance (under prof.Jeff Zarnett), University of Waterloo</li>
        <li><a href=""><i>Software Development Engineering Intern</i>, LGSI</a></li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className='list-disc pl-6'>
        <li><a href="https://www.credly.com/badges/0138781d-9481-4b1e-b7bb-9768614cd08d">IBM Master the Mainframe Challenge, 2020</a></li>
        <li><a href="https://www.udemy.com/certificate/UC-c2e1003e-98a4-4a2a-9b2f-a55672f464a8/">Flutter & Dart - The Complete Flutter App Development Course, Udemy</a></li>
      </ul>
    )
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    })
  }
  // bg-gradient-to-br from-blue-600 via-purple-600 to-red-600
  return (
    <section className='text-white py-10' id="about"  style={{ fontFamily: "'sans-serif', 'Gill Sans'" }}>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 sm:px-16'>
        <Image className='rounded-full bg-[#181818]' src='/images/Mac.png' width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg text-justify'>
            I am a full stack web developer with a passion for creating interactive and responsive web applications. 
            I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, MongoDB, HTML, CSS, and Git. 
            I am a quick learner and I am always looking to expand my knowledge and skill set. 
            I am a team player and I am excited to work with others to create amazing applications.
          </p>
          <div className='flex flex-row mt-5'>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab == "skills"}>
              {" "}Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab == "education"}>
              {" "}Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab == "experience"}>
              {" "}Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab == "certifications"}>
              {" "}Certifications{" "}
            </TabButton>
          </div>
          <div className='mt-4'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
