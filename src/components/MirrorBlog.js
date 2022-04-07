import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function MirrorFeed({
  account = "0x2619c649d98DDdDBB0B218823354FE1D41bF5Ce0",
  limit = 3,
}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://prenode.rss3.dev/items/list?limit=" +
          limit +
          "&tsp=&persona=" +
          account +
          "&fieldLike=Mirror.XYZ"
      );
      const json = await res.json();
      console.log(json);
      setData(json.data);
    };
    fetchData();
  }, [setData]);

  return (
    <ul>
      {data.slice(0, limit).map((item, i) => (
        <li key={item.title}>
          <a target="_blank" href={item.target.action.payload}>
            <div className="img">
              <img src="img/content/death-guild-blog.jpg" />
            </div>
            <span>{item.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
