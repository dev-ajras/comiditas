"use client"
import Card from "./components/card/Card";
import { useState } from "react"

export default function Home() {
  const [ showCard, setShowCard ] = useState(false)
  return (
    <Card/>
  );
}
