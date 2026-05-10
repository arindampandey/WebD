// "use client" // By Default it will be server side (console.log's will appear in our terminal not to on console)
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar"; // Using a client component in a server component

export default function Home() {
  const [count, setcount] = useState(0)
  return (
    <div>
      <Navbar />
      I am a component {count}
      <button onClick={() => setcount(count + 1)}>Click Me</button>
    </div>
  );
}
