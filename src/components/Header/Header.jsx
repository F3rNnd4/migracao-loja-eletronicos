import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { productsData } from "@/data/products.js";


export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.titleContainer}>
        <Image
          className={styles.logo}
          src="/img/mall-car.png"
          alt="Carro de Compras"
          width={30}
          height={30}
          priority
        />
        <h1>Loja de Eletrônicos</h1>
      </div>
      <p>Os melhores produtos com os melhores preços!</p>
      <p>
        📊 Total de produtos: <span id="totalProducts">{productsData.length}</span>
      </p>
    </div>
  );
}
