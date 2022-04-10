export type FoodItemProps = {
  id: number;
  title: string;
  image: string;
  regular_price: number;
  discount_price: number;
};
export type FoodDetailProps = FoodItemProps & {
  description: string;
};

export type FoodItemsDetailsProps = {
  itemsDetail: FoodDetailProps;
};
export type FoodItemsProps = {
  items: FoodItemProps[];
};
