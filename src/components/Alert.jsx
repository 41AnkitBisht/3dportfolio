const Alert = ({ type, text }) => {
  return (
    <div className="absolute left-0 top-20 right-0 flex justify-center items-center">
      <div
        className={`${
          type === "danger" ? "bg-red-800" : "bg-blue-800"
        } p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center rounded-md`}
        role="alert"
      >
        <p
          className={`${
            type === "danger" ? "bg-red-500" : "bg-blue-500"
          } flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}
        >
          {type === "success" ? "Success" : "Failed"}
        </p>
        <p className="mr-2">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
