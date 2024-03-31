import { CreateNewStudent, CreateNewTranaction } from "@/app/dbConfig/dbConfig"
import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    const reqBody = await req.json() 
    const { name, prnNo, gender, category, branch, year, amount, transactionID } = reqBody
    console.log(reqBody)
    CreateNewStudent({
      data: {
        name: name,
        prnNo: prnNo,
        branch: branch,
        year: year,
        gender: gender,
        category: category,
      },
    })
    CreateNewTranaction({
      data: {
        transactionID: transactionID,
        rollNo: prnNo,
        amount: amount,
      },
    })
    return NextResponse.json({message: "Successful", status: 200})
  } catch(error) {
    console.log(error)
    return NextResponse.json({error: error.message, status: 500})
  }
}
