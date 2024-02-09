

const CoursePreview = ({imageUrl, description, title}) => {
  return (
    <div className="flex flex-col md:flex-row items-center my-8 mx-auto p-4">
      <img
        src={imageUrl}
        alt="Course Preview"
        className="w-full md:w-1/2 h-auto rounded-lg shadow-lg md:mr-8"
      />
      <div className="mt-4 md:mt-0 md:w-1/2">
        <h3 className="text-2xl text-grey-100 font-semibold mb-4">{title}</h3>
        <p className="text-lg text-grey-300">{description}</p>
      </div>
    </div>
  );
};

export default CoursePreview
