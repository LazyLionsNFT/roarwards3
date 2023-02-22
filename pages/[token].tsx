import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import { useConnectWallet } from '@web3-onboard/react'

const Token = () => {
    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
    const router = useRouter()
    const token = router.asPath;
    const address = {address: wallet?.accounts[0]?.address};

    console.log(address);
    console.log(token.slice(1));
    
    useEffect(() => {
        axios.post("http://3.144.152.191:3000/connect-wallet", {walletAddress: address},
        {headers: {
            'Authorization': token,
            'content-type': 'text/json'
        }
          })    
            .then(response => {
                router.push('/')
            });
    }, []);
 
    return (
        <div>
        
        </div>
    );
};

export default Token;