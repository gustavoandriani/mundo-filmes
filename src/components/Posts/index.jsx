import { AiFillStar, AiFillCalendar } from "react-icons/ai"
import PropTypes from "prop-types"
import "./styles.css"

Posts.propTypes = {
    key: PropTypes.number,
    thumbPost: PropTypes.string,
    titlePost: PropTypes.string,
    ratingPost: PropTypes.number,
    releaseDate: PropTypes.string
}

export default function Posts({ key, thumbPost, titlePost, ratingPost, releaseDate }) {
    return (
        <div className="PostCard" key={key}>
            <div className="CardThumb" style={{ backgroundImage: `url('${thumbPost}')` }}></div>
            <div className="CardInfos">
                <h4>{titlePost}</h4>
                <p><AiFillStar />{ratingPost} <br /> <AiFillCalendar />{releaseDate}</p>
            </div>
        </div>
    )
}