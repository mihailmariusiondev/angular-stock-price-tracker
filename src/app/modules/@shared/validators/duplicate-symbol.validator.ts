import { ValidatorFn, AbstractControl } from "@angular/forms";
import { LocalStorageService } from "@core/index";
import { StockSymbolQuote } from "@stock-tracker/index";


export class DuplicateSymbolValidator {

  constructor(private localStorageService: LocalStorageService) {}

  static duplicateSymbolValidator(localStorageKey:string, localStorageService: LocalStorageService): ValidatorFn {

    return (input: AbstractControl): { [key: string]: boolean; } | null => {

      const localStorageSymbols = localStorageService.getItem(localStorageKey);
      const stockSymbolsAndQuote: StockSymbolQuote[] = localStorageSymbols ? JSON.parse(localStorageSymbols) : [];

      if (stockSymbolsAndQuote.find(s => s.stockSymbol.symbol === input.value.toUpperCase())) {
        return { duplicate: true };
      }
      return null;
    }

  }


}
