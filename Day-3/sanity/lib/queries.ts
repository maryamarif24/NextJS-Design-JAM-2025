import { defineQuery } from "next-sanity";



export const PRODUCT_QUERY = defineQuery(`
    *[_type == "product"]{
        _id,
        name,
        price,
        description,
        discountPercentage,
        isFeaturedProduct,
        stocklevel,
        category,
        image{
            asset -> {url}
        }
    }
`)