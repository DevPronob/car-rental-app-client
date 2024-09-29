import { baseApi } from "../../api/baseApi";
//p
const paymentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createPayment: builder.mutation({
            query: (paymentInfo) => ({
                url: '/payment',
                method: 'POST',
                body: paymentInfo
            }),

        }),
        getPayment: builder.query({
            query: () => ({
                url: '/payment',
                method: 'GET',
            }),

        }),

        getMyPayment: builder.query({
            query: (args) => {
                console.log(args, "aegs")
                return {
                    url: `/payment/my-payment/${args}`,
                    method: 'GET',
                }
            },

        }),

    })
})

export const { useCreatePaymentMutation, useGetMyPaymentQuery, useGetPaymentQuery } = paymentApi