import { useCallback } from 'react';
import useLocalStorage from 'use-local-storage';

import jsonData from '../assets/data.json';
import { JsonData, LOCAL_STORAGE_DATA_KEY } from './constants';

export function useStorage() {
   const [data, setData] = useLocalStorage<JsonData[]>(LOCAL_STORAGE_DATA_KEY, jsonData);

   const removeItem = useCallback(
      (id: string) => {
         setData((prevData) => {
            if (prevData === undefined) {
               return;
            }

            return prevData.filter((v) => v.id !== id);
         });
      },
      [setData],
   );

   const addItem = useCallback(
      (value: string) => {
         setData((prevData) => {
            if (prevData === undefined) {
               return;
            }

            return [...prevData, { id: crypto.randomUUID(), value }];
         });
      },
      [setData],
   );

   const editItem = useCallback(
      (id: string, newValue: string) => {
         setData((prevData) => {
            if (prevData === undefined) {
               return;
            }

            return prevData.map((v) => (v.id === id ? { id: v.id, value: newValue } : v));
         });
      },
      [setData],
   );

   return { data, setData, removeItem, addItem, editItem };
}
