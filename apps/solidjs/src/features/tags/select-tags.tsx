import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@rwx/ui/components/select";
import { createAsync } from "@solidjs/router";
import { Suspense } from "solid-js";
import { getTags } from "~/shared/queries";

export const SelectTags = () => {
  const categories = createAsync(() => getTags());
  return (
    <Suspense>
      <Select
        options={categories() ?? []}
        multiple
        optionValue="name"
        optionTextValue="name"
        placeholder="Выберите теги"
        itemComponent={(props) => (
          <SelectItem item={props.item}>{props.item.rawValue.name}</SelectItem>
        )}
      >
        <SelectTrigger aria-label="Теги">
          <SelectValue<{ name: string }>>
            {(state) =>
              state
                .selectedOptions()
                .map((tag) => tag.name)
                .join(", ")
            }
          </SelectValue>
        </SelectTrigger>
        <SelectContent class="h-64 overflow-scroll" />
      </Select>
    </Suspense>
  );
};
