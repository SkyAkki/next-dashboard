import Link from "next/link";
import Image from "next/image";

import { Product } from "@/models/types";
interface ProductCardProps {
    product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Link href={`/products/${product.id}`}>
            <div className="border p-4 rounded hover:shadow-lg hover:scale-110 cursor-pointer">
                <Image
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-contain"
                    width={500}
                    height={500}
                />
                <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>
                <p className="mt-1 text-green-600">${product.price}</p>
            </div>
        </Link>
    )
}
export default ProductCard;