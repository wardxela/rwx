import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@rwx/ui/components/select";
import { createAsync } from "@solidjs/router";
import { type Component, Suspense } from "solid-js";
import { getTags } from "~/shared/queries";

export interface TagOption {
  id: string;
  name: string;
}

export interface SelectTagsProps {
  selected?: TagOption[];
  onChange?: (value: TagOption[]) => void;
}

export const SelectTags: Component<SelectTagsProps> = (props) => {
  const categories = createAsync(() => getTags());
  return (
    <Suspense>
      <Select<TagOption>
        value={props.selected}
        onChange={props.onChange}
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
          <SelectValue<TagOption>>
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
