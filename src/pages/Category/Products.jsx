import React from "react";
import { ProductCard } from "./ProductCard";

export function Products({data}) {
  return <div className="flex  flex-wrap justify-center gap- ">

                  {
                    data?.map((item) => (
                      <ProductCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        logo={item.logo}
                        price={item.price}
                        rating={item.rating}
                        category={item.category}
                        offer={item.offer}
                      />
                    ))
                  }
                </div>;
}
  