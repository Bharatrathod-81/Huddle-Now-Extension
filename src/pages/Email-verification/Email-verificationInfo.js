import React from "react";
import { FormWrapper, Icon, Note, Title, Wrapper, Logo, Description, SocialLogin, SocialIcon, Resend } from "./Email-verification.styles";
import { useParams } from "react-router-dom";
import { setToken, tokenAtom } from "../../atom/LoginAtom/useLoginAtom";
import { useAtom } from "jotai";

const EmailVerificationInfo = () => {

    const [userData] = useAtom(tokenAtom);

    const {id} = useParams();
    const {email} = useParams();


    if(id){
        setToken({...userData,extensionId:id ,email});
    };

    const openGmail = () => {
        window.open('https://mail.google.com/', '_blank');
      };
    
    const openOutlook = () => {
    window.open('https://outlook.live.com/', '_blank');
    };

    return(
    <Wrapper>
        <FormWrapper>
            <div>
                <Logo>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_389_3737)">
                    <path d="M37.383 0.558228C36.203 0.558228 35.1118 0.989631 34.249 1.85244L1.76687 34.3346C0.90406 35.1974 0.472656 36.3901 0.472656 37.4686H0.574163C0.574163 38.877 1.66536 40.3869 1.66536 40.2854L23.5274 62.1601C24.2887 63.0229 25.4814 63.4543 26.5599 63.4543V63.4417C27.7018 63.4163 28.755 62.9849 29.5924 62.1474L62.0746 29.6653C62.9374 28.8025 63.3688 27.6098 63.3688 26.5313C63.3688 25.4528 62.9374 24.3616 62.0746 23.4988L40.3141 1.73824C40.3141 1.73824 38.4742 0.659734 37.3957 0.659734" fill="#FFD0A1"/>
                    <path d="M15.7367 64H0.574163C0.244266 64 0.0285645 63.7843 0.0285645 63.4544C0.0285645 63.1245 0.244266 62.9088 0.574163 62.9088H15.7367C16.0666 62.9088 16.2823 63.1245 16.2823 63.4544C16.2823 63.7843 16.0539 64 15.7367 64ZM26.5599 64C25.2657 64 24.073 63.5686 23.096 62.5916L2.74387 42.2268C2.52817 42.0111 2.52817 41.6812 2.74387 41.4655C2.95957 41.2498 3.28947 41.2498 3.50517 41.4655L23.8573 61.8176C25.3672 63.3275 27.7526 63.3275 29.2752 61.8176L61.7574 29.3354C63.2673 27.8255 63.2673 25.4401 61.7574 23.9175L41.3926 3.57811C41.1769 3.36241 41.1769 3.03251 41.3926 2.81681C41.6083 2.60111 41.9382 2.60111 42.1539 2.81681L62.506 23.1689C64.46 25.1229 64.46 28.1554 62.506 30.0968L30.0238 62.5789C29.0468 63.5559 27.8668 64 26.5599 64ZM26.5599 57.5036C26.23 57.5036 26.0143 57.2879 26.0143 56.958V41.7954C26.0143 41.4655 26.23 41.2498 26.5599 41.2498C26.8898 41.2498 27.1055 41.4655 27.1055 41.7954V56.958C27.1055 57.2879 26.8898 57.5036 26.5599 57.5036ZM9.2403 57.5036H0.574163C0.244266 57.5036 0.0285645 57.2879 0.0285645 56.958C0.0285645 56.6281 0.244266 56.4124 0.574163 56.4124H9.2403C9.5702 56.4124 9.7859 56.6281 9.7859 56.958C9.7859 57.2879 9.55751 57.5036 9.2403 57.5036ZM4.91358 51.0071H0.574163C0.244266 51.0071 0.0285645 50.7914 0.0285645 50.4615C0.0285645 50.1316 0.244266 49.9159 0.574163 49.9159H4.90089C5.23079 49.9159 5.44649 50.1316 5.44649 50.4615C5.44649 50.7914 5.23079 51.0071 4.91358 51.0071ZM33.0563 38.0143H0.574163C0.244266 38.0143 0.0285645 37.7986 0.0285645 37.4687C0.0285645 37.4687 0.0285645 37.4687 0.0285645 37.3545C0.0285645 36.0603 0.574163 34.8676 1.43697 33.8906L33.9191 1.40841C34.8961 0.431404 36.0888 0 37.383 0C37.7129 0 37.9286 0.215702 37.9286 0.545599V33.0278C37.9286 35.8446 35.7716 38.0143 33.0563 38.0143ZM1.11976 36.9231H33.0563C35.1118 36.9231 36.8501 35.1848 36.8501 33.1293V1.1927C35.9873 1.3069 35.226 1.7383 34.6804 2.27121L2.19827 34.7534C1.66536 35.299 1.22127 36.0603 1.11976 36.9231ZM56.885 27.1784H41.7225C41.3926 27.1784 41.1769 26.9627 41.1769 26.6328C41.1769 26.3029 41.3926 26.0872 41.7225 26.0872H56.885C57.2149 26.0872 57.4306 26.3029 57.4306 26.6328C57.4306 26.9627 57.2022 27.1784 56.885 27.1784Z" fill="#51565F"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_389_3737">
                    <rect width="64" height="64" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </Logo>
                <Title>Verify your email</Title>
                <Description>We've sent a verification email to <strong>mike@klickflow.io</strong>. Just click the link to confirm it's you!</Description>
                <SocialLogin>
                    <SocialIcon onClick={openGmail}>
                        <Icon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" data-name="Layer 1" viewBox="0 0 32 32" id="gmail">
                                <path fill="#ea4435" d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"></path>
                                <path fill="#00ac47" d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z" transform="rotate(180 26.5 16)"></path>
                                <path fill="#ffba00" d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"></path>
                                <path fill="#4285f4" d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"></path>
                                <path fill="#c52528" d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"></path>
                            </svg>
                        </Icon>
                        Google
                    </SocialIcon>
                    <SocialIcon onClick={openOutlook}>
                        <Icon>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0149 5.08887V9.78344L16.6748 10.8163C16.7348 10.8293 16.7968 10.8293 16.8568 10.8163L23.9939 6.05572C23.9886 5.82468 23.9032 5.60245 23.7519 5.42638C23.6006 5.25031 23.3927 5.13113 23.163 5.08887H15.0149Z" fill="#0072C6"/>
                            <path d="M15.015 11.5345L16.5286 12.5631C16.5994 12.6058 16.6808 12.6284 16.7638 12.6284C16.8468 12.6284 16.9281 12.6058 16.999 12.5631C16.7391 12.7182 23.9931 7.95337 23.9931 7.95337V16.5814C24.012 16.7562 23.9921 16.933 23.9347 17.0994C23.8774 17.2658 23.7839 17.4179 23.661 17.5448C23.538 17.6718 23.3885 17.7706 23.2229 17.8344C23.0573 17.8982 22.8796 17.9255 22.7022 17.9142H15.0142L15.015 11.5345Z" fill="#0072C6"/>
                            <path d="M7.17953 9.37029C6.92805 9.36909 6.68093 9.43522 6.46435 9.56167C6.24777 9.68813 6.0698 9.87019 5.94929 10.0886C5.62018 10.6675 5.46226 11.3263 5.49359 11.9897C5.45938 12.6518 5.61752 13.3097 5.94929 13.8857C6.06929 14.0951 6.24288 14.2696 6.45262 14.3916C6.66235 14.5136 6.90085 14.5788 7.14414 14.5807C7.38742 14.5826 7.62694 14.5211 7.8386 14.4024C8.05027 14.2838 8.22664 14.1121 8.34998 13.9046C8.67814 13.3312 8.833 12.6767 8.79616 12.0189C8.83374 11.3403 8.68399 10.6645 8.36298 10.0637C8.24826 9.85245 8.07739 9.67621 7.86882 9.554C7.66026 9.43179 7.42192 9.36827 7.17953 9.37029Z" fill="#0072C6"/>
                            <path d="M0 2.70429V21.0703L14.1217 24V0L0 2.70429ZM9.45026 14.9923C9.1861 15.3607 8.83484 15.6597 8.42712 15.863C8.0194 16.0663 7.56759 16.1679 7.11109 16.1589C6.66608 16.1667 6.22575 16.0681 5.82753 15.8714C5.42932 15.6747 5.08501 15.3857 4.8239 15.0291C4.20461 14.1737 3.89482 13.1368 3.94454 12.0857C3.89186 10.9831 4.20725 9.894 4.84209 8.98629C5.1096 8.6108 5.46637 8.30619 5.88094 8.09931C6.29552 7.89243 6.75518 7.78964 7.21939 7.8C7.66117 7.79123 8.09838 7.88988 8.49263 8.0873C8.88689 8.28473 9.22613 8.57487 9.48059 8.93229C10.0937 9.80626 10.3982 10.8559 10.3469 11.9186C10.401 13.0132 10.0855 14.0945 9.45026 14.9923Z" fill="#0072C6"/>
                            </svg>
                        </Icon>
                        Microsoft
                    </SocialIcon>
                </SocialLogin>
            </div>
            <Note>
                No email? Check your spam folder (just in case!).
                Didn't receive an email? <Resend href="#">Resend</Resend>
            </Note>

        </FormWrapper>
    </Wrapper>
    )

}

export default EmailVerificationInfo;