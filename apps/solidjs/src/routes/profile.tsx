import { Button } from "@rwx/ui/components/button";
import { Test } from "@rwx/ui/components/test";

export default function Page() {
  return (
    <div>
      <div class="font-bold">
        User info: <Test />
      </div>
      <div>
        <Button variant="secondary">Hello world</Button>
      </div>
    </div>
  );
}
