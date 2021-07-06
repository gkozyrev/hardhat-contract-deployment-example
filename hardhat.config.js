require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-ganache");
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-etherscan");

const { mnemonic, BSCSCANAPIKEY } = require('./env.json'); // importing mnemonic phrase and binance api key

module.exports = {
  defaultNetwork: "hardhat", // by default we are runng our scripts in temp hardhat environment
  networks: {
    hardhat: {
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545", // testnet node
      chainId: 97,
      gasPrice: 20000000000, // gas price 20Gwei
      accounts: { mnemonic: mnemonic }
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/", // mainnet node
      chainId: 56,
      gasPrice: 20000000000, // gas price 20Gwei
      accounts: { mnemonic: mnemonic }
    }
  },
  solidity: {
    version: "0.8.6", // setting the solidity version to compile and deploy contracts
    settings: {
      optimizer: {
        enabled: true
      }
    }
  },
  gasReporter: {
    currency: 'BNB',
    gasPrice: 20
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  },
  etherscan: {
    apiKey: BSCSCANAPIKEY // setting binance api key for verififcation
  },
};