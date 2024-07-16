import { useCallback, useState } from 'react';

import { _t } from '../labels/t';
import { getIndexFromOption } from './helpers';
import useModal from './useModal';
import { useStorage } from './useStorage';

export function useContent() {
   const { data } = useStorage();
   const { openModal } = useModal();

   const [content, setContent] = useState(data.length === 0 ? [] : [data[0]]);
   const [option, setOption] = useState(0);

   const replaceContent = useCallback(() => {
      if (data.length === 0) {
         openModal(_t('modal.noUniqueContentId'));
         return;
      }

      const index = getIndexFromOption(option, data);

      if (data[index] === undefined) {
         openModal(_t('modal.noDataId'));
         return;
      }

      setContent([data[index]]);
   }, [data, openModal, option]);

   const addContent = useCallback(() => {
      if (data.length === 0 || content.length === data.length) {
         openModal(_t('modal.noUniqueContentId'));
         return;
      }

      const index = getIndexFromOption(option, data);

      if (content.some((v) => v.id === data[index].id)) {
         if (option !== 2) {
            openModal(_t('modal.cantAddContentId'));
            return;
         }

         addContent();
         return;
      }

      setContent((prevValue) => [...prevValue, data[index]]);
   }, [content, data, openModal, option]);

   return { content, setContent, option, setOption, replaceContent, addContent };
}
