"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HelpPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Help Center</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I add a new student?</AccordionTrigger>
                <AccordionContent>
                  To add a new student, go to the Students page and click on the "Add new Student" button in the top right corner. Fill in the required information and click Save.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I track student progress?</AccordionTrigger>
                <AccordionContent>
                  You can track student progress through the Dashboard, which shows overall statistics, or visit individual student profiles for detailed progress information.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I manage chapters?</AccordionTrigger>
                <AccordionContent>
                  Navigate to the Chapters page where you can view, add, edit, and delete chapters. Each chapter shows progress and completion statistics.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}