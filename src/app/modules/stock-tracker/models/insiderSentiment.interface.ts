export interface InsiderSentiment {
  data:   Sentiment[];
  symbol: string;
}

export interface Sentiment {
  symbol: string;
  year:   number;
  month:  number;
  change: number;
  mspr:   number;
}
