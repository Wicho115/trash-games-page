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

    function checkRef(href, src, title){
        if (href != "") {
            return (<a href={href} target="_blank"><img className="CarruselImg" src={src} alt={title} /></a>);
        }else{
            return(<img className="CarruselImg" src={src} alt={title} />);
        };
    }

    function checkTitle(title){
        if (title != "") {
            return (<h5>{title}</h5>);
        }
    }

    function checkDescription(desc){
        if (desc != "") {
            return (<p>{desc}</p>);
        }
    }

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
                            {checkRef(href1, src1, title1)}
                            <div className="carousel-caption d-none d-md-block">
                            {checkTitle(title1)}
                            {checkDescription(desc1)}
                            </div>
                        </div>
                        <div className="carousel-item">
                        {checkRef(href2, src2, title2)}
                            <div className="carousel-caption d-none d-md-block">
                            {checkTitle(title2)}
                            {checkDescription(desc2)}
                            </div>
                        </div>
                        <div className="carousel-item">
                        {checkRef(href3, src3, title3)}
                            <div className="carousel-caption d-none d-md-block">
                            {checkTitle(title3)}
                            {checkDescription(desc3)}
                            </div>
                        </div>
                        <div className="carousel-item">
                        {checkRef(href4, src4, title4)}
                            <div className="carousel-caption d-none d-md-block">
                            {checkTitle(title4)}
                            {checkDescription(desc4)}
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