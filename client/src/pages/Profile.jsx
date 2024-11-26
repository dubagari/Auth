import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePercentage, setFilePercentage] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  console.log(filePercentage);
  console.log(fileUploadError);
  console.log(formData);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prograss =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePercentage(Math.round(prograss));
      },

      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) =>
          setFormData({ ...formData, avater: downloadUrl })
        );
      }
    );
  };

  return (
    <div className="max-w-lg m-auto ">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.avater || currentUser.avater}
          className="rounded-full h-24 w-24 object-cover place-self-center cursor-pointer"
          alt="profile"
        />
        <div className="text-center">
          {fileUploadError ? (
            <span className="text-red-700">Error Image</span>
          ) : filePercentage > 0 && filePercentage < 100 ? (
            <span className="text-slate-700">{`uploading ${filePercentage}%`}</span>
          ) : filePercentage === 100 ? (
            <span className="text-green-700">Image successfully uploaded</span>
          ) : (
            ""
          )}
        </div>
        <input
          type="text"
          placeholder="username"
          id="username"
          className="rounded-lg border p-2 focus:outline-none"
        />
        <input
          type="email"
          placeholder="email "
          id="email"
          className="rounded-lg border p-2 focus:outline-none"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="rounded-lg border p-2 focus:outline-none"
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
