"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export function CreateForm() {

  const [student, setStudent] = useState({
    name: "",
    gender: "",
    prnNo: "",
    branch: "",
    year: "",
    amount: "",
    transactionID: "",
    category: "",
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
  }, [student])

  return (
    <form className="mx-auto my-10 max-w-sm">
      <div className="my-5">
        <h1>
          {isLoading ? "Processing" : "Form"}
        </h1>
      </div>
      <div className="mb-5">
      <label htmlFor="name" className="mb-2 block text-sm font-medium">Name</label>
      <input type="text" id="name" className="dark:shadow-sm-light block w-full rounded-lg border p-2.5 text-sm text-gray-900 shadow-sm" value={student.name} onChange={(e) => setStudent({...student, name: e.target.value})} required />
      </div>
      <div className="mb-5">
        <label htmlFor="prnNo" className="mb-2 block text-sm font-medium">PRN</label>
        <input type="text" id="prnNo" className="dark:shadow-sm-light block w-full rounded-lg border p-2.5 text-sm text-gray-900 shadow-sm" value={student.prnNo} onChange={(e) => setStudent({...student, prnNo: e.target.value})} required />
      </div>
      <div className="mb-5">
        <label htmlFor="gender" className="mb-2 block text-sm font-medium">Select your gender</label>
        <select id="gender" className="block w-full rounded-lg p-2.5 text-sm" value={student.gender} onChange={(e) => setStudent({...student, gender: e.target.value})} >
          <option>--</option>
          <option>MALE</option>
          <option>FEMALE</option>
        </select>
      </div>
      <div className="mb-5">
        <label htmlFor="category" className="mb-2 block text-sm font-medium">Select your category</label>
        <select id="category" className="block w-full rounded-lg p-2.5 text-sm" value={student.category} onChange={(e) => setStudent({...student, category: e.target.value})} >
          <option>--</option>
          <option>Open</option>
          <option>SC</option>
          <option>ST</option>
          <option>NT</option>
          <option>OBC</option>
        </select>
      </div>
<div className="mb-5">
        <label htmlFor="branch" className="mb-2 block text-sm font-medium">Select your branch</label>
        <select id="branch" className="block w-full rounded-lg p-2.5 text-sm" value={student.branch} onChange={(e) => setStudent({...student, branch: e.target.value})} >
          <option>--</option>
          <option>CE</option>
          <option>IT</option>
          <option>EXTC</option>
          <option>ECS</option>
          <option>MECH</option>
          <option>AI&DS</option>
          <option>AI&ML</option>
          <option>CSE/IOT</option>
        </select>
      </div>
      <div className="mb-5">
        <label htmlFor="year" className="mb-2 block text-sm font-medium">Select current year</label>
        <select id="year" className="block w-full rounded-lg p-2.5 text-sm" value={student.year} onChange={(e) => setStudent({...student, year: e.target.value})} >
          <option>--</option>
          <option>FE</option>
          <option>SE</option>
          <option>DSE</option>
          <option>TE</option>
          <option>BE</option>
        </select>
      </div>
      <div className="mb-5">
        <label htmlFor="amount" className="mb-2 block text-sm font-medium">Amount</label>
        <input type="text" id="amount" className="dark:shadow-sm-light block w-full rounded-lg border p-2.5 text-sm text-gray-900 shadow-sm" value={student.amount} onChange={(e) => setStudent({...student, amount: e.target.value})} required />
      </div>
      <div className="mb-5">
        <label htmlFor="transactionID" className="mb-2 block text-sm font-medium">Transaction ID</label>
        <input type="text" id="transactionID" className="dark:shadow-sm-light block w-full rounded-lg border p-2.5 text-sm text-gray-900 shadow-sm" value={student.transactionID} onChange={(e) => {setStudent({...student, transactionID: e.target.value})}} required />
      </div>
      <div className="flex justify-center">
        <Link 
          className="rounded-lg bg-slate-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:bg-slate-800 dark:hover:bg-slate-900 dark:focus:ring-slate-800"
          href={{
            pathname: "/view",
            query: {student: JSON.stringify(student)},
          }}
        >Create
        </Link>
      </div>
    </form>
  )
}
