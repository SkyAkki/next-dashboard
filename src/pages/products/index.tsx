import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import ProductCard from '@/components/common/ProductCard';
import { Product } from '@/models/types';

interface ProductsPageProps {
  products: Product[];
  categories: string[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { sort, category } = context.query;

  const res = await fetch('https://fakestoreapi.com/products');
  const allProducts: Product[] = await res.json();

  // Filter Category
  let filteredProducts = allProducts;
  if (category && typeof category === 'string') {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }
  const categories = Array.from(new Set(allProducts.map((product) => product.category)));

  // Sort logic
  if (sort === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === 'name-asc') {
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  }

  return {
    props: {
      products: filteredProducts,
      categories,
    },
  };
};

const ProductsPage = ({ products, categories }: ProductsPageProps) => {
  const router = useRouter();
  const { sort, category } = router.query;

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = event.target.value;
    router.push({
      pathname: '/products',
      query: { ...router.query, sort: newSort },
    });
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = event.target.value;
    router.push({
      pathname: '/products',
      query: { ...router.query, category: newCategory },
    });
  };

  return (
    <div className="p-8 mt-20">
      <div className="flex justify-between mb-6 gap-4">
        {/* Sort */}
        <div className='flex flex-col items-start justify-start sm:flex-row sm:items-center'>
          <label htmlFor="sort" className="mr-2 font-semibold">Sort by:</label>
          <select
            id="sort"
            value={sort || ''}
            onChange={handleSortChange}
            className="p-2 border rounded max-w-28 sm:max-w-full"
          >
            <option value="">Select</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="name-asc">Name (A to Z)</option>
          </select>
        </div>
        {/* Filter Category */}
        <div className='flex flex-col items-center sm:flex-row'>
          <label htmlFor="filter" className="mr-2 font-semibold">Filter by Category:</label>
          <select
            id="filter"
            value={category || ''}
            onChange={handleCategoryChange}
            className="p-2 border rounded"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
