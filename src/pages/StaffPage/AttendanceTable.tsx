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

import  {attendcol } from "./AttendanceColumns"
import { attendData } from "../../data/AttendanceData"

export function AttendanceTable() {
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data: attendData,
    columns: attendcol,
    getCoreRowModel: getCoreRowModel(),
    state: { rowSelection },
    onRowSelectionChange: setRowSelection,
  })

  return (
    <div className=" border-neutral-800 bg-[#292C2D] text-white mt-[45px] ml-[-50px]">
      <Table className="w-[1200px]">
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
            <TableRow key={row.id} data-state={row.getIsSelected() && "selected"} className="h-[100px]">
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
