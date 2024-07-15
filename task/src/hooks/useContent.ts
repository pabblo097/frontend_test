import { useCallback, useState } from 'react';

import { JsonData } from './constants';
import { getIndexFromOption } from './helpers';

export function useContent(
   data: JsonData[],
   setIsNoUniqueModalOpened: React.Dispatch<React.SetStateAction<boolean>>,
   setIsCantAddModalOpened: React.Dispatch<React.SetStateAction<boolean>>,
) {
   const [content, setContent] = useState([data[0]]);
   const [option, setOption] = useState(0);

   const replaceContent = useCallback(() => {
      const index = getIndexFromOption(option, data);

      setContent([data[index]]);
   }, [data, option]);

   const addContent = useCallback(() => {
      if (content.length === data.length) {
         setIsNoUniqueModalOpened(true);
         return;
      }

      const index = getIndexFromOption(option, data);

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

   return { content, setContent, option, setOption, replaceContent, addContent };
}
