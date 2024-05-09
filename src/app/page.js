"use client";
import Accordian from "@/components/Accordian";
import ProductFilter from "@/components/Filter";
import FormVal from "@/components/FormVal";
import Modal from "@/components/Modal";
import ModalSection from "@/components/ModalSection";
import Pagination from "@/components/Pagination";
import Navbar from "@/components/ResponsiveHeader";
import StarRating from "@/components/StarRating";
// import ResponsiveHeader from "@/components/ResponsiveHeader"
import { BrowserRouter as Router } from 'react-router-dom';

export default function Home() {

  return (
    <Router>
    <Navbar />
    <FormVal />
    <Accordian />
    <Pagination />
    <ProductFilter />
    <StarRating noOfStar={10} />
    <ModalSection />
    </Router>
  );
}

