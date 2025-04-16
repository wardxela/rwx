import {
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from "@rwx/ui/components/pagination";

export type BlogPaginationProps = {
  count: number;
  page: number;
  onPageChange: (page: number) => void;
};

export function BlogPagination(props: BlogPaginationProps) {
  return (
    <Pagination
      fixedItems
      itemComponent={(props) => (
        <PaginationItem page={props.page}>{props.page}</PaginationItem>
      )}
      ellipsisComponent={() => <PaginationEllipsis />}
      count={props.count}
      page={props.page}
      onPageChange={props.onPageChange}
    >
      <PaginationPrevious />
      <PaginationItems />
      <PaginationNext />
    </Pagination>
  );
}
