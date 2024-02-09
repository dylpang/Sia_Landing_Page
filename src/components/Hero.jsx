import ProductImage from "../assets/ChatImage.png";
import CustomButton from "./Button";

const Hero = () => {
  return (
    <div
      className="h-screen mx-auto px-4 py-8 flex flex-wrap items-center justify-between"
      style={{ maxWidth: "1120px"}}
    >
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8 text-left">
        <h1
          style={{
            background:
              "linear-gradient(90deg, rgba(16,77,229,1) 0%, rgba(13,135,235,1) 50%, rgba(12,154,215,1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "1.5",
            backgroundClip: "text",
            color: "transparent",
            display: "inline-block",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Learning Made Easy
        </h1>
        <p className="text-2xl text-grey-100 mb-8">
          Harness the power of artificial intelligence to create personalized
          study guides that adapt to your learning style.
        </p>
      <CustomButton> Get Started</CustomButton>
      </div>
      <div className="w-full lg:w-5/12">
        <img
          src={ProductImage}
          alt="Product"
          className="max-w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
