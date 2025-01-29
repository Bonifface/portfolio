"use client";

import { Topbar } from "@components/Topbar/Topbar";
import { Header } from "@components/Header/Header";
import { Projects } from "@components/Projects/Projects";
import { Loader } from "@components/Loader/Loader";
import { useState } from "react";

export default function Home() {
  const [isLoading, setLoading] = useState(true);

  if (isLoading)
    return <Loader isLoading={isLoading} setLoading={setLoading} />;

  return (
    <div>
      <Topbar />
      <Header />
      <Projects />
    </div>
  );
}
