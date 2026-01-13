import React from 'react';

const PartnerComponent = ({ imageUrl }) => {
    return (
        <div className="slick-slide">
            <div className="inner">
                <img src={imageUrl} alt="Partner" />
            </div>
        </div>
    );
};

export default PartnerComponent;
