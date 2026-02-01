// src/data/people.ts
export interface Person {
  name: string;
  slug: string;
}

const people: Person[] = [
  { name: "Bill Clinton", slug: "bill-clinton" },
  { name: "Prince Andrew", slug: "prince-andrew" },
  { name: "Donald Trump", slug: "donald-trump" },
  { name: "Alan Dershowitz", slug: "alan-dershowitz" },
  { name: "Bill Gates", slug: "bill-gates" },
  { name: "Ehud Barak", slug: "ehud-barak" },
  { name: "Les Wexner", slug: "les-wexner" },
  { name: "Ghislaine Maxwell", slug: "ghislaine-maxwell" },
  { name: "Kevin Spacey", slug: "kevin-spacey" },
  { name: "Naomi Campbell", slug: "naomi-campbell" },
  { name: "Jay-Z", slug: "jay-z" },
  { name: "Elon Musk", slug: "elon-musk" },
];

export default people;
