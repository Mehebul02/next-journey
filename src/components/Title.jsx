import React from 'react';

const Title = ({title}) => {
    return (
        <div>
            <h1 className='text-2xl font-semibold uppercase'>{title}</h1>
        </div>
    );
};

export default Title;