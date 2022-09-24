const ethers=require("ethers");
const fs=require("fs-extra");

async function main(){
    // HTTP://172.19.192.1:7545
   const provider=new ethers.providers.JsonRpcProvider("HTTP://172.19.192.1:7545");
   const wallet =new ethers.Wallet("7a9188f17d20e7607f51f5c108c0da9fa6c50aa524abfbbbb485cbea8d53f72d",
   provider);
   const abi=fs.readFileSync("SimpleStorage_sol_SimpleStorage.abi","utf-8");
   const bin=fs.readFileSync("SimpleStorage_sol_SimpleStorage.bin","utf-8");

   const contract_factory=new ethers.ContractFactory(abi,bin,wallet);
   console.log("deployment is in process");
   const contract  = await contract_factory.deploy();
   console.log(contract);
}
main().
 then(()=>ProcessingInstruction.exit(0))
 .catch((error)=>{
    console.log(error);
 });