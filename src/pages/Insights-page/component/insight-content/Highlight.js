import React from "react";
import { Icon, InsightWrapper, Title, TitleWrapper, ContentList, ListItem, TaskItem } from "./Insight-content.styles";

const Highlights = ({selectedMeeting, insightsData}) => {

    let contents = [];

    if(selectedMeeting?._id){
        if(insightsData?.insights[0]?.insights){
            contents = insightsData?.insights[0]?.insights?.split("\n");
        }
    }else{
        contents = ["No specific highlights were mentioned during this meeting."];
    }

  return (
    <InsightWrapper>
        
        <TitleWrapper>
            <Icon>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="23.6316" height="23" rx="3.5" stroke="#E4E4E7"/>
                    <path d="M12.75 8.75C12.75 8.33579 12.4142 8 12 8C11.5858 8 11.25 8.33579 11.25 8.75V11.25H8.75C8.33579 11.25 8 11.5858 8 12C8 12.4142 8.33579 12.75 8.75 12.75L11.25 12.75V15.25C11.25 15.6642 11.5858 16 12 16C12.4142 16 12.75 15.6642 12.75 15.25V12.75L15.25 12.75C15.6642 12.75 16 12.4142 16 12C16 11.5858 15.6642 11.25 15.25 11.25H12.75V8.75Z" fill="#E5E5E5"/>
                </svg>
            </Icon>

            <Title>Highlight:</Title>

        </TitleWrapper>

        <ContentList>
           {contents.length !==0 ?
                <>
                    { contents?.map((content, index) => (
                        
                        <ListItem key={index}>

                            {content &&
                                <Icon>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9834 1.90718C12.0546 1.57461 11.8932 1.23571 11.59 1.08152C11.2868 0.927338 10.9179 0.996463 10.6911 1.24994L2.19108 10.7499C1.99385 10.9704 1.9446 11.2861 2.06533 11.5562C2.18607 11.8262 2.45423 12 2.75001 12H9.32227L8.01666 18.0929C7.9454 18.4255 8.10685 18.7644 8.41002 18.9185C8.71318 19.0727 9.08215 19.0036 9.30894 18.7501L17.8089 9.25013C18.0062 9.0297 18.0554 8.71393 17.9347 8.4439C17.814 8.17388 17.5458 8.00003 17.25 8.00003H10.6778L11.9834 1.90718Z" fill="#D4D4D4"/>
                                    </svg>
                                </Icon>
                            }

                            {content}
                            
                        </ListItem>

                   ))}
                </>
                :
                <TaskItem >

                    <Icon>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" stroke="#CA8A04"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7045 6.15347C19.034 6.4045 19.0976 6.87509 18.8466 7.20457L10.8466 17.7046C10.7154 17.8767 10.5163 17.9838 10.3003 17.9983C10.0844 18.0129 9.87271 17.9334 9.71967 17.7804L5.21967 13.2804C4.92678 12.9875 4.92678 12.5126 5.21967 12.2197C5.51256 11.9268 5.98744 11.9268 6.28033 12.2197L10.1735 16.1129L17.6534 6.29551C17.9045 5.96603 18.3751 5.90243 18.7045 6.15347Z" fill="#CA8A04"/>
                        </svg>
                    </Icon>

                    So, about those Highlights ... Didn't happen this meeting
                            
                </TaskItem>
            }
        </ContentList>

    </InsightWrapper>
)

}

export default Highlights;
