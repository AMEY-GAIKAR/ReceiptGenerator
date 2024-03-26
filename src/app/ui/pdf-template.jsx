"use client"

export function Template({ student }) {
  return (
    <div className="">
      <div className="mb-2 mt-4 flex justify-center">
        <img src="..." />
      </div>
      <div className="my-4 flex justify-center">
        <span className="text-xl">SIES GRADUATE SCHOOL OF TECHNOLOGY</span>
      </div>
      <div className="my-2 flex justify-center">
        <span className="text-sm">SIES GRADUATE SCHOOL OF TECHNOLOGY</span>
      </div>
      <div className="my-2 flex justify-center">
        <span className="text-sm">ADDRESS</span>
      </div>
      <hr className="mb-8 mt-8 border-black" />
      <div className="my-5 flex justify-center">
        <span>Fee Receipt</span>
      </div>
      <hr className="mb-10 mt-8 border-black" />
      <div>
        <div className="relative mx-16 overflow-x-auto">
          <table className="w-full text-left text-sm rtl:text-right">
            <tbody>
              <tr className="border border-x border-black">
                <th scope="row" className="whitespace-nowrap border-r border-black px-6 py-4 font-medium">Name</th>
                <td className="px-6 py-4">{student.name}</td>
              </tr>
              <tr className="border border-x border-black">
                <th scope="row" className="whitespace-nowrap border-r border-black px-6 py-4 font-medium">Gender</th>
                <td className="px-6 py-4">{student.gender}</td>
              </tr>
<tr className="border border-x border-black">
                <th scope="row" className="whitespace-nowrap border-r border-black px-6 py-4 font-medium">Caste</th>
                <td className="px-6 py-4">{student.caste}</td>
              </tr>
<tr className="border border-x border-black">
                <th scope="row" className="whitespace-nowrap border-r border-black px-6 py-4 font-medium">PRN No.</th>
                <td className="px-6 py-4">{student.prnNo}</td>
              </tr>
              <tr className="border border-x border-black">
                <th scope="row" className="whitespace-nowrap border-r border-black px-6 py-4 font-medium">Branch</th>
                <td className="px-6 py-4">{student.branch}</td>
              </tr>
              <tr className="border border-x border-black">
                <th scope="row" className="whitespace-nowrap border-r border-black px-6 py-4 font-medium">YEAR</th>
                <td className="px-6 py-4">{student.year}</td>
              </tr>
              <tr className="border border-x border-black">
                <th scope="row" className="whitespace-nowrap border-r border-black px-6 py-4 font-medium">AMOUNT</th>
                <td className="px-6 py-4">{student.amount}</td>
              </tr>
              <tr className="border border-x border-black">
                <th scope="row" className="whitespace-nowrap border-r border-black px-6 py-4 font-medium">TRANSACTION ID</th>
                <td className="px-6 py-4">{student.transactionID}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    <div>
      <div className="mx-20 mt-32">
        <span className="float-start">Stamp</span>
        <span className="float-end">Signature</span>
      </div>
    </div>
  </div>
  )
}
