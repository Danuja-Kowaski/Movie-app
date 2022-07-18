import React from "react";
const MovieList = ({item}) => {
    const image_url = "";
    //console.log(item);
    return (
        <div className="container">
            <div className="row">
                <div class="col-sm">
                    <div className="card">
                    <img class="card-img-top" src={item.poster_path} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Type : {item.media_type}</h6>
                        <p class="card-text">{item.overview}</p>
                    </div> 
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MovieList;

