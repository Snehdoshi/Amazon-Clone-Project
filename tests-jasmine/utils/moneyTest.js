import {formatCurrency} from '../../scripts/utils/money.js';
  describe ('Test Suite : formatCurrency' ,() => {
    it ('Converts Cents into Dollars' , () => {
      expect (formatCurrency(2095)).toEqual ('20.95');
    });

    it ('Works With Zero'  , () => {
      expect (formatCurrency(0)).toEqual ('0.00');
    });

    it ('Rounds up with the nearest Cent' , () => {
      expect (formatCurrency(2000.5)).toEqual ('20.01');
    });
  }); 