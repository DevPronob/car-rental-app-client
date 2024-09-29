

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Invoice({ item }: any) {
    console.log(item)
    return (
        <div>
            <div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8 mb-6">
                <h1 className="font-bold text-2xl my-4 text-center text-blue-600">Avis Services</h1>
                <hr className="mb-2" />
                <div className="flex justify-between mb-6 gap-4">
                    <h1 className="text-lg font-bold">Invoice</h1>
                    <div className="text-gray-700">
                        <div className="font-bold">Date: <span className="font-thin">{new Date(item?.updatedAt).toDateString()}</span></div>
                        <div className="font-bold">Transiction Id #: <span className="font-thin">{item?.tran_id}</span></div>
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-lg font-bold mb-4">Bill To:</h2>
                    <div className="text-gray-700 mb-2">{item?.customerName}</div>
                    <div className="text-gray-700 mb-2">{item?.customerEmail}</div>
                    <div className="text-gray-700 mb-2">{item?.address}</div>
                    <div className="text-gray-700 mb-2">{item?.phone}</div>
                </div>
                <table className="w-full mb-8">
                    <thead>
                        <tr>
                            <th className="text-right font-bold text-gray-700">Amount : {Math.floor(item?.amount)} BDT</th>
                        </tr>
                    </thead>
                    {/* <tbody> */}
                    {/* <tr>
                              <td  className="text-left text-gray-700">Product 1</td>
                              <td  className="text-right text-gray-700">$100.00</td>
                          </tr>
                      </tbody>
                      <tfoot>
                          <tr>
                              <td  className="text-left font-bold text-gray-700">Total</td>
                              <td  className="text-right font-bold text-gray-700">$225.00</td>
                          </tr> */}
                    {/* </tfoot> */}
                </table>
                <div className="text-gray-700 mb-2">Thank you for your Purchase!</div>
            </div>
        </div>
    )
}

export default Invoice