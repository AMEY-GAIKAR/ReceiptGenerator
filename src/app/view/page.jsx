"use client"

import { useSearchParams } from "next/navigation"
import { Template } from "../ui/pdf-template" 

export default async function View() {
  const searchParams = useSearchParams()
  const result = searchParams.get('student')
  console.log(result)
  const student = JSON.parse(result)
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(student),
      headers: {
        'content-type': 'application/json'
      },
    })
    console.log("Submission successful", response)
    } catch (error) {
    console.log("Submission failed", error)
    } finally {
    
    }

  return (
    <Template student={student} />
  )
}
