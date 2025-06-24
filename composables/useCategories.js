export const useCategories = async () => {
  const { data: categories } = await useFetch('https://fakestoreapi.com/products/categories')

  const formatCategory = (cat) =>
    cat.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())

  const categoryToSlug = (category) =>
    category.toLowerCase().replace(/\s+/g, '%20')

  return { categories, formatCategory, categoryToSlug }
}
