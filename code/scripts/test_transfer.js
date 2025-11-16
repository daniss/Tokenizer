const { ethers } = require("hardhat");

async function main() {
  const TOKEN_ADDRESS = "0x47B1D3f793542fbc3D32e06DE9d3b376eeB4D921";
  const RECIPIENT_ADDRESS = "0x5aeda56215b167893e80b4fe645ba6d5bab767de";
  const AMOUNT = "100";

  const [sender] = await ethers.getSigners();
  const Token42 = await ethers.getContractFactory("Token42");
  const token = Token42.attach(TOKEN_ADDRESS);

  console.log("Transferring", AMOUNT, "T42 tokens...");
  const tx = await token.transfer(RECIPIENT_ADDRESS, ethers.parseUnits(AMOUNT, 18));
  await tx.wait();
  
  console.log("✅ Done! https://testnet.bscscan.com/tx/" + tx.hash);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});