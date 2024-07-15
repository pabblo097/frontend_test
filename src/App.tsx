import Footer from './components/Footer';
import Header from './components/Header';
import HeadingWithDivider from './components/HeadingWithDivider';
import MainContent from './components/MainContent';
import Modal from './components/Modal/Modal';
import StorageModalLayout from './components/StorageModalLayout';
import useModal from './hooks/useModal';

function App() {
   const {
      isNoUniqueModalOpened,
      setIsNoUniqueModalOpened,
      isCantAddModalOpened,
      setIsCantAddModalOpened,
      isStorageModalOpened,
      setIsStorageModalOpened,
   } = useModal();

   return (
      <>
         <Header />

         <HeadingWithDivider />

         <MainContent />

         <Footer />

         <Modal
            isModalOpened={isNoUniqueModalOpened}
            onCloseModal={() => setIsNoUniqueModalOpened(false)}
         >
            {'Brak unikatowych treści do dodania.'}
         </Modal>

         <Modal
            isModalOpened={isCantAddModalOpened}
            onCloseModal={() => setIsCantAddModalOpened(false)}
         >
            {'Ta treść została już dodana.'}
         </Modal>

         <Modal
            isModalOpened={isStorageModalOpened}
            maxWidth={900}
            onCloseModal={() => setIsStorageModalOpened(false)}
         >
            <StorageModalLayout />
         </Modal>
      </>
   );
}

export default App;
