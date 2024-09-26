
import { useGetCarsQuery } from '../redux/features/car/car.api';
import { TCar } from '../types/car.type';
import PriceFilter from './PriceFilter';
import Loading from './Loading';

type TFilterProps = {
    setSearch: (search: string) => void;
    setSort: (sort: string) => void;
    setPriceRange: (range: number[]) => void;
    setModel: (model: string) => void;
};

function SearchFilterContainer({ setSearch, setSort, setPriceRange, setModel }: TFilterProps) {
    const { data: carData, isLoading } = useGetCarsQuery(undefined);

    // Ensure carData?.data is an array of TCar
    const uniqueColor: string[] = [
        ...new Set((carData?.data as TCar[] | undefined)?.map((item) => item.color) || [])
    ];
    const uniqueType: string[] = [
        ...new Set((carData?.data as TCar[] | undefined)?.map((item) => item.type) || [])
    ];

    const handlePriceChange = (range: number[]) => {
        setPriceRange(range);
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <form>
                <div className="relative mb-6 w-full sm:flex sm:items-center sm:justify-between rounded-md">
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        className="h-12 w-full sm:w-80 px-4 py-2 border border-gray-100 bg-gray-100 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        placeholder="Search..."
                    />
                </div>

                <div className="flex flex-col">
                    <h3 className="text-xl font-semibold p-2">Color</h3>
                    <hr />
                    <div>
                        {uniqueColor.map((color, index) => (
                            <p
                                key={index}
                                className="text-base hover:text-[#2f21f1] cursor-pointer font-light p-"
                                onClick={() => setSort(color)}
                            >
                                {color}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col">
                    <h3 className="text-xl font-semibold p-2">Model</h3>
                    <hr />
                    <div>
                        {uniqueType.map((type, index) => (
                            <p
                                key={index}
                                className="text-base hover:text-[#2f21f1] cursor-pointer font-light p-3"
                                onClick={() => setModel(type)}
                            >
                                {type}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="py-4">
                    <h3 className="text-xl font-semibold p-2">FILTER BY PRICE</h3>
                    <hr />
                    <div className="py-1 pt-12">
                        <PriceFilter
                            minPrice={0}
                            maxPrice={1000}
                            onPriceChange={handlePriceChange}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SearchFilterContainer;
