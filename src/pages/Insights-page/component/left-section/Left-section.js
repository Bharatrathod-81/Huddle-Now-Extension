import React, { useEffect, useState } from 'react'
import { MainContainer, AllDayMeetingContainer, DateTitleContainer } from './Left-section.styles'
import MeetingCard from '../meeting-card/Meeting-card'
import GetDayFormat from '../../../../component/common/GetDayFormat';


const LeftSection = ({selectedMeeting, setSelectedMeeting, fetchedData}) => {

    const [arrangedArr, setArrangedArr] = useState([]);
   
    const getArrangedArr = () => {
        let allArrayData = fetchedData.data?.reduce((result, meeting) => {
            
            const [day, month, year] = meeting?.transcripts[0]?.transcripts[0]?.timeStamp?.slice(0,10)?.split('/')?.map(e => parseInt(e));
            const idxNo = (new Date().getFullYear() - year)+month+day;

            if (!result[idxNo]) {
                result[idxNo] = [];
            }   

            
            result[idxNo].push(meeting);
            return result;
        }, []);

        const sortedArr = allArrayData?.sort((a,b) => new Date(b[0]?.transcripts[0]?.transcripts[0]?.timeStamp).setHours(0,0,0,0) - new Date(a[0]?.transcripts[0]?.transcripts[0]?.timeStamp).setHours(0,0,0,0));

        setArrangedArr(sortedArr);
    };

    const clickHandler = (data) => {

        const startTime = data?.transcripts[0]?.transcripts[0]?.timeStamp?.slice(12);
        const endTime = data?.transcripts[0]?.transcripts?.at(-1)?.timeStamp?.slice(12);

        setSelectedMeeting({...data, title:data?.transcripts[0]?.title, startTime, endTime});
    }


    useEffect(() => {
        getArrangedArr();
    },[fetchedData.data]);

    useEffect(() => {
        if(arrangedArr.length > 0 && (!selectedMeeting?._id)){
            clickHandler(arrangedArr[0][0]);
        }
    },[arrangedArr]);

  return (
    <MainContainer>
        {arrangedArr.map((e,mainIdx) => 
           <AllDayMeetingContainer key={mainIdx}>
              <DateTitleContainer>{GetDayFormat(e[0]?.transcripts[0]?.transcripts[0]?.timeStamp)}</DateTitleContainer>
              {e.map((e,idx) => <MeetingCard data={e} key={idx} selectedMeeting={selectedMeeting} clickHandler={clickHandler}/>)}
           </AllDayMeetingContainer>
        )}
    </MainContainer>
  )
}

export default LeftSection;
