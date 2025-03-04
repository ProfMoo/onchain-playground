import { privateKeyToAccount } from "viem/accounts";
import { http, createWalletClient, createPublicClient } from "viem";
import { baseSepolia } from "viem/chains";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Get private key from .env file
const privateKey = process.env["PRIVATE_KEY"];

if (!privateKey) {
  console.error("ERROR: Private key not found in .env file");
  process.exit(1);
}

// Add 0x prefix if not present
const formattedPrivateKey = privateKey.startsWith("0x")
  ? (privateKey as `0x${string}`)
  : (`0x${privateKey}` as `0x${string}`);

const account = privateKeyToAccount(formattedPrivateKey);

const client = createWalletClient({
  chain: baseSepolia,
  transport: http("https://sepolia.base.org"),
});

const clientPublic = createPublicClient({
  chain: baseSepolia,
  transport: http("https://sepolia.base.org"),
});

const go = async () => {
  const start = Date.now();
  const hash = await client.writeContract({
    account,
    address: "0x46ef35696a6E3256D726A8fB26Ed9194f9F44BB1",
    abi: [
      {
        inputs: [],
        name: "test",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    functionName: "test",
    args: [],
  });
  const endHash = Date.now();
  const result = await clientPublic.waitForTransactionReceipt({
    hash,
    confirmations: 1,
  });
  console.log(result);
  const end = Date.now();
  console.log(`Make hash took ${endHash - start}ms`);
  console.log(`Transaction took ${end - start}ms`);
};

go().catch((error) => {
  console.error("Error executing transaction:", error);
  process.exit(1);
});
