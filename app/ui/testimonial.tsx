// components/TestimonialsSlider.tsx

"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft, FaStar, FaUser } from 'react-icons/fa';

const testimonials = [
  {
    username: "Rohan",
    rating: 5,
    comment: "Ordered the Dum Ka chicken at the suggestion of the staff, they were great and able to articulate what about the meal was different than my usual Tikka Masala. They were spot on, great meal with beautiful flavor, not too spicy, really hit the mark.",
  },
  {
    username: "Aisha",
    rating: 4.5,
    comment: "Fantastic food and excellent service! The Biryani was full of flavor and perfectly cooked.",
  },
  {
    username: "Jamal",
    rating: 4.0,
    comment: "Great atmosphere and delicious food. The Paneer Tikka was a standout.",
  },
  {
    username: "Meera",
    rating: 3.5,
    comment: "The food was good, but the service was a bit slow. Will try again.",
  },
  {
    username: "Kiran",
    rating: 5.0,
    comment: "Absolutely loved the experience! The flavors were incredible and the staff was very welcoming.",
  },
  {
    username: "Raj",
    rating: 4.2,
    comment: "Great place for a family dinner. The butter chicken was excellent!",
  },
  {
    username: "Nisha",
    rating: 4.8,
    comment: "One of the best Indian restaurants I've been to. Highly recommend the lamb curry.",
  },
];

export default function TestimonialsSlider() {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index} className="flex items-center justify-center">
          <div className="relative bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center border border-gray-200 h-80 overflow-hidden">
            <div className="flex items-center justify-center mb-4">
              <FaUser className="text-gray-500 text-4xl" />
            </div>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`h-5 w-5 ${
                    i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              <FaQuoteLeft className="inline-block text-gray-400 text-xl mr-2" />
              {`"${testimonial.comment}"`}
            </p>
            <h3 className="text-lg font-semibold">{testimonial.username}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
