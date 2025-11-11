## BSC Testnet Configuration

The configuration is defined in `code/hardhat.config.js`:

```javascript
networks: {
  bscTestnet: {
    url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
    chainId: 97,
    accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
  }
}
```

### Network Details

| Property | Value |
|----------|-------|
| Network Name | BSC Testnet |
| RPC URL | https://data-seed-prebsc-1-s1.bnbchain.org:8545 |
| Chain ID | 97 |
| Currency | tBNB |
| Block Explorer | https://testnet.bscscan.com |
| Faucet | https://testnet.bnbchain.org/faucet-smart |

## Adding BSC Testnet to MetaMask

1. Open MetaMask
2. Click network dropdown
3. Click "Add Network"
4. Enter the details from the table above
5. Click "Save"

## Current Deployment

**Contract Address**: 0x47B1D3f793542fbc3D32e06DE9d3b376eeB4D921  
**Network**: BSC Testnet (Chain ID 97)  
**Explorer**: https://testnet.bscscan.com/address/0x47B1D3f793542fbc3D32e06DE9d3b376eeB4D921
