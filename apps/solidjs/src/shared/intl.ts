const russianCardinalPluralRules = new Intl.PluralRules("ru", {
  type: "cardinal",
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const russianOrdinalPluralRules = new Intl.PluralRules("ru", {
  type: "ordinal",
});

const russianNumberFormatter = new Intl.NumberFormat("ru-RU");

export interface RussianPluralWordParams {
  count: number;
  one: string;
  few: string;
  many: string;
}

export function getRussianOrdinalPluralWord({
  count,
  one,
  few,
  many,
}: RussianPluralWordParams) {
  const category = russianCardinalPluralRules.select(count);
  switch (category) {
    case "one":
      return one;
    case "few":
      return few;
    default:
      return many;
  }
}

export function formatTimeDelta(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(ms / (1000 * 60));
  const hours = Math.floor(ms / (1000 * 60 * 60));
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(ms / (1000 * 60 * 60 * 24 * 7));
  const months = Math.floor(ms / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));

  if (years >= 1) {
    return `${russianNumberFormatter.format(years)} ${getRussianOrdinalPluralWord(
      {
        count: years,
        one: "год",
        few: "года",
        many: "лет",
      },
    )}`;
  }
  if (months >= 1) {
    return `${russianNumberFormatter.format(months)} ${getRussianOrdinalPluralWord(
      {
        count: months,
        one: "месяц",
        few: "месяца",
        many: "месяцев",
      },
    )}`;
  }
  if (weeks >= 1) {
    return `${russianNumberFormatter.format(weeks)} ${getRussianOrdinalPluralWord(
      {
        count: weeks,
        one: "неделя",
        few: "недели",
        many: "недель",
      },
    )}`;
  }
  if (days >= 1) {
    return `${russianNumberFormatter.format(days)} ${getRussianOrdinalPluralWord(
      {
        count: days,
        one: "день",
        few: "дня",
        many: "дней",
      },
    )}`;
  }
  if (hours >= 1) {
    return `${russianNumberFormatter.format(hours)} ${getRussianOrdinalPluralWord(
      {
        count: hours,
        one: "час",
        few: "часа",
        many: "часов",
      },
    )}`;
  }
  if (minutes >= 1) {
    return `${russianNumberFormatter.format(minutes)} ${getRussianOrdinalPluralWord(
      {
        count: minutes,
        one: "минута",
        few: "минуты",
        many: "минут",
      },
    )}`;
  }
  return `${russianNumberFormatter.format(seconds)} ${getRussianOrdinalPluralWord(
    {
      count: seconds,
      one: "секунда",
      few: "секунды",
      many: "секунд",
    },
  )}`;
}
