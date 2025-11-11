## Basic Info

- **Name**: Token42
- **Symbol**: T42
- **Standard**: ERC-20
- **Initial Supply**: 1,000,000 tokens
- **Decimals**: 18

## Functions

### Standard ERC-20
- `transfer()` - Send tokens
- `balanceOf()` - Check balance
- `approve()` - Allow someone to spend your tokens
- `transferFrom()` - Spend approved tokens

### Custom
- `mint(address, amount)` - Create new tokens (owner only)
- `burn(amount)` - Destroy your tokens
- `burnFrom(address, amount)` - Burn someone's tokens (needs approval)