import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { SideBarColBottom, SideBarColTop, SideBarDropdownEmailField, SideBarDropdownEmailText, 
         SideBarDropdownSignOutText, SideBarDropdownSignoutField, SideBarIcon, SideBarNav, SideBarNavLink, 
         SideBarNavLinkText, SideBarProfileDropdownWrapper, SideBarProfileWrapper, SideBarWrapper } from "./Side-bar.styles";
import { setToken, tokenAtom } from "../../atom/LoginAtom/useLoginAtom";
import { useAtom } from "jotai";

const SideBar = ({clickOutSide}) => {

    const navigate = useNavigate();
    const [userData] = useAtom(tokenAtom);
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the dropdown state

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(false);
    },[clickOutSide])

    const sendTokenToExtension = (token) => {
        const extensionId = userData?.extensionId; // Update with your extension ID
        chrome.runtime.sendMessage(extensionId, { type:'removeToken'}, response => {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
            return;
          }
          console.log('Message sent to extension:');
        });
      }

    const signOutHandler = () => {
        sendTokenToExtension();
        setToken({});
        navigate('/');
        window.location.reload();
    }

  return (

    <SideBarWrapper>

        <SideBarColTop>

            <SideBarIcon>

                <Link to="#">

                    <svg width="32" height="32" viewBox="0 0 32 32" class="mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16345 24.8366 0 16 0C7.16343 0 0 7.16345 0 16C0 24.8366 7.16343 32 16 32ZM20.9914 7.45348C21.2344 6.59044 20.3969 6.08011 19.632 6.62504L8.95449 14.2317C8.12497 14.8226 8.25545 16 9.15049 16H11.9622V15.9782H17.442L12.977 17.5537L11.0086 24.5466C10.7656 25.4096 11.603 25.9199 12.368 25.375L23.0455 17.7684C23.875 17.1774 23.7445 16 22.8495 16H18.5857L20.9914 7.45348Z" fill="white"/>
                    </svg>

                </Link>

            </SideBarIcon>

            <SideBarNav>
                            
                <SideBarNavLink>

                    <Link to="#">
                        
                        <svg class="mx-auto" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 8C8.47715 8 4 12.4772 4 18C4 23.5228 8.47715 28 14 28C19.5228 28 24 23.5228 24 18H14V8Z" stroke="#CCFBF1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18 14H28C28 8.47715 23.5228 4 18 4V14Z" stroke="#CCFBF1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        
                        <SideBarNavLinkText>Insights</SideBarNavLinkText>
                        
                    </Link>

                </SideBarNavLink>

                <SideBarNavLink>

                    <Link to="#">
                        
                        <svg class="mx-auto" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27 10L26.1661 24.1762C26.0728 25.7619 24.7597 27 23.1713 27H8.82872C7.24029 27 5.92717 25.7619 5.83389 24.1762L5 10M13.333 15H18.6663M4.5 10H27.5C28.3284 10 29 9.32843 29 8.5V6.5C29 5.67157 28.3284 5 27.5 5H4.5C3.67157 5 3 5.67157 3 6.5V8.5C3 9.32843 3.67157 10 4.5 10Z" stroke="#CCFBF1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        
                        <SideBarNavLinkText>Archive</SideBarNavLinkText>
                        
                    </Link>

                </SideBarNavLink>

            </SideBarNav>

        </SideBarColTop>

        <SideBarColBottom>

            <SideBarProfileWrapper onClick={toggleDropdown}>

                <img class="h-8 w-8 rounded-full bg-gray-200" src="#" alt="user"/>

            </SideBarProfileWrapper>

            {isOpen && (

                <SideBarProfileDropdownWrapper onClick={e => e.stopPropagation()}>

                    <SideBarDropdownEmailField>

                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.125 5.625V14.375C18.125 15.4105 17.2855 16.25 16.25 16.25H3.75C2.71447 16.25 1.875 15.4105 1.875 14.375V5.625M18.125 5.625C18.125 4.58947 17.2855 3.75 16.25 3.75H3.75C2.71447 3.75 1.875 4.58947 1.875 5.625M18.125 5.625V5.82726C18.125 6.47837 17.7872 7.08287 17.2327 7.42412L10.9827 11.2703C10.38 11.6411 9.61996 11.6411 9.01732 11.2703L2.76732 7.42412C2.21279 7.08287 1.875 6.47837 1.875 5.82726V5.625" stroke="#A3A3A3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <SideBarDropdownEmailText>test@gmail.com</SideBarDropdownEmailText>    

                    </SideBarDropdownEmailField>

                    <SideBarDropdownSignoutField>

                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.125 7.5V4.375C13.125 3.33947 12.2855 2.5 11.25 2.5L6.25 2.5C5.21447 2.5 4.375 3.33947 4.375 4.375L4.375 15.625C4.375 16.6605 5.21447 17.5 6.25 17.5H11.25C12.2855 17.5 13.125 16.6605 13.125 15.625V12.5M15.625 12.5L18.125 10M18.125 10L15.625 7.5M18.125 10L7.5 10" stroke="#A3A3A3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <SideBarDropdownSignOutText onClick={signOutHandler}>Sign out</SideBarDropdownSignOutText>    

                    </SideBarDropdownSignoutField>

                </SideBarProfileDropdownWrapper>

            )}

        </SideBarColBottom>

    </SideBarWrapper>

);
}

export default SideBar;
