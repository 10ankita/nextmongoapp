'use client'

import React from "react";
import { HiPencilAlt } from "react-icons/hi";
import RemoveTitle from "./RemoveTitle";
import Link from "next/link";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Topics error");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const TopicList = async () => {
  const { topics } = await getTopics();
  return (
    <>
      {topics.map((t) => (
        <div className="p-4 border border-slate-300 my-3 justify-between flex gap-5 items-start">
          <div>
            <h2 className="font-bold py-2">{t.title}</h2>
            <div>{t.description}</div>
          </div>
          <div className="flex gap-2">
            <RemoveTitle id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
      
    </>
  );
};

export default TopicList;
