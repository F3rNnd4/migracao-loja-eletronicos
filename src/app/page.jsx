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

      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            rating={product.rating}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}
