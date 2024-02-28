import { request } from '@/utils'

type Params = {
  page_no: number
  limit: number
  keywords: string
}

export type ProductItem = {
  entity_id: number
  Category: string
  ETA: string
  RRP: {
    Standard: string
  }
  RrpPrice: string
  Vendor_Product: number
  brand: string
  bulky_item: string
  cbm: string
  colour: string
  cost: string
  currency: string
  desc: string
  discontinued: string
  discontinuedproduct: string
  eancode: string
  height: string
  in_stock: string
  length: string
  price: string
  product_status: number
  sku: string
  special_price: string
  special_price_end_date: string
  special_price_from_date: string
  status: string
  stock_qty: number
  title: string
  updated_at: number
  vendor_id: string | number
  website_url: string
  weight: string
  width: string
  zone_rates: {
    [key: string]: string
  }
  gallery: string[]
  freeshipping: string
}

export type ProductVItem = ProductItem & {
  galleryFirst?: string
  loginClew?: string
  FESaleIconText?: string
  FEAddLinks?: any[]
}

export type ProductsRes = {
  result: Array<ProductItem>
  total: number
  total_pages: number
  current_page: number
  page_size: number
}

export const getProductList = async (params: Partial<Params> = {}) => {
  const res = await request.get<ProductsRes>('/products', { params })

  return res.data
}

// getProductList({ page_no: 12, limit: 100 });

export const getProductBySkus = async (skus: string[]) => {
  const data = { skus: skus.join(',') }
  const res = await request.post<ProductItem[]>('/getProductBySkus', data)

  return res.data
}

type getStockParams = {
  start_time: string
  end_time: string
  page_no: number
  limit: number
  skus: string
}
export const getStock = async (data: getStockParams) => {
  const res = await request.post('/stock', data)

  return res.data
}
