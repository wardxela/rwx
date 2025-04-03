import { Button } from "@rwx/ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@rwx/ui/components/dialog";
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from "@rwx/ui/components/text-field";
import { BlogArticleCardLink } from "~/features/blog/blog-article-card-link";

export default function Page() {
  return (
    <div class="px-10 py-8">
      <div class="mb-6 flex items-center justify-between">
        <h1 class="font-bold">Блог</h1>
        <Dialog>
          <DialogTrigger as={Button}>Создать</DialogTrigger>
          <DialogContent>
            <form>
              <DialogHeader>
                <DialogTitle>Написать статью</DialogTitle>
                <DialogDescription>
                  Поделитесь своими мыслями и знаниями с сообществом. Создайте
                  увлекательную статью, которая будет полезна вашим ученикам.
                </DialogDescription>
                <div class="grid gap-4 py-4">
                  <TextField class="grid grid-cols-4 items-center gap-4">
                    <TextFieldLabel class="ml-2 justify-self-start text-right">
                      Название
                    </TextFieldLabel>
                    <TextFieldInput class="col-span-3" type="text" />
                  </TextField>
                </div>
                <DialogFooter>
                  <Button type="submit">Создать</Button>
                </DialogFooter>
              </DialogHeader>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4">
        <BlogArticleCardLink link="/author/blog/1" />
        <BlogArticleCardLink link="/author/blog/1" />
        <BlogArticleCardLink link="/author/blog/1" />
        <BlogArticleCardLink link="/author/blog/1" />
      </div>
    </div>
  );
}
