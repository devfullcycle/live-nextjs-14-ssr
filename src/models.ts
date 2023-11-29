export type Product = {
  id: number;
  name: string;
  price: number;
  image_url: string;
};

export type PaginationProduct = {
  products: Product[];
  total: number;
};
