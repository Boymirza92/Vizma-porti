"use client"
import React from 'react';
import "./globals.css"
import Section from "./components/section/section/page";
import SectionServise from "./components/section/serviseCard/page";
export default function Home() {
  return (
    <div>
      <SectionServise/>
      <Section/>
    </div>
  );
}
