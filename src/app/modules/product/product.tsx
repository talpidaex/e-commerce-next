import Image from "next/image";
import "./product.scss";
export default function Product() {

    return (
        <div className="product-container">
            <div className="product-image-container">
                <div className="image">
                    <Image src="/assets/product-image.png" alt="product-images" fill />
                </div>
            </div>
            <div className="product-detail-container">
                <span className="product-title">The north coat</span>
                <div className="price-content">
                    <span className="discount-price">200
                        <span>$</span>
                    </span>
                    <span className="price">300
                        <span>$</span>
                    </span>
                </div>
                <span>Rating</span>
            </div>
        </div>
    )

}   