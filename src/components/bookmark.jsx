import React from "react";

const BookMark = ({status, ...rest}) => {
    const unMarked = <i className="bi bi-star position-absolute top-50 start-50 translate-middle"></i>
    const marked = <i className="bi bi-star-fill position-absolute top-50 start-50 translate-middle"></i>
    return (
        <>
            {status ? marked : unMarked}
        </>
    )     
    
}

export default BookMark