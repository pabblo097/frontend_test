import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.scss';

function HtmlLogo() {
   return (
      <a href={"/"}>
         <div className={styles['navbar__html-logo']}>
            <FontAwesomeIcon icon={faHtml5} />
         </div>
      </a>
   );
}

export default HtmlLogo;
