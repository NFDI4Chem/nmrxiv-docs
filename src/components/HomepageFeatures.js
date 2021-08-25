import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [{
        title: 'Voluntarily FAIR',
        Svg: require('../../static/img/fair.svg').default,
        description: ( <
            >
            nmrXiv is a cloud - based infrastructure that uses freely shared source code and deployment methods.Application of industry - grade development practices to ensure platform reliability,
            safety, and efficacy. <
            />
        ),
    },
    {
        title: 'Curation and analysis standards',
        Svg: require('../../static/img/standards.svg').default,
        description: ( <
            >
            Standards
            for data and metadata will be non -
            prescriptivist by nature.Standards will be built with input and

            contributions from the community and made compatible with existing and potential newly developed formats and approaches. < / >
        ),
    },
    {
        title: 'Community Engagement',
        Svg: require('../../static/img/community.svg').default,
        description: ( <
            >
            Engagement of the Natural Product and adjacent communities through webinars,
            workshops, tutorials, and community calls will ensure that nmrXiv meets the researchers’ needs and implements adequate incentive mechanisms
            for data contributions and curation. <
            />
        ),
    },
];

function Feature({ Svg, title, description }) {
    return ( <
        div className = { clsx('col col--4') } >
        <
        div className = "text--center" >
        <
        Svg className = { styles.featureSvg }
        alt = { title }
        /> < /
        div > <
        div className = "text--center padding-horiz--md" >
        <
        h3 > { title } < /h3> <
        p > { description } < /p> < /
        div > <
        /div>
    );
}

export default function HomepageFeatures() {
    return ( <
        section className = { styles.features } >
        <
        div className = "container" >
        <
        div className = "row" > {
            FeatureList.map((props, idx) => ( <
                Feature key = { idx } {...props }
                />
            ))
        } <
        /div> < /
        div > <
        /section>
    );
}