import {
    FaFacebookF,
    FaInstagram,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaTwitter,
    FaYoutube,
    FaClock,
    FaYelp,
  } from "react-icons/fa";
  import Image from "next/image";
  import Link from "next/link";
  import { HiOutlineMail } from "react-icons/hi";
  
  export default function Footer() {
    const socialIcons = [
      {
        icon: <FaFacebookF className="h-6 w-6 hover:text-gold" />,
        link: "https://www.facebook.com/charminarsandiego",
      },
      {
        icon: <FaInstagram className="h-6 w-6 hover:text-gold" />,
        link: "https://www.instagram.com/charminarsd/",
      },
      {
        icon: <FaTwitter className="h-6 w-6 hover:text-gold" />,
        link: "#", // Add Twitter link here
      },
      {
        icon: <FaYoutube className="h-6 w-6 hover:text-gold" />,
        link: "#", // Add YouTube link here
      },
      {
        icon: <FaYelp className="h-6 w-6 hover:text-gold" />,
        link: "https://www.yelp.com/biz/charminar-indian-restaurant-and-catering-san-diego-2",
      },
    ];
  
    const contactInfo = [
      {
        icon: <FaPhoneAlt className="mr-2 inline-block text-gold" />,
        text: "+628123111179",
      },
      {
        icon: <HiOutlineMail className="mr-2 inline-block text-gold" />,
        text: "demo@gmail.com",
      },
      {
        icon: <FaMapMarkerAlt className="mr-2 inline-block text-gold" />,
        text: "6755 Mira Mesa Blvd 113, San Diego, CA 92121",
      },
    ];
  
    const quickLinks = [
      { text: "Contact Us", link: "/contact-us" },
      { text: "About Us", link: "/about-us" },
    ];
  
    const businessHours = [
      {
        day: "Sunday",
        hours: "11:00 am to 10:00 pm",
      },
      {
        day: "Monday to Thursday",
        hours: "11:00 am to 2:30 pm, 5:00 pm - 10:00 pm",
      },
      {
        day: "Friday & Saturday",
        hours: "11:00 am to 11:00 pm",
      },
    ];
  
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-black text-white">
        <div className="mx-auto max-w-7xl flex flex-col items-start justify-between px-4 py-12 sm:px-6 lg:px-8 lg:py-16 space-y-8 sm:space-y-0 sm:flex-row sm:flex-wrap">
          {/* Logo and Restaurant Info */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0">
            <h2 className="text-3xl font-bold">
              <Link href="/">
                <Image
                  src="/logo.jpg"
                  alt="Charminar Logo"
                  width={70}
                  height={70}
                  className="h-10 w-auto"
                />
              </Link>
            </h2>
            <div className="mt-4">
              <h3 className="mb-4 text-lg font-semibold text-gold">
                Charminar Indian Restaurant & Catering
              </h3>
              <p className="text-base">6755 Mira Mesa Blvd 113</p>
              <p className="text-base">San Diego, CA 92121</p>
            </div>
          </div>
  
          {/* Business Hours */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0">
            <h3 className="mb-4 text-lg font-semibold flex items-center text-gold">
              <FaClock className="mr-2 text-gold" />
              Business Hours
            </h3>
            <ul>
              {businessHours.map((hour, index) => (
                <li key={index} className="py-1">
                  <strong>{hour.day}:</strong> {hour.hours}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Get Direction */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0">
            <h3 className="mb-4 text-lg font-semibold text-gold">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  {item.icon}
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Social Icons and Quick Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0">
            <div className="flex space-x-4 mb-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <h3 className="mb-4 text-lg font-semibold text-gold">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.link}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white border-opacity-20 py-4 text-center text-sm">
          © {currentYear} Charminar Indian Restaurant & Catering. All rights reserved.
        </div>
      </footer>
    );
  }
  