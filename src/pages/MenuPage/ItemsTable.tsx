"use client"

import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"

import { columns } from "./columns"
import { Items } from "../../data/ItemsTable"

export function ItemsTable() {
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data: Items,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: { rowSelection },
    onRowSelectionChange: setRowSelection,
  })

  return (
    <div className=" border-neutral-800 bg-[#292C2D] ml-[-86px] text-white mt-[45px]">
      <Table className="w-[1265px] ml-[-5px]">
        <TableHeader className="bg-black">
          {table.getHeaderGroups().map((group) => (
            <TableRow key={group.id} >
              {group.headers.map((header) => (
                <TableHead key={header.id} className="text-white">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody >
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} data-state={row.getIsSelected() && "selected"} className="w-[1269px] h-[100px]">
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
