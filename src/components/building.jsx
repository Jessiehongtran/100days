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