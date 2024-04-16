import React, { useState, useEffect } from "react";
import {TranscriptWrapper, TranscriptCard, TranscriptProfile, TranscriptProfileImg, TranscriptDetails, 
    TranscriptDetailsHead, TranscriptProfileName, TranscriptProfileTime, TranscriptInfo} from './Tanscript.styles'
import moment from "moment";
import GetProfile from "../../../../component/common/GetProfile";

const Transcript = ({selectedMeeting}) => {

    const [userBgColor, setUserBgColor] = useState({});


    let TranscriptCardDetails = [
        {
            personName: 'Ryan',
            timeStamp: '04/01/2024, 07:12 pm',
            personTranscript: "Good morning, everyone. Let's dive in. Sri, how's the first version of our Huddle Now extension coming along?"
        },
        {
            personName: 'Sri',
            timeStamp: '04/01/2024, 07:15 pm',
            personTranscript: "Morning, Ryan. It's ready to go! After each meeting, it gives a summary, highlights, tasks, and next steps. And if we haven't discussed any tasks, it gives a clear note saying so."
        },
        {
            personName: 'Ryan',
            timeStamp: '04/01/2024, 07:17 pm',
            personTranscript: "Excellent work, Sri. Bharat, how's the design of the extension looking?"
        },
        {
            personName: 'Bharat',
            timeStamp: '04/01/2024, 07:20 pm',
            personTranscript: "Looking good, Ryan. It's user-friendly and fits right in with what we already have."
        },
        {
            personName: 'Ryan',
            timeStamp: '04/01/2024, 07:23 pm',
            personTranscript: "Great to hear, Bharat. Dhanapal, any tech issues we should know about?"
        },
        {
            personName: 'Dhanapal',
            timeStamp: '04/01/2024, 07:26 pm',
            personTranscript: "Smooth sailing, Ryan. We've made sure everything runs fast and stays reliable."
        },
        {
            personName: 'Ryan',
            timeStamp: '04/01/2024, 07:27 pm',
            personTranscript: "Perfect, Dhanapal. Paandi, are we confident it'll handle lots of users?"
        },
        {
            personName: 'Paandi',
            timeStamp: '04/01/2024, 07:29 pm',
            personTranscript: "All good, Ryan. Our system is solid and can handle plenty of users without any problems."
        },
        {
            personName: 'Ryan',
            timeStamp: '04/01/2024, 07:30 pm',
            personTranscript: "That's reassuring, Paandi. Alright, team, let's launch this thing. And let's keep improving it based on what our users tell us. Sound good?"
        },
        {
            personName: 'Ryan',
            timeStamp: '04/01/2024, 07:33 pm',
            personTranscript: "Fantastic. Let's get it out there and keep making it better. Meeting adjourned."
        },
        
];

    if(selectedMeeting?.transcripts){
        if(selectedMeeting?.transcripts[0]?.transcripts?.length > 0){
            TranscriptCardDetails = selectedMeeting?.transcripts[0]?.transcripts;
        }
    }

    useEffect(() =>{
        setUserBgColor(GetProfile(TranscriptCardDetails));
    },[TranscriptCardDetails])


    return (

        <TranscriptWrapper>

        {TranscriptCardDetails.map((data, index) => (

            <TranscriptCard key={index}>

            <TranscriptProfile>
                <TranscriptProfileImg style={{backgroundColor:`${userBgColor[data?.personName]?.color}`, border:`1px solid ${userBgColor[data?.personName]?.border}`, color:`${userBgColor[data?.personName]?.text}` }}>{userBgColor[data?.personName]?.shortName}</TranscriptProfileImg>
            </TranscriptProfile>

                <TranscriptDetails>

                    <TranscriptDetailsHead>

                        <TranscriptProfileName>{data?.personName}</TranscriptProfileName>

                        <TranscriptProfileTime>{moment(data?.timeStamp).format('hh:mm a')}</TranscriptProfileTime>

                    </TranscriptDetailsHead>

                    <TranscriptInfo>{data?.personTranscript}</TranscriptInfo>

                </TranscriptDetails>

            </TranscriptCard>

        ))}

        </TranscriptWrapper>

    );

  }
  
export default Transcript;