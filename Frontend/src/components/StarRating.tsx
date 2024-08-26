import { FaRegStar, FaStar } from "react-icons/fa"

export interface Props {
    rating: number
}

export const StarRating = (props: Props) =>{

    const numStars = Math.round(props.rating / 2)
    
    const fullStars = []
    const emptyStarts = []

    for(let i = 0; i < 5; i++){
        if(i < numStars){
            fullStars.push(i)
        }else{
            emptyStarts.push(i)
        }
    }

    return (
        <div className="flex flex-row gap-1">
            {fullStars.map(index =>
                <FaStar key={index}/>
             )}
             {emptyStarts.map(index =>
                <FaRegStar key={index}/>
             )}
            
            
        </div>
    )
}