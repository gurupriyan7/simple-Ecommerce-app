/* eslint-disable react-hooks/rules-of-hooks */
import { toast } from "react-toastify";
import { removeLocalStorage } from "./appUtils";

export const showToasterError = (error: any) => {
  if (error?.statusCode || error?.response?.status == "401") {
    removeLocalStorage();
    window.location.href = "/";
  } else {
    toast.error(error?.message);
  }
};
