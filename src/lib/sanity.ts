import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Ya se configuró solo
  dataset: 'production',
  apiVersion: '2026-07-04',
  useCdn: false, // false es mejor para desarrollo
});