"use client"

import { useEffect, useState } from "react"

export default function CreateForm() {

  const [student, setStudent] = useState({
    name: "",
    prnNo: "",
    branch: "",
    year: "",
    amount: "",
    transactionID: "",
  })
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async () => {
    try {
      setIsLoading(true)
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
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (student.name.length > 0 && student.prnNo.length > 0 && student.branch.length > 0 && student.year.length > 0 && student.amount.length > 0 && student.transactionID.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  })

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="my-5">
        <h1>
          {isLoading ? "Processing" : "Form"}
        </h1>
      </div>
      <label htmlFor="name">Name</label>
      <input 
        className=""
        id="name" 
        type="text" 
        value={student.name}
        onChange={(e) => setStudent({...student, name: e.target.value})}
        placeholder="Name"
      />
      <label htmlFor="prnNo">PRN No.</label>
      <input 
        className=""
        id="prnNo" 
        type="text" 
        value={student.prnNo}
        onChange={(e) => setStudent({...student, prnNo: e.target.value})}
        placeholder="PRN No."
      />
      <label htmlFor="branch">Branch</label>
      <input 
        className=""
        id="branch" 
        type="text" 
        value={student.branch}
        onChange={(e) => setStudent({...student, branch: e.target.value})}
        placeholder="Branch"
      />
      <label htmlFor="year">Year</label>
      <input 
        className=""
        id="year" 
        type="text" 
        value={student.year}
        onChange={(e) => setStudent({...student, year: e.target.value})}
        placeholder="Year"
      />
      <label htmlFor="amount">Amount</label>
      <input 
        className=""
        id="amount" 
        type="text" 
        value={student.amount}
        onChange={(e) => setStudent({...student, amount: e.target.value})}
        placeholder="Amount"
      />
      <label htmlFor="transactionID">Transaction ID</label>
      <input 
        className=""
        id="transactionID" 
        type="text" 
        value={student.transactionID}
        onChange={(e) => setStudent({...student, transactionID: e.target.value})}
        placeholder="Transaction ID"
      />
      <button 
        type="submit" 
        className=""
        onClick={onSubmit}
      >
        {buttonDisabled ? "" : "Submit"}
      </button>
    </div>
  )
}
