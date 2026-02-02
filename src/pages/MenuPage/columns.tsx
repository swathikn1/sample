"use client"
import type { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "../../components/ui/checkbox"
import type { Item } from "../../data/ItemsTable"

export const columns: ColumnDef<Item>[] = [
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
    accessorKey: "product",
    header: "Product",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <img
          src={row.original.product}
          className="h-10 w-10 rounded-md"
        />
        </div>
    )
  },
  {
    accessorKey: "name",
    header: "Product Name",
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    accessorKey:"category",
    header:"Category",
  },
   {
    accessorKey:"price",
    header:"Price",
  },
   {
    accessorKey:"availability",
    header:"Availability",
     cell:({row})=>(
      <div className="text-[#FAC1D9]">
        {row.original.availability}
      </div>
    )
  },
  {
    accessorKey:"edit",
    header:"",
     cell: ({ row }) => (
      <img src={row.original.edit}></img>
     )
  },
  {
    accessorKey:"delete",
    header:"",
    cell: ({ row }) => (
    <img src={row.original.delete}></img>
     )
  },
  
  

]
