import "star-rating.js/css";
import { type Component, type ComponentProps, onMount } from "solid-js";
// @ts-expect-error
import StarRatingVanilla from "star-rating.js";

export const StarRating: Component<ComponentProps<"select">> = (props) => {
  let selectRef!: HTMLSelectElement;

  onMount(() => {
    new StarRatingVanilla(selectRef);
  });

  return (
    <select ref={selectRef} {...props}>
      <option value="5">Отлично</option>
      <option value="4">Очень хорошо</option>
      <option value="3">Нормально</option>
      <option value="2">Плохо</option>
      <option value="1">Ужасно</option>
    </select>
  );
};
