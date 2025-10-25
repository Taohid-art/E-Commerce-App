'use client';
import {
  Badge,
  Bed,
  Shirt,
  ShoppingBasket,
  ToyBrick,
  TruckElectricIcon,
} from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";

const Catagory = () => {
  const catagoryItems = [
    { name: "All", icon: <ShoppingBasket className="w-4 h-4" />, slug: "all" },
    { name: "Clothes", icon: <Shirt className="w-4 h-4" />, slug: "clothes" },
    { name: "Electronics", icon: <TruckElectricIcon className="w-4 h-4" />, slug: "electronics" },
    { name: "Furnitures", icon: <Bed className="w-4 h-4" />, slug: "furnitures" },
    { name: "Toys", icon: <ToyBrick className="w-4 h-4" />, slug: "toys" },
    { name: "Others", icon: <Badge className="w-4 h-4" />, slug: "others" },
  ];

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const catagory = searchParams.get("catagory") || "all";

  const handleurl = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString()); 
    params.set("catagory", slug);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full bg-gray-800 grid gap-4 grid-cols-6 place-items-center max-md:grid-cols-3 max-sm:grid-cols-2 text-white px-5">
      {catagoryItems.map((item) => (
        <div
          key={item.name}
          onClick={() => handleurl(item.slug)}
          className={`flex m-1 py-3 px-8 gap-2 items-center justify-center cursor-pointer hover:text-blue-500 rounded-md ${
            catagory === item.slug
              ? "text-blue-500 bg-gray-700"
              : "text-gray-400"
          }`}
        >
          {item.icon}
          <span className="text-sm">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Catagory;
