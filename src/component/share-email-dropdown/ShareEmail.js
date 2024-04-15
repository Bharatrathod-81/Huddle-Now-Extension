import React, { useState, useEffect } from "react";

 import {ShareEmailCard ,ShareEmailCardWrapper, ShareEmailCardHead, ShareViaEmailTitle, CardCloseIcon,
     ShareOptionWrapper, ShareOption, CheckBox, ShareOptionText, AttendeeGroupWrapper, AttendeesWrapper, 
     AttendeesList, Attendee, AttendeesInput, ShareEmailCardFooter, ShareButton} from './ShareEmail.styles';

const AttendeeGroup = ({setOpenSharePopup, shareInsights, selectedMeeting}) => {

    const [existingEmails, setExistingEmails] = useState( [] );

    const [isError, setIsError] = useState(false);

    const [newEmail, setNewEmail] = useState("");

    const handleInputChange = (e) => {

        setNewEmail(e.target.value);

    };

    const handleAddEmail = () => {

        if (newEmail.trim() !== "") {

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (emailPattern.test(newEmail.trim())) {

                setExistingEmails([...existingEmails, { email: newEmail, isValid: true }]);
                setNewEmail("");

            } 
            
            else {

                setExistingEmails([...existingEmails, { email: newEmail, isValid: false }]);
                setNewEmail("");
                
            }
        }
    };

    const handleKeyDown = (e) => {

        if (e.key === "Enter") {

            handleAddEmail();

        }

    };

    const handleDeleteElement = (index) => {

        const updatedElements = [...existingEmails];

        updatedElements.splice(index, 1);

        setExistingEmails(updatedElements);

    };

    useEffect(() => {

        const hasInvalidEmail = existingEmails.some((element) => !element.isValid);

        setIsError(hasInvalidEmail);

    }, [existingEmails]);

    // share option select

    const[activeState, setActiveState] = useState(false);
    const [allActive, setAllActive] = useState(false);
    const [insightsActive, setInsightsActive] = useState(true);
    const [transcriptActive, setTranscriptActive] = useState(false);

    useEffect(() => {

        const hasActive = ( allActive || insightsActive || transcriptActive ) ? true : false;

        setActiveState(hasActive);

    }, [allActive, insightsActive, transcriptActive]);

    const handleAllClick = () => {

        const newState = !allActive;

        setAllActive(newState);

        setInsightsActive(newState);

        setTranscriptActive(newState);

    };

    const handleInsightsClick = () => {

        const newState = !insightsActive;

        setInsightsActive(newState);

        if (!newState) {

            setAllActive(false);

        } else {

            setAllActive(transcriptActive);
        
        }

    };

    const handleTranscriptClick = () => {
        const newState = !transcriptActive;
        setTranscriptActive(newState);
        if (!newState) {
            setAllActive(false);
        } else {
            setAllActive(insightsActive);
        }
    };

    const sendHandler = () => {
        if(existingEmails.length > 0){
            const body = {
                "attendees":existingEmails?.map(e => e?.email),
                "insights":insightsActive,
                "transcripts": transcriptActive,
                "shareall": allActive,
                "sessionId":selectedMeeting?.session_id
            };
            shareInsights(body);
        }
    }

    // useEffect(() => {

    //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //     const updatedEmails = existingEmails.map((email, index) => ({
            
    //         email: email,

    //         isValid: (emailPattern.test(email.toString().trim())) ? true : false,

    //     }));
  
    //     setExistingEmails(updatedEmails);

    // }, []);

  return (

    <ShareEmailCard>

        <ShareEmailCardHead>

            <ShareViaEmailTitle>Share via email ({existingEmails.length})</ShareViaEmailTitle>

            <CardCloseIcon onClick={() => setOpenSharePopup(false)}>

                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967Z" fill="#A3A3A3"/>
                </svg>

            </CardCloseIcon>

        </ShareEmailCardHead>

        <ShareEmailCardWrapper>

            <ShareOptionWrapper>

                <ShareOption isActive={allActive} onClick={handleAllClick}>

                    <CheckBox isActive={allActive}></CheckBox>

                    <ShareOptionText>All</ShareOptionText>

                </ShareOption>

                <ShareOption isActive={insightsActive} onClick={handleInsightsClick}>

                    <CheckBox isActive={insightsActive}></CheckBox>

                    <ShareOptionText>Insights</ShareOptionText>

                </ShareOption>

                <ShareOption isActive={transcriptActive} onClick={handleTranscriptClick}>

                    <CheckBox isActive={transcriptActive}></CheckBox>

                    <ShareOptionText>Transcript</ShareOptionText>

                </ShareOption>

            </ShareOptionWrapper>

            <AttendeeGroupWrapper>

                <AttendeesWrapper>

                    <AttendeesList>

                        {existingEmails.map((email, index) => (

                            <Attendee key={index} valid={email.isValid}>

                                {email.email} 

                                <svg  onClick={() => handleDeleteElement(index)} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12.5L12 4.5M4 4.5L12 12.5" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            
                            </Attendee>

                        ))}

                    </AttendeesList>

                    <AttendeesInput

                        type="text"
                        value={newEmail}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Add attendee"

                    />

                </AttendeesWrapper>

            </AttendeeGroupWrapper>

        </ShareEmailCardWrapper>

        <ShareEmailCardFooter err={isError} activeState={activeState} >

            <ShareButton onClick={sendHandler}>Send</ShareButton>

        </ShareEmailCardFooter>

    </ShareEmailCard>

    );

};

export default AttendeeGroup;