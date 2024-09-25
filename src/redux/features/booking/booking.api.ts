import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createBooking: builder.mutation({
            query: (bookingInfo) => ({
                url: '/bookings',
                method: 'POST',
                body: bookingInfo
            }),
            invalidatesTags: ['booking', 'car']
        }),
        getBooking: builder.query({
            query: (args) => {
                return {
                    url: '/bookings',
                    method: 'GET',
                    params: args,
                }
            },
            providesTags: ['booking', 'car']
        }),
        updateBooking: builder.mutation({
            query: (args) => {
                console.log(args, "args")
                return {
                    url: `/bookings/${args.id}`,
                    method: 'PUT',
                    body: { status: args.status }
                }
            },
            invalidatesTags: ['booking', 'car']
        }),
        returnCarBooking: builder.mutation({
            query: (args) => {
                console.log(args, "args")
                return {
                    url: `/cars/return`,
                    method: 'PUT',
                    body: args
                }
            },
            invalidatesTags: ['booking', 'car']
        }),

        getMyBooking: builder.query({
            query: (args) => {
                return {
                    url: '/bookings/my-bookings',
                    method: 'GET',
                    params: args,
                }
            },
            providesTags: ['booking']
        }),
        deleteBooking: builder.mutation({
            query: (args) => {
                return {
                    url: `/bookings/${args.id}`,
                    method: 'DELETE',
                    params: args,
                }
            },
            invalidatesTags: ['booking']
        }),
    })
})

export const { useCreateBookingMutation, useDeleteBookingMutation, useGetMyBookingQuery, useReturnCarBookingMutation, useGetBookingQuery, useUpdateBookingMutation } = bookingApi