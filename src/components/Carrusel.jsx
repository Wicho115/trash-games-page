import React from 'react';
import {Link} from 'react-router-dom';

const Carrusel = (props) => {
    const { datatarget,
        href1, href2, href3, href4,
        src1, src2, src3, src4,
        title1, title2, title3, title4,
        desc1, desc2, desc3, desc4 } = props;

    /*<Carrusel datatarget="carrusel"
        href1="" href2="" href3="" href4=""
        src1="" src2="" src3="" src4=""
        title1="" title2="" title3="" title4=""
        desc1="" desc2="" desc3="" desc4=""/>*/

    return (
        <>
            <center>
                <div id={datatarget} className="carousel slide Carrusel" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target={"#" + datatarget} data-slide-to={0} className="active" />
                        <li data-target={"#" + datatarget} data-slide-to={1} />
                        <li data-target={"#" + datatarget} data-slide-to={2} />
                        <li data-target={"#" + datatarget} data-slide-to={3} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <a href={href1} target="_blank" rel="noopener noreferrer"><img className="CarruselImg" src={src1} alt={title1} /></a>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{title1}</h5>
                                <p>{desc1}</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <a href={href2} target="_blank" rel="noopener noreferrer"><img className="CarruselImg" src={src2} alt={title2} /></a>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{title2}</h5>
                                <p>{desc2}</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <a href={href3} target="_blank" rel="noopener noreferrer"><img className="CarruselImg" src={src3} alt={title3} /></a>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{title3}</h5>
                                <p>{desc3}</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <a href={href4} target="_blank" rel="noopener noreferrer"><img className="CarruselImg" src={src4} alt={title4} /></a>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{title4}</h5>
                                <p>{desc4}</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href={"#" + datatarget} role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href={"#" + datatarget} role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </center>

        </>
    );
}

export default Carrusel;