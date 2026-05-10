"use client"
import { submitaction } from "@/actions/forms";
import { useRef } from "react";

export default function Home() {
  let ref = useRef()
  return (
    <div className="mx-auto my-5">
      <form ref={ref} action={(e) => { submitaction(e); ref.current.reset() }}>
        <label htmlFor="name">Name</label>
        <div>
          <input name="name" id="name" className="text-white border-2" type="text" />
        </div>
        <label htmlFor="add">Address</label>
        <div>
          <input name="add" id="add" className="text-white border-2" type="text" />
        </div>
        <div>
          <button className="bg-gray-600 mx-15 my-5">Submit</button>
        </div>
      </form>
    </div>
  );
}
