"use client";

import React from "react";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { productsData } from "../data/products.js";

import Header from "@/components/Header/Header";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  useEffect(() => {
    setProductCount(products.length);
  }, [products]);

  return (
    <div className={styles.body}>
      <Header />

      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            imgLink={product.imgLink}
            altImg={product.altImg}
            productTitle={product.productTitle}
            productPrice={product.productPrice}
            productDescription={product.productDescription}
            productRating={product.productRating}
          />
        ))}
      </div>
    </div>
  );
}