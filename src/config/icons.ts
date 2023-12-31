import { ARBITRUM, ARBITRUM_GOERLI, AVALANCHE, AVALANCHE_FUJI, BCS_TESTNET } from "config/chains";
import arbitrum from "img/ic_arbitrum_24.svg";
import bcs from "img/ic_binance.svg";
import avalanche from "img/ic_avalanche_24.svg";
import avalancheTestnet from "img/ic_avalanche_testnet_24.svg";
import arbitrumGoerli from "img/ic_arbitrum_goerli_24.svg";

import gmxIcon from "img/logo-small.svg";
import gmxOutlineIcon from "img/ic_gmxv1flat.svg";
import glpIcon from "img/ic_glp_40.svg";
import gmIcon from "img/gm_icon.svg";
import gmArbitrum from "img/ic_gm_arbitrum.svg";
import gmAvax from "img/ic_gm_avax.svg";
import gmxArbitrum from "img/logo-small.svg";
import gmxAvax from "img/ic_gmx_avax.svg";
import glpArbitrum from "img/ic_glp_arbitrum.svg";
import glpAvax from "img/ic_glp_avax.svg";

const ICONS = {
  [ARBITRUM]: {
    network: arbitrum,
    gmx: gmxArbitrum,
    glp: glpArbitrum,
    gm: gmArbitrum,
  },
  [AVALANCHE]: {
    network: avalanche,
    gmx: gmxAvax,
    glp: glpAvax,
    gm: gmAvax,
  },
  [ARBITRUM_GOERLI]: {
    network: arbitrumGoerli,
    gmx: gmxArbitrum,
    glp: glpArbitrum,
    gm: gmArbitrum,
  },
  [AVALANCHE_FUJI]: {
    network: avalancheTestnet,
    gm: gmAvax,
    gmx: gmxAvax,
    glp: glpAvax,
  },
  [BCS_TESTNET]: {
    network: bcs,
    gmx: gmxAvax,
    glp: glpAvax,
    gm: gmAvax,
  },
  common: {
    gmx: gmxIcon,
    gmxOutline: gmxOutlineIcon,
    glp: glpIcon,
    gm: gmIcon,
  },
};

export function getIcon(chainId: number | "common", label: string) {
  if (chainId in ICONS) {
    if (label in ICONS[chainId]) {
      return ICONS[chainId][label];
    }
  }
}
export function getIcons(chainId: number | "common") {
  if (!chainId) return;
  if (chainId in ICONS) {
    return ICONS[chainId];
  }
}
