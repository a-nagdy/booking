"use client";
import ProductsComp from "@/app/components/ProductsComp/ProductsComp"; // Adjust the import path

const ProductPage = ({ params }) => {
  console.log(params);
  return <ProductsComp name={params.category} />;
};

export default ProductPage;
