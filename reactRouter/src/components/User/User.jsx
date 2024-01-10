import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <>
      <div className=" bg-white  border-none outline-none py-3 w-auto">
        <div className="bg-gray-500 py-8 text-white text-center text-4xl mx-[30rem] rounded-full">
          User: {userid}
        </div>
      </div>
    </>
  );
};

export default User;
