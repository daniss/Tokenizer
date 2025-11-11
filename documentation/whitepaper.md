# Token42 Whitepaper

## What is Token42?

Token42 is an ERC-20 token built for the 42 school blockchain project. It's a simple, functional token that demonstrates how digital assets work on the blockchain.

The goal was to create something clean and understandable, not to build the next big cryptocurrency. It works, it's secure, and it does what a token should do.

## Basic Info

- **Name**: Token42
- **Symbol**: T42
- **Standard**: ERC-20
- **Initial Supply**: 1,000,000 tokens
- **Decimals**: 18

## Functions

### Standard ERC-20
- `transfer()` - Send tokens to another address
- `balanceOf()` - Check how many tokens an address has
- `approve()` - Let someone spend your tokens
- `transferFrom()` - Spend tokens you've been approved for

### Custom Functions
- `mint(address, amount)` - Create new tokens (owner only)
- `burn(amount)` - Destroy your own tokens
- `burnFrom(address, amount)` - Burn someone's tokens if they approved you

## How It Works

The owner gets 1 million tokens when the contract deploys. They can mint more if needed (for testing, demonstrations, whatever). Anyone who holds tokens can burn them if they want to reduce supply.

Standard ERC-20 means it works with MetaMask, can be sent between addresses, and follows the same rules as thousands of other tokens.

## Security

Uses OpenZeppelin contracts that are already audited. Only the owner can mint. Nobody can steal your tokens. The code is simple enough that you can read and understand everything it does.

## Technical Details

Deployed on BSC Testnet because gas is cheap and the faucet actually works. Uses Solidity 0.8.20 and Hardhat for deployment. The whole contract is 69 lines of code.

**Contract Address**: 0x47B1D3f793542fbc3D32e06DE9d3b376eeB4D921  
**Network**: BSC Testnet  
**Explorer**: https://testnet.bscscan.com/address/0x47B1D3f793542fbc3D32e06DE9d3b376eeB4D921