## Security Features

### 1. Access Control (Ownership)

**Implementation**: Uses OpenZeppelin's `Ownable` contract

```solidity
contract Token42 is ERC20, Ownable {
    constructor(address initialOwner) Ownable(initialOwner) { ... }
    
    function mint(address to, uint256 amount) public onlyOwner { ... }
}
```

**Protection**:
- Only the owner can mint new tokens
- Prevents unauthorized token inflation
- Owner can be transferred to a multisig or DAO later

### 2. Standard Compliance

**ERC-20 Standard**: Fully compliant with the ERC-20 token standard
- `transfer()`: Move tokens between addresses
- `approve()`: Authorize spending
- `transferFrom()`: Third-party transfers with approval
- `balanceOf()`: Check token balance
- `totalSupply()`: View total supply

### 3. Burn Mechanism Safety

```solidity
function burn(uint256 amount) public {
    _burn(_msgSender(), amount);
}

function burnFrom(address account, uint256 amount) public {
    _spendAllowance(account, _msgSender(), amount);
    _burn(account, amount);
}
```

**Protection**:
- Users can only burn their own tokens
- `burnFrom` requires approval (same as `transferFrom`)
- No way for owner to burn other users' tokens without permission

## Testing

All security-critical functions are tested in `code/test/Token42.test.js`:
- Deployment and initialization
- Transfer functionality
- Minting access control (only owner)
- Burning with and without approval
- Allowance mechanism

Run tests:
```bash
cd code
npm test
```