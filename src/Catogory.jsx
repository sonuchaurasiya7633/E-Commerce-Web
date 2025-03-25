import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { LiaPastafarianismSolid } from "react-icons/lia";
import { GiFullPizza } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";
 export const categories = [
  {
    id: 1,
    name: "All",
    icon: <TiThSmallOutline className="w-[60px] h-[60px] text-green-600"/>,
  },
  {
    id: 2,
    name: "breakfast",
    icon: <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600"/>,
  },
  {
    id: 3,
    name: "soups",
    icon: <LuSoup className="w-[60px] h-[60px] text-green-600"/>,
  },
  {
    id: 4,
    name: "pasta",
    icon: <LiaPastafarianismSolid className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 5,
    name: "m_course",
    icon: <MdOutlineFoodBank className="w-[60px] h-[60px] text-green-600"/>,
  },
  {
    id: 6,
    name: "pizza",
    icon: <GiFullPizza className="w-[60px] h-[60px] text-green-600"/>,
  },
  {
    id: 7,
    name: "burger",
    icon: <GiHamburger className="w-[60px] h-[60px] text-green-600"/>,
  },
];
export default categories