import { Button } from "@rwx/ui/components/button";
import { Protected } from "~/components/guards";

export default function Page() {
  return (
    <Protected>
      <div>
        <div class="font-bold">User info:</div>
        <div>
          <Button variant="secondary">Hello world</Button>
        </div>
      </div>
    </Protected>
  );
}
