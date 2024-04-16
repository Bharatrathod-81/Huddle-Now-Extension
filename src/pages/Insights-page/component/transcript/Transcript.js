import React, { useState, useEffect } from "react";
import {TranscriptWrapper, TranscriptCard, TranscriptProfile, TranscriptProfileImg, TranscriptDetails, 
    TranscriptDetailsHead, TranscriptProfileName, TranscriptProfileTime, TranscriptInfo} from './Tanscript.styles'
import moment from "moment";
import GetProfile from "../../../../component/common/GetProfile";

const Transcript = ({selectedMeeting}) => {

    const [userBgColor, setUserBgColor] = useState({});

    let TranscriptCardDetails = [{
        personName: 'James Smith',
        timeStamp: '04/01/2024, 07:12 pm',
        personTranscript: 'Sure thing, Alice. We have integrated the AI algorithms to analyze meeting topics and participant preferences. It suggests agenda items based on historical data and user inputs. Its performing well in initial tests.'
    },

    {
        personName: 'Bob Smith',
        timeStamp: '04/01/2024, 07:15 pm',
        personTranscript: 'Sure thing, Alice. We have integrated the AI algorithms to analyze meeting topics and participant preferences. It suggests agenda items based on historical data and user inputs. Its performing well in initial tests.'
    },];

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