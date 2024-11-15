import { PrimaryButtonProps } from "@/models/types";
const PrimaryButton:React.FC<PrimaryButtonProps> = ({text})=>{
    return(
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition duration-300">
          {text}
        </button>
    )
}
export default PrimaryButton;