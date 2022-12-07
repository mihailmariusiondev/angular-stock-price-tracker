export interface SymbolResult {
  count:  number;
  result: StockSymbol[];
}

export interface StockSymbol {
  description:   string;
  displaySymbol: string;
  symbol:        string;
  type:          string;
}
