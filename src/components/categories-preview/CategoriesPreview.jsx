import { useEffect, useState } from "react";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../../utils/firebase";

import { SHOP_DATA } from "../../shop-data";

export function CategoriesPreview() {


    const [categories, setCategories] = useState({});

    useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
      }, []); 

  useEffect(() => {
    const getCategories = async () => {
      const category = await getCategoriesAndDocuments();
      setCategories(category);
      console.log(category);
    };
    getCategories();
  }, []);
  console.log(categories);
  return (
    <>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
      })}
    </>
  );
}
