import api from "~/shared/api";

export default async function Page() {
  const { data } = await api.GET("/users/me");
  console.log(data);
  return (
    <div>
      First of all, this page should be protected in some way. Second, do Server
      Side call to Nest
    </div>
  );
}
