export type FoodItemProps = {
  id: number;
  name: string;
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

export interface CategoryResponse {
  id: number;
  name: string;
  vendor: number;
}
