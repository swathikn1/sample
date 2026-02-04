"use client"
import type { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "../../components/ui/checkbox"
import type { StaffDataType } from "../../data/staff"
import { t } from "../../lib/utils"

export const staffcol: ColumnDef<StaffDataType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) =>
          table.toggleAllPageRowsSelected(!!value)
        }
      />
    ),
    cell: ({ row }) => (
      <Checkbox 
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header:t("staff.name"),
  },
  {
    accessorKey: "email",
    header:t("profile.email"),
  },
  {
    accessorKey: "phone",
    header: t("staffTable.phone"),
  },
  {
    accessorKey:"age",
    header: t("staffTable.age"),
  },
   {
    accessorKey:"salary",
    header: t("staffTable.salary"),
  },
   {
    accessorKey:"timings",
    header: t("staffTable.timings"),
  }
 
]
