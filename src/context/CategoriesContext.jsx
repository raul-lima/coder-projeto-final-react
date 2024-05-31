import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoriesMap);
    };
    getCategories();
  }, []);
  const value = { categoriesMap };
};
