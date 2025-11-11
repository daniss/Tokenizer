// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Import OpenZeppelin for ERC20 implementation for standard token functionality
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// Import Ownable for access control to restricts functions to contract owner
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * Token42
 * ERC-20 token implementation with minting and burning capabilities
 * 
 * features:
 * - Minting restricted to owner
 * - Standard ERC-20
 * - Uses OpenZeppelin contracts
 */
contract Token42 is ERC20, Ownable {
    // Using 10**18 because ERC-20 standard uses 18 decimal places by default
    uint256 public constant INITIAL_SUPPLY = 1000000 * 10**18; // because 1 token is 10^18

    /**
     * Constructor that initializes the token
     * initialOwner Address that will own the contract and receive initial supply
     * 
     * Sets up:
     * - Token name: "Token42"
     * - Token symbol: "T42"
     * - Owner: Address with minting privileges
     * - Mints initial supply to the owner address
     */
    constructor(address initialOwner) ERC20("Token42", "T42") Ownable(initialOwner) {
        // Mint the initial supply to the owner
        _mint(initialOwner, INITIAL_SUPPLY);
    }
    
    /**
     * Creates new tokens and assigns them to the specified address
     * to Address that will receive the newly minted tokens
     * amount Number of tokens to mint (in wei, with 18 decimals)
     * Only the contract owner can call this function
     */
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
    
    /**
     * Destroys tokens from the caller's balance
     * amount Number of tokens to burn (in wei, with 18 decimals)
     * Useful for deflationary mechanics or removing tokens from circulation
     */
    function burn(uint256 amount) public {
        _burn(_msgSender(), amount);
    }
    
    /**
     * Destroys tokens from a specified account with allowance
     * account Address whose tokens will be burned
     * amount Number of tokens to burn (in wei, with 18 decimals)
     * 
     * The allowance is spent (reduced) when tokens are burned
     */
    function burnFrom(address account, uint256 amount) public {
        // First, spend the allowance (checks if caller is approved)
        _spendAllowance(account, _msgSender(), amount);
        // Then burn the tokens
        _burn(account, amount);
    }
}