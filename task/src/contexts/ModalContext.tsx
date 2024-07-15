import {
   createContext,
   ReactNode,
   useMemo,
   useState
} from 'react';

import { ModalContextType } from './constants';

export const ModalContext = createContext<ModalContextType | null>(null);

export function ModalContextProvider({ children }: { children: ReactNode }) {
   const [isNoUniqueModalOpened, setIsNoUniqueModalOpened] = useState(false);
   const [isCantAddModalOpened, setIsCantAddModalOpened] = useState(false);
   const [isStorageModalOpened, setIsStorageModalOpened] = useState(false);

   const value = useMemo(
      () => ({
         isNoUniqueModalOpened,
         setIsNoUniqueModalOpened,
         isCantAddModalOpened,
         setIsCantAddModalOpened,
         isStorageModalOpened,
         setIsStorageModalOpened,
      }),
      [isCantAddModalOpened, isNoUniqueModalOpened, isStorageModalOpened],
   );

   return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}
