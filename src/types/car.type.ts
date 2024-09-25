export type TCar = {
    _id: string;
    name: string;
    description: string;
    color: string;
    isElectric: boolean;
    status: 'available' | 'unavailable';
    features: string[];
    pricePerHour: number;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
    images: string[];
    featured: boolean;
    year: string;
    type: string
}


export type TQueryParam = {
    name: string;
    value?: string | number;
};

export type TCarQueryParams = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    minPrice?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    maxPrice?: any;
    color?: string;
    searchTerm?: string;
    type?: string;
};
