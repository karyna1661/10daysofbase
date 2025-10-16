const { ethers } = require("hardhat");

async function demonstrateContract() {
  console.log("🎭 Demonstrating BaseMessage contract features...");
  
  const BaseMessage = await ethers.getContractFactory("BaseMessage");
  const contract = BaseMessage.attach("0x97969E57327C1b582c75Bf77C1393B43FC874481");
  const [signer] = await ethers.getSigners();
  
  console.log("📍 Your address:", signer.address);
  console.log("📍 Contract address:", contract.target);
  
  // Show current state
  console.log("\n📝 Current state:");
  console.log("Your message:", await contract.getMyMessage());
  console.log("Your custom word:", await contract.getMyCustomWord());
  
  // Try different words
  const words = ["developers", "builders", "Africa", "Alice"];
  
  for (const word of words) {
    console.log(`\n✏️ Setting custom word to '${word}'...`);
    const tx = await contract.setCustomWord(word);
    await tx.wait();
    
    const message = await contract.getMyMessage();
    const customWord = await contract.getMyCustomWord();
    
    console.log(`✅ Message: ${message}`);
    console.log(`🎯 Custom word: ${customWord}`);
  }
  
  console.log("\n🎉 Contract demonstration complete!");
  console.log("🔗 View on BaseScan: https://sepolia.basescan.org/address/0x97969E57327C1b582c75Bf77C1393B43FC874481");
}

demonstrateContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Error:", error);
    process.exit(1);
  });
