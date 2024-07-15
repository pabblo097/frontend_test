import { JsonData } from './constants';

export function getRandInt(min = 0, max = 100) {
   return Math.floor(Math.random() * Math.floor(max - Math.ceil(min) + 1) + min);
}

export function getIndexFromOption(option: number, data: JsonData[]) {
   return option === 2 ? getRandInt(0, data.length - 1) : option;
}

export const checkPrevData = (
   prevData: JsonData[] | undefined,
   callback: (prevData: JsonData[]) => JsonData[],
) => {
   if (prevData === undefined) {
      return;
   }

   return callback(prevData);
};
