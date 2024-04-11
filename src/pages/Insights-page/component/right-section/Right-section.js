import React, { useState } from 'react'
import { MainContainer } from './Right-section.styles';
import InsightHeader from '../insight-header/Insight-header';
import Highlights from '../insight-content/Highlight';
import Overview from '../insight-content/Overview';
import Nextsteps from '../insight-content/NextSteps';
import Task from '../insight-content/Tasks';
import Transcript from '../transcript/Transcript';


const RightSection = ({selectedMeeting,setOpenLeftSection}) => {

  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <MainContainer>
        <InsightHeader selectedMeeting={selectedMeeting} setOpenLeftSection={setOpenLeftSection} setShowTranscript={setShowTranscript} showTranscript={showTranscript}/>

        <div className='px-32 overflow-auto pb-4'>
          {showTranscript ?
            <Transcript selectedMeeting={selectedMeeting}/>
            :
            <div>
              <Overview selectedMeeting={selectedMeeting}/>
              <Highlights selectedMeeting={selectedMeeting}/>
              <Task selectedMeeting={selectedMeeting}/>
              <Nextsteps selectedMeeting={selectedMeeting}/>
            </div>
          }
        </div>
    </MainContainer>
  )
}

export default RightSection;
