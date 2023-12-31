/**
 * dotenv must be on the top of the entry file of the project
 */
import "dotenv/config";

 export default {
   web3Provider: process.env.PROVIDER_HOST,
   privateKey: process.env.PRIVATE_KEY,
   signerPrivateKey: process.env.PRIVATE_KEY,
   networkId: process.env.NETWORK_ID,
   ipfsEndpoint: process.env.IPFS_ENDPOINT,
   defaultGasPrice: process.env.DEFAULT_GAS_PRICE,
   defaultGasLimit: process.env.DEFAULT_GAS_LIMIT,
 };
 
