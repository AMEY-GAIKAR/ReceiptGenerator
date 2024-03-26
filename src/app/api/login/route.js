import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    const reqBody = await req.json() 
    const { name, prnNo, gender, caste, branch, year, amount, transactionID } = reqBody
    console.log(reqBody)
    return NextResponse.json({message: "Successful", status: 200})
  } catch(error) {
    console.log(error)
    return NextResponse.json({error: error.message, status: 500})
  }
}
