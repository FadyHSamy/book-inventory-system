"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";

function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/sign-in", { scroll: false });
  }, []);
  return <label>tests</label>;
}

export default Home;
