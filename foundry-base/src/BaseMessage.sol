// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// This contract lets people change "Base is for everyone" to "Base is for [their word]"
// For example: "Base is for developers" or "Base is for Nigeria" or "Base is for Alice"
contract BaseMessage {
    // This stores each person's custom word (like "developers", "Nigeria", "Alice")
    mapping(address => string) private userWords;
    
    // This event fires when someone changes their word
    event MessageUpdated(address indexed user, string word);
    
    // Change your word! You can set it to anything you want
    // Examples: "developers", "Nigeria", "Alice", "builders", "Africa"
    function setCustomWord(string memory word) public {
        userWords[msg.sender] = word;
        emit MessageUpdated(msg.sender, word);
    }
    
    // See what message someone has (like "Base is for developers")
    // If they haven't set a word yet, it shows "Base is for everyone"
    function getMessage(address user) public view returns (string memory) {
        string memory customWord = userWords[user];
        
        // If they haven't set a word, use "everyone" as default
        if (bytes(customWord).length == 0) {
            return "Base is for everyone";
        }
        
        // Put together "Base is for " + their custom word
        return string(abi.encodePacked("Base is for ", customWord));
    }
    
    // See your own message (like "Base is for developers")
    function getMyMessage() public view returns (string memory) {
        return getMessage(msg.sender);
    }
    
    // See just someone's custom word (like "developers" without "Base is for")
    // If they haven't set one, it shows "everyone"
    function getCustomWord(address user) public view returns (string memory) {
        string memory customWord = userWords[user];
        
        // If they haven't set a word, return "everyone"
        if (bytes(customWord).length == 0) {
            return "everyone";
        }
        
        return customWord;
    }
    
    // See just your own custom word (like "developers")
    function getMyCustomWord() public view returns (string memory) {
        return getCustomWord(msg.sender);
    }
}

