
import { ContractABI } from "../src/assets/Mint/Content/Contract";
import Collection from './components/Collections';
import Navbar from './components/Navbar';
import Discover from './components/Discover';
import DiscoverMain from './components/DiscoverItems';
import Creators from './components/Creators';
import QnA from './components/QnA';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Mint from './components/Mint';


import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ethers } from "ethers";
import { ScrollContainer } from "react-scroll-motion";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [logout, setLogout] = useState(false);
  const [maxMintAmount, setMaxMintAmount] = useState();
  const [price, setPrice] = useState(0);
  const [userMintedAmount, setUserMintedAmount] = useState(0);
  const [wallet, setWallet] = useState("Connect a Wallet");

  const { REACT_APP_CONTRACT_ADDRESS } = process.env;
  const { REACT_APP_NETWORK } = process.env;
  const { REACT_APP_NETWORK_CHAIN_ID } = process.env;

  const connection = async () => {
    const res = await setupConnections();
    if (res === false) {
      setWallet("Connect a Wallet");
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: REACT_APP_NETWORK_CHAIN_ID }],
      });
    } else {
      setLogout(true);
      setWallet(res.slice(0, 6) + "..." + res.slice(36, 42));
    }
  };

  const disconnect = async () => {
    setWallet("Connect a Wallet");
    setLogout(false);
    setUserMintedAmount("-");
    setMaxMintAmount("-");
    setPrice("-");
    setImages([]);
  };

  const getTokens = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      REACT_APP_CONTRACT_ADDRESS,
      ContractABI,
      provider
    );
    let accounts = await provider.send("eth_requestAccounts", []);
    let address = accounts[0];
    const imagesTockens = await contract.nftsOnwedByWallet(address);
    let imagesLocal = [];
    await imagesTockens.map(async (image) => {
      const url = await contract.tokenURI(parseInt(image, 10));
      let result = await url.replace("ipfs://", "https://ipfs.io/ipfs/");
      const jsonBody = await (await fetch(result)).json();
      imagesLocal.push(
        await jsonBody.image.replace("ipfs://", "https://ipfs.io/ipfs/")
      );
    });
    setTimeout(() => {
      setImages(imagesLocal);
    }, [2000]);
  };

  const notify = (message) => {
    toast.error(message, {
      toastId: "custom-id-yes",
    });
  };

  useEffect(() => {
    connection();
  });

  const readContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      REACT_APP_CONTRACT_ADDRESS,
      ContractABI,
      provider
    );
    const maxMintAmount = await contract.maxMintAmount();
    let accounts = await provider.send("eth_requestAccounts", []);
    let address = accounts[0];
    const userMintedAmount = await contract.balanceOf(address);
    const price = await contract.cost();
    setMaxMintAmount(parseInt(maxMintAmount, 10));
    setUserMintedAmount(parseInt(userMintedAmount, 10));
    setPrice(Number(ethers.utils.formatEther(price)));
  };

  const setupConnections = async () => {
    if (window.ethereum != null) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      if (REACT_APP_NETWORK !== network.name) {
        notify(
          `Not on a correct network. Change your network to "${REACT_APP_NETWORK}"`
        );
        return false;
      } else {
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        return address;
      }
    } else {
      notify("No Ether wallet available");
      return false;
    }
  };
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" autoClose={2000} />
      <ScrollContainer>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="bg-gradient-to-t from-[#0f172a] via-[#4a2158] to-[#0f172a] text-white">
                <React.Fragment>
                  <Navbar
                    connection={connection}
                    disconnect={disconnect}
                    getTokens={getTokens}
                    logout={logout}
                    readContract={readContract}
                    wallet={wallet}
                  />
                  <div className="lg:px-60">
                  <Discover/>
                  <Collection/>
                  <DiscoverMain/>
                  <Creators/>
                  <QnA/>
                  <Contact/>
                  <Footer />
                  </div>
                </React.Fragment>
              </div>
            }
          />
          <Route
            exact
            path="/mint"
            element={
              <>
               <Navbar/>
                <Mint
                  connection={connection}
                  disconnect={disconnect}
                  getTokens={getTokens}
                  images={images}
                  maxMintAmount={maxMintAmount}
                  price={price}
                  readContract={readContract}
                  userMintedAmount={userMintedAmount}
                  wallet={wallet}
                />
              </>
            }
          />


        </Routes>
      </ScrollContainer>
    </BrowserRouter>
  );
}

export default App;



