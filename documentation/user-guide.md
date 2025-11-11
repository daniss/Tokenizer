# Token42 User Guide

## Setup

### 1. Get MetaMask
- Install from metamask.io
- Create a wallet and save your seed phrase

### 2. Add BSC Testnet
In MetaMask, add network with these settings:
- Network: BSC Testnet
- RPC: https://data-seed-prebsc-1-s1.binance.org:8545
- Chain ID: 97
- Symbol: tBNB
- Explorer: https://testnet.bscscan.com

### 3. Get Test BNB
You need gas to interact with the token.
- Go to https://testnet.bnbchain.org/faucet-smart
- Paste your address
- Complete captcha and wait
- You'll get 0.5 tBNB (note: you need 0.002 BNB already to use the faucet)

### 4. Add Token42 to MetaMask
- Open MetaMask
- Switch to BSC Testnet
- Click "Import tokens"
- Paste contract address: `0x47B1D3f793542fbc3D32e06DE9d3b376eeB4D921`
- Token symbol (T42) should auto-fill
- Click "Add"

Now you'll see T42 in your wallet.

## Using the Token

### Send Tokens
Just use MetaMask like normal:
- Click "Send"
- Enter recipient address
- Enter amount
- Confirm transaction

Gas fee is paid in tBNB.

### Check Balance
Look in MetaMask or check on BSCScan:
https://testnet.bscscan.com/address/YOUR_ADDRESS

### Burn Tokens
To destroy tokens you own:
1. Go to BSCScan contract page
2. Click "Contract" tab
3. Click "Write Contract"
4. Connect your wallet
5. Use `burn()` function
6. Enter amount (remember 18 decimals: 1 token = 1000000000000000000)

### View on BSCScan
You can see all transactions and token info on the explorer:
https://testnet.bscscan.com/address/0x47B1D3f793542fbc3D32e06DE9d3b376eeB4D921

## Troubleshooting

**Can't see token in MetaMask?**
Make sure you're on BSC Testnet and imported the correct address.

**Transaction failing?**
You need tBNB for gas. Get more from the faucet.

**Wrong network?**
Switch to BSC Testnet in MetaMask network dropdown.

## Contract Info

**Address**: 0x47B1D3f793542fbc3D32e06DE9d3b376eeB4D921  
**Network**: BSC Testnet (Chain ID 97)  
**Explorer**: https://testnet.bscscan.com/address/0x47B1D3f793542fbc3D32e06DE9d3b376eeB4D921
