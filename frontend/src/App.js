import { useEffect, useState } from "react";
import "./App.css";
import AllRoutes from "./components/AllRoutes";
import EmailLoginMadule from "./components/EmailLoginModel";
import { useDispatch, useSelector } from "react-redux";
import { funClearError, funClearSuccess, funUserLoggedIn } from "./redux/actions";
import { useToast } from "@chakra-ui/react";
import Loading from "./components/Loading";

function App() {
  const { message, error, success, loading } = useSelector((store) => store);
  const toast = useToast();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(funUserLoggedIn());
  // }, []);

  useEffect(() => {
    if (error) {
      toast({
        description: message,
        status: "error",
        duration: 2000,
      });
      dispatch(funClearError());
    }
    if (success) {
      toast({
        description: message,
        status: "success",
        duration: 2000,
      });
      dispatch(funClearSuccess());
    }
  }, [error, success]);

  return (
    <div className="App">
      {loading && <Loading />}
      <AllRoutes />
      <EmailLoginMadule />
    </div>
  );
}

export default App;
