import { Quote } from "./quote.interface";
import { StockSymbol } from "./symbol.interface";

export interface StockSymbolQuote {
  stockSymbol: StockSymbol,
  quote: Quote
}
