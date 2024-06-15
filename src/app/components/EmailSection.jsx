"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section className='grid md:grid-cols-1 my-12 md:my-12 py-24 gap-4 relative' id="contact">
      <div></div>
      <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>
          Let&apos;s Connect
        </h5>
        <span className='text-[#ADB7BE] mb-4 max-w-md'>
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll get back to you as soon as I can! Feel free to reach out to me at <a href="mailto: jayanthchennupati@gmail.com" className='text-white'>jayanthchennupati@gmail.com</a>
        </span>
        <div className='socials flex flex-row gap-2 my-2'>
          <Link href="https://github.com/jayanth122">
            <Image src={GithubIcon} alt='Github Icon' />
          </Link>
          <Link href="https://www.linkedin.com/in/naga-jayanth-c-146296169/">
            <Image src={LinkedinIcon} alt='Linkedin Icon' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
