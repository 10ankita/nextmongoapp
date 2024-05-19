"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const route = useRouter();

  const handleAddTopic = async (e) => {
    e.preventDefault();
    if(!title || !description){
      alert("Title and description are required");
      return;
    }
    try{
      const res = await fetch("http://localhost:3000/api/topics",{
        method: "POST",
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ title, description })
      });

      if(res.ok){
        route.push('/');
      } else{
        throw new Error("Failted to create a topic");
      }
    } catch (error){
      console.log(error);
    }
     


  };

  return (
    <form onSubmit={handleAddTopic} className="flex flex-col gap-3">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        className="px-8 py-4 border border-slate-500"
        placeholder="Add Topic"
      />
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        className="px-8 py-4 border border-slate-500"
        placeholder="Add Description"
      />
      <button
        className="px-8 py-4 border border-slate-500 bg-green-600 text-white"
        type="submit"
      >
        Add Topic
      </button>
    </form>
  );
};

export default page;
