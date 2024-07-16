import Footer from './components/Footer';
import Header from './components/Header';
import HeadingWithDivider from './components/HeadingWithDivider';
import MainContent from './components/MainContent';
import Modal from './components/Modal/Modal';
import StorageModalLayout from './components/StorageModalLayout';
import useModal from './hooks/useModal';
import { _t } from './labels/t';

function App() {
   const { getIsModalOpen, closeModal } = useModal();

   return (
      <>
         <Header />

         <HeadingWithDivider />

         <MainContent />

         <Footer />

         <Modal
            isModalOpened={getIsModalOpen(_t('modal.noUniqueContentId'))}
            onCloseModal={() => closeModal(_t('modal.noUniqueContentId'))}
         >
            {_t('modal.noUniqueContentLabel')}
         </Modal>

         <Modal
            isModalOpened={getIsModalOpen(_t('modal.cantAddContentId'))}
            onCloseModal={() => closeModal(_t('modal.cantAddContentId'))}
         >
            {_t('modal.cantAddContentLabel')}
         </Modal>

         <Modal
            isModalOpened={getIsModalOpen(_t('modal.noDataId'))}
            onCloseModal={() => closeModal(_t('modal.noDataId'))}
         >
            {_t('modal.noDataLabel')}
         </Modal>

         <Modal
            isModalOpened={getIsModalOpen(_t('modal.storageId'))}
            maxWidth={900}
            onCloseModal={() => closeModal(_t('modal.storageId'))}
         >
            <StorageModalLayout />
         </Modal>
      </>
   );
}

export default App;
