import { getProducts } from "../../lib/shopify"

export const ProductPage = () => {
  return (
    <div>
      f
    </div>
  )
}

export async function getStaticPaths() {
  const products = await getProducts()

  const paths = products.map(item => {
    const product = String(item.node.handle);

    return {
      params: { product }
    }
  })

  return {
    paths, fallback: false
  }
}
