import {
   createContext,
   Dispatch,
   ReactNode,
   SetStateAction,
   useCallback,
   useMemo,
   useState,
} from 'react';

import jsonData from '../assets/data.json';
import { getRandInt } from './helpers';

export interface JsonData {
   id: string;
   value: string;
}

export interface AppContextType {
   shouldDisplayName: boolean;
   setShouldDisplayName: Dispatch<SetStateAction<boolean>>;
   content: JsonData[];
   option: number;
   setOption: Dispatch<SetStateAction<number>>;
   replaceContent: () => void;
   addContent: () => void;
   reset: () => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export function AppContextProvider({ children }: { children: ReactNode }) {
   // TODO: dodaj treść
   const [data, setData] = useState<JsonData[]>(jsonData);

   const [shouldDisplayName, setShouldDisplayName] = useState(false);
   const [content, setContent] = useState([data[0]]);
   const [option, setOption] = useState(0);

   const replaceContent = useCallback(() => {
      const dataValue = option === 2 ? getRandInt(0, data.length - 1) : option;

      setContent([data[dataValue]]);
   }, [data, option]);

   const addContent = useCallback(() => {
      if (content.length === data.length) {
         return;
      }

      const dataValue = option === 2 ? getRandInt(0, data.length - 1) : option;

      if (content.some((v) => v.id === dataValue.toString())) {
         if (option !== 2) {
            return;
         }

         addContent();
         return;
      }

      setContent((prevValue) => [...prevValue, data[dataValue]]);
   }, [content, data, option]);

   const reset = useCallback(() => {
      setShouldDisplayName(false);
      setContent([data[0]]);
      setOption(0);
   }, [data]);

   const value = useMemo(
      () => ({
         shouldDisplayName,
         setShouldDisplayName,
         content,
         option,
         setOption,
         replaceContent,
         addContent,
         reset,
      }),
      [addContent, content, option, replaceContent, reset, shouldDisplayName],
   );

   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
