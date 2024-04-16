import React, { useEffect, useState } from 'react'
import { MainContainer } from './Right-section.styles';
import InsightHeader from '../insight-header/Insight-header';
import Highlights from '../insight-content/Highlight';
import Overview from '../insight-content/Overview';
import Nextsteps from '../insight-content/NextSteps';
import Task from '../insight-content/Tasks';
import Transcript from '../transcript/Transcript';
import axios from 'axios';
import { useLoading } from '../../../../atom/LoadingAtom/useLoading';
import AttendeeGroup from '../../../../component/share-email-dropdown/ShareEmail';


const RightSection = ({selectedMeeting,setOpenLeftSection,insightsData}) => {
  
  const [showTranscript, setShowTranscript] = useState(false);
  const [openSharePopup, setOpenSharePopup] = useState(false);
  const {isLoading ,startLoading, stopLoading } = useLoading();
  const token = JSON.parse(localStorage.getItem('userData'))

  

  const shareInsights = (body) => {
    const config = {
      headers: { Authorization: `Bearer ${token?.token}` }
    };
    console.log(token?.token,'token?.token',config);
  
    startLoading();
    axios.post(`http://localhost:4000/api/transcript/shareinsights`,body,config)
      .then(res => {
        setOpenSharePopup(false);
        stopLoading();
      }).catch(err => {
        stopLoading();
        console.log(err);
    });
  };
console.log(insightsData,'insightsData');

  return (
    <MainContainer>
      
        <InsightHeader selectedMeeting={selectedMeeting} setOpenLeftSection={setOpenLeftSection} setShowTranscript={setShowTranscript} showTranscript={showTranscript}/>

        <div className='px-32 overflow-auto pb-2 insight-right-scroll'>
          {showTranscript ?
            <Transcript selectedMeeting={selectedMeeting}/>
            :
            <div>
              {isLoading ?
                <div></div>
                :
                <div>
                  <Overview selectedMeeting={selectedMeeting} insightsData={insightsData?.find(e => e?.name === "Summary")}/>
                  <Highlights selectedMeeting={selectedMeeting} insightsData={insightsData?.find(e => e?.name === "Highlights")}/>
                  <Task selectedMeeting={selectedMeeting} insightsData={insightsData?.find(e => e?.name === "Tasks")}/>
                  <Nextsteps selectedMeeting={selectedMeeting} insightsData={insightsData?.find(e => e?.name === "Next Steps")}/>
                </div>
              }
            </div>
          }

        </div>
        <div className='h-10 mt-5 pr-36 flex justify-end items-center relative'>
          <div onClick={() => setOpenSharePopup(true)} className='border-2 cursor-pointer border-teal-600 bg-teal-50 h-full w-24 rounded-[50px] text-teal-600 flex gap-1 justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
            Share
          </div>
          {openSharePopup && <AttendeeGroup setOpenSharePopup={setOpenSharePopup} shareInsights={shareInsights} selectedMeeting={selectedMeeting}/>}
        </div>
        
    </MainContainer>
  )
}

export default RightSection;
