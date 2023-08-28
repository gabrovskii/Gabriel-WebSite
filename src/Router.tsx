import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { NotFound } from "./pages/NotFound";



export function Router() {
  return (
    <Routes>
      {/* <Route path="/" element={<Maintenance />} /> */}

      <Route path="/" element={<DefaultLayout />}>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
