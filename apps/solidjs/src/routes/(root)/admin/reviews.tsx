import type { paths } from "@rwx/api";
import { A, action, createAsync, json, useSubmission } from "@solidjs/router";
import {
  type ColumnDef,
  createSolidTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/solid-table";
import { For } from "solid-js";
import api from "#api";
import { getReviews } from "#queries";
import { Button } from "#ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "#ui/table";
import { Toast } from "#ui/toast";

type Review =
  paths["/courses/reviews"]["get"]["responses"]["200"]["content"]["application/json"][number];

const approveReviewAction = action(async (formData: FormData) => {
  const reviewId = formData.get("id");
  await api.POST("/courses/reviews/{id}", {
    params: {
      path: {
        id: reviewId!.toString(),
      },
    },
  });
  return json(true, {
    revalidate: getReviews.key,
  });
}, "/courses/reviews/{id}:post");

const columns: ColumnDef<Review>[] = [
  {
    accessorKey: "author.firstName",
    header: "Пользователь",
    cell: (props) => (
      <div>
        {props.row.original.author.firstName}{" "}
        {props.row.original.author.lastName}
      </div>
    ),
  },
  {
    accessorKey: "comment",
    header: "Комментарий",
    cell: (props) => props.row.getValue("comment"),
  },
  {
    accessorKey: "rating",
    header: "Рейтинг",
    cell: (props) => props.row.getValue("rating"),
  },
  {
    accessorKey: "courseId",
    header: "Курс",
    cell: (props) => {
      return (
        <A href={`/courses/${props.row.getValue("courseId")}`}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Ссылка на курс</title>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
            />
          </svg>
        </A>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Действия",
    cell: (props) => {
      const submission = useSubmission(approveReviewAction);
      return (
        <form action={approveReviewAction} method="post">
          <input type="hidden" name="id" value={props.row.original.id} />
          <Button size="sm" type="submit" disabled={submission.pending}>
            Одобрить
          </Button>
        </form>
      );
    },
  },
];

export default function Page() {
  const reviews = createAsync(() => getReviews());

  const table = createSolidTable<Review>({
    get data() {
      return reviews() ?? [];
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div class="flex h-full flex-col px-10 py-8">
      <div class="mb-6 flex items-center justify-between">
        <h1 class="font-bold text-2xl">Отзывы пользователей</h1>
      </div>
      <div class="w-full">
        <div class="rounded-md border border-input">
          <Table>
            <TableHeader>
              <For each={table.getHeaderGroups()}>
                {(headerGroup) => (
                  <TableRow>
                    <For each={headerGroup.headers}>
                      {(header) => {
                        return (
                          <TableHead>
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext(),
                                )}
                          </TableHead>
                        );
                      }}
                    </For>
                  </TableRow>
                )}
              </For>
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                <For each={table.getRowModel().rows}>
                  {(row) => (
                    <TableRow data-state={row.getIsSelected() && "selected"}>
                      <For each={row.getVisibleCells()}>
                        {(cell) => (
                          <TableCell>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </TableCell>
                        )}
                      </For>
                    </TableRow>
                  )}
                </For>
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} class="h-24 text-center">
                    Ничего не найдено.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div class="flex items-center space-x-6 lg:space-x-8">
          <div class="ml-auto flex items-center justify-center font-medium text-sm">
            Страница {table.getState().pagination.pageIndex + 1} из{" "}
            {table.getPageCount()}
          </div>
          <div class="flex items-center justify-end space-x-2 py-4">
            <Button
              variant="outline"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Назад
            </Button>
            <Button
              variant="outline"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Вперед
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
