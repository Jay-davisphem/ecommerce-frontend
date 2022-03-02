export type FoodItemProps = {
  id: number;
  title: string;
  description: string;
  image: "image";
  regular_price: number;
  discount_price: number;
};

export type FoodItemsProps = {
  foods: FoodItemProps[];
};
