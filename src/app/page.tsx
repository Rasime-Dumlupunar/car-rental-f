import { redirect } from "next/navigation";
import React from "react";

const Page = () => {
  redirect("/home");
  return <div>Home</div>;
};

export default Page;
