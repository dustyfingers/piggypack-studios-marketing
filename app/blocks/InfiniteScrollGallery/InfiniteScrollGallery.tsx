"use client";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import style from "./component.module.css";
import Image from "next/image";

interface IGalleryTile {
  data: any;
}
const GalleryTile = ({ data }: IGalleryTile) => {
  console.log(data);
  return (
    <Image
      src={"/images/stock-image.jpg"}
      alt={"a guy working"}
      width={512}
      height={512}
      className={style.image}
    />
  );
};

const Loader = () => {
  return <div></div>;
};

const InfiniteScrollGallery = () => {
  const [items, setItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState<number>(2);

  const fetchData = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);

    axios
      .get(`https://api.escuelajs.co/api/v1/products?offset=${index}0&limit=12`)
      .then((res) => {
        setItems((prevItems: any[]) => [...prevItems, ...res.data]);
      })
      .catch((err) => console.log(err));
    setIndex((prevIndex) => prevIndex + 1);

    setIsLoading(false);
  }, [index, isLoading]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products?offset=10&limit=12"
        );
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData]);

  return (
    <section className={style.infiniteScrollGallery}>
      {items.map((item) => (
        <GalleryTile data={item} key={item.id} />
      ))}
      {isLoading && <Loader />}
    </section>
  );
};

export default InfiniteScrollGallery;
