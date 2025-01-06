import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import BlogComponents from '../components/BlogComponents';
import { Link } from "react-router-dom";
import '../App.css';

const Blog = () => {
    const { t } = useTranslation();
    const imagesAndContent = [
      {
        image: "https://b2bblogassets.airtel.in/wp-content/uploads/2022/06/startup-company-scaled.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl ut tincidunt tempus, nisi elit venenatis eros."
      },
      {
        image: "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        image: "https://nativespeaker.vn/uploaded/page_1072_1668137657_1668137676.jpg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl ut tincidunt tempus, nisi elit venenatis eros."
      }
    ];
    const settings = {
      dots: true,              // Hiển thị các chấm bên dưới slider
      infinite: true,          // Lặp lại vô hạn
      speed: 500,              // Tốc độ chuyển slide (ms)
      slidesToShow: 1,         // Số lượng slide hiển thị cùng lúc
      slidesToScroll: 1,       // Số slide cuộn mỗi lần
      autoplay: true,          // Tự động chuyển slide
      autoplaySpeed: 2000,    // Thời gian giữa các slide (ms)
    };
    const images = [
      "https://ivision.com/wp-content/uploads/2023/02/AdobeStock_229930631.jpeg",
    ];

    const [currentIndex1, setCurrentIndex1] = useState(0);
    
  
    const goToNext1 = () => {
      setCurrentIndex1((prevIndex1) => (prevIndex1 + 1) % imagesAndContent.length);
    };
  
    const goToPrev1 = () => {
      setCurrentIndex1((prevIndex1) =>
        prevIndex1 === 0 ? imagesAndContent.length - 1 : prevIndex1 - 1
      );
    };
  
    return (
      <>
        <Header />
        <div className="relative w-full">
          <div className="relative w-full h-[500px]">
            <img
              src="https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e.png"
              alt="Full Width Image"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center bg-black bg-opacity-50 text-white px-6 sm:px-12 lg:px-72 justify-end">
              <div className="text-center sm:text-right max-w-xl mx-auto sm:mx-0">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4">
                  KGS-Tech Blogs
                </h1>
                <p className="text-base sm:text-lg md:text-xl">
                  Welcome to the official blog of KGS-Tech Company, where innovation meets excellence. In this space, we share our insights, ideas, and the latest updates about the tech industry, our company, and how we’re shaping the future of technology.
                </p>
              </div>
            </div>
          </div>
          
        <div className="px-6 py-2 mt-6"><Link to="/">Home</Link> -{'>'} Blog</div>
  
        <div className="text-left max-w-full pl-6 sm:pl-12 md:pl-20 lg:pl-60 lg:pr-60 ">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                Welcome to KGS-Tech Company's Blog
            </h1>
            <p className="text-lg md:text-xl mb-6">
              The world of technology moves fast, and it’s crucial for both businesses and individuals to keep up. <br></br>
              By sharing our experiences, insights, and updates on this platform, we hope to create a space where our readers can learn, grow, 
              and stay informed about the latest developments in tech. 
              We believe in the power of collaboration and knowledge sharing, and this blog is just one of the ways we foster that spirit.
            </p>
        </div>
        <BlogComponents/>
          <ScrollToTopButton />
          <Footer />
        </div>
      </>
    );
  };

export default Blog;
