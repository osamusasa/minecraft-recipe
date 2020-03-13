function Item(props){

    return (
        <div className="item">
            <div className="item-main-container">
                <span className="item-name">{props.name}</span>
            </div>
            <div className="item-img-container">
                <img className="item-img" src={props.img}/>
            </div>
            <div className="item-info-container">
                <span className="item-info">{props.info}</span>
            </div>
        </div>
    );
}