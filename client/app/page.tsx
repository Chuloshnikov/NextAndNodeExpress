"use client"
import {useState, useEffect} from 'react';

export default function Home() {

  const [message, setMessage] = useState("Loading");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/home").then(
      response => response.json()
    ).then(
      data => {
        console.log(data);
        setMessage(data.message);
        setPeople(data.people);

      }
    )
  }, []);

  return (
    <main>
      <div>{message}</div>
      <div>
        {people.map((person, index) => (
          <div key={index}>
            {person}
          </div>
        ))}
      </div>
    </main>
  );
}
