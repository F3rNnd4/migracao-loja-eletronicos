import React from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";

export default function ProductCard({ imgLink, altImg, productTitle, productPrice, productDescription, productRating }) {
    return (
        <div className={styles.productCard} data-category="smartphones">
            <div className={styles.productImage}>
                <Image 
                    src={imgLink || "/placeholder-image.jpg"}
                    alt={altImg || "Produto"}
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
            <div className={styles.productTitle}>{productTitle}</div>
            <div className={styles.productPrice}>{productPrice}</div>
            <div className={styles.productDescription}>
                {productDescription}
            </div>
            <div className={styles.productRating}>
                <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                <span>{productRating}</span>
            </div>
        </div>
    );
}