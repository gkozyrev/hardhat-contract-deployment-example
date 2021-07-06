
async function main() {
  const DADDYFEG = await ethers.getContractFactory("DADDYFEG"); // importing contract artifacts
  console.log("Deploying...")
  const daddyfeg = await DADDYFEG.deploy({
    gasLimit: 8500000 // gas limit
}); // deploy contract (you can pass constructor argument in the brackets, but in this case it is not required)

  console.log("DADDYFEG deployed to:", daddyfeg.address); // show contract address
}

// standart piece of code
main() 
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });