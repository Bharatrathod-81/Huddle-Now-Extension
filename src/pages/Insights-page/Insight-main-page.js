import React, { useState, useEffect } from "react";
import LeftSection from "./component/left-section/Left-section";
import RightSection from "./component/right-section/Right-section";
import axios from "axios";
import { useLoading } from "../../atom/LoadingAtom/useLoading";
import { useAtom } from "jotai";
import { tokenAtom } from "../../atom/LoginAtom/useLoginAtom";
import { useParams } from "react-router-dom";

const InsightPage = () => {

    const {startLoading, stopLoading } = useLoading();
    const {id} = useParams();
    const g = [{"_id":"660d3a74cc87a1d66dedae45","session_id":"00713197-4ffc-446e-d668-40b7d13c9fe0","email":"br350019@gmail.com","createdAt":"2024-04-03T11:16:04.421Z","updatedAt":"2024-04-03T11:16:04.421Z","__v":0,"transcripts":[{"_id":"660d3a25cc87a1d66dedae31","title":"jpe-qhqo-xwc","meeting_id":"jpe-qhqo-xwc","session_id":"00713197-4ffc-446e-d668-40b7d13c9fe0","transcripts":[{"personName":"You pou","timeStamp":"04/03/2024, 04:44 PM","personTranscript":"Hello. "},{"personName":"You","timeStamp":"04/03/2024, 04:44 PM","personTranscript":"let's see how the transcript will be . Good friend this friend died. I'm going to use this one. so "},{"personName":"You","timeStamp":"04/03/2024, 04:45 PM","personTranscript":"hello. "},{"personName":"shanmuga","timeStamp":"04/03/2024, 04:45 PM","personTranscript":"party Hello. "},{"personName":"You","timeStamp":"04/03/2024, 04:45 PM","personTranscript":"hello,  "},{"personName":"shanmuga","timeStamp":"04/03/2024, 04:45 PM","personTranscript":"three e so. "},{"personName":"You","timeStamp":"04/03/2024, 04:45 PM","personTranscript":"Let's see. "},{"personName":"shanmuga","timeStamp":"04/03/2024, 04:45 PM","personTranscript":"How you "},{"personName":"You","timeStamp":"04/03/2024, 04:45 PM","personTranscript":"that you ting store. "},{"personName":"shanmuga","timeStamp":"04/03/2024, 04:45 PM","personTranscript":"Okay.  "}],"createdAt":"2024-04-03T11:14:45.090Z","updatedAt":"2024-04-03T11:16:07.253Z","__v":0}]},{"_id":"660d563dcc87a1d66dedae69","session_id":"5792f437-254b-4caf-b78c-c719fcfb7436","email":"br350019@gmail.com","createdAt":"2024-04-03T13:14:37.806Z","updatedAt":"2024-04-03T13:14:37.806Z","__v":0,"transcripts":[{"_id":"660d55e4cc87a1d66dedae61","title":"gwd-hwaf-pcz","meeting_id":"gwd-hwaf-pcz","session_id":"5792f437-254b-4caf-b78c-c719fcfb7436","transcripts":[{"personName":"shanmuga","timeStamp":"04/03/2024, 06:43 PM","personTranscript":"Hello. Hi. "},{"personName":"You","timeStamp":"04/03/2024, 06:43 PM","personTranscript":"Hi. "},{"personName":"shanmuga","timeStamp":"04/03/2024, 06:43 PM","personTranscript":"Yeah. Hello. This is shanmuga. See how it will be get highly get the t the transcript. "},{"personName":"You","timeStamp":"04/03/2024, 06:43 PM","personTranscript":"Hello. I shanmuga. this is transcript that you want to push to the bad thing. That's it. from here you ask  as for now. it is asking change awesome changing it because I have already local so it's from here , transcript You see there's no. if I go here and share Yeah. Here you can  see that . I have a wrestling for the transcript And what else? This is broken trying to guess.  I need Trying to guess that layer.  "},{"personName":"You","timeStamp":"04/03/2024, 06:47 PM","personTranscript":"Hello. Hello. So you can see that my transcript will you? I think there is a transcript is clearly visible here. we can add the emails here.  and if  there is no email at that, I have this at my I first we're gonna share r. From here also. I just to shoot and I got the email. for the Magic game for shared transcript "},{"personName":"shanmuga","timeStamp":"04/03/2024, 06:48 PM","personTranscript":"the other particles also an speak and we can get that Vietnam c. S fine now. but it depending so the  layout. I think just a transcript can't fix it out. Hope this is fine escort. I did. And we have some good. Open up. "},{"personName":"You","timeStamp":"04/03/2024, 06:49 PM","personTranscript":"if you think of why before "},{"personName":"shanmuga","timeStamp":"04/03/2024, 06:49 PM","personTranscript":"before the this book. "},{"personName":"You","timeStamp":"04/03/2024, 06:49 PM","personTranscript":"the this is because that we need to "},{"personName":"shanmuga","timeStamp":"04/03/2024, 06:49 PM","personTranscript":"hold "},{"personName":"You","timeStamp":"04/03/2024, 06:49 PM","personTranscript":"see that whether the Dom is "},{"personName":"shanmuga","timeStamp":"04/03/2024, 06:49 PM","personTranscript":"loaded "},{"personName":"You","timeStamp":"04/03/2024, 06:49 PM","personTranscript":"totally loaded or not. "},{"personName":"shanmuga","timeStamp":"04/03/2024, 06:49 PM","personTranscript":"then "},{"personName":"You","timeStamp":"04/03/2024, 06:49 PM","personTranscript":"access the elevator. I want to Target. Here we can see that he will. because that's I am there's option  for  the Gmail  if  there is  no email at it. It will add. the click here this book will l add the new. so this year pt magically,  I have just shared. My God already. And what is this? from here ? You can minimize that. model and also from here also you can  that's nice. "}],"createdAt":"2024-04-03T13:13:08.282Z","updatedAt":"2024-04-03T13:20:56.075Z","__v":0}]},{"_id":"66152bbd222babce49ba0ea3","session_id":"20c8c2e5-cdf5-4918-f73d-472108fb67ec","email":"br350019@gmail.com","createdAt":"2024-04-09T11:51:25.101Z","updatedAt":"2024-04-09T11:51:25.101Z","__v":0,"transcripts":[{"_id":"660aba8180233bbbfd41d8bc","title":"fix-qkkv-wvc","meeting_id":"fix-qkkv-wvc","session_id":"20c8c2e5-cdf5-4918-f73d-472108fb67ec","magiclink_id":"b4244290-e8bc-4840-ad41-c5ec56908f28","transcripts":[{"personName":"shanmuga","timeStamp":"04/01/2024, 07:15 PM","personTranscript":"Hello. Hi. Hi. Hello. just "},{"personName":"You","timeStamp":"04/01/2024, 07:16 PM","personTranscript":"High Hello. "},{"personName":"You","timeStamp":"04/01/2024, 07:16 PM","personTranscript":"Hello. salvation . "}],"createdAt":"2024-04-01T13:45:37.083Z","updatedAt":"2024-04-01T13:46:52.046Z","__v":0}]}]
    const [selectedMeeting, setSelectedMeeting] = useState({});
    const [openLeftSection, setOpenLeftSection] = useState(true);
    const [fetchedData, setFetchedData] = useState({isFetched:false, data:[]});
    const [insightsData, setInsightsData] = useState([]);
    const [userData] = useAtom(tokenAtom);
    const token = JSON.parse(localStorage.getItem('userData'))


    const getAllTrnacript = () => {
        startLoading();
        axios.get('http://localhost:4000/api/transcript/getusersessions', {
            headers: {
                'Authorization': `Bearer ${token?.token}`,
                'Content-Type': 'application/json',
            },
        }).then(res => {
            stopLoading();
            if(res.data.length === 1 && res.data[0]?.transcripts?.length === 0){
                setFetchedData({isFetched:true, data:[]});
            }else{
                setFetchedData({isFetched:true, data:res.data});
                // getInsights(res.data[0]?.session_id);
            }

            
        }).catch(err => {
            stopLoading();
            console.log(err);
        })
    };

    const getInsights = (id) => {
        if(id){
            startLoading();
            setInsightsData([]);
            axios.get(`http://localhost:4000/api/transcript/getinsights?key=${id}`, {
                headers: {
                    'Authorization': `Bearer ${token?.token}`,
                    'Content-Type': 'application/json',
                },
            }).then(res => {
                stopLoading();
                setInsightsData(res.data);
              }).catch(err => {
                stopLoading();
                console.log(err);
            });
        }
    };


    useEffect(() => {
        getAllTrnacript();
    },[]);

    return (
        <div className="flex w-full" >
            
            {openLeftSection && <LeftSection idFromExtension={id} setSelectedMeeting={setSelectedMeeting} selectedMeeting={selectedMeeting} fetchedData={fetchedData} getInsights={getInsights}/>}

            {(selectedMeeting?._id || (fetchedData.data.length === 0 && fetchedData.isFetched)) && 
                   <RightSection selectedMeeting={selectedMeeting} setOpenLeftSection={setOpenLeftSection} insightsData={insightsData}/>
            }
        </div>
    );
}

export default InsightPage
