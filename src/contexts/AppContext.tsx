import {
   createContext,
   ReactNode,
   useCallback,
   useMemo,
   useState
} from 'react';

import { useContent } from '../hooks/useContent';
import { useStorage } from '../hooks/useStorage';
import { AppContextType } from './constants';

export const AppContext = createContext<AppContextType | null>(null);

export function AppContextProvider({ children }: { children: ReactNode }) {
   const [shouldDisplayName, setShouldDisplayName] = useState(false);

   const { data } = useStorage();
   const { content, setContent, option, setOption, addContent, replaceContent } = useContent();

   const reset = useCallback(() => {
      setShouldDisplayName(false);
      setContent(data.length === 0 ? [] : [data[0]]);
      setOption(0);
   }, [data, setContent, setOption]);

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
      [addContent, content, option, replaceContent, reset, setOption, shouldDisplayName],
   );

   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
