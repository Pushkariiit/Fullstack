"use client"

import { useEffect } from "react"
import { useStudentStore } from "@/lib/store"
import { DataTable } from "@/components/ui/data-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function StudentsPage() {
  const { students, fetchStudents } = useStudentStore()

  useEffect(() => {
    fetchStudents()
  }, [fetchStudents])

  const columns = [
    {
      header: "Student Name",
      accessorKey: "name",
    },
    {
      header: "Cohort",
      accessorKey: "cohort",
    },
    {
      header: "Courses",
      accessorKey: "courses",
      cell: (row: any) => (
        <div className="flex gap-2">
          {row.courses.map((course: string, i: number) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
            >
              {course}
            </span>
          ))}
        </div>
      ),
    },
    {
      header: "Date Joined",
      accessorKey: "dateJoined",
    },
    {
      header: "Last Login",
      accessorKey: "lastLogin",
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (row: any) => (
        <span
          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
            row.status === "active"
              ? "bg-green-50 text-green-700 ring-green-700/10"
              : "bg-red-50 text-red-700 ring-red-700/10"
          } ring-1 ring-inset`}
        >
          {row.status}
        </span>
      ),
    },
  ]

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Students</h1>
          <p className="text-sm text-gray-500">Manage your students</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add new Student
        </Button>
      </div>
      <DataTable columns={columns} data={students} />
    </div>
  )
}