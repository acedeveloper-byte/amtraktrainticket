import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import TrainSearch from "@/components/TrainSearch";
import Footer from "@/components/Footer";
import TopDestination from "@/components/TopDestination";
import AboutDetails from "@/components/AboutDetails";
import HelpCards from "@/components/HelpCards";
import Disclaimer from "@/components/Disclaimer";

export default function Home() {
  return (
    <>
    
    <Header/>

    <TrainSearch/>

    <TopDestination/>

    <AboutDetails/>

    <HelpCards/>

    <Disclaimer/>

    <Footer/>
    </>
  );
}
