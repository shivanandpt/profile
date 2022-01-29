

const LandingPageMainSection = ({ children }) => {

    return <>
        <div className='row'>
            {children}
        </div>
    </>
}

const LandingPageSectionOne = ({ children }) => {
    return <>
        <div className='col-12 col-lg-8'>
            <div className='row'>
                {children}
            </div>
        </div>
    </>
}

const LandingPageSectionTwo = ({ children }) => {
    return <>
        <div className='col-12 col-lg-4'>
            {children}
        </div>
    </>
}

export { LandingPageMainSection, LandingPageSectionTwo, LandingPageSectionOne };
