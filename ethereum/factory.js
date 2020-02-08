import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x85DF876dAC13C87D8FB745eCE391d8aF25e077c6"
);

export default instance;
