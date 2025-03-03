# Onchain Playground

A TypeScript project for interacting with the Base Sepolia testnet using Viem.

## Setup

1. Clone this repository
2. Install dependencies:

   ```
   npm install
   ```

3. Configure your private key:
   - Copy the `.env` file and add your private key
   - Make sure your private key does not have the `0x` prefix
   - **IMPORTANT**: Never commit your private key to version control

## Usage

### Development Mode

Run the script with ts-node:

```
npm run dev
```

### Production Build

Build and run the compiled JavaScript:

```
npm run build
npm start
```

## What This Project Does

This project demonstrates how to:

1. Connect to the Base Sepolia testnet
2. Create wallet and public clients using Viem
3. Send a transaction to a smart contract
4. Wait for transaction confirmation
5. Measure transaction timing

## Requirements

- Node.js
- A private key with funds on Base Sepolia testnet
