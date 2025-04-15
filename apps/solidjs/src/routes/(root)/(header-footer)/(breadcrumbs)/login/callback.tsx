import { revalidate, useNavigate } from "@solidjs/router";
import { createEffect } from "solid-js";
import { getMe } from "~/shared/queries";

export default function Page() {
  const navigate = useNavigate();
  createEffect(async () => {
    await revalidate(getMe.key);
    navigate("/profile");
  });
}
