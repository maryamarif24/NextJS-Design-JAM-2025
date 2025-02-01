import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'c3y6xv7b', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2023-01-01', // Use the latest date
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

export default client;
