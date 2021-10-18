import React from 'react';

import * as styles from '../../../styles/ComponentStyle/PageHeaderComponentStyle.module.css';

const PageHeaderComponent = ({ title }) => {
     return (
          <div className={styles.PageHeader}>
               <h1>{title}</h1>
          </div>
     );
}

export default PageHeaderComponent;