import { createClient } from "next-sanity";
import { PRODUCT_QUERY } from "./queries";



const client = createClient({
    projectId: 'c3y6xv7b',
    dataset: 'production',
    apiVersion: '2023-02-21',
    useCdn: true,
})

export const fetchProducts = async () => {
    const products = await client.fetch(PRODUCT_QUERY);
    return products;
  };

// export async function sanityFetch({query, params = {}}: {query: string , params?: any}){
//     return await client.fetch(query, params)
// }