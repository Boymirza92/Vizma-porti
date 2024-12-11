"use client"
import React from 'react';
import "./globals.css"
import Header from "./components/header/navbar/page";
import Section from "./components/section/section/page";
import SectionServise from "./components/section/serviseCard/page";
import Footer from "./components/footer/page";
export default function Home() {
  return (
    <div>
      <Header/>
      <Section/>
      <SectionServise/>
      <Footer/>
    </div>
  );
}
