import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice.js";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { error, loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChnage = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());

      const res = await fetch("/api/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  console.log(formData);

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-center text-3xl font-semibold py-7 capitalize">
        sign in
      </h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          id="email"
          className="border focus:outline-none p-2 rounded-lg"
          onChange={handleChnage}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border focus:outline-none p-2 rounded-lg"
          onChange={handleChnage}
        />
        <button
          disabled={loading}
          className="text-white bg-slate-800 p-2 rounded-lg hover:opacity-85 disabled:opacity-80 uppercase"
        >
          {loading ? "Loading..." : "sign in"}
        </button>
      </form>
      <div className="flex gap-2 mt-3">
        <p>Dont have account?</p>
        <Link to="/sign-up" className="text-blue-600">
          sign up
        </Link>
      </div>
      {error && <p className="text-red-600 mt-5">{error}</p>}
    </div>
  );
};

export default SignIn;
