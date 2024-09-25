import { TCar } from "../../../types/car.type";
import { TQueryParam, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const carApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCars: builder.query({
            query: (args?: TQueryParam[]) => {
                console.log(args)
                // const params = new URLSearchParams();
                // if (args) {
                //     args.forEach((item: TQueryParam) => {
                //         params.append(item.name, item.value as string);
                //     });
                // }
                return {
                    url: '/cars',
                    method: 'GET',
                    params: args,
                }
            },
            transformResponse: (response: TResponseRedux<TCar>) => {
                return {
                    data: response.data,
                    meta: response.meta,
                };
            },
            providesTags: ['car']
        }),
        getSingleCar: builder.query({
            query: (id: string) => {
                return {
                    url: `/cars/${id}`,
                    method: 'GET',
                }
            },
            providesTags: ['car']
        }),
        createCar: builder.mutation({
            query: (carInfo) => {
                return {
                    url: `/cars`,
                    method: 'POST',
                    body: carInfo
                }
            },
            invalidatesTags: ['car'],
        }),
        deleteCar: builder.mutation({
            query: (id) => {
                return {
                    url: `/cars/${id}`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: ['car'],
        }),
        updateCar: builder.mutation({
            query: ({ id, ...body }) => {
                console.log(id, body, "body");

                const { carPostData, images } = body; // Assuming you have data and images in body

                // eslint-disable-next-line prefer-const
                let updateData: Record<string, unknown> = {}
                Object.keys(carPostData).forEach((key) => {
                    if (carPostData[key] !== undefined && carPostData[key] !== null && !Number.isNaN(carPostData[key])) {
                        updateData[key] = carPostData[key];
                    }
                });
                console.log(updateData, "updateData before appending to FormData");
                const formData = new FormData();
                formData.append('data', JSON.stringify(updateData));

                // Append image files if they exist
                if (images && images.length > 0) {
                    images.forEach((file: File) => formData.append('images', file));
                }
                console.log(formData, "carPostData")

                return {
                    url: `/cars/${carPostData.id}`,
                    method: 'PUT',
                    body: formData, // Pass formData as body
                };
            },
            invalidatesTags: ['car'],
        })



    }),
});

export const { useGetCarsQuery, useDeleteCarMutation, useUpdateCarMutation, useGetSingleCarQuery, useCreateCarMutation } = carApi;
