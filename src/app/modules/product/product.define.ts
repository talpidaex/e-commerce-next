interface IProduct {
  title: string;
  image: string;
  price: number;
  rating: number;
}

interface IDiscountProduct extends IProduct {
  discountPercent: string;
  discountPrice: string;
}
