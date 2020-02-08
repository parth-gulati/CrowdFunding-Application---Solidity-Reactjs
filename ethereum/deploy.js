const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory");

const provider = new HDWalletProvider(
  "laundry forward genre wet during elephant famous gas lazy weapon chunk lens",
  "https://rinkeby.infura.io/v3/51a2193b5efe435ebbd7acb80343c8b9"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from acc ", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: "0x" + compiledFactory.bytecode })
    .send({ from: accounts[0] });

  console.log("here bitch " + result.options.address);
};

deploy();
