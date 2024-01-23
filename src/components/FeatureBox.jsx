/* eslint-disable react/prop-types */
function FeatureBox({icon, title, desc}) {
    return (
        <div className="feature-box">
            <img
            src={`/assets/${icon}.svg`}
            alt={icon}
            className="feature-box__icon"
            />
            <div className="feature-box-details">
                <h5 className="feature-box-details__title">
                    {title}
                </h5>
                <span className="feature-box-details__desc">
                    {desc}
                </span>
            </div>
        </div>
    )
}

export default FeatureBox
