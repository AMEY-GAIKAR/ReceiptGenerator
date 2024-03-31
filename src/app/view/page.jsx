"use client"

import { useSearchParams } from "next/navigation"
import { Template } from "../ui/pdf-template" 

export default function View() {
  const searchParams = useSearchParams()
  const result = searchParams.get('student')
  console.log(result)
  const student = JSON.parse(result)

  return (
    <Template student={student} />
  )
}
