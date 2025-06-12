import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { z } from "zod/v4";

import "./app.css";

z.config(z.locales.ru());

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>ЧИП</Title>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
