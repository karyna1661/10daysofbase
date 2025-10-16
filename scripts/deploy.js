const { ethers } = require("hardhat");

async function main() {
  console.log("Starting deployment to Base Sepolia...");
  
  // Get the signer
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with account:", deployer.address);
  
  // Get the contract factory
  const BaseMessage = await ethers.getContractFactory("BaseMessage");
  
  // Deploy the contract
  console.log("Deploying BaseMessage contract...");
  const baseMessage = await BaseMessage.deploy();
  
  // Wait for deployment to be mined
  await baseMessage.waitForDeployment();
  
  const contractAddress = await baseMessage.getAddress();
  
  console.log("✅ BaseMessage deployed successfully!");
  console.log("📍 Contract Address:", contractAddress);
  console.log("🌐 Network: Base Sepolia");
  console.log("🔗 Explorer: https://sepolia.basescan.org/address/" + contractAddress);
  
  // Verify the deployment by calling a view function
  try {
    const defaultMessage = await baseMessage.getMessage("0x0000000000000000000000000000000000000000");
    console.log("✅ Contract verification - Default message:", defaultMessage);
  } catch (error) {
    console.log("⚠️  Contract deployed but verification failed:", error.message);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });
