import React, { useState } from "react";
import ProductImage from "../assets/Sia_Image_Glow.png";
import CustomButton from "./Button";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the email submission here (e.g., send to a server or store in state)
    console.log("Email submitted:", email);
  };

  return (
    <div className="flex flex-col items-center text-center pt-500 ">
      <h1 className="text-4xl font-bold mt-40">
        Welcome to Sia – Your Path to Smarter Studying
      </h1>
      <h2 className="text-2xl mt-8">
        Discover a new era of personalized learning, tailored to your unique
        academic journey.
      </h2>
      <form onSubmit={handleSubmit} className="mt-8">
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          className="border-2 bg-grey-800 border-gray-600 p-2 mr-2 rounded-md"
        />
        <CustomButton
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md ml-2"
        >
          Join Waitlist
        </CustomButton>
      </form>
      <img src={ProductImage} alt="Description of the image" className="mt-4" />
    </div>
  );
};

export default Hero;
