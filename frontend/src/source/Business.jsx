import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import OurProjects from '../components/OurProjects';
import Benefits from '../components/Benefits';
import ContactUs from '../components/ContactUs';
import { Link, useLocation } from "react-router-dom";
import '../App.css';
import StickyRightContact from '../components/StickyRightContact';
import Animation from '../components/Animation';
import LoadingPage from '../components/LoadingPage'; // Đảm bảo đã import LoadingPage

function ScrollToHash() {
    const location = useLocation();
  
    useEffect(() => {
      if (location.hash) {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({behavior: "smooth"});
        }
      }
    }, [location]);
  
    return null;
  }

const Business = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const [loading, setLoading] = useState(true); // Khởi tạo state loading

    useEffect(() => {
        // Đặt timeout để mô phỏng thời gian loading trang
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500); // Giả sử trang tải xong sau 3 giây

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LoadingPage />; // Hiển thị trang loading khi đang tải
    }

    return (
        <>
            <Header />
            <div className="relative w-full">
                {/* Hero Image */}
                <div className="relative w-full h-[500px]" id="TopBusiness">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1683141136472-bd21514555a2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBsZWFkZXJ8ZW58MHx8MHx8fDA%3D"
                        alt="Full Width Image"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex justify-end items-center bg-black bg-opacity-50 text-white">
                    <Animation aosEffect="fade-in" aosDuration={1500}>
                        <div className="text-right max-w-4xl md:pr-96 px-4 md:pr-4">
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 text-shadow">
                                {t("business.heroTitle")}
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-shadow">
                                {t("business.heroDescription")}
                            </p>
                        </div>
                    </Animation>
                    </div>
                </div>

                <div>
                    <StickyRightContact/>
                </div>

                {/* Company's Partnership Section */}
                <div className="text-left max-w-4xl mx-auto px-6 sm:px-12 md:px-20 mt-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 text-center">
                        {t("business.partnershipTitle")}
                    </h1>

                    {/* Key Aspects Table */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-8">
                        <p className="text-lg md:text-xl text-gray-800 mb-6">
                            <span className="font-semibold text-brown-600">{t("business.partnerships")}</span> {t("business.partnershipDescription")}
                        </p>

                        <table className="min-w-full text-left bg-white shadow-md rounded-lg overflow-hidden">
                            <thead>
                                <tr className="border-b border-gray-300">
                                    <th className="px-6 py-3 text-sm font-medium text-gray-700 bg-gray-200">{t("business.keyAspect")}</th>
                                    <th className="px-6 py-3 text-sm font-medium text-gray-700 bg-gray-200">{t("business.description")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-gray-200 hover:bg-gray-100 transition-all duration-300">
                                    <td className="px-6 py-4 text-sm text-gray-700"><strong>{t("business.sharedVision")}</strong></td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{t("business.sharedVisionDescription")}</td>
                                </tr>
                                <tr className="border-t border-gray-200 hover:bg-gray-100 transition-all duration-300">
                                    <td className="px-6 py-4 text-sm text-gray-700"><strong>{t("business.innovation")}</strong></td>
                                    <td className="px-6 py-4 text-sm text-gray-700">{t("business.innovationDescription")}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Our Projects Section */}
                <Animation aosEffect="zoom-in" aosDuration={1500}>
                <div id="projects" className="my-12">
                    <OurProjects />
                </div>
                </Animation>

                {/* Benefits Section */}
                <Animation aosEffect="slide-up" aosDuration={1500}>
                <div className="my-12">
                    <Benefits />
                </div>
                </Animation>

                {/* Contact Us Section */}
                <div id="joinusnow" className="my-12">
                    <ContactUs />
                </div>
                <div className="text-center my-12">
                    <p className="text-lg md:text-xl font-medium text-gray-700">
                        {t("business.readyToStart")} <Link to="/" className="text-blue-600 hover:text-blue-800">{t("business.contactUs")}</Link>
                    </p>
                </div>

                <ScrollToTopButton />
                <Footer />
            </div>
        </>
    );
};

export default Business;
