export default function(props){
    return (
        <div className="card-container">
            <div className="header">
                <h4 className="minText">{props.title}</h4>
                <img src={`../../images/icon-${props.social}.svg`} alt="logo-social-media-card" className="card_logo_overview"/>
            </div>
            <div className="body">
                <h2 className="number bigText number-card-overview">{props.number}</h2>
                <span className={`benefits ${props.status}`}>
                    <img src={`../../images/icon-${props.status}.svg`} alt={props.status + "status"} />{props.benefits}
                </span>
            </div>
        </div>
    )
}