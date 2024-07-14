import {
   createContext,
   Dispatch,
   ReactNode,
   SetStateAction,
   useMemo,
   useState
} from 'react';

export interface AppContextType {
   shouldDisplayName: boolean;
   setShouldDisplayName: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType | null>(null);

export function AppContextProvider({ children }: { children: ReactNode }) {
   const [shouldDisplayName, setShouldDisplayName] = useState(false);

   const value = useMemo(() => ({ shouldDisplayName, setShouldDisplayName }), [shouldDisplayName]);

   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
