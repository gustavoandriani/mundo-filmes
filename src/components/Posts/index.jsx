import PropTypes from "prop-types"
import "./styles.css"

Posts.propTypes = {
    key: PropTypes.number,
    thumbPost: PropTypes.string,
    titlePost: PropTypes.string
}

export default function Posts({ key, thumbPost, titlePost }) {
    return (
        <div className="PostCard" key={key}>
            <div className="CardThumb" style={{ backgroundImage: `url('${thumbPost}')` }}></div>
            <div className="CardInfos">
                <h4>{titlePost}</h4>
                <span></span>
            </div>
        </div>
    )
}