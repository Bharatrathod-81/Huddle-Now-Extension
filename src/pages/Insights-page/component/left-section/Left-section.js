import React, { useEffect, useState } from 'react'
import { MainContainer, AllDayMeetingContainer, DateTitleContainer } from './Left-section.styles'
import MeetingCard from '../meeting-card/Meeting-card'
import GetDayFormat from '../../../../component/common/GetDayFormat';
import DemoInsight from '../../../../component/common/Demo';

const LeftSection = ({idFromExtension, selectedMeeting, setSelectedMeeting, fetchedData, getInsights}) => {

    const [arrangedArr, setArrangedArr] = useState([]);
   
    const getArrangedArr = () => {
        
            let allArrayData = fetchedData?.data?.reduce((result, meeting) => {
                if(meeting?.transcripts[0]){
                    const [day, month, year] = meeting?.transcripts[0]?.transcripts[0]?.timeStamp?.slice(0,10)?.split('/')?.map(e => parseInt(e));
                    const idxNo = (new Date().getFullYear() - year)+month+day;

                    if (!result[idxNo]) {
                        result[idxNo] = [];
                    }   

                    
                    result[idxNo].push(meeting);
                    return result;
                }else{
                    return result;
                }
            }, []);

            const sortedArr = allArrayData?.sort((a,b) => new Date(b[0]?.transcripts[0]?.transcripts[0]?.timeStamp).setHours(0,0,0,0) - new Date(a[0]?.transcripts[0]?.transcripts[0]?.timeStamp).setHours(0,0,0,0));
            setArrangedArr(sortedArr?.map(e => e?.reverse()));
    };

    const clickHandler = (data) => {
        const startTime = data?.transcripts[0]?.transcripts[0]?.timeStamp?.slice(12);
        const endTime = data?.transcripts[0]?.transcripts?.at(-1)?.timeStamp?.slice(12);

        setSelectedMeeting({...data, title:data?.transcripts[0]?.title, startTime, endTime});
        getInsights(data?.session_id);
    }


    useEffect(() => {
        getArrangedArr();
    },[fetchedData.data]);


    useEffect(() => {
        if(arrangedArr.length > 0 && (!selectedMeeting?._id) && (!idFromExtension)){
            clickHandler(arrangedArr[0][0]);
        }else if(idFromExtension && arrangedArr.length > 0){
            clickHandler(fetchedData?.data?.find(e => e?.session_id === idFromExtension));
        }
    },[arrangedArr]);


  return (
    <MainContainer>
        {(fetchedData.data.length === 0 && fetchedData.isFetched) && <DemoInsight/>}
        {arrangedArr.map((e,mainIdx) => 
           <AllDayMeetingContainer key={mainIdx}>
              <DateTitleContainer>{GetDayFormat(e[0]?.transcripts[0]?.transcripts[0]?.timeStamp)}</DateTitleContainer>
              {e?.map((e,idx) => <MeetingCard data={e} key={idx} selectedMeeting={selectedMeeting} clickHandler={clickHandler}/>)}
           </AllDayMeetingContainer>
        )}
    </MainContainer>
  )
}

export default LeftSection;
