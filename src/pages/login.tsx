import { useLogin } from "@refinedev/core";

import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";



import { CredentialResponse } from "../interfaces/google";
 


const GOOGLE_CLIENT_ID =
  "354979993848-2libcukv0a7jm205heuh8pr68fpmt1lt.apps.googleusercontent.com";


export const Login: React.FC = () => {
  const { mutate: login } = useLogin<CredentialResponse>();

  const GoogleButton = (): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typeof window === "undefined" || !window.google || !divRef.current) {
        return;
      }

      try {
        window.google.accounts.id.initialize({
          ux_mode: "popup",
          client_id: GOOGLE_CLIENT_ID,
          callback: async (res: CredentialResponse) => {
            if (res.credential) {
              login(res);
            }
          },
        });
        window.google.accounts.id.renderButton(divRef.current, {
          theme: "filled_blue",
          size: "medium",
          type: "standard",
        });
      } catch (error) {
        console.log(error);
      }
    }, []);

    return <div ref={divRef} />;
  };

  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <Box
        display="flex"
        gap="14px"
        justifyContent="center"
        flexDirection="column"
      >
 <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          display: "flex",
          alignItems: "center",
          zIndex: 2,
        }}
      > 
        <Typography style={{ marginLeft: "10px", marginTop: "3px" }}>
      Accountingiz bormi?
    </Typography>
        <button
          style={{
            fontSize: "16px",
            fontWeight: 200,
            borderRadius: "5px",
            color: "white",
            background: "#543B4E",
          }}
        >
          Kirish
        </button>
      
      </div>
      
        <h1 style={{
          fontSize: "28px",
          alignItems: "center",
        justifyContent: "center"
      }}
     >Hozir boshlang,</h1>
     <h2 
     style={{fontSize: "16px", 
     fontWeight: 200,
     alignItems: "center",
    justifyContent: "center",
    paddingRight: "19px"

 }}
     >
     Iltimos, Malumotlaringizni kiriting
     </h2>
     <form>
     <input 
     style={{
      fontSize: "14px",
      fontWeight: 200,
      width: "100%",
      height: "38px",
      borderRadius: "10px",
      color: "gray",
      background: "FAFAFA",
      border: "1.8 px solid gray"
    }}
     type="text" placeholder="Ism..."/>
     </form>
     
     <form>
     <input 
     style={{
      fontSize: "14px",
      fontWeight: 200,
      width: "100%",
      height: "38px",
      borderRadius: "10px",
      color: "gray",
      background: "FAFAFA",
      border: "1.8 px solid gray"
    }}
     type="email" placeholder="Electron pochta..."/>
     </form>
     <form>
     <input 
     style={{
      fontSize: "14px",
      fontWeight: 200,
      width: "100%",
      height: "38px",
      borderRadius: "10px",
      color: "gray",
      background: "FAFAFA",
      border: "1.8 px solid gray"
    }}
     type="password" placeholder="Parol..."/>
     </form>
        <button
        style={{
          width: "100%",
          height: "38px",
          borderRadius: "5px",
          color: "white",
          background:"#543B4E"
        }}
        >Regestratsiya</button>


   
        <Typography align="center">
        yoki 
        </Typography>
        

        <GoogleButton/>
      </Box>
      
    </Container>
  
  );
};
