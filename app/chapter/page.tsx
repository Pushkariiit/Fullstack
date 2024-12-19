"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const chapters = [
  {
    title: "Introduction to Physics",
    subject: "Physics",
    progress: 75,
    totalLessons: 12,
    completedLessons: 9,
  },
  {
    title: "Advanced Mathematics",
    subject: "Mathematics",
    progress: 60,
    totalLessons: 15,
    completedLessons: 9,
  },
  {
    title: "Chemistry Basics",
    subject: "Chemistry",
    progress: 90,
    totalLessons: 10,
    completedLessons: 9,
  },
]

export default function ChapterPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Chapters</h1>
          <p className="text-sm text-gray-500">Manage your course chapters</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Chapter
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {chapters.map((chapter, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{chapter.title}</CardTitle>
              <p className="text-sm text-gray-500">{chapter.subject}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-2 bg-gray-200 rounded">
                  <div
                    className="h-full bg-blue-500 rounded"
                    style={{ width: `${chapter.progress}%` }}
                  />
                </div>
                <div className="text-sm text-gray-500">
                  {chapter.completedLessons} of {chapter.totalLessons} lessons completed
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}