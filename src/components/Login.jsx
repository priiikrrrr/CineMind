import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Background_URL, userAvatar } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setisSignInForm] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, seterrorMessage] = useState(null);

  const handleButtonClick = () => {
    //validate the form
    if (isSignInForm) {
      const message = checkValidData(
        email.current.value,
        null,
        password.current.value
      );
      seterrorMessage(message);
      if (message) return;
    } else {
      const message = checkValidData(
        email.current.value,
        name.current.value,
        password.current.value
      );
      seterrorMessage(message);
      if (message) return;
    }

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: userAvatar,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              seterrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col">
      <Header />
      <div className="fixed inset-0 z-[-1]">
        <img src={Background_URL} className="h-full w-full object-cover"alt="background image" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 w-full md:w-3/12 my-36 mx-auto right-0 left-0 bg-black text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 bg-gray-700 w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 bg-gray-700 w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2 my-4 bg-gray-700 w-full"
        />
        {errorMessage && (
          <p className="text-red-700 py-3 font-bold text-lg">{errorMessage}</p>
        )}
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to CineMind? Sign Up Now"
            : "Already a Member, Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
