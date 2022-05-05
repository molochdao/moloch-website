import React, { useState, useEffect } from "react";
import parse from "rss-to-json";

export default function MediumFeed({
  account = "ethereum-cat-herders",
  limit = 3,
}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/" +
          account
      );
      const json = await res.json();
      setData(json.items);
      console.log(json);
    };
    fetchData();
  }, [setData]);

  return (
    <ul>
      {data &&
        data.slice(0, limit).map((item, i) => (
          <li key={item.title}>
            <a target="_blank" href={item.link}>
              <div className="img">
                <img src={item.thumbnail} />
              </div>
              <span>{item.title}</span>
            </a>
          </li>
        ))}
    </ul>
  );
}
