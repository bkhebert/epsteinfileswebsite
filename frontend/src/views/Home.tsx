import { useState } from "react";
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

      <div className="card max-w-3xl">
        <p className="mb-4">
          This site provides a clear, readable, and browsable version of the Epstein files.
          Our goal is to make these documents easily accessible while maintaining a
          gritty, archival aesthetic reminiscent of leaked investigative dossiers.
        </p>
        <p className="mb-4">
          Navigate through the files, search for key names and dates, and explore the
          content in an uncluttered, high-contrast layout.
        </p>
        <p className="mb-4">
          This archive is purely informational. All content is sourced from publicly
          available documents.
        </p>
        <p className="mb-4">
          Who am I?
          A broke ass developer who learned how to code for the sole purpose of creating this site to be used as a resource for others. 
          Normal folks like me who realize the DOJ has a convoluted and difficult way to access and read these files. 
          By cluttering them with too much information. This site will only upload key files and parts that are considered 'interesting' and damning evidence. 
          If you found something in the files and feel it should be made known; please email them to me : epsteinfilesreport@gmail.com with subject line Epstein Files. 

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
              Partners who believe in making <span className="text-yellow-300">easily readable and accessible documents for everyone</span>. Or a better discourse of ideas, and a reintroduction of truth, logic, and philosophy into society. Whether through investment, donations, or assisting with coding this site out etc. Help us combat the crisis of mass disinformation.
              Shoot me an email: epsteinfilesreport@gmail.com or donate via paypal, anything helps.
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
      <section className="w-full max-w-4xl mt-12">
  <h2 className="text-2xl font-bold mb-6 glitch-soft">
    Individuals Referenced in the Files
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {people.map((name) => {
      const slug = name.toLowerCase().replace(/\s+/g, "-");

      return (
        <a
          key={name}
          href={`/person/${slug}`}
          className="person-button border border-gray-700 bg-black px-4 py-3 text-center hover:border-red-500 hover:text-red-400 transition"
        >
          {name}
        </a>
      );
    })}
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
