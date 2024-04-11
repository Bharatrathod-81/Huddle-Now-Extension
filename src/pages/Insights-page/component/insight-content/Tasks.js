import React from "react";
import { Icon, InsightWrapper, Title, TitleWrapper, TaskItem, TaskList } from "./Insight-content.styles";

const Task = ({selectedMeeting}) => {

    const contents = []

    if(selectedMeeting?._id){
        // add fetched data
    }

    return(<InsightWrapper>
    
        <TitleWrapper>
            <Icon>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="23.6316" height="23" rx="3.5" stroke="#E4E4E7"/>
                    <path d="M12.75 8.75C12.75 8.33579 12.4142 8 12 8C11.5858 8 11.25 8.33579 11.25 8.75V11.25H8.75C8.33579 11.25 8 11.5858 8 12C8 12.4142 8.33579 12.75 8.75 12.75L11.25 12.75V15.25C11.25 15.6642 11.5858 16 12 16C12.4142 16 12.75 15.6642 12.75 15.25V12.75L15.25 12.75C15.6642 12.75 16 12.4142 16 12C16 11.5858 15.6642 11.25 15.25 11.25H12.75V8.75Z" fill="#E5E5E5"/>
                </svg>
            </Icon>

            <Title>Tasks:</Title>

        </TitleWrapper>

        <TaskList>

            {contents.length !== 0 ? 
                 <>  
                   { contents?.map((content, index) => (

                        <TaskItem key={index}>

                            <Icon>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" stroke="#CA8A04"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7045 6.15347C19.034 6.4045 19.0976 6.87509 18.8466 7.20457L10.8466 17.7046C10.7154 17.8767 10.5163 17.9838 10.3003 17.9983C10.0844 18.0129 9.87271 17.9334 9.71967 17.7804L5.21967 13.2804C4.92678 12.9875 4.92678 12.5126 5.21967 12.2197C5.51256 11.9268 5.98744 11.9268 6.28033 12.2197L10.1735 16.1129L17.6534 6.29551C17.9045 5.96603 18.3751 5.90243 18.7045 6.15347Z" fill="#CA8A04"/>
                                </svg>
                            </Icon>

                            {content}
                            
                        </TaskItem>

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

                    So, about those tasks... Didn't happen this meeting
                            
                </TaskItem>
        }

        </TaskList>

    </InsightWrapper>)

}

export default Task;