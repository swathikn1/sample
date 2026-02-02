"use client"
import type { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "../../components/ui/checkbox"
import type { AttendanceType } from "../../data/AttendanceData"
import { Button } from "../../components/ui/button"

export const attendcol: ColumnDef<AttendanceType>[] = [
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
    header: "Name",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "timings",
    header: "Timings",
  },

    {
    id:"actions",
    cell:({  }) => {
      return (
        <div className="flex gap-2">
          <Button className="bg-[#FAC1D9] text-black hover:bg-white w-[90px] h-[44px]">Present</Button>
          <Button className="bg-[#FFDF6B] text-black hover:bg-white w-[90px] h-[44px]">Absent</Button>
          <Button className="bg-[#6BE4FF] text-black hover:bg-white w-[90px] h-[44px]">Hall Shift</Button>
          <Button className="bg-[#FF6A6A] text-black hover:bg-white w-[90px] h-[44px]">Leave</Button>
        </div>
      )
    },
    enableSorting: false,
  },
]
