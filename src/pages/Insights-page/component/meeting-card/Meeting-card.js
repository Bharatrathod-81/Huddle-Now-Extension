import React from "react";
import { CardWrapper, Time, Title } from "./Meeting-card.styles";


const MeetingCard = ({data, selectedMeeting, clickHandler}) => {

    const startTime = data?.transcripts[0]?.transcripts[0]?.timeStamp?.slice(12);
    const endTime = data?.transcripts[0]?.transcripts?.at(-1)?.timeStamp?.slice(12);

  return (
    <CardWrapper active={selectedMeeting?._id === data?._id} onClick={() => clickHandler(data)}>
        <Title>{data?.transcripts[0]?.title}</Title>
        <Time>{startTime} - {endTime}</Time>
    </CardWrapper>
  )
}

export default MeetingCard
