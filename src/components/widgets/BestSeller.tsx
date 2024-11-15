import ProductCard from "../common/ProductCard";
import { bestSellerData } from "@/models/data";
const Bestseller: React.FC = () => {
    return (
        <div className="w-full mx-auto container my-10 p-4">
            <h1 className="text-3xl font-bold mb-6">BestSeller</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {bestSellerData.map((item) => {
                    return (
                        <ProductCard key={item.id} product={item} />
                    )
                })}
            </div>
        </div>
    )
}
export default Bestseller;