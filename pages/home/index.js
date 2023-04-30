import Header from "src/components/header";
import HeroSection from "src/sections/home/Hero";
import WhyUs from "@sections/home/WhyUs";
import AttractionArea from "@sections/home/AttractionArea";
import GuestArea from "@sections/home/GuestArea";
import ShotsArea from "@sections/home/ShotsArea";
import QuestionArea from "@sections/home/QuestionArea";
import BlogArea from "@sections/home/BlogArea";
import BrandArea from "@sections/home/BrandArea";
import NewsLetterArea from "@sections/home/NewsLetterArea";
import Footer from "@sections/home/Footer";
const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyUs />
      <AttractionArea />
      <GuestArea />
      <ShotsArea />
      <QuestionArea />
      <BlogArea />
      <BrandArea />
      <NewsLetterArea />
      <Footer />


    </>
  );
};

export default HomePage;
