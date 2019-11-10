const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("Web3");
const fs = require("fs");
const path = require("path");

const mnemonicPath = path.resolve(__dirname, "mnemonic");
const MNEMONIC = 'melt input remember skill want spatial tower lunar glory left check evolve';

module.exports = {
  networks: {
    // development: {
    //   provider: function() {
    //     return new Web3.providers.WebsocketProvider("ws://localhost:7545");
    //   },
    //   network_id: "5777"
    // },
    // ropsten: {
    //   provider: function() {
    //     return new HDWalletProvider(
    //       MNEMONIC,
    //       "https://ropsten.infura.io/v3/9ec1ba34a9164ea6a05f44a4168aa065"
    //     );
    //   },
    //   network_id: 3,
    //   gas: 4000000 //make sure this gas allocation isn't over 4M, which is the max
    // },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          MNEMONIC,
          "https://rinkeby.infura.io/v3/1b30c349d8ef4dfe85d5d493e8e4a2e4"
        );
      },
      network_id: 4,
      // gas: 1000000
    }
  },
  compilers: {
    solc: {
      version: "0.5.0" // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};
