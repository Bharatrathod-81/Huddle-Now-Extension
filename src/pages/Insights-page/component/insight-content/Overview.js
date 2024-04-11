import React from "react";
import { Icon, InsightWrapper, Excerpt, Title, TitleWrapper, ContentList, ListItem, TaskItem } from "./Insight-content.styles";

const Overview = ({selectedMeeting}) => {

    const contents = ["Sed et massa quis magna faucibus sodales sed ut magna.","Donec ac ipsum ac est consectetur ornare nec ut mi.","Nam non elit ut elit facilisis sodales eu vitae lacus."]
    const expert = 'Phasellus faucibus convallis maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam metus sem, sodales vitae arcu eget, egestas blandit diam.'

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

            <Title>Overview:</Title>

        </TitleWrapper>

        <Excerpt>{expert}</Excerpt>

        <ContentList>

            {contents.length !==0 ?
                <>
                    { contents?.map((content, index) => (

                        <ListItem key={index}>

                            <Icon>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 10C2 6.0334 5.69006 3 10 3C14.3099 3 18 6.0334 18 10C18 13.9666 14.3099 17 10 17C9.48658 17 8.98381 16.9577 8.49617 16.8766C7.51177 17.5834 6.3037 18 5 18C4.85237 18 4.70585 17.9947 4.56065 17.9841C4.29888 17.9651 4.06608 17.8107 3.9468 17.5769C3.82753 17.3431 3.83914 17.064 3.97742 16.8409C4.29476 16.329 4.48371 15.7294 4.49899 15.0848C2.97849 13.8253 2 12.0244 2 10Z" fill="#D4D4D4"/>
                                </svg>
                            </Icon>

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

                    So, about those Overview ... Didn't happen this meeting
                            
                </TaskItem>
            }

        </ContentList>

    </InsightWrapper>)

}

export default Overview;