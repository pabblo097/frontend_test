import { JsonData } from '../../contexts/AppContext';

export function jsonDataCompareFn(a: JsonData, b: JsonData) {
   if (a.value < b.value) {
      return -1;
   }

   if (a.value > b.value) {
      return 1;
   }

   return 0;
}
