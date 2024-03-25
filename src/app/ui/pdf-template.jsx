export function Template({ student }) {
  return (
    <div className="">
      <div class="mb-2 mt-4 flex justify-center">
        <img src="..." />
      </div>
      <div class="my-4 flex justify-center">
        <span class="text-xl">SIES GRADUATE SCHOOL OF TECHNOLOGY</span>
      </div>
      <div class="my-2 flex justify-center">
        <span class="text-sm">SIES GRADUATE SCHOOL OF TECHNOLOGY</span>
      </div>
      <div class="my-2 flex justify-center">
        <span class="text-sm">ADDRESS</span>
      </div>
      <hr class="mb-8 mt-8 border-black" />
      <div class="my-5 flex justify-center">
        <span>Fee Receipt</span>
      </div>
      <hr class="mb-10 mt-8 border-black" />
      <div>
        <div class="relative mx-16 overflow-x-auto">
          <table class="w-full text-left text-sm rtl:text-right">
            <tbody>
              <tr class="border border-x border-black">
                <th scope="row" class="whitespace-nowrap border-r border-black px-6 py-4 font-medium">Name</th>
                <td class="px-6 py-4">{student.name}</td>
              </tr>
              <tr class="border border-x border-black">
                <th scope="row" class="whitespace-nowrap border-r border-black px-6 py-4 font-medium">PRN No.</th>
                <td class="px-6 py-4">{student.prnNo}</td>
              </tr>
              <tr class="border border-x border-black">
                <th scope="row" class="whitespace-nowrap border-r border-black px-6 py-4 font-medium">Branch</th>
                <td class="px-6 py-4">{student.branch}</td>
              </tr>
              <tr class="border border-x border-black">
                <th scope="row" class="whitespace-nowrap border-r border-black px-6 py-4 font-medium">YEAR</th>
                <td class="px-6 py-4">{student.year}</td>
              </tr>
              <tr class="border border-x border-black">
                <th scope="row" class="whitespace-nowrap border-r border-black px-6 py-4 font-medium">AMOUNT</th>
                <td class="px-6 py-4">{student.amount}</td>
              </tr>
              <tr class="border border-x border-black">
                <th scope="row" class="whitespace-nowrap border-r border-black px-6 py-4 font-medium">TRANSACTION ID</th>
                <td class="px-6 py-4">{student.transactionID}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    <div>
      <div class="mx-20 mt-32">
        <span class="float-start">Stamp</span>
        <span class="float-end">Signature</span>
      </div>
    </div>
  </div>
  )
}
