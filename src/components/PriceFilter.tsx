import Slider from 'rc-slider';
import { useEffect, useState } from 'react'
import 'rc-slider/assets/index.css';

interface PriceFilterProps {
    minPrice: number;
    maxPrice: number;
    onPriceChange: (range: number[]) => void;
}

function PriceFilter({ minPrice, maxPrice, onPriceChange }: PriceFilterProps) {
    const [priceRange, setPriceRange] = useState<number[]>([minPrice, maxPrice]);
    //getting min price nad max price when loading the page and updating on
    useEffect(() => {
        onPriceChange(priceRange);
    }, [priceRange, onPriceChange]);

    const handlePriceChange = (value: number | number[]) => {
        if (Array.isArray(value)) {
            setPriceRange(value);
        }
    };

    return (
        <div className="price-filter">
            <Slider
                range
                min={minPrice}
                max={maxPrice}
                value={priceRange}
                onChange={handlePriceChange}
                allowCross={false}
            />
            <div className="price-values">
                <span>${priceRange[0]}</span> - <span>${priceRange[1]}</span>
            </div>
        </div>
    )
}

export default PriceFilter