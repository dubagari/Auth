import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg m-auto ">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avater}
          className="rounded-full h-24 w-24 object-cover place-self-center cursor-pointer"
          alt="profile"
        />
        <input
          type="text"
          placeholder="username"
          id="username"
          className="rounded-lg border p-2"
        />
        <input
          type="email"
          placeholder="email "
          id="email"
          className="rounded-lg border p-2"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="rounded-lg border p-2"
        />
        <button className="text-white bg-slate-700 p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          update
        </button>
      </form>
      <div className="flex justify-between mt-5 px-2 capitalize">
        <p className="text-red-500 cursor-pointer">delete accout</p>
        <p className="text-red-500 cursor-pointer">sign out</p>
      </div>
    </div>
  );
};

export default Profile;
