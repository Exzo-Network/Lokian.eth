// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
  
  // Polygon mumbai testnet addresses
  const tokenAddress = '0x809243b013975447CD118D4DbfD92b9662a48cdc';
  const nftAddress = '0x0daB67FE5a157D47117cfBd7d3Bb5131513ce520';

  // We get the contract to deploy
  const LokianEth = await hre.ethers.getContractFactory("Cryptomons");
  const lokianEth = await LokianEth.deploy(tokenAddress, nftAddress);

  await lokianEth.deployed();

  console.log("LokianEth deployed to:", lokianEth.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
