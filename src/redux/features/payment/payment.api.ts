import { baseApi } from "../../api/baseApi";

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

    })
})

export const { useCreatePaymentMutation, useGetPaymentQuery } = paymentApi