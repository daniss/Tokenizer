const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token42", function () {
  let token;
  let owner;
  let addr1;
  let addr2;

  // Deploy fresh contract before each test
  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    const Token42 = await ethers.getContractFactory("Token42");
    token = await Token42.deploy(owner.address);
    await token.waitForDeployment();
  });

  // Test 1: Check deployment and initial values
  describe("Deployment", function () {
    it("Should have correct name and symbol", async function () {
      expect(await token.name()).to.equal("Token42");
      expect(await token.symbol()).to.equal("T42");
    });

    it("Should mint initial supply to owner", async function () {
      const ownerBalance = await token.balanceOf(owner.address);
      expect(await token.totalSupply()).to.equal(ownerBalance);
    });

    it("Should set the right owner", async function () {
      expect(await token.owner()).to.equal(owner.address);
    });
  });

  // Test 2: Token transfers
  describe("Transfers", function () {
    it("Should transfer tokens between accounts", async function () {
      // Transfer 50 tokens from owner to addr1
      await token.transfer(addr1.address, 50);
      expect(await token.balanceOf(addr1.address)).to.equal(50);

      // Transfer 50 tokens from addr1 to addr2
      await token.connect(addr1).transfer(addr2.address, 50);
      expect(await token.balanceOf(addr2.address)).to.equal(50);
    });

    it("Should fail if sender doesn't have enough tokens", async function () {
      const initialOwnerBalance = await token.balanceOf(owner.address);
      
      // Try to send more tokens than available
      await expect(
        token.connect(addr1).transfer(owner.address, 1)
      ).to.be.reverted;

      // Owner balance shouldn't have changed
      expect(await token.balanceOf(owner.address)).to.equal(initialOwnerBalance);
    });
  });

  // Test 3: Minting (owner only)
  describe("Minting", function () {
    it("Should allow owner to mint tokens", async function () {
      await token.mint(addr1.address, 100);
      expect(await token.balanceOf(addr1.address)).to.equal(100);
    });

    it("Should prevent non-owner from minting", async function () {
      await expect(
        token.connect(addr1).mint(addr2.address, 100)
      ).to.be.reverted;
    });
  });

  // Test 4: Burning tokens
  describe("Burning", function () {
    it("Should allow users to burn their own tokens", async function () {
      // Give addr1 some tokens
      await token.transfer(addr1.address, 100);
      
      // addr1 burns 50 tokens
      await token.connect(addr1).burn(50);
      expect(await token.balanceOf(addr1.address)).to.equal(50);
    });

    it("Should allow burning with approval", async function () {
      // Give addr1 some tokens
      await token.transfer(addr1.address, 100);
      
      // addr1 approves addr2 to burn 50 tokens
      await token.connect(addr1).approve(addr2.address, 50);
      
      // addr2 burns tokens from addr1
      await token.connect(addr2).burnFrom(addr1.address, 50);
      expect(await token.balanceOf(addr1.address)).to.equal(50);
    });

    it("Should fail to burn without approval", async function () {
      // Give addr1 some tokens
      await token.transfer(addr1.address, 100);
      
      // addr2 tries to burn without approval
      await expect(
        token.connect(addr2).burnFrom(addr1.address, 50)
      ).to.be.reverted;
    });
  });

  // Test 5: Allowances (approve/transferFrom)
  describe("Allowances", function () {
    it("Should allow spending with approval", async function () {
      // Owner approves addr1 to spend 100 tokens
      await token.approve(addr1.address, 100);
      
      // Check allowance
      expect(await token.allowance(owner.address, addr1.address)).to.equal(100);
      
      // addr1 transfers from owner to addr2
      await token.connect(addr1).transferFrom(owner.address, addr2.address, 50);
      expect(await token.balanceOf(addr2.address)).to.equal(50);
    });
  });
});
