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
import { getMessages } from "#queries";
import { Button } from "#ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "#ui/table";
import { TextField, TextFieldInput } from "#ui/text-field";

type Message =
  paths["/messages"]["get"]["responses"]["200"]["content"]["application/json"][number];

const columns: ColumnDef<Message>[] = [
  {
    accessorKey: "name",
    header: "Имя",
    cell: (props) => <div class="capitalize">{props.row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: "Почта",
    cell: (props) => <div class="lowercase">{props.row.getValue("email")}</div>,
  },
  {
    accessorKey: "message",
    header: "Сообщение",
    cell: (props) => <div>{props.row.getValue("message")}</div>,
  },
  {
    accessorKey: "createdAt",
    header: "Дата создания",
    cell: (props) => {
      const date = new Date(props.row.getValue("createdAt") as string);
      return <div>{date.toLocaleDateString()}</div>;
    },
  },
  {
    accessorKey: "email-link",
    header: "Ответить",
    cell: (props) => {
      const email = props.row.getValue("email") as string;
      return (
        <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mail to</title>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
            />
          </svg>
        </a>
      );
    },
  },
];

export default function Page() {
  const messages = createAsync(() => getMessages());
  const [columnFilters, setColumnFilters] = createSignal<ColumnFiltersState>(
    [],
  );

  const table = createSolidTable<Message>({
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
        <h1 class="font-bold text-2xl">Сообщения пользователей</h1>
      </div>
      <div class="w-full">
        <div class="flex items-center py-4">
          <TextField
            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            onChange={(value) =>
              table.getColumn("email")?.setFilterValue(value)
            }
          >
            <TextFieldInput
              type="text"
              placeholder="Фильтровать по почте..."
              class="max-w-sm"
            />
          </TextField>
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
