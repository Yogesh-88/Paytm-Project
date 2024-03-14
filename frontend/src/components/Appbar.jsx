import { useNavigate } from "react-router-dom";

export const Appbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4">PayTM App</div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">Hello</div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">Y</div>
        </div>

        <div className="m-2">
          <button
            className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
