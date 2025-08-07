import React from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";

export default function ProductCard({ image, title, price, description, rating, category }) {

    return (
        <div className={styles.productCard} data-category={category}>
            <div className={styles.productImage}>
                <Image 
                    src={image}
                    alt={title}
                    width={300}
                    height={200}
                    style={{
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        borderRadius: '4px'
                    }}
                />
            </div>
            <div className={styles.productTitle}>{title}</div>
            <div className={styles.productPrice}>{price}</div>
            <div className={styles.productDescription}>
                {description}
            </div>
            <div className={styles.productRating}>
                <span className={styles.stars}>
                    {'⭐'.repeat(rating.stars)}
                </span>
                <span>{rating.count} ({rating.reviews} avaliações)</span>
            </div>
        </div>
    );
}