import { createRoute } from "@tanstack/react-router";
import { Route as TableRoute } from "../../__root";
import TableDetail from "/Users/ts-swathi.kn/Desktop/js/react-app/src/pages/TableDetail.tsx";

export const Route = createRoute({
  getParentRoute: () => TableRoute,
  path: "table/$id",
  component: TableDetail,
});
