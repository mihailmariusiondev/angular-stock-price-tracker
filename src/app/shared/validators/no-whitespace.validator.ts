import { AbstractControl, ValidatorFn } from '@angular/forms';

export class NoWhiteSpaceValidator {

  static whiteSpace(): ValidatorFn {

    return (input: AbstractControl): { [key: string]: boolean; } | null => {
      const isSpace = (input.value || '').match(/\s/g);
      return isSpace ? { whitespace: true } : null;
    };

  }

}
