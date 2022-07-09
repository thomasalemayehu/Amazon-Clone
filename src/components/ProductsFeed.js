import React from "react";
import Product from "./Product";

function ProductsFeed({ allProducts }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {allProducts
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}

      {/* Ad Image */}
      <img className="md:col-span-full" src="/images/Ad.jpg" alt="" />

      <div className="md:col-span-2">
        {allProducts
          .slice(4, 5)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
      {allProducts
        .slice(5, allProducts.length)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}

      {/* TODO:Make Image Local */}
      {/* Ad Image */}
      <img className="md:col-span-full" src="/images/Ad.jpg" alt="" />
    </div>
  );
}

export default ProductsFeed;
