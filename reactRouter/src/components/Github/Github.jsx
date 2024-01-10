// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  return (
    <div className="text-center max-h-full text-3xl pt-2 py-5 bg-gray-600 text-white">
      Github Followers: {data.followers}
      <img
        className="rounded-full mb-4"
        src={data.avatar_url}
        width={300}
        alt=""
      />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https:api.github.com/users/hiteshchoudhary");
  const result = response.json();
  console.log(result);
  return result;
};
