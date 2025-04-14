import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@rwx/ui/components/select";
import { createAsync } from "@solidjs/router";
import { Suspense } from "solid-js";
import { getCategories } from "~/shared/queries";

export const SelectCategory = () => {
  const categories = createAsync(() => getCategories());
  return (
    <Suspense>
      <Select
        options={categories() ?? []}
        optionValue="name"
        optionTextValue="name"
        placeholder="Выберите категорию"
        itemComponent={(props) => (
          <SelectItem item={props.item}>{props.item.rawValue.name}</SelectItem>
        )}
      >
        <SelectTrigger aria-label="Категория">
          <SelectValue<{ name: string }>>
            {(state) => state.selectedOption()?.name}
          </SelectValue>
        </SelectTrigger>
        <SelectContent class="h-64 overflow-scroll" />
      </Select>
    </Suspense>
  );
};
