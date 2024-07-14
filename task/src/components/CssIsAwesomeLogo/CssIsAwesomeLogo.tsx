import styles from './styles.module.scss';

function CssIsAwesomeLogo() {
   return (
      <div className={styles['css-is-awesome-logo']}>
         <p>{'CSS'}</p>

         <p>{'IS'}</p>

         <p>{'AWESOME'}</p>
      </div>
   );
}

export default CssIsAwesomeLogo;
