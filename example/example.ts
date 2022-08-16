import { AlphaRouter, ChainId } from '@uniswap/smart-order-router'
import { Token, CurrencyAmount, TradeType, Percent } from '@uniswap/sdk-core'
import { BigNumber, ethers } from 'ethers';
import { JSBI } from '@uniswap/sdk';

// começar do : https://docs.uniswap.org/sdk/guides/creating-a-trade
export default async function Example() {
  
  const V3_SWAP_ROUTER_ADDRESS = "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45";
  const MY_ADDRESS = "640f9cfafae44075a7d1e9d90da814fe";
  const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/640f9cfafae44075a7d1e9d90da814fe')
  const web3Provider = provider;
  const router = new AlphaRouter({ chainId: 1, provider: web3Provider })



  const WETH = new Token(
    1,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether'
  );

  const USDC = new Token(
    ChainId.MAINNET,
    '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    6,
    'USDC',
    'USD//C'
  );

  const typedValueParsed = '100000000000000000000'
  const wethAmount = CurrencyAmount.fromRawAmount(currency, JSBI.BigInt(typedValueParsed));

  const route = await router.route(
    wethAmount,
    USDC,
    TradeType.EXACT_INPUT,
    {
      recipient: MY_ADDRESS,
      slippageTolerance: new Percent(5, 100),
      deadline: Math.floor(Date.now() / 1000 + 1800)
    }
  );

  console.log(`Quote Exact In: ${route.quote.toFixed(2)}`);
  console.log(`Gas Adjusted Quote In: ${route.quoteGasAdjusted.toFixed(2)}`);
  console.log(`Gas Used USD: ${route.estimatedGasUsedUSD.toFixed(6)}`);

  const transaction = {
    data: route.methodParameters.calldata,
    to: V3_SWAP_ROUTER_ADDRESS,
    value: BigNumber.from(route.methodParameters.value),
    from: MY_ADDRESS,
    gasPrice: BigNumber.from(route.gasPriceWei),
  };

  await web3Provider.sendTransaction(transaction);
}