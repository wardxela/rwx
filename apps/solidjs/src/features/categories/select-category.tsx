import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@rwx/ui/components/select";
import { createAsync } from "@solidjs/router";
import { type Component, Suspense } from "solid-js";
import { getCategories } from "~/shared/queries";

export interface CategoryOption {
  id: string;
  name: string;
}

export interface SelectCategoryProps {
  selected?: CategoryOption | null;
  onChange?: (value: CategoryOption | null) => void;
}

export const SelectCategory: Component<SelectCategoryProps> = (props) => {
  const categories = createAsync(() => getCategories());
  return (
    <Suspense>
      <Select<CategoryOption>
        options={categories() ?? []}
        optionValue="id"
        optionTextValue="name"
        value={props.selected}
        onChange={props.onChange}
        placeholder="Выберите категорию"
        itemComponent={(props) => (
          <SelectItem item={props.item}>{props.item.rawValue.name}</SelectItem>
        )}
      >
        <SelectTrigger aria-label="Категория">
          <SelectValue<CategoryOption>>
            {(state) => state.selectedOption()?.name}
          </SelectValue>
        </SelectTrigger>
        <SelectContent class="h-64 overflow-scroll" />
      </Select>
    </Suspense>
  );
};
