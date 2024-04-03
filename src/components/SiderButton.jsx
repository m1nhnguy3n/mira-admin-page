import React from 'react';
import { Button } from 'antd';
import MenuSvg from '../assets/MenuSvg';
const SiderButton = () => {
    return (
        <div>
            <Button
                type='primary'
                style={{
                    display: 'none',
                }}
                className='responsive-button'>
                Click Me (Large Screens)
            </Button>
            <MenuSvg />
            <style>{`
                @media screen and (min-width: 768px) {
                    /* Show button on screens wider than 768px */
                    button {
                        display: inline-block;
                    }
                }
            `}</style>
        </div>
    );
};

export default SiderButton;
