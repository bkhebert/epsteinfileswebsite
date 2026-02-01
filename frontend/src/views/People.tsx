import { useParams } from "react-router-dom";

export default function Person() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold mb-4 glitch" data-text={slug}>
        {slug ? slug.replace(/-/g, " ").toUpperCase() : "Loading..."}
      </h1>

      <p className="text-gray-400 max-w-xl">
        This page is under construction.  
        Documents, references, and contextual analysis will be added as they are reviewed.
      </p>
    </div>
  );
}
