import React, { useState, useContext, useEffect } from "react";
import { LoginSchema } from "../Schemas/LoginSchema";

import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../SharedComponents/Context/AppContext";
import { auth, onAuthStateChanged } from "../../SharedComponents/firebase/Firebase";
import ClipLoader from "react-spinners/ClipLoader";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";


export const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  
  const { signInWithGoogle, loginWithEmailAndPassword } =
    useContext(AuthContext);

  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
       navigate("/main");
        setLoading(false);
      }       
    });
  }, [navigate]);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formik.values;
    if (formik.isValid === true) {
      loginWithEmailAndPassword(email, password);
      setLoading(true);
    }  else{
      alert("Enter a valid Email and Password or try Joining")
      setLoading(false);
    }
  };

 const formik = useFormik({
  initialValues,
  validationSchema:LoginSchema,
  handleSubmit 
 });

  return (
    <>
      {loading ? (
        <div className="grid grid-cols-1 justify-items-center items-center h-screen">
          <ClipLoader color="#367fd6" size={150} speedMultiplier={0.5} />
        </div> 
      ) : (
        <div className="grid grid-cols-1 h-screen justify-items-center items-center">
          <Card className="w-96 shadow-md border-2 border-gray-300">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                LOGIN
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <Input
                    name="email"
                    type="email"
                    id="email"
                    label="Email"
                    size="lg"
                  
                  {...formik.getFieldProps("email")}
                  />
                </div>
                <div>
                  {formik.touched.email && formik.errors.email && (
                    <Typography variant="small" color="red">
                      {formik.errors.email}
                    </Typography>
                  )}
                </div>
                <div className="mt-4 mb-2">
                  <Input
                    name="password"
                    id="password"
                    type="password"
                    label="Password"
                    size="lg"
                  {...formik.getFieldProps("password")}
                  />
                  <div>
                    {formik.touched.password && formik.errors.password && (
                      <Typography variant="small" color="red">
                        {formik.errors.password}
                      </Typography>
                    )}
                  </div>
                </div>
                <Button
                  variant="gradient"
                  fullWidth
                  className="mb-4 mt-4"
                  type="submit"
                >
                  Login
                </Button>
              </form>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                variant="gradient"
                fullWidth
                className="mb-4"
                onClick={signInWithGoogle}
              >
                Sign In with Google
              </Button>
              <Link to="/reset">
                <p className="ml-1 font-bold font-roboto text-sm text-blue-500 text-center ">
                  Reset the password
                </p>
              </Link>
              <div className="mt-6 flex items-center font-roboto text-base justify-center">
                Don't have an account?
                <Link to="/register">
                  <p className="ml-1 font-bold font-roboto text-sm text-blue-500 text-center ">
                    Register
                  </p>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};
export default LoginPage;
