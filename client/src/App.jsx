import { useState, useEffect } from 'react'
import ABI from "./ABI/ABI.json"
import Web3 from "web3"
//C: \Users\samir\Desktop\MNIDAPP\client\src\ABI

import ReadContract from './components/ReadContract'
import WriteContract from './components/WriteContract'
import './App.css'

//1st Step ->Create All Component
//2nd Step->To connect to the blockchain
//3rd Step->Create a instance of smarT Contract....s
//We will create object to talk with the smart Contraat..........

function App() {
  const [state, setState] = useState({ web3: null, contract: null })

  useEffect(() => {
    const templete = async () => {
      let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
      const contractAddress = "0x9a71B4f0685F134eC4511a71efA58a3229cfd87A";
      const contractInstance = new web3.eth.Contract(ABI, contractAddress);
      // console.log(contractInstance);

      setState({ web3: web3, contract: contractInstance })

    }
    templete()

  }, []);

  return (
    <>
      <ReadContract state={state} />
      <WriteContract state={state} />

    </>
  )
}

export default App
