require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.4",
  paths: {artifacts: "./src/artifacts"},
  networks: {
    hardhat: {},
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/OTKd2wL3g6nUyu7id7-cTSqx9p-a_LqR",
      //PRIVATE KEY FOR BOB!
      accounts: [`bf1548fb9b201b0f06859d44c242a08221ae8e4cd1965fe3b78cbbc1b6bea0bf`]
    }
  },
};
