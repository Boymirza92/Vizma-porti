"use client"
import React from 'react';
import "./globals.css"
import Section from "./components/section/section/page";
import SectionServise from "./components/section/serviseCard/page";
import Header from "./components/header/navbar/page";
import Footer from "./components/footer/page";
export default function Home() {
  return (
    <div>
      <Header/>
      <SectionServise/>
      <Section/>
      <Footer/>
    </div>
  );
}
