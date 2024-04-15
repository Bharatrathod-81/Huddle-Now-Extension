import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { tokenAtom } from "./atom/LoginAtom/useLoginAtom";
import PostLogin from "./Routes/PostLogin/PostLogin";
import PreLogin from "./Routes/PreLogin/PreLogin";
import ApiLoader from "./component/common/ApiLoader";
import { useLoading } from "./atom/LoadingAtom/useLoading";
import { useAtom } from "jotai";


const AppController = () => {

  const [userData] = useAtom(tokenAtom);
  const { isLoading } = useLoading();
  const token = JSON.parse(localStorage.getItem('userData'))

  

  return (
    <div>
      {isLoading  && <ApiLoader />}
      {(token?.token) ? (
        <PostLogin />
      ) : (
        <Routes>
          <Route path="*" element={<PreLogin />} />
        </Routes>
      )}
      </div>
  );
};

export default AppController;