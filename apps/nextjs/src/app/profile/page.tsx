import api from "~/shared/api";
import { ClientComponent } from "./_components/client-component";

export default async function Page() {
  const { data } = await api.GET("/users/me");

  if (!data) {
    throw new Error("This should be impossible with middleware");
  }

  return (
    <div>
      <div className="font-bold">User info:</div>
      <div>
        {data.firstName} {data.lastName}
      </div>
      <div>{data.email}</div>
      <ClientComponent />
    </div>
  );
}
