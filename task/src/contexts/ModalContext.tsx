import {
   createContext,
   Dispatch,
   ReactNode,
   SetStateAction,
   useMemo,
   useState
} from 'react';

export interface ModalContextType {
   isNoUniqueModalOpened: boolean;
   setIsNoUniqueModalOpened: Dispatch<SetStateAction<boolean>>;
   isCantAddModalOpened: boolean;
   setIsCantAddModalOpened: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export function ModalContextProvider({ children }: { children: ReactNode }) {
   const [isNoUniqueModalOpened, setIsNoUniqueModalOpened] = useState(false);
   const [isCantAddModalOpened, setIsCantAddModalOpened] = useState(false);

   const value = useMemo(
      () => ({
         isNoUniqueModalOpened,
         setIsNoUniqueModalOpened,
         isCantAddModalOpened,
         setIsCantAddModalOpened,
      }),
      [isCantAddModalOpened, isNoUniqueModalOpened],
   );

   return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}
