import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/Authcontext.js";
import { API } from "../global.js";
import Spinner from "../route/Spinner.js";
import { Outlet } from "react-router-dom";
export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  // eslint-disable-next-line
  const [auth, setAuth] = useAuth();
  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(`${API}/api/user/user-auth`);
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet/> : <Spinner />;
}