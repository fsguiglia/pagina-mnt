"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    })
  });

  return data != null ?  (
    <div className="md:pr-5 content-stretch min-h-screesn p-12">
        <div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white pb-4">
            userID: {data.userId}
          </h1>
        </div>
        <div>
          <p className="md:text-2xl text-2xl">
            <strong>Title:</strong> {data.title}
          </p>
        </div>
      </div>
    ) : 
    (
      <div>
        Data is null
      </div>
    )
}