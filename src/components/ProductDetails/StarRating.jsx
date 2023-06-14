import { FaStar } from "react-icons/fa";


    
    const StarRating = ({ numberOfStars, currentRating, onClick }) => {
    return (
    <div className="flex gap-2">
    {[...Array(numberOfStars)].map((_, index) => {
    const rating = index + 1;
    return (
    <FaStar
    key={rating}
    size={18}
    color={rating <= currentRating ? '#FF5722' : '#D8D8D8' }
    onClick={() => onClick(rating)}
    style={{ cursor: 'pointer' }}
    />
    );
    })}
    </div>
    );
    };

    export default StarRating;