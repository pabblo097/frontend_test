import Button from '../Button';
import CssIsAwesomeLogo from '../CssIsAwesomeLogo';
import styles from './styles.module.scss';

function Footer() {
   return (
      <footer className={styles.footer}>
         <CssIsAwesomeLogo />

         <div>{'nabthat'}</div>

         <div>
            <Button>{'POKAŻ ^'}</Button>
         </div>
      </footer>
   );
}

export default Footer;
