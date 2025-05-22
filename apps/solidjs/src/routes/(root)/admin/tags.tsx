import type { paths } from "@rwx/api";
import { action, createAsync, json, useSubmission } from "@solidjs/router";
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
import { For, createEffect, createSignal } from "solid-js";
import { z } from "zod";
import api from "#api";
import { getTags } from "#queries";
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
import {
  TextField,
  TextFieldErrorMessage,
  TextFieldInput,
  TextFieldLabel,
} from "#ui/text-field";

type Tag =
  paths["/tags"]["get"]["responses"]["200"]["content"]["application/json"][number];

const TagCreateSchema = z.object({
  name: z.string().min(1, "Название не может быть пустым"),
});

const createTag = action(async (formData: FormData) => {
  const validated = TagCreateSchema.safeParse({
    name: formData.get("name"),
  });
  if (!validated.success) {
    return json(
      {
        data: null,
        errors: {
          ...validated.error.formErrors.fieldErrors,
          server: undefined,
        },
      },
      {
        revalidate: "nothing",
      },
    );
  }
  const response = await api.POST("/tags", {
    body: validated.data,
  });
  if (response.error) {
    return json(
      {
        data: null,
        errors: {
          server: "Тег с таким названием уже существует",
          name: undefined,
        },
      },
      {
        revalidate: "nothing",
      },
    );
  }
  return json(
    {
      data: true,
      errors: null,
    },
    {
      revalidate: [getTags.key],
    },
  );
}, "/tags");

const columns: ColumnDef<Tag>[] = [
  {
    accessorKey: "name",
    header: "Название",
    cell: (props) => <div class="capitalize">{props.row.getValue("name")}</div>,
  },
];

export default function Page() {
  const [open, setOpen] = createSignal(false);
  const messages = createAsync(() => getTags());
  const [columnFilters, setColumnFilters] = createSignal<ColumnFiltersState>(
    [],
  );
  const submission = useSubmission(createTag);

  const table = createSolidTable<Tag>({
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

  createEffect(() => {
    if (submission.result?.data) {
      setOpen(false);
    }
  });

  return (
    <div class="flex h-full flex-col px-10 py-8">
      <div class="mb-2 flex items-center justify-between">
        <h1 class="font-bold text-2xl">Теги</h1>
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
          <Dialog open={open()} onOpenChange={setOpen}>
            <DialogTrigger as={Button}>Добавить</DialogTrigger>
            <DialogContent>
              <form action={createTag} method="post">
                <DialogHeader>
                  <DialogTitle>Создать тег</DialogTitle>
                  <DialogDescription>Добавьте новый тег</DialogDescription>
                  <div class="mt-2 flex flex-col gap-4">
                    <TextField
                      name="name"
                      class="grid grid-cols-4 items-start gap-4"
                      validationState={
                        submission.result?.errors ? "invalid" : "valid"
                      }
                    >
                      <TextFieldLabel class="mt-3 ml-2 justify-self-start text-right">
                        Название
                      </TextFieldLabel>
                      <div class="col-span-3">
                        <TextFieldInput
                          type="text"
                          placeholder="Название тега"
                        />
                        <TextFieldErrorMessage>
                          {submission.result?.errors?.name}
                          {submission.result?.errors?.server}
                        </TextFieldErrorMessage>
                      </div>
                    </TextField>
                  </div>
                  <div class="mt-2 flex justify-end">
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
