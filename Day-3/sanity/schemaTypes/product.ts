export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true, // Enable image cropping
        },
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      },
      {
        name: 'discountPercentage',
        type: 'number',
        title: 'Discount Percentage',
      },
      {
        name: 'isFeaturedProduct',
        type: 'boolean',
        title: 'Featured Product',
      },
      {
        name: 'stockLevel',
        type: 'number',
        title: 'Stock Level',
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
      },
    ],
  };
  