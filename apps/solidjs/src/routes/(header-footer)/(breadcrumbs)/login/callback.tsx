import { revalidate, useNavigate } from "@solidjs/router";
import { createEffect } from "solid-js";
import { getProfile } from "~/shared/queries";

export default function Page() {
  const navigate = useNavigate();
  createEffect(async () => {
    await revalidate(getProfile.key);
    navigate("/profile");
  });
}
