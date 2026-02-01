// src/views/Home.tsx
import { useState } from "react";
import { Link } from "react-router-dom";

import epsteingroupphoto from "/epsteingroupphoto.png";
import people from "../data/people";
export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex flex-col items-center justify-between px-6 py-8">
      <h1
  className="text-4xl font-bold mb-6 glitch"
  data-text="Epstein Files Archive"
>
        Epstein Files Archive
      </h1>
 <section className="w-full max-w-4xl mt-12">
  <h2 className="text-2xl font-bold mb-6 glitch-soft">
      Click on any name to see all the craziest most fucked up shit they did in the Epstein Files. 
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
   {people.map((person) => {

      return (
<Link
  to={`/person/${person.slug}`}
  className="person-button border border-gray-700 bg-black px-4 py-3 text-center hover:border-red-500 hover:text-red-400 transition"
>
  {person.name}
</Link>
      );
    })}
  </div>
</section>

      <div className="card max-w-3xl">

        <p className="mb-4">
                    The manner in which the Epstein files is made available to the public is convoluted and difficult to navigate due to an overwhelming amount of useless and irrelevant information. 
          The purpose of this site is to provide a collection of key files from the Epstein Files that are of interest to the general public.

        </p>
        <p className="mb-4">
      This site is a living document, meaning I am continuously updating it.  

        </p>
        <p className="mb-4">
          Click on any name at the bottom to see all the craziest most fucked up shit they did in the Epstein Files. 
        </p>
        <p className="mb-4">
          Who am I?
          A broke ass developer who learned how to code for the sole purpose of creating this site to be used as a resource for others. 
          I don't have alot of free-time as I am poor, but I will try to make this site as useful, interesting, and hopefully it brings people together on a common cause:
          To seek truth and demand justice... and for the TEA! haha 
          I figured I would give it that ratchet ass dark internet appeal since it is such a fucked up reality we live in. The world doesn't need another cookie-cutter unpersonal inhumane website.
          It is our imperfections that make us human. 
           This site will only upload key files and parts that are considered 'interesting' and damning evidence. 
          If you found something interesting in the files and feel it should be made known; please email them to me : epsteinfilesreport@gmail.com with subject line Epstein Files. 

          I will be making real-time updates as new information becomes available. I started working on this project on February 1st, 2026. 
        </p>
        <button onClick={() => setCount((c) => c + 1)}>
          Click counter: {count}
        </button>
        <section className="max-w-4xl mx-auto py-20 text-center">
        <div className="bg-gradient-to-r from-red-900 to-blue-900 p-1 rounded-xl">
          <div className="bg-gray-900 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 glitch-soft">Join the Intellectual Revolution</h2>
            <p className="mb-8 text-lg">
              Partners who believe in making <span className="text-yellow-300">easily readable and accessible documents for everyone</span>. 
              If you want to post something here, or want to help reintroduction of truth, logic, and philosophy into society. 
              Or wish to assist in the disempowerment of ignorance:
              Shoot me an email: epsteinfilesreport@gmail.com
            </p>
                        <p className="mb-8 text-lg">
              I also have other projects I am working on. Including debatelab.xyz, which is a site intended to encourage debate and discussion with like minded individuals and groups using AI to check for reasonability and expose fallacious arguments. 
              All money donated will go towards the further production of this website and debatelab.xyz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <a
        href="https://www.paypal.com/donate/?business=BCJFZUCNXZ7L4&no_recurring=0&item_name=Hi%21+I+am+the+guy+who+made+DebateLab%21+This+project+is+kept+alive+by+donations+until+we+receive+funding.+Anything+helps.+%0A-Cheers&currency_code=USD"
        target="_blank"
        rel="noopener noreferrer" className="mt-3"> 
              <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg font-bold hover:opacity-90 transition">
                 Donate via paypal 
                 </button>
                 </a>

            </div>
          </div>
        </div>
      </section>
     
      </div>

      <img
        src={epsteingroupphoto}
        alt="Archive visual"
        className="image mt-12 border border-gray-700 rounded"
      />
    </div>
  );
}
