import LikeButton from "./LikeButton";

export default function WishListButton({product_id}){
    
    return (
        <LikeButton liked={true} className="absolute right-3 top-3 " />
    )
}