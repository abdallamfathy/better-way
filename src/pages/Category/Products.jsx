import React from "react";
import { ProductCard } from "./ProductCard";
import { useLangContext } from "../../utils/LangContext";

export function Products({data}) {
  const { language } = useLangContext();
  return <div className="flex  flex-wrap justify-center gap- ">

                  {
                    data?.map((item) => (
                      <ProductCard
                        key={item.id}
                        id={item.id}
                        title={
                          language ? item.title : item.title_ar
                        }
                        logo={item.image}
                        price={item.price}
                        rating={item.rating}
                        category={
                          language ? item.category : item.category_ar
                        }
                        offer={item.offer}
                      />
                    ))
                  }
                </div>;
}
  