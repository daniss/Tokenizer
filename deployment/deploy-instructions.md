# Token42 Deployment Instructions

## Prerequisites

1. **Node.js and npm**: Installed on your system
2. **Test BNB**: Get free tBNB from the https://testnet.bnbchain.org/faucet-smart, have 0.002 BNB
3. **MetaMask or similar wallet**: To hold your test BNB

## BSC Testnet Network Details

- **Network Name**: BSC Testnet
- **RPC URL**: https://data-seed-prebsc-1-s1.bnbchain.org:8545
- **Chain ID**: 97
- **Currency Symbol**: tBNB
- **Block Explorer**: https://testnet.bscscan.com

## Step-by-Step Deployment

### 1. Setup Environment

Navigate to the code directory:
```bash
cd code
```

Install dependencies:
```bash
npm install
```

### 2. Configure Private Key

Create a `.env` file in the `code/` directory:
```bash
cp ../deployment/.env.example .env
```

Edit `.env` and add your private key:
```
PRIVATE_KEY=your_private_key_here
```

### 3. Get Test BNB

1. Visit https://testnet.bnbchain.org/faucet-smart
2. Enter your wallet address
3. Complete the captcha
4. Receive 0.5 tBNB

### 4. Deploy the Contract

Run the deployment script:
```bash
npm run deploy
```

The script will output:
- Deployer address
- Account balance
- Deployed contract address
- Token name, symbol, and total supply

### 5. Verify Contract Address

Copy the contract address from the deployment output and verify it on BSCScan:
```
https://testnet.bscscan.com/address/YOUR_CONTRACT_ADDRESS
```

## Current Deployment

**Network**: BSC Testnet  
**Contract Address**: `0x47B1D3f793542fbc3D32e06DE9d3b376eeB4D921`  
**Explorer**: https://testnet.bscscan.com/address/0x47B1D3f793542fbc3D32e06DE9d3b376eeB4D921  
**Deployer**: Owner of the contract with minting privileges

## Testing the Deployment

### View Token on BSCScan

Visit the explorer link above to see:
- Contract creation transaction
- Token transfers
- Contract code
- Read/Write contract functions

### Add Token to MetaMask

1. Open MetaMask
2. Switch to BSC Testnet
3. Click "Import tokens"
4. Enter contract address: `0x47B1D3f793542fbc3D32e06DE9d3b376eeB4D921`
5. Token symbol (T42) and decimals (18) should auto-fill
6. Click "Add Custom Token"

### Interact with Token

You can now:
- View your balance, should have 1,000,000 T42 tokens
- Send tokens to other addresses
- Use the contract functions on BSCScan