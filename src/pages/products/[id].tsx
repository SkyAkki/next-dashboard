import PrimaryButton from '@/components/common/PrimaryButton';
import { GetServerSideProps } from 'next';
import { Product } from '@/models/types';
import Image from 'next/image';

interface ProductPageProps {
  product: Product | null;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  // Using try catch block here as the response from the API can be empty in case of a wrong product id and res.json() tries to parse it but fails.
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
      return {
        notFound: true,
      };
    }

    const product = await res.json();
    if (!product || Object.keys(product).length === 0) { //to check if the product data is valid
      return {
        notFound: true,
      };
    }

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return {
      notFound: true,
    };
  }
};

const ProductPage = ({ product }: ProductPageProps) => {

  if (!product) {
    return null; //Returning null here will automatically redirect to 404.tsx when product not found
  }

  return (
    <div className="container mx-auto p-8 mt-20">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <Image
          src={product.image}
          alt={product.title}
          className="w-full max-w-md object-contain"
          width={500}
          height={500}
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-2">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="text-2xl text-green-600 font-semibold mb-4">
            ${product.price}
          </p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <PrimaryButton text='Buy Now'/>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;