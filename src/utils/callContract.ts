import { ethers } from "ethers";
import abiData from "./abi.json";

const contractABI = abiData.abi

const contractAddress = "0x349F5e1C035e240A2Ac2BD27a0098C6e3cdD0D16";

const providerURL = "https://eth-holesky.g.alchemy.com/v2/PvLeTNClkXBHhrLSK7-ulPtES2QFEvKI";

const privateKey = "0x7a2f91f91a4949615d62260b332457d12949ac68c68bb6af4a227d18036ac862";
const provider = new ethers.JsonRpcProvider(providerURL);
const signer = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(contractAddress, contractABI, signer);

export async function callStoreHash(taskHash: string): Promise<boolean> {
    try {
        const tx = await contract.storeHash(taskHash);
        const receipt = await tx.wait();
        console.log("Transaction receipt:", receipt);
        return true;
    } catch (error) {
        console.error("Error storing hash:", error);
        return false;
    }

}

export async function callCompleteTask(taskHash: string): Promise<boolean> {
    try {
        const tx = await contract.completeTask(taskHash);
        const receipt = await tx.wait();
        return true;
    } catch (error) {
        console.error("Error completing task:", error);
        return false;
    }
}

export async function callIsTaskCompleted(taskHash: string): Promise<boolean> {
    try {
        const isCompleted = await contract.isTaskCompleted(taskHash);
        return isCompleted;
    } catch (error) {
        console.error("Error checking task completion:", error);
        return false;
    }
}

