import React from 'react';
import '../styles/drawing.scss'

export default class Painting extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: [
                        {
                            id: 0,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610124298/IMG_0113_qoxq5g.jpg"
                        },
                        {
                            id: 1,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610124344/IMG_0080_hn7s1s.jpg"
                        },
                        {
                            id: 2,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610124322/IMG_0109_lszygk.jpg"
                        },
                        {
                            id: 3,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610124277/IMG_0167_p46pt7.jpg"
                        },
                        {
                            id: 4,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610124256/IMG_0170_uhsudn.jpg"
                        },
                        {
                            id: 5,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610124242/IMG_0172_zdezfd.jpg"
                        },
                        {
                            id: 6,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610124226/IMG_0180_c86qqp.jpg"
                        },
                        {
                            id: 7,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610124428/IMG_0260_ukbnzu.jpg"
                        },
                        {
                            id: 8,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610124183/IMG_0309_rzf5i7.jpg"
                        },
                        {
                            id: 9,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610124134/IMG_0311_hz0v89.jpg"
                        },
                        {
                            id: 10,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610124093/IMG_0316_b85wzs.jpg"
                        },
                        {
                            id: 11,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610123985/IMG_0338_odaekm.jpg"
                        },
                        {
                            id: 12,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610123992/IMG_0337_2_ezf4yu.jpg"
                        },
                        {
                            id: 13,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610124013/IMG_0336_wv7c3e.jpg"
                        },
                        {
                            id: 14,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610124027/IMG_0335_zsiiy4.jpg"
                        },
                        {
                            id: 15,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610123966/IMG_0341_ytejfs.jpg"
                        },
                        {
                            id: 16,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610123868/IMG_0406_sw90hz.jpg"
                        },
                        {
                            id: 17,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610123884/IMG_0402_ahip1r.jpg"
                        },
                        {
                            id: 18,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610123905/IMG_0400_zcsygs.jpg"
                        },
                        {
                            id: 19,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610123940/IMG_0393_ktpqcb.jpg"
                        },
                        {
                            id: 20,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610123928/IMG_0395_x9ahto.jpg"
                        },
                        {
                            id: 21,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610123847/IMG_0423_kg07dn.jpg"
                        },
                        {
                            id: 22,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610336982/IMG_0474_xedehu.jpg"
                        },
                        {
                            id: 23,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610336992/IMG_0476_axngrq.jpg"
                        },
                        {
                            id: 24,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611035190/IMG_0483_htvtvr.jpg"
                        },
                        {
                            id: 25,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611035192/IMG_0496_qhxrap.jpg"
                        },
                        {
                            id: 26,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611035181/IMG_0500_uux3ph.jpg"
                        },
                        {
                            id: 27,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611035179/IMG_0507_wn7mfp.jpg"
                        },
                        {
                            id: 28,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611035176/IMG_0508_ud0oe4.jpg"
                        },
                        {
                            id: 29,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611709193/IMG_0528_mpasnb.jpg"
                        },
                        {
                            id: 30,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611709189/IMG_0530_xbbgjw.jpg"
                        },
                        {
                            id: 31,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1612411430/IMG_0620_klrnqf.jpg"
                        },
                        {
                            id: 32,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1614055281/IMG_0722_tukjom.jpg"
                        },
                        {
                            id: 33,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1614055278/IMG_0736_3_twg60o.jpg"
                        },
                        {
                            id: 34,
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1614689481/IMG_0754_nhv7yi.jpg"
                        },
                    ],
            ind: -1
        }
        
    }

    render(){

        const { images, enlarged, ind } = this.state

        console.log('e', enlarged)

        return (
            <div className="images">
                {images.map(function(each, i){ 
                        return <div 
                                className="each-image" 
                                >
                                    <img className="image" src={each.image}/>
                                    
                        </div>
                }, this
                )}
            </div>
        )
    }
}