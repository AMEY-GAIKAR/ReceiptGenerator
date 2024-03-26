"use client"

// based on catoegory(caste, girls), gender, tfw addjmissions, 
// dashboard stats basedon caste/ gender, incomplete amount 
// mysql db 
// download report in excel of total details(summary)

import { Template } from "../ui/pdf-template" 

export default function View() {
  const student = {
    name: "AMEY GAIKAR",
    prnNo: "121A8019",
    branch: "AI&DS",
    year: "TE",
    amount: "10022.50",
    transactionID: "A2N2EYD",
    gender: "MALE",
    caste: "OBC"
  }

  return (
    <Template student={student} />
  )
}
