"use client";
import React,{useEffect,useState} from 'react';
// import LikeButton from "./LikeButton";
// import Prices from "./Prices";
import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import LikeButton from '@/components/LikeButton';
import Prices from '@/components/Prices';
import BagIcon from '@/components/BagIcon';
import ModalQuickView from '@/components/ModalQuickView';
import ProductStatus from '@/components/ProductStatus';
import { StarIcon } from "@heroicons/react/24/solid";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
// import BagIcon from "./BagIcon";
import toast from "react-hot-toast";
import { Transition } from "@/app/headlessui";
// import ModalQuickView from "./ModalQuickView";
// import ProductStatus from "./ProductStatus";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import NcImage from "@/shared/NcImage/NcImage";
 function RenderVariants(){
  if (!variants || !variants.length || !variantType) {
    return null;
  }

  if (variantType === "color") {
    return (
      <div className="flex space-x-1">
        {variants.map((variant, index) => (
          <div
            key={index}
            onClick={() => setVariantActive(index)}
            className={`relative w-6 h-6 rounded-full overflow-hidden z-10 border cursor-pointer ${
              variantActive === index
                ? getBorderClass(variant.color)
                : "border-transparent"
            }`}
            title={variant.name}
          >
            <div
              className={`absolute inset-0.5 rounded-full z-0 ${variant.color}`}
            ></div>
          </div>
        ))}
      </div>
    );
  }
}

function NewProduct({item}) {
useEffect(()=>{
  console.log('item',item)
},[])
const status= "Sold Out";
const isLiked= true;
const [variantActive, setVariantActive] = useState(0);
  const [showModalQuickView, setShowModalQuickView] = useState(false);

  
  return (
    <div>
         <>
   <div
        className={`nc-ProductCard relative flex flex-col bg-transparent`}
      >
        <Link href={"/product-detail"} className="absolute inset-0"></Link>

        <div className="relative flex-shrink-0 bg-slate-50 dark:bg-slate-300 rounded-3xl overflow-hidden z-1 group">
          <Link href={"/product-detail"} className="block">
            <NcImage
              containerClassName="flex aspect-w-11 aspect-h-12 w-full h-0"
              src={`http://localhost:8000/public/image/${item.image1}`}
              className="object-cover w-full h-full drop-shadow-xl"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 40vw"
              alt="product"
            />
          </Link>
      <ProductStatus status={status} />
          <LikeButton liked={isLiked} className="absolute top-3 right-3 z-10" />
          {/* {sizes ? renderSizeList() : renderGroupButtons()}  */}
        </div>

        <div className="space-y-4 px-2.5 pt-5 pb-2.5">
{item.new_varient_s?<RenderVariants/>:''}
       
          <div>
            <h2 className="nc-ProductCard__title text-base font-semibold transition-colors">
              {item.name}
            </h2>
            <p className={`text-sm text-slate-500 dark:text-slate-400 mt-1 `}>
              {item.description}
            </p>
          </div>

          <div className="flex justify-between items-end ">
            <Prices price={item.price} />
            <div className="flex items-center mb-0.5">
              <StarIcon className="w-5 h-5 pb-[1px] text-amber-400" />
              <span className="text-sm ml-1 text-slate-500 dark:text-slate-400">
                { "4.5"} ( 2457 reviews)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* QUICKVIEW */}
      <ModalQuickView
        show={showModalQuickView}
        onCloseModalQuickView={() => setShowModalQuickView(false)}
      /> 
 </>
</div>
  )
}

export default NewProduct