const { ethers } = require("hardhat");

async function debugContract() {
  console.log("🔍 Debugging BaseMessage contract...");
  
  // Get the deployed contract instance
  const BaseMessage = await ethers.getContractFactory("BaseMessage");
  const contract = BaseMessage.attach("0x97969E57327C1b582c75Bf77C1393B43FC874481");
  
  // Get your signer
  const [signer] = await ethers.getSigners();
  console.log("📍 Your address:", signer.address);
  
  console.log("\n🔍 Checking contract state...");
  
  // Check if the transaction actually went through
  console.log("📝 Getting message for your address...");
  const messageForAddress = await contract.getMessage(signer.address);
  console.log("Message for address:", messageForAddress);
  
  // Check your custom word
  console.log("🎯 Getting your custom word...");
  const customWord = await contract.getCustomWord(signer.address);
  console.log("Custom word for address:", customWord);
  
  // Try setting the word again with more verbose output
  console.log("\n✏️ Setting custom word to 'Nigeria' again...");
  const tx = await contract.setCustomWord("Nigeria");
  console.log("Transaction hash:", tx.hash);
  
  console.log("⏳ Waiting for confirmation...");
  const receipt = await tx.wait();
  console.log("✅ Transaction confirmed in block:", receipt.blockNumber);
  
  // Check again after the transaction
  console.log("\n🔍 Checking state after transaction...");
  const newMessage = await contract.getMessage(signer.address);
  console.log("New message:", newMessage);
  
  const newCustomWord = await contract.getCustomWord(signer.address);
  console.log("New custom word:", newCustomWord);
  
  // Also check with getMyMessage
  const myMessage = await contract.getMyMessage();
  console.log("My message:", myMessage);
  
  const myCustomWord = await contract.getMyCustomWord();
  console.log("My custom word:", myCustomWord);
}

debugContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Error:", error);
    process.exit(1);
  });
