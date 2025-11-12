import React from 'react'

const TitleSection = ({title, subTitle}) => {
    return (
        <div className="flex flex-col items-center gap-5">
            <div>
                <p>{subTitle}</p>
            </div>
            <div className="font semi-bold md:text-5xl text-3xl text-center">
                <h1>{title}</h1>
            </div>
        </div>
    )
}
export default TitleSection
