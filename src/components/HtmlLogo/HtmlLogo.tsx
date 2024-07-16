import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.scss';

function HtmlLogo() {
   return (
      <a href={'/frontend_test/'}>
         <div className={styles['html-logo__logo']}>
            <FontAwesomeIcon icon={faHtml5} />
         </div>
      </a>
   );
}

export default HtmlLogo;
