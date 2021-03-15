import React from 'react';
import '../styles/drawing.scss'

export default class Images extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            codes: [
                        {
                            id: 0,
                            day: 0,
                            name: "2048-moving function",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1607234793/Screen_Shot_2020-12-05_at_10.06.18_PM_ge0zww.png",
                            link: "https://www.openprocessing.org/sketch/1034243"
                        },
                        {
                            id: 1,
                            day: 1,
                            name: "Routing",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1607321677/Screen_Shot_2020-12-06_at_10.14.23_PM_epjo8h.png",
                            link: "https://route-six.vercel.app"
                        },
                        {
                            id: 2,
                            day: 2,
                            name: "Setup Flask App for Shorten URL",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1607493799/Screen_Shot_2020-12-08_at_10.02.54_PM_hqmq52.png",
                            link: ""
                        },
                        {
                            id: 3,
                            day: 3,
                            name: "Encode and Decode ID",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1607580629/Screen_Shot_2020-12-09_at_10.09.52_PM_tszsqp.png",
                            link: "https://repl.it/@Jessie211/MotionlessGoodDictionaries#index.js"
                        },
                        {
                            id: 4,
                            day: 4,
                            name: "Shorten URL work!!! (React + Node.js)",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1607668460/Screen_Shot_2020-12-10_at_10.33.46_PM_vqd4xz.png",
                            link: ""
                        },
                        {
                            id: 5,
                            day: 5,
                            name: "Color Collage (Drag & drop)",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1607750353/Screen_Shot_2020-12-11_at_9.18.48_PM_s48dcs.png",
                            link: "https://optimistic-kilby-92fd02.netlify.app/"
                        },
                        {
                            id: 6,
                            day: 6,
                            name: "Interval Display",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1607922397/Screen_Shot_2020-12-13_at_9.06.18_PM_h7elmz.png",
                            link: ""
                        },
                        {
                            id: 7,
                            day: 7,
                            name: "Continue with 2048 (make move left function)",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1607234793/Screen_Shot_2020-12-05_at_10.06.18_PM_ge0zww.png",
                            link: "https://www.openprocessing.org/sketch/1034243"
                        },
                        {
                            id: 8,
                            day: 8,
                            name: "Sushi simple selection",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1608270220/Screen_Shot_2020-12-17_at_9.43.00_PM_ngmsmp.png",
                            link: "https://repl.it/@Jessie211/UsedCulturedApplicationsuite#index.html"
                        },
                    ],
        }
        
    }

    render(){

        const { codes } = this.state

        return (
            <div className="images">
                {codes.map(each => <div 
                                        className="each-image" 
                                        >
                                            <img className="image" src={each.image}/>
                                            <div className="info">
                                                <p className="day">Day {each.day}</p>
                                                <p className="name">{each.name}</p>
                                            </div>
                                </div>
                )}
            </div>
        )
    }
}