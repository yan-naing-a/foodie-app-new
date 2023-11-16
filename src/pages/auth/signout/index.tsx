import { Box, Button } from "@mui/material";
import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => {
          signOut();
        }}
      >
        signOut
      </Button>
    </Box>
  );
};
export default SignOut;
