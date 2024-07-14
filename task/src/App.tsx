import Footer from './components/Footer';
import Header from './components/Header';
import HeadingWithDivider from './components/HeadingWithDivider';
import MainContent from './components/MainContent';
import Modal from './components/Modal/Modal';
import useModal from './hooks/useModal';

function App() {
   const {
      isNoUniqueModalOpened,
      setIsNoUniqueModalOpened,
      isCantAddModalOpened,
      setIsCantAddModalOpened,
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
      </>
   );
}

export default App;
