import { Product, ProductsResponse, Category } from '@/lib/types';

const BASE_URL = 'https://dummyjson.com';

export const api = {
  async getProducts(limit = 20, skip = 0): Promise<ProductsResponse> {
    const response = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
  },

  async getProduct(id: string): Promise<Product> {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error('Failed to fetch product');
    return response.json();
  },

  async getCategories(): Promise<Category[]> {
    const response = await fetch(`${BASE_URL}/products/categories`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return response.json();
  },

  async getProductsByCategory(category: string, limit = 20, skip = 0): Promise<ProductsResponse> {
    const response = await fetch(`${BASE_URL}/products/category/${category}?limit=${limit}&skip=${skip}`);
    if (!response.ok) throw new Error('Failed to fetch products by category');
    return response.json();
  },

  async searchProducts(query: string, limit = 20, skip = 0): Promise<ProductsResponse> {
    const response = await fetch(`${BASE_URL}/products/search?q=${encodeURIComponent(query)}&limit=${limit}&skip=${skip}`);
    if (!response.ok) throw new Error('Failed to search products');
    return response.json();
  }
};