import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useLoading } from '../../atom/LoadingAtom/useLoading';
import { useAtom } from 'jotai';
import { setToken, tokenAtom } from '../../atom/LoginAtom/useLoginAtom';

const CheckMagicLink = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [userData] = useAtom(tokenAtom);
    const {startLoading, stopLoading } = useLoading();
    const [error, setError] = useState({isError:false, message:''})

    const getCheckMagiClink = async () => {

            startLoading();
            await axios.get(`http://localhost:4000/api/auth/verify?code=${id}`).then(res => {
                stopLoading();
                setToken({...userData, token:res.data?.data?.token});
                sendTokenToExtension(res.data?.data?.token);
            }).catch(err => {
                stopLoading();
                setError({isError:true,message:err?.response?.data?.message})
                console.log(err?.response?.data?.message);
            });
    };

    const sendTokenToExtension = (token) => {
      const extensionId = userData?.extensionId; // Update with your extension ID
      const email = userData?.email; // Update with your extension ID
      chrome.runtime.sendMessage(extensionId, { token, email, type:'addToken'}, response => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
          return;
        }
        console.log('Message sent to extension:');
      });
    }
    

    useEffect(() => {
        getCheckMagiClink();
    },[]);

  return (
    <div className='flex justify-center items-center h-[100vh] border '>
       {(error.isError && error.message) &&
        <div>
          <h1 className='text-xl font-extrabold text-red-500 mb-4'>{error.message}</h1>
          <div className='text-white bg-teal-600 p-4 font-bold rounded text-center' onClick={() => navigate('/')}>Enter email again</div>
        </div>
        }
    </div>
  )
}

export default CheckMagicLink;
