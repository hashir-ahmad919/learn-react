import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hashir-ahmad919")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <>
      <div className="text-current m-4 bg-gray-500 text-white p-4 text-3xl">
        <div>
          <div>
            <img src={data?.avatar_url} alt="Avatar" />
            <h4>
              <b>{data?.name}</b>
              <br />
              <b>Following: {data?.following}</b>
            </h4>
            <p>{data?.repos_url}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hashir-ahmad919");
  return response.json();
};
