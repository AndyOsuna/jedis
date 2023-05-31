import { useEffect, useState } from "react";

interface Person {
  name: string;
  height: number;
}

export default function CharacterList() {
  const [list, setList] = useState<Person[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://swapi.dev/api/people/?page=${page}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => setList((list) => [...list, ...data.results]));

    return () => {
      controller.abort();
    };
  }, [page]);

  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <div>
        {pages.map((p) => (
          <button key={p} onClick={() => setPage(p)}>
            {p}
          </button>
        ))}
      </div>
      <ul>
        {list.map((person, index) => (
          <li key={index}>
            {person.name} - {person.height}
          </li>
        ))}
      </ul>
    </div>
  );
}
