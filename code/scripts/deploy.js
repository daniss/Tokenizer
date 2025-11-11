const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying Token42...");
  
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await ethers.provider.getBalance(deployer.address)).toString());

  const Token42 = await ethers.getContractFactory("Token42");
  const token42 = await Token42.deploy(deployer.address);
  
  await token42.waitForDeployment();
  
  const contractAddress = await token42.getAddress();
  console.log("Token42 deployed to:", contractAddress);
  console.log("Token name:", await token42.name());
  console.log("Token symbol:", await token42.symbol());
  console.log("Total supply:", (await token42.totalSupply()).toString());
  
  console.log("\nDeployment completed!");
  console.log("Contract address:", contractAddress);
  console.log("Network:", await ethers.provider.getNetwork());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });