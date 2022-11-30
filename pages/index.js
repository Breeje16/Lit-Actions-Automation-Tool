import Head from 'next/head'
import { useAccount } from 'wagmi';
import useHasMounted from '../hooks/useHasMounted';
import { ethers, utils } from "ethers";
import LitJsSdk from "lit-js-sdk";
import { useState } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import CreateLitActions from '../components/CreateLitActions';


export default function Home() {

  // wagmi
  const { pkpAvailable, setPkpAvailable } = useState(false);
  const { address, isConnecting, isDisconnected } = useAccount()
  // app state
  // const state = useAppState();

  // ui state
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  if(isConnecting){
    return <div className="flex flex-col items-center m-24 p-12 justify-center">
    <h1 className=" text-white text-center my-4 text-4xl">Connecting....</h1>
  </div>
  }

  if (isDisconnected) {
    return (
      <main className="container">
      <div className="flex flex-col items-center m-36 p-24 justify-center">
        <h1 className=" text-white text-center my-4 text-4xl">Please Connect Your Wallet</h1>
      </div>
      </main>
    );
    // return <ConnectButton />;
  }

  return (
    <div>
      <Head>
        <title>Lit Action Event Listen</title>
        <meta name="description" content="An Event-Listening solution for Lit Actions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CreateLitActions />
    </div>
  )
}
