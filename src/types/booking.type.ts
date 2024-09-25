export type TBooking = {
    customerDetails: {
        name: string;
        email: string;
        nid: string;
        drivingLicense: string;
    };
    additationalFeatures: {
        gps: boolean;
        childSeat: boolean;
        mobileWifi: boolean;
    };
    _id: string;
    date: string;
    user: {
        _id: string;
        name: string;
        email: string;
        role: string;
        phone: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
    };
    car: {
        _id: string;
        name: string;
        description: string;
        color: string;
        isElectric: boolean;
        status: string[];
        pricePerHour: number;
        isDeleted: boolean;
        createdAt: string;
        updatedAt: string;
        __v: number;
        images: string[];
        featured: boolean;
        type: string;
        year: string
    };
    startTime: string;
    endTime: string | null;
    totalCost: number;
    costWithFeature: number;
    pickUpLocation: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    return?: boolean
    __v: number;
};
