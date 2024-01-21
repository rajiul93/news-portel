"use client";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";
const BootstrapJavascript = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
};

export default BootstrapJavascript;
