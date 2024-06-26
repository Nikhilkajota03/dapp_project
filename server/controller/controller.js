// controller.js
import express from "express";

// const contractABI = [];
// const contractAddress = "adad",
// const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL);
// const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
// const contract = new ethers.Contract(contractAddress, contractABI, wallet);


export const addMessage = async (req, res) => {

 try {
        const { message } = req.body;
        const tx = await contract.setMessage(message);
        await tx.wait();
        res.status(200).send("Message stored successfully");
    } catch (error) {
        res.status(500).send(error.toString());
    }
};

export const getMessage = async (req, res) => {
  try {
    const message = await contract.getMessage();
    res.status(200).json({ message });
} catch (error) {
    res.status(500).send(error.toString());
}
};

