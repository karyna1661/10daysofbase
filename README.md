# 10 Days of Base - Development Environment

This project is set up for developing on Base Sepolia testnet using Hardhat and Alchemy.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- A wallet with Base Sepolia ETH

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` and add your private key:
   ```
   PRIVATE_KEY=your_private_key_here
   ```

3. **Get Base Sepolia ETH:**
   - Visit [Base Sepolia Faucet](https://www.coinbase.com/faucets/base-ethereum-sepolia-faucet)
   - Or use [Alchemy Faucet](https://sepoliafaucet.com/)

## 🛠️ Available Scripts

- `npm run compile` - Compile smart contracts
- `npm run test` - Run tests
- `npm run deploy` - Deploy contracts to Base Sepolia
- `npm run node` - Start local Hardhat node
- `npm run clean` - Clean cache and artifacts
- `npm run verify` - Verify contracts on BaseScan

## 🌐 Network Configuration

### Base Sepolia Testnet
- **Chain ID:** 84532
- **RPC URL:** https://base-sepolia.g.alchemy.com/v2/5hOepzRPhdWVSDJq66RMKUchn5rgocBs
- **Explorer:** https://sepolia.basescan.org
- **Faucet:** https://www.coinbase.com/faucets/base-ethereum-sepolia-faucet

## 📁 Project Structure

```
├── contracts/          # Smart contracts
├── scripts/           # Deployment scripts
├── test/              # Test files
├── hardhat.config.js  # Hardhat configuration
├── package.json       # Dependencies
└── .env              # Environment variables (create from env.example)
```

## 🔧 Configuration

The project is configured with:
- **Solidity:** 0.8.20 with optimizer enabled
- **Network:** Base Sepolia testnet
- **Gas Price:** 1 gwei
- **Gas Limit:** 3,000,000

## 🚨 Security Notes

- Never commit your `.env` file to version control
- Keep your private keys secure
- Use testnet for development and testing only

## 📚 Resources

- [Base Documentation](https://docs.base.org/)
- [Hardhat Documentation](https://hardhat.org/docs)
- [Alchemy Base Sepolia](https://www.alchemy.com/overviews/base-sepolia-testnet)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details
