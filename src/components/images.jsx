import React from 'react';
import '../styles/images.scss'

export default class Images extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: [
                {
                    id: 0,
                    day: 0,
                    name: "Plug",
                    image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1603569511/IMG_9792_2_kborpf.jpg"
                },
                {
                    id: 1,
                    day: 1,
                    name: "Notebook",
                    image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1603569530/IMG_9790_2_t1xwue.jpg"
                }
            ]
        }
    }

    render(){

        const { images } = this.state

        return (
            <div className="images">
                {images.map(each => <div className="each-image">
                    <img className="image" src={each.image}/>
                    <div className="info">
                        <p className="day">Day {each.day}</p>
                        <p className="name">{each.name}</p>
                    </div>
                </div>)}
            </div>
        )
    }
}