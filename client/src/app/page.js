import Image from "next/image";
import styles from "./page.module.css";
import { Grid } from "@mui/material";
import PostsCollection from "@/components/PostsCollection.jsx";
import NavBar from "@/components/NavBar.jsx";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Grid container spacing='1em' sx={{margin: '1em'}}>
        <Grid size={{sm: 12, md: 8}}>
          <PostsCollection />
        </Grid>
        
        <Grid size={{sm: 12, md: 4}}>
          <SideBar />
        </Grid>
      </Grid>
      
    </>
  );
}
