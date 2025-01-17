"use client";
import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth } from "@/lib/firebaseConfig";
// import { clearUser, setUser } from "@/redux/authSlice";
import { FaUserCircle } from "react-icons/fa";
// import { RootState } from "@/redux/store";
import Image from "next/image";

export default function UserIcon() {
  //   const dispatch = useDispatch();
  //   const user = useSelector((state: RootState) => state.auth.user);
  //   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!user);

  //   const handleLogin = async () => {
  //     const authProvider = new GoogleAuthProvider();

  //     try {
  //       const result = await signInWithPopup(auth, authProvider);
  //       const user = result.user;

  //       // Dispatch user information to Redux
  //       dispatch(
  //         setUser({
  //           uid: user.uid,
  //           email: user.email || "",
  //           displayName: user.displayName || "",
  //           photoURL: user.photoURL || "",
  //         })
  //       );

  //       setIsLoggedIn(true); // Update local state
  //       console.log("User signed in:", user);
  //     } catch (error) {
  //       console.error("Error during login:", error);
  //     }
  //   };

  //   const handleLogout = () => {
  //     // Clear user information from Redux
  //     dispatch(clearUser());
  //     setIsLoggedIn(false); // Update local state
  //     console.log("User signed out.");
  //   };

  return (
    <div className="">
      {/* {isLoggedIn && user?.photoURL ? (
        <Image src="path/to/image" alt="description" width={500} height={300} />
      ) : ( */}
      <div
        className="text-2xl text-button hover:text-gray-100 cursor-pointer transition-colors"
        //   onClick={handleLogin}
        title="Login"
      >
        <FaUserCircle />
      </div>
      {/* )} */}
    </div>
  );
}

// need to add message pop up for error messages
