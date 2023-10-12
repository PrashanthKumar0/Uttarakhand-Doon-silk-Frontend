import { useState } from "react";
import LikeButton from "./LikeButton";

export interface IWishListButton {
    product_id: number;
    className?: string;
};

export default function WishListButton({ product_id, className }: IWishListButton) {
    
    return (
        <LikeButton liked={true} className={`absolute right-3 top-3 ${className}`} />
    )
}