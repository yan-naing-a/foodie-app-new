import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <Button
      variant="contained"
      onClick={() => {
        signIn("google", { callbackUrl: "/" });
      }}
    >
      sign in
    </Button>
  );
};

export default SignIn;
