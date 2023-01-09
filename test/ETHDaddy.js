const { expect } = require("chai");
const { ethers } = require("hardhat");

// const tokens = (n) => {
//   return ethers.utils.parseUnits(n.toString(), "ether");
// };

describe("ETHDaddy", () => {
  it("has a name", async () => {
    const ETHDaddy = await ethers.getContractFactory("ETHDaddy");
    let ethDaddy = await ETHDaddy.deploy();
    const result = await ethDaddy.name();
    expect(result).to.equal("ETHDaddy");
  });
});
