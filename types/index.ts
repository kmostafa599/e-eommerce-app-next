export interface Product {
  id: string,
  title: string
  price: string
  categoryId: number,
  slug: number,
  images:Image[],
  variants:variant,

}
export interface Image {
  id: number,
  imgUrl: string,
  productId: string,
  imgAlt:string,
}
export interface variant {
  id: number,
  color: string,
  size: number,
  trending: string,
  featured: string,
  productId: number,
  price:string,
}
export interface CartItem extends Product {
  quantity: number,
  product_variant:variant
}

export type Category = {
  id: number,
  name: string
  // featured: Product[]
}
export type AppStateType = {
  products: Product[]
  categories: Category[]
  cart: CartItem[]
}

export type Page = {
  name: string;
  href: string;
}
export type Navigation = {
  categories: Category[]
  pages: Page[],
}
export type Slug = {
  id: number,

}



export type googlesheetData = {
  products: Product[],
  categories: Category[],
  images: Image[],
  variants: variant[],
  slugs: Slug[]

}