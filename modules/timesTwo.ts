module Utility {
  export class useful {
    timesTwo(num: number) {
      return 2 * num;
    }
  }
}

// to compile these files into one file
// just run this code:
// tsc util.ts timesTwo.ts --out util.js
