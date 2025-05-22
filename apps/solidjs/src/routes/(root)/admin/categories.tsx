import type { paths } from "@rwx/api";
import { createAsync } from "@solidjs/router";
import {
  type ColumnDef,
  type ColumnFiltersState,
  createSolidTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/solid-table";
import { For, createSignal } from "solid-js";
import { getCategories } from "#queries";
import { Button } from "#ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "#ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "#ui/table";
import { TextField, TextFieldInput } from "#ui/text-field";

type Category =
  paths["/categories"]["get"]["responses"]["200"]["content"]["application/json"][number];

const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "name",
    header: "Название",
    cell: (props) => <div class="capitalize">{props.row.getValue("name")}</div>,
  },
  {
    accessorKey: "description",
    header: "Описание",
    cell: (props) => <div>{props.row.getValue("description")}</div>,
  },
];

export default function Page() {
  const messages = createAsync(() => getCategories());
  const [columnFilters, setColumnFilters] = createSignal<ColumnFiltersState>(
    [],
  );

  const table = createSolidTable<Category>({
    get data() {
      return messages() ?? [];
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    state: {
      get columnFilters() {
        return columnFilters();
      },
    },
  });

  return (
    <div class="flex h-full flex-col px-10 py-8">
      <div class="mb-2 flex items-center justify-between">
        <h1 class="font-bold text-2xl">Категории</h1>
      </div>
      <div class="w-full">
        <div class="flex items-center justify-between gap-4 py-4">
          <TextField
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(value) => table.getColumn("name")?.setFilterValue(value)}
          >
            <TextFieldInput
              type="text"
              placeholder="Фильтровать по названию..."
              class="max-w-sm"
            />
          </TextField>
          <Dialog>
            <DialogTrigger as={Button}>Добавить</DialogTrigger>
            <DialogContent>
              <form method="post">
                <DialogHeader>
                  <DialogTitle>Создать категорию</DialogTitle>
                  <DialogDescription>
                    Добавьте новую категорию
                  </DialogDescription>
                  <div class="flex justify-end">
                    <Button type="submit">Создать</Button>
                  </div>
                </DialogHeader>
              </form>
            </DialogContent>
          </Dialog>
        </div>
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
