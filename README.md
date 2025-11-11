# Token42 - Tokenizer Project

## Overview

Token42 is a simple ERC-20 token implementation created as part of the Tokenizer project.

## Project Choices and Rationale

### Blockchain Platform
**Choice:** Ethereum-compatible blockchain (BSC Testnet)
**Rationale:** 
- BSC offers lower gas fees and faster transactions
- BSC has a well-established testnet for safe development

### Programming Language
**Choice:** Solidity for smart contracts, JavaScript for deployment scripts
**Rationale:**
- Solidity is the industry standard for Ethereum-compatible smart contracts
- JavaScript provides excellent tooling support with Hardhat
- Wide community support and documentation availability

### Token Standard
**Choice:** ERC-20 standard with OpenZeppelin implementation
**Rationale:**
- ERC-20 is the most widely adopted token standard
- OpenZeppelin contracts are audited and secure
- Provides all necessary functionality: transfer, approve, mint, burn

### Development Framework
**Choice:** Hardhat
**Rationale:**
- Explicitly mentioned in the subject as a recommended tool
- Good debugging and testing capabilities
- Built-in deployment and verification tools

### Token Name and Symbol
**Choice:** "Token42" (T42)
**Rationale:**
- Satisfies the requirement to include "42" in the token name
- Simple and clear naming convention
- Memorable symbol that relates to the name

## Security Considerations

1. **Ownership Pattern**: Uses OpenZeppelin's Ownable contract for secure ownership management
2. **Mint Control**: Only the owner can mint new tokens, preventing unauthorized inflation
3. **Burn Functionality**: Users can burn their own tokens, and owners can burn with approval
4. **Standard Compliance**: Full ERC-20 compliance ensures compatibility with wallets and exchanges

## Token Features

- **Name**: Token42
- **Symbol**: T42
- **Decimals**: 18 (standard)
- **Initial Supply**: 1,000,000 tokens
- **Mintable**: Yes (owner only)
- **Burnable**: Yes (holder or approved)
- **Access Control**: Basic ownership model

## Getting Started

1. **Installation**:
   ```bash
   cd code
   npm install
   ```

2. **Deployment**:
   - Follow instructions in `/deployment/deploy-instructions.md`
   - Configure environment variables
   - Deploy to testnet: `npm run deploy`

## Deployment Information

**Network**: BSC Testnet (Chain ID: 97)
**Contract Address**: 0x47B1D3f793542fbc3D32e06DE9d3b376eeB4D921
**Explorer Link**: https://testnet.bscscan.com/address/0x47B1D3f793542fbc3D32e06DE9d3b376eeB4D921

## Why This Implementation?

- Uses well-established, audited contracts (OpenZeppelin)
- Implements only essential ERC-20 functionality
- Maintains security without complexity
