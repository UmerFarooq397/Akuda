import { ARBITRUM, AVALANCHE, BCS_TESTNET } from "./chains";

export function getIsSyntheticsSupported(chainId: number) {
  return true;
}

export function getIsV1Supported(chainId: number) {
  return [AVALANCHE, ARBITRUM, BCS_TESTNET].includes(chainId);
}
