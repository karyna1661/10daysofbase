const { ethers } = require("hardhat");

async function interactWithContract() {
  console.log("🔗 Connecting to BaseMessage contract...");
  
  // Get the deployed contract instance
  const BaseMessage = await ethers.getContractFactory("BaseMessage");
  const contract = BaseMessage.attach("0x97969E57327C1b582c75Bf77C1393B43FC874481");
  
  // Get your signer (deployer account)
  const [signer] = await ethers.getSigners();
  console.log("📍 Your address:", signer.address);
  
  // Test the contract functions
  console.log("\n🧪 Testing contract functions...");
  
  // Get initial message
  const initialMessage = await contract.getMyMessage();
  console.log("📝 Initial message:", initialMessage);
  
  // Set a custom word
  console.log("\n✏️ Setting custom word to 'Nigeria'...");
  const tx = await contract.setCustomWord("Nigeria");
  await tx.wait();
  console.log("✅ Transaction confirmed!");
  
  // Get updated message
  const updatedMessage = await contract.getMyMessage();
  console.log("📝 Updated message:", updatedMessage);
  
  // Get custom word
  const customWord = await contract.getMyCustomWord();
  console.log("🎯 Your custom word:", customWord);
  
  console.log("\n🎉 Contract interaction complete!");
}

interactWithContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Error:", error);
    process.exit(1);
  });
