import React from 'react';

import * as styles from '../../styles/HomePageStyle/HomePageStyle.module.css';

const HomeCategoryItemComponent = ({ category }) => {
    return (
        <>
            <div
                className={styles.Category_Item_Card}
                style={{
                    backgroundImage: `url(${category.image_url})`,
                }}
            >
                <div
                    className={styles.Category_Item_Overlay}
                >
                    {category.name}
                </div>
            </div>
        </>
    );
}

export default HomeCategoryItemComponent;