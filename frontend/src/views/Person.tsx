// src/views/Person.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import people from "../data/people";

interface ImageData {
  image: string;
  caption: string;
}

export default function Person() {
  const { slug } = useParams();
  const [images, setImages] = useState<ImageData[]>([]);
  const [summary, setSummary] = useState<string>("");

  const person = people.find((p) => p.slug === slug);

  useEffect(() => {
    if (!person) return;

    fetch(`/people/${person.slug}/descriptions.json`)
      .then((res) => {
        if (!res.ok) throw new Error("No descriptions");
        return res.json();
      })
      .then((data) => setImages(data))
      .catch(() => setImages([]));

    fetch(`/people/${person.slug}/summary.txt`)
  .then((res) => {
    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("text/plain")) {
      throw new Error("Not a summary file");
    }
    return res.text();
  })
  .then((text) => setSummary(text))
  .catch(() => setSummary(""));

  }, [person]);



if (!person) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-500">Person not found.</p>
    </div>
  );
}

const hasContent = images.length > 0 || summary.trim().length > 0;

if (!hasContent) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1
        className="text-4xl font-bold mb-4 glitch"
        data-text={person.slug}
      >
        {person.slug.replace(/-/g, " ").toUpperCase()}
      </h1>

      <p className="text-gray-400 max-w-xl">
        This page is under construction.  
        Documents, references, and contextual analysis will be added as they are reviewed.
      </p>
    </div>
  );
}

/* ✅ THIS WAS MISSING */
return (
  <div className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
    <h1
      className="text-4xl font-bold mb-6 glitch"
      data-text={person.name}
    >
      {person.name}
    </h1>

    {summary && (
      <p className="mb-10 text-gray-300 max-w-3xl">
        {summary}
      </p>
    )}

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {images.map((item, i) => (
        <figure key={i}>
          <img
            src={`/people/${person.slug}/${item.image}`}
            alt={item.caption}
            className="border border-gray-700 mb-2"
          />
          <figcaption className="text-sm text-gray-400">
            {item.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  </div>
);

}

