import Logo from "../assets/Sia_Logo.svg";
import CustomButton from "./Button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-off-black py-8 px-32 text-white flex justify-between items-center z-10">
      {/* Company logo on the left */}
      <div className="logo">
        <img src={Logo} alt="Sia Precision Logo" />
      </div>

      {/* Buttons on the right */}
      <div className="buttons flex gap-2">
        {/* Login button
        <span className="text-white font-semibold flex items-center">
          Login
        </span> */}

        {/* Sign up button - bright blue background */}
        <CustomButton>Contact Us</CustomButton>
      </div>
    </nav>
  );
};

export default Navbar;
