import { FC } from "react";

interface pageProps {}

const page = async ({}: pageProps) => {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();
  console.log(data);
  return <div>{data ?? data}</div>;
};

export default page;
