export default function CardSocials(props){
    const style = {
        borderTopColor : `var(--${props.social})`,
    }
    return (
            <div className="card" style={style}>
                <div className="card-header">
                    <span className="logo-social"> <img src={`../../images/icon-${props.social}.svg`} alt="logo-social-media" /></span>
                    <span className="minText">{props.user}</span>
                </div>
                <div className="card-body">
                    <h2 className="card-number bigText titleBig">{props.number}</h2>
                    <p className="minText card-sub">{props.sub_type}</p>
                </div>
                <div className="card-footer">
                    <p className={`benefits ${props.benefits_status}`}><img src={`../../images/icon-${props.benefits_status}.svg`} alt={props.benefits_status + "status"} />{props.benefits}</p>
                </div>
            </div>
    )
}