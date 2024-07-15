import {
   createContext,
   ReactNode,
   useCallback,
   useMemo,
   useState
} from 'react';

import useModal from '../hooks/useModal';
import { useStorage } from '../hooks/useStorage';
import { AppContextType } from './constants';
import { getRandInt } from './helpers';

export const AppContext = createContext<AppContextType | null>(null);

export function AppContextProvider({ children }: { children: ReactNode }) {
   // TODO: dodaj treść
   const { data } = useStorage();

   const [shouldDisplayName, setShouldDisplayName] = useState(false);
   const [content, setContent] = useState([data[0]]);
   const [option, setOption] = useState(0);

   const { setIsNoUniqueModalOpened, setIsCantAddModalOpened } = useModal();

   const replaceContent = useCallback(() => {
      const index = option === 2 ? getRandInt(0, data.length - 1) : option;

      setContent([data[index]]);
   }, [data, option]);

   const addContent = useCallback(() => {
      if (content.length === data.length) {
         setIsNoUniqueModalOpened(true);
         return;
      }

      const index = option === 2 ? getRandInt(0, data.length - 1) : option;

      if (content.some((v) => v.id === data[index].id)) {
         if (option !== 2) {
            setIsCantAddModalOpened(true);
            return;
         }

         addContent();
         return;
      }

      setContent((prevValue) => [...prevValue, data[index]]);
   }, [content, data, option, setIsCantAddModalOpened, setIsNoUniqueModalOpened]);

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
