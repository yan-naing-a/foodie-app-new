import { Box, Button, Typography } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();

  console.log("session :", session);

  if (!session) {
    return (
      <Box>
        <Typography variant="h4">not user here</Typography>
        <Button
          variant="contained"
          onClick={() => {
            signIn();
          }}
        >
          sign in
        </Button>
      </Box>
    );
  } else {
    return (
      <Box>
        <h1>Home</h1>
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
  }
}
