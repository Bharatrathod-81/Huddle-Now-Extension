import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocalStorageAtom } from "./atom/LoginAtom/useLoginAtom";
import PostLogin from "./Routes/PostLogin/PostLogin";
// import PreLogin from "../src/routes/preLogin/PreLogin"


const AppController = () => {

  const [userData, setUserData] = useLocalStorageAtom();

  return (
    <div>
      {(!userData?.token) ? (
        <PostLogin />
      ) : (
        <></>
        // <Routes>
        //   <Route path="*" element={<PreLogin />} />
        // </Routes>
      )}
      </div>
  );
};

export default AppController;