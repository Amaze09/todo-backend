import { ethers } from "ethers";
import * as dotenv from "dotenv";
import abiData from "./abi.json";

dotenv.config();
const contractABI = abiData.abi

const contractAddress = process.env.CONTRACT_ADDRESS || "0x349F5e1C035e240A2Ac2BD27a0098C6e3cdD0D16";

const providerURL = process.env.PROVIDER_URL || "";

const privateKey = process.env.PRIVATE_KEY || "";
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

