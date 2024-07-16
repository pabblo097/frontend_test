import {
   createContext,
   ReactNode,
   useCallback,
   useMemo,
   useState
} from 'react';

import { ModalContextType } from './constants';

export const ModalContext = createContext<ModalContextType | null>(null);

export function ModalContextProvider({ children }: { children: ReactNode }) {
   const [openedModals, setOpenedModals] = useState<string[]>([]);

   const getIsModalOpen = useCallback((id: string) => openedModals.includes(id), [openedModals]);

   const openModal = useCallback((id: string) => {
      setOpenedModals((prevValue) => [...prevValue, id]);
   }, []);

   const closeModal = useCallback((id: string) => {
      setOpenedModals((prevValue) => prevValue.filter((v) => v !== id));
   }, []);

   const value = useMemo(
      () => ({
         getIsModalOpen,
         openModal,
         closeModal,
      }),
      [closeModal, getIsModalOpen, openModal],
   );

   return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}
