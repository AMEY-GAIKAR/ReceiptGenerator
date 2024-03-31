import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function CreateNewStudent(student) {
  await prisma.Student.create(student)
} 
export async function CreateNewTranaction(transaction) {
  await prisma.Transaction.create(transaction)
} 

export async function GetAllStudents() {
  const allStudents = await prisma.Student.findMany()
  return allStudents
}
