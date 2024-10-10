"use client";

import { useEffect, useState } from "react";

import api from "~/shared/api.client";

export function ClientComponent() {
  const [user, setUser] = useState<{ firstName: string }>();
  useEffect(() => {
    void (async () => {
      const { data } = await api.GET("/users/me", {
        credentials: "include",
      });
      setUser(data);
    })();
  }, []);
  return <div>Client: {user?.firstName}</div>;
}
