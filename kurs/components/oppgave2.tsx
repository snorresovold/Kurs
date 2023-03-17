import React, { useState, useEffect } from "react";

function oppgave2() {
  const [fact, setFact] = useState("");
  const [allFacts, setAllFacts] = useState<Array<string>>([]);
  async function getFact() {
    const res = await fetch(
      "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
    );
    const data = await res.json();
    console.log(data);
    setFact(data.text);
    if (fact != "") {
      setAllFacts([...allFacts, fact]);
    }
  }

  return (
    <div className="p-4 text-2xl">
      <button className="border" onClick={() => getFact()}>Hent ny fakta</button>
      <br />
      {fact}
      <br />
      <br />
      <p>Her er en liste over alle hentet fakta:</p>
      <div className="text-lg w-[50vw]">
        {allFacts.map((fact) => (
          <li>{fact}</li>
        ))}
      </div>
    </div>
  );
}

export default oppgave2;
