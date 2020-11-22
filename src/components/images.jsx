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
                        },
                        {
                            id: 2,
                            day: 2,
                            name: "Power strip",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1603650256/IMG_9797_k942oc.jpg"
                        },
                        {
                            id: 3,
                            day: 3,
                            name: "Fan",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1603755480/IMG_9802_aiwtcm.jpg"
                        },
                        {
                            id: 4,
                            day: 4,
                            name: "Laptop stand",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1603858077/IMG_9805_dg1p6q.jpg"
                        },
                        {
                            id: 5,
                            day: 5,
                            name: "Book shelf",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1603937186/IMG_9809_psuplb.jpg"
                        },
                        {
                            id: 6,
                            day: 6,
                            name: "Window shade",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604068479/IMG_9811_juux8a.jpg"
                        },
                        {
                            id: 7,
                            day: 7,
                            name: "Halloween mask",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604206841/IMG_9813_miasic.jpg"
                        },
                        {
                            id: 8,
                            day: 8,
                            name: "Winter Home Slippers",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604206910/IMG_9822_purdkn.jpg"
                        },
                        {
                            id: 9,
                            day: 9,
                            name: "Backpack",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604287403/IMG_9833_droxzi.jpg"
                        },
                        {
                            id: 10,
                            day: 10,
                            name: "Oculus VR",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604458027/IMG_9835_2_qaso69.jpg"
                        },
                        {
                            id: 11,
                            day: 11,
                            name: "My violin",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604549479/IMG_9841_pyz4ii.jpg"
                        },
                        {
                            id: 12,
                            day: 12,
                            name: "Chair",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604635908/IMG_9842_yy0qwc.jpg"
                        },
                        {
                            id: 13,
                            day: 13,
                            name: "Earbud box",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604721229/IMG_9845_uoetjs.jpg"
                        },
                        {
                            id: 14,
                            day: 14,
                            name: "Claw hair clip",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604809352/IMG_9852_2_rlhjsu.jpg"
                        },
                        {
                            id: 15,
                            day: 15,
                            name: "Cup with broken arm",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604809359/IMG_9846_sbjxha.jpg"
                        },
                        {
                            id: 16,
                            day: 16,
                            name: "Happy Japanese doll",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604899475/IMG_9857_nhgudt.jpg"
                        },
                        {
                            id: 17,
                            day: 17,
                            name: "Keyboard",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604982033/IMG_9861_2_exrd93.jpg"
                        },
                        {
                            id: 18,
                            day: 18,
                            name: "Birthday gift bag",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605067987/IMG_9864_yycbbk.jpg"
                        },
                        {
                            id: 19,
                            day: 19,
                            name: "Bottle & Hair brush",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605152778/IMG_9872_mmf7af.jpg"
                        },
                        {
                            id: 20,
                            day: 20,
                            name: "My iPhone5",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605243031/IMG_9874_ebytvi.jpg"
                        },
                        {
                            id: 21,
                            day: 21,
                            name: "Lipstick",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605316362/IMG_9878_gteqne.jpg"
                        },
                        {
                            id: 22,
                            day: 22,
                            name: "Pinecone",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605410549/IMG_9882_zmsl5m.jpg"
                        },
                        {
                            id: 23,
                            day: 23,
                            name: "Lambda hat",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605500632/IMG_9932_ex7lqb.jpg"
                        },
                        {
                            id: 24,
                            day: 24,
                            name: "Pencil case",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605583483/IMG_9946_rt4lmy.jpg"
                        },
                        {
                            id: 25,
                            day: 25,
                            name: "Nail Clipper",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605675271/IMG_9951_m7kofp.jpg"
                        },
                        {
                            id: 26,
                            day: 26,
                            name: "Pencil crayon box",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605762782/IMG_9953_hjuecg.jpg"
                        },
                        {
                            id: 27,
                            day: 27,
                            name: "Watercolor paint set",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605845240/IMG_9959_vs11tp.jpg"
                        },
                        {
                            id: 28,
                            day: 28,
                            name: "Hair Roller Curler",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605930198/IMG_9970_is6rgh.jpg"
                        },
                        {
                            id: 29,
                            day: 29,
                            name: "Mask",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605930230/IMG_9971_coowos.jpg"
                        },
                        {
                            id: 30,
                            day: 30,
                            name: "Autumn leaves",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1606019931/IMG_9975_xbvjk4.jpg"
                        },
                    ],
            enlarged: false,
            ind: -1
        }
        this.toggleImage = this.toggleImage.bind(this)
    }

    toggleImage(i){
        this.setState({
            enlarged: !this.state.enlarged,
            ind: i
        })
    }

    render(){

        const { images, enlarged, ind } = this.state

        console.log('e', enlarged)

        return (
            <div className="images">
                {images.map(function(each, i){ 
                        if (enlarged && i == ind){
                            return <div 
                                className="each-image-enlarge" 
                                // onClick={() => this.toggleImage(i)} 
                                >
                                    <img className="image" src={each.image}/>
                                    <div className="info">
                                        <p className="day">Day {each.day}</p>
                                        <p className="name">{each.name}</p>
                                    </div>
                            </div>

                        } else {
                        return <div 
                                className="each-image" 
                                // onClick={() => this.toggleImage(i)} 
                                >
                                    <img className="image" src={each.image}/>
                                    <div className="info">
                                        <p className="day">Day {each.day}</p>
                                        <p className="name">{each.name}</p>
                                    </div>
                        </div>
                        }
                }, this
                )}
            </div>
        )
    }
}