import type { MenuItem as MenuItemType } from "@/lib/site-data";
import { MenuItem } from "@/components/MenuItem";

export function MenuCard({ item }: { item: MenuItemType }) {
  return <MenuItem item={item} />;
}
