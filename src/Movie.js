import React from "react";
import PropTypes from "prop-types";

// state를 필요로하지 않을 때는 class component를 사용할 필요가 없음
function Movie({id, year, title, summary, poster}){
    return(
        <h4>{title}</h4>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;