import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center ">
      <div className="flex flex-col justify-center  ">
        <p className="text-4xl font-bold">Welcome to Paytm</p>
        <p className="text-xl text-center underline mt-3">
          <Link to={"/signup"}>
            {" "}
            <span className="bi bi-person" />
            Sign in
          </Link>
        </p>
        <p className="text-xl text-center underline">
          <Link to={"/signin"}>
            <span className="bi bi-person-add m-2" />
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
