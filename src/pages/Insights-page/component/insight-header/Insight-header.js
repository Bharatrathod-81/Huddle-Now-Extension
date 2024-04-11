import React, { useState, useEffect } from "react";

import {InsightTranscriptHeader,InsightTranscriptLeftWrapper,InsightTranscriptMaximizeIcon ,InsightTranscriptHead,
    InsightTranscriptTitle,InsightTranscriptTime,InsightTranscriptRightWrapper,ViewTranscriptInsightButton} from './Insight-header.styles';

import GetDayFormat from "../../../../component/common/GetDayFormat";

const InsightHeader= ({selectedMeeting,setOpenLeftSection,setShowTranscript,showTranscript}) => {

    let day = '';
    if(selectedMeeting?.transcripts){
        if(selectedMeeting?.transcripts[0]){
            day =  GetDayFormat(selectedMeeting?.transcripts[0]?.transcripts[0]?.timeStamp);

        }
    }


    return(

        <>

            <InsightTranscriptHeader>

                <InsightTranscriptLeftWrapper>

                    <InsightTranscriptMaximizeIcon onClick={() => setOpenLeftSection(prev => !prev)}>

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 3.75V8.25M3.75 3.75H8.25M3.75 3.75L9 9M3.75 20.25V15.75M3.75 20.25H8.25M3.75 20.25L9 15M20.25 3.75L15.75 3.75M20.25 3.75V8.25M20.25 3.75L15 9M20.25 20.25H15.75M20.25 20.25V15.75M20.25 20.25L15 15" stroke="#A3A3A3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </InsightTranscriptMaximizeIcon>

                    <InsightTranscriptHead>

                        <InsightTranscriptTitle>{selectedMeeting?.title}</InsightTranscriptTitle>

                        <InsightTranscriptTime>{day}, {selectedMeeting?.startTime} - {selectedMeeting?.endTime}</InsightTranscriptTime>

                    </InsightTranscriptHead>

                </InsightTranscriptLeftWrapper>

                <InsightTranscriptRightWrapper>

                    <ViewTranscriptInsightButton onClick={() => setShowTranscript(prev => !prev)}>{showTranscript ? "View Insights":"View Transcript"}</ViewTranscriptInsightButton>

                </InsightTranscriptRightWrapper>
            
            </InsightTranscriptHeader>

        </>

    );
    
} 

export default InsightHeader;
