import React from "react";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const { open } = useWeb3Modal();
  const { address } = useAccount();

  return (
    <div className="center-container">
      <h1>Connect to Crypto Wallet</h1>
      <button class="button-63" onClick={open}>
        <FontAwesomeIcon icon={faWallet} style={{ marginRight: "5px" }} />{" "}
        &nbsp;
        {address ? "Wallet Connected" : "Connect"}
      </button>
      <div>
        <br />
        {address ? (
          <>
            <button class="button-22" role="button">
              Return to Dashboard
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default App;
