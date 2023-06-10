const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div key={index} className=" w-56 h-56 p-2 m-2 bg-gray-300"></div>
        ))}
    </div>
  );
};
export default Shimmer;
