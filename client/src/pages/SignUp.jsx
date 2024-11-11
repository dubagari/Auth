import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const handleChnage = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const res = await fetch("/api/user/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });
    // const data = await res.json();
    // console.log(data);
  };

  console.log(formData);

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-center text-3xl font-semibold py-7">sign up</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border focus:outline-none p-2 rounded-lg"
          onChange={handleChnage}
        />
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
        <button className="text-white bg-slate-800 p-2 rounded-lg hover:opacity-85">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-3">
        <p>Have account?</p>
        <Link to="/sign-in" className="text-blue-600">
          sign in
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
