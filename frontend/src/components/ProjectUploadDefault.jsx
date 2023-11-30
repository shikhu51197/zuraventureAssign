import React from 'react'
import youtube_icon from "../assets/youtube_icon.png";
import spotify_icon from "../assets/spotify_icon.png";
import rssfeed_icon from "../assets/rssfeed_icon.png";
import { Box, Grid, Heading } from '@chakra-ui/react';
import UploadFileFromEach from './UploadFileFromEach';
import UploadFileManually from './UploadFileManually';

const upload_from_divs = [
    {icon : youtube_icon, text : "Upload Youtube Video"},
    {icon :spotify_icon , text : "Upload Spotify Podcast"},
    {icon : rssfeed_icon, text : "Upload from RSS Feed"},
    {icon : youtube_icon, text : "Upload Youtube Video"},
    {icon :spotify_icon , text : "Upload Spotify Podcast"},
    {icon : rssfeed_icon, text : "Upload from RSS Feed"}
 ]

const ProjectUploadDefault = ({project_id}) => {
  return (
    <Box>
        <Heading color={"var(--primary-color)"} mb={7} textAlign={"left"}>Upload</Heading>
       <Grid gridTemplateColumns={"repeat(3,1fr)"} columnGap={"4.6rem"} rowGap={"2rem"}>
         {upload_from_divs?.map((item,i)=>{
           return (
             <UploadFileFromEach key={i} project_id={project_id} item={item} />  
           )
         })}
       </Grid>
       <UploadFileManually />
    </Box>
  )
}

export default ProjectUploadDefault;