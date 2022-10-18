import React from "react";
import { VideoContainer, VideoBg, Video1, VideoContent, VideoHeader } from "./styledComponents";
import Video from "./Images/Videos/COEvideo.mp4";


function VideoSection(){


    return(
        <>
            <VideoContainer>
                
                <VideoBg>
                    <Video1  autoPlay loop muted src={Video} type="video/mp4" />
                </VideoBg>
                <VideoContent>
                  <VideoHeader>COMPUTER ENGINEERING</VideoHeader>
                </VideoContent>
            </VideoContainer>
            


        </>
    )
}

export default VideoSection;