const AboutCourses = ({ title, description, imageUrl }) => {
  return (
    <div className="py-8 px-4 flex flex-col items-center">
      <h3 className="text-2xl font-semibold mb-4 text-grey-100">{title}</h3>
      <p className="text-lg text-grey-300 mb-6 max-w-prose">{description}</p>
      <img src={imageUrl} alt="About Courses" className="max-w-full h-auto " />
    </div>
  );
};

export default AboutCourses;
