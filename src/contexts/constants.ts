import { Dispatch, SetStateAction } from 'react';

import { JsonData } from '../hooks/constants';

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

export interface ModalContextType {
   isNoUniqueModalOpened: boolean;
   setIsNoUniqueModalOpened: Dispatch<SetStateAction<boolean>>;
   isCantAddModalOpened: boolean;
   setIsCantAddModalOpened: Dispatch<SetStateAction<boolean>>;
   isStorageModalOpened: boolean;
   setIsStorageModalOpened: Dispatch<SetStateAction<boolean>>;
}
