import { NextResponse } from "next/server"
import { jsPDF } from "jspdf";

const doc = new jsPDF();
doc.setFont("helvetica")

export async function POST(req) {
  try {
    const reqBody = await req.json() 
    const { name, prnNo, branch, year, amount, transactionID } = reqBody
    console.log(reqBody)
    return NextResponse.json({message: "Successful", status: 200})
  } catch(error) {
    console.log(error)
    return NextResponse.json({error: error.message, status: 500})
  }
}
