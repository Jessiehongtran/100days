import React from 'react';
import '../styles/drawing.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/fontawesome-free-regular'

export default class Images extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: [
                        {
                            id: 0,
                            day: 0,
                            name: "Plug",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1603569511/IMG_9792_2_kborpf.jpg",
                            heart_count: 0
                        },
                        {
                            id: 1,
                            day: 1,
                            name: "Notebook",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1603569530/IMG_9790_2_t1xwue.jpg",
                            heart_count: 0
                        },
                        {
                            id: 2,
                            day: 2,
                            name: "Power strip",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1603650256/IMG_9797_k942oc.jpg",
                            heart_count: 0
                        },
                        {
                            id: 3,
                            day: 3,
                            name: "Fan",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1603755480/IMG_9802_aiwtcm.jpg",
                            heart_count: 0
                        },
                        {
                            id: 4,
                            day: 4,
                            name: "Laptop stand",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1603858077/IMG_9805_dg1p6q.jpg",
                            heart_count: 0
                        },
                        {
                            id: 5,
                            day: 5,
                            name: "Book shelf",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1603937186/IMG_9809_psuplb.jpg",
                            heart_count: 0
                        },
                        {
                            id: 6,
                            day: 6,
                            name: "Window shade",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604068479/IMG_9811_juux8a.jpg",
                            heart_count: 0
                        },
                        {
                            id: 7,
                            day: 7,
                            name: "Halloween mask",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604206841/IMG_9813_miasic.jpg",
                            heart_count: 0
                        },
                        {
                            id: 8,
                            day: 8,
                            name: "Winter Home Slippers",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604206910/IMG_9822_purdkn.jpg",
                            heart_count: 0
                        },
                        {
                            id: 9,
                            day: 9,
                            name: "Backpack",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604287403/IMG_9833_droxzi.jpg",
                            heart_count: 0
                        },
                        {
                            id: 10,
                            day: 10,
                            name: "Oculus VR",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604458027/IMG_9835_2_qaso69.jpg",
                            heart_count: 0
                        },
                        {
                            id: 11,
                            day: 11,
                            name: "My violin",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604549479/IMG_9841_pyz4ii.jpg",
                            heart_count: 0
                        },
                        {
                            id: 12,
                            day: 12,
                            name: "Chair",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604635908/IMG_9842_yy0qwc.jpg",
                            heart_count: 0
                        },
                        {
                            id: 13,
                            day: 13,
                            name: "Earbud box",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604721229/IMG_9845_uoetjs.jpg",
                            heart_count: 0
                        },
                        {
                            id: 14,
                            day: 14,
                            name: "Claw hair clip",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604809352/IMG_9852_2_rlhjsu.jpg",
                            heart_count: 0
                        },
                        {
                            id: 15,
                            day: 15,
                            name: "Cup with broken arm",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604809359/IMG_9846_sbjxha.jpg",
                            heart_count: 0
                        },
                        {
                            id: 16,
                            day: 16,
                            name: "Happy Japanese doll",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604899475/IMG_9857_nhgudt.jpg",
                            heart_count: 0
                        },
                        {
                            id: 17,
                            day: 17,
                            name: "Keyboard",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1604982033/IMG_9861_2_exrd93.jpg",
                            heart_count: 0
                        },
                        {
                            id: 18,
                            day: 18,
                            name: "Birthday gift bag",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605067987/IMG_9864_yycbbk.jpg",
                            heart_count: 0
                        },
                        {
                            id: 19,
                            day: 19,
                            name: "Bottle & Hair brush",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605152778/IMG_9872_mmf7af.jpg",
                            heart_count: 0
                        },
                        {
                            id: 20,
                            day: 20,
                            name: "My iPhone5",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605243031/IMG_9874_ebytvi.jpg",
                            heart_count: 0
                        },
                        {
                            id: 21,
                            day: 21,
                            name: "Lipstick",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605316362/IMG_9878_gteqne.jpg",
                            heart_count: 0
                        },
                        {
                            id: 22,
                            day: 22,
                            name: "Pinecone",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605410549/IMG_9882_zmsl5m.jpg",
                            heart_count: 0
                        },
                        {
                            id: 23,
                            day: 23,
                            name: "Lambda hat",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605500632/IMG_9932_ex7lqb.jpg",
                            heart_count: 0
                        },
                        {
                            id: 24,
                            day: 24,
                            name: "Pencil case",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605583483/IMG_9946_rt4lmy.jpg",
                            heart_count: 0
                        },
                        {
                            id: 25,
                            day: 25,
                            name: "Nail Clipper",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605675271/IMG_9951_m7kofp.jpg",
                            heart_count: 0
                        },
                        {
                            id: 26,
                            day: 26,
                            name: "Pencil crayon box",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605762782/IMG_9953_hjuecg.jpg",
                            heart_count: 0
                        },
                        {
                            id: 27,
                            day: 27,
                            name: "Watercolor paint set",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605845240/IMG_9959_vs11tp.jpg",
                            heart_count: 0
                        },
                        {
                            id: 28,
                            day: 28,
                            name: "Hair Roller Curler",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605930198/IMG_9970_is6rgh.jpg",
                            heart_count: 0
                        },
                        {
                            id: 29,
                            day: 29,
                            name: "Mask",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1605930230/IMG_9971_coowos.jpg",
                            heart_count: 0
                        },
                        {
                            id: 30,
                            day: 30,
                            name: "Autumn leaves",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1606019931/IMG_9975_xbvjk4.jpg",
                            heart_count: 0
                        },
                        {
                            id: 31,
                            day: 31,
                            name: "Screen cleaner",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1606112103/IMG_9985_ddzjwu.jpg",
                            heart_count: 0
                        },
                        {
                            id: 32,
                            day: 32,
                            name: "Lip balm",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1606280091/IMG_9990_bt6uk8.jpg",
                            heart_count: 0
                        },
                        {
                            id: 33,
                            day: 33,
                            name: "Pencil sharpener",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1606280094/IMG_9993_wguuan.jpg",
                            heart_count: 0
                        },
                        {
                            id: 34,
                            day: 34,
                            name: "Letscom earphone box",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1606370786/IMG_9994_oapwfj.jpg",
                            heart_count: 0
                        },
                        {
                            id: 35,
                            day: 35,
                            name: "Kid chair",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1606506268/IMG_0008_egabhf.jpg",
                            heart_count: 0
                        },
                        {
                            id: 36,
                            day: 36,
                            name: "Eyelash curler",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1606543133/IMG_0010_up5305.jpg",
                            heart_count: 0
                        },
                        {
                            id: 37,
                            day: 37,
                            name: "Knitting",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1606630055/IMG_0026_qlahzo.jpg",
                            heart_count: 0
                        },
                        {
                            id: 38,
                            day: 38,
                            name: "Full moon through window",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1606888411/IMG_0051_poup80.jpg",
                            heart_count: 0
                        },
                        {
                            id: 39,
                            day: 39,
                            name: "Macbook Pro",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1606888414/IMG_0052_cznawi.jpg",
                            heart_count: 0
                        },
                        {
                            id: 40,
                            day: 40,
                            name: "Water Color Paper",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1606976986/IMG_0063_qt50dy.jpg",
                            heart_count: 0
                        },
                        {
                            id: 41,
                            day: 41,
                            name: "Tweezer",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1607054684/IMG_0067_cytcyg.jpg",
                            heart_count: 0
                        },
                        {
                            id: 42,
                            day: 42,
                            name: "Rosary",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1607055082/IMG_0071_yme32h.jpg",
                            heart_count: 0
                        },
                        {
                            id: 42,
                            day: 42,
                            name: "Rosary (darken)",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1607055079/IMG_0073_p0zrcm.jpg",
                            heart_count: 0
                        },
                        {
                            id: 43,
                            day: 43,
                            name: "Cream Tube",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1607142486/IMG_0084_cizelq.jpg",
                            heart_count: 0
                        },
                        {
                            id: 44,
                            day: 44,
                            name: "Book",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1607234632/IMG_0098_qkymzf.jpg",
                            heart_count: 0
                        },
                        {
                            id: 45,
                            day: 45,
                            name: "Lips",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1607321269/IMG_0115_g0tkqb.jpg",
                            heart_count: 0
                        },
                        {
                            id: 46,
                            day: 46,
                            name: "Foundation cream",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1607387841/IMG_0125_jdziiw.jpg",
                            heart_count: 0
                        },
                        {
                            id: 47,
                            day: 47,
                            name: "5 Dollar Bill",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1607495054/IMG_0137_tfxufl.jpg",
                            heart_count: 0
                        },
                        {
                            id: 48,
                            day: 48,
                            name: "Fashion Tape",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1607575252/IMG_0139_ogx5gj.jpg",
                            heart_count: 0
                        },
                        {
                            id: 49,
                            day: 49,
                            name: "Almost Empty Toothpaste",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1607660463/IMG_0149_d4l2kn.jpg",
                            heart_count: 0
                        },
                        {
                            id: 50,
                            day: 50,
                            name: "Glide Floss",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1607751391/IMG_0162_anoygj.jpg",
                            heart_count: 0
                        },
                        {
                            id: 51,
                            day: 51,
                            name: "Autumn Leave",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1607918773/IMG_0181_yzwgyn.jpg",
                            heart_count: 0
                        },
                        {
                            id: 52,
                            day: 52,
                            name: "Book in a different angel",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1608011367/IMG_0235_tgbecu.jpg",
                            heart_count: 0
                        },
                        {
                            id: 53,
                            day: 53,
                            name: "Razor",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1608097358/IMG_0239_n5dyys.jpg",
                            heart_count: 0
                        },
                        {
                            id: 54,
                            day: 54,
                            name: "She with book",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1608181988/IMG_0247_apemav.jpg",
                            heart_count: 0
                        },
                        {
                            id: 55,
                            day: 55,
                            name: "Apple",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1608269216/IMG_0264_ggutk0.jpg",
                            heart_count: 0
                        },
                        {
                            id: 56,
                            day: 56,
                            name: "State of earphone",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1608494968/IMG_0269_ktmhol.jpg",
                            heart_count: 0
                        },
                        {
                            id: 57,
                            day: 57,
                            name: "My violin bowl",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1608698792/IMG_0303_oitcfh.jpg",
                            heart_count: 0
                        },
                        {
                            id: 58,
                            day: 58,
                            name: "A mirror",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1608956726/IMG_0319_wpbj2g.jpg",
                            heart_count: 0
                        },
                        {
                            id: 59,
                            day: 59,
                            name: "Skin care",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1609217125/IMG_0327_2_gge05m.jpg",
                            heart_count: 0
                        },
                        {
                            id: 60,
                            day: 60,
                            name: "My hair tie",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1609390457/IMG_0346_r1mfuh.jpg",
                            heart_count: 0
                        },
                        {
                            id: 61,
                            day: 61,
                            name: "Toothbrush",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1609391878/IMG_0348_jql4jv.jpg",
                            heart_count: 0
                        },
                        {
                            id: 62,
                            day: 62,
                            name: "Xmas Gift",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1609554644/IMG_0392_pnklin.jpg",
                            heart_count: 0
                        },
                        {
                            id: 63,
                            day: 63,
                            name: "Scissors",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1609634746/IMG_0399_zywv8k.jpg",
                            heart_count: 0
                        },
                        {
                            id: 64,
                            day: 64,
                            name: "Glove",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1609724208/IMG_0412_id6bdn.jpg",
                            heart_count: 0
                        },
                        {
                            id: 65,
                            day: 65,
                            name: "Glass",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610083482/IMG_0430_wml04i.jpg",
                            heart_count: 0
                        },
                        {
                            id: 66,
                            day: 66,
                            name: "Sanitize bottle",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610336507/IMG_0473_hm66hm.jpg",
                            heart_count: 0
                        },
                        {
                            id: 67,
                            day: 67,
                            name: "Top of bottle",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610503006/IMG_0480_dlhwru.jpg",
                            heart_count: 0
                        },
                        {
                            id: 68,
                            day: 68,
                            name: "Cables",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1610503009/IMG_0479_t4c0qw.jpg",
                            heart_count: 0
                        },
                        {
                            id: 69,
                            day: 69,
                            name: "Anten",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611035185/IMG_0499_zkxfi7.jpg",
                            heart_count: 0
                        },
                        {
                            id: 70,
                            day: 70,
                            name: "Clock",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611035172/IMG_0514_yw0csk.jpg",
                            heart_count: 0
                        },
                        {
                            id: 71,
                            day: 71,
                            name: "Brush bag",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611202634/IMG_0527_dqfv90.jpg",
                            heart_count: 0
                        },
                        {
                            id: 72,
                            day: 72,
                            name: "Lamp",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611709001/IMG_0535_l82yd3.jpg",
                            heart_count: 0
                        },
                        {
                            id: 73,
                            day: 73,
                            name: "Violin case",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611708986/IMG_0553_cku8dq.jpg",
                            heart_count: 0
                        },
                        {
                            id: 74,
                            day: 74,
                            name: "Hat",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611708989/IMG_0562_bwcnez.jpg",
                            heart_count: 0
                        },
                        {
                            id: 75,
                            day: 75,
                            name: "Watercolor papers",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1611807371/IMG_0580_aio4q5.jpg",
                            heart_count: 0
                        },
                        {
                            id: 76,
                            day: 76,
                            name: "Lady on a couch",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1612237224/IMG-0609_t879rk.jpg",
                            heart_count: 0
                        },
                        {
                            id: 77,
                            day: 77,
                            name: "My new chair",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1612411433/IMG_0621_qjmuz9.jpg",
                            heart_count: 0
                        },
                        {
                            id: 78,
                            day: 78,
                            name: "Mouse",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1613016721/IMG_0623_w37hcc.jpg",
                            heart_count: 0
                        },
                        {
                            id: 79,
                            day: 79,
                            name: "Lamp",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1613016724/IMG_0663_lbwhqu.jpg",
                            heart_count: 0
                        },
                        {
                            id: 80,
                            day: 80,
                            name: "Suitcase",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1613016730/IMG_0665_paj6ze.jpg",
                            heart_count: 0
                        },
                        {
                            id: 81,
                            day: 81,
                            name: "Chair",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1614055272/IMG_0692_zwejxm.jpg",
                            heart_count: 0
                        },
                        {
                            id: 82,
                            day: 82,
                            name: "Mirror",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1614055283/IMG_0693_aatuwv.jpg",
                            heart_count: 0
                        },
                        {
                            id: 83,
                            day: 83,
                            name: "Macbook Charger",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1614055287/IMG_0739_bshkrf.jpg",
                            heart_count: 0
                        },
                        {
                            id: 84,
                            day: 84,
                            name: "Rose",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1614689489/IMG_0755_eykcq8.jpg",
                            heart_count: 0
                        },
                        {
                            id: 85,
                            day: 85,
                            name: "Lotion",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1614689472/IMG_0753_oxrjy1.jpg",
                            heart_count: 0
                        },
                        {
                            id: 86,
                            day: 86,
                            name: "Guitar",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1615356438/IMG_0783_cppkoe.jpg",
                            heart_count: 0
                        },
                        {
                            id: 87,
                            day: 87,
                            name: "Bag of oranges",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1615356422/IMG_0782_uh2sl0.jpg",
                            heart_count: 0
                        },
                        {
                            id: 88,
                            day: 88,
                            name: "Glasses",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1615580053/IMG_0785_joixh4.jpg",
                            heart_count: 0
                        },
                        {
                            id: 89,
                            day: 89,
                            name: "Bottom of a blender",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1615580150/IMG_0792_y9wxwt.jpg",
                            heart_count: 0
                        },
                        {
                            id: 90,
                            day: 90,
                            name: "Laundry basket",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1615682556/IMG_0798_elhhlr.jpg",
                            heart_count: 0
                        },
                        {
                            id: 91,
                            day: 91,
                            name: "Comb",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1615682575/IMG_0799_kuyggg.jpg",
                            heart_count: 0
                        },
                        {
                            id: 92,
                            day: 92,
                            name: "Baby powder",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1615952884/IMG_0801_kgumvj.jpg",
                            heart_count: 0
                        },
                        {
                            id: 93,
                            day: 93,
                            name: "Another chair",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1615952873/IMG_0803_qrx9ux.jpg",
                            heart_count: 0
                        },
                        {
                            id: 94,
                            day: 94,
                            name: "Mac chargers",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1616764041/IMG_0809_ld8tn9.jpg",
                            heart_count: 0
                        },
                        {
                            id: 95,
                            day: 95,
                            name: "Spoon",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1616764043/IMG_0836_c1lfpx.jpg",
                            heart_count: 0
                        },
                        {
                            id: 96,
                            day: 96,
                            name: "Perfume",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1616764046/IMG_0838_txdqnz.jpg",
                            heart_count: 0
                        },
                        {
                            id: 97,
                            day: 97,
                            name: "Half of pencil",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1616764055/IMG_0839_h01jh9.jpg",
                            heart_count: 0
                        },
                        {
                            id: 98,
                            day: 98,
                            name: "Sock",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1617296424/IMG_0868_mqxt7o.jpg",
                            heart_count: 0
                        },
                        {
                            id: 99,
                            day: 99,
                            name: "Tape",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1617897516/IMG_0871_ukmxn1.jpg",
                            heart_count: 0
                        },
                        {
                            id: 100,
                            day: 100,
                            name: "Bike",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1617897567/IMG_0883_yqeby2.jpg",
                            heart_count: 0
                        },
                        {
                            id: 101,
                            day: 101,
                            name: "State of Band",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1621317914/IMG_0991_hjdf57.jpg",
                            heart_count: 0
                        },
                        {
                            id: 102,
                            day: 102,
                            name: "Orange skin",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1621317918/IMG_1065_sbj3ai.jpg",
                            heart_count: 0
                        },
                        {
                            id: 103,
                            day: 103,
                            name: "Digital Camera",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1621318119/IMG_1075_uvedp8.jpg",
                            heart_count: 0
                        },
                        {
                            id: 104,
                            day: 104,
                            name: "Hair Tie",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1621318126/IMG_1074_lt42jg.jpg",
                            heart_count: 0
                        },
                        {
                            id: 105,
                            day: 105,
                            name: "Charger",
                            image: "https://res.cloudinary.com/dfulxq7so/image/upload/v1621318161/IMG_1077_ucfbzs.jpg",
                            heart_count: 0
                        },
                    ],
            enlarged: false,
            ind: -1,
            heart_count: 0
        }
        this.toggleImage = this.toggleImage.bind(this)
    }

    toggleImage(i){
        this.setState({
            enlarged: !this.state.enlarged,
            ind: i
        })
    }

    increaseHeart(ind){
        // try {
        //     const res = await axios.patch()
        // } catch (err){
        //     console.log(err)
        // }
        const { images } = this.state
        images[ind].heart_count += 1
        this.setState({ images: images})
    }

    render(){

        const { images, enlarged, ind } = this.state

        console.log('e', enlarged)

        return (
            <div className="images">
                {images.map(function(each, i){ 
                        return <div 
                                className="each-image" 
                                // onClick={() => this.toggleImage(i)} 
                                >
                                    <img className="image" src={each.image}/>
                                    <div className="info">
                                        <p className="day">Day {each.day}</p>
                                        <p className="name">{each.name}</p>
                                    </div>
                                    <div class="heart">
                                        <FontAwesomeIcon
                                            style={{ color: 'white', cursor: 'pointer'}}
                                            icon={faHeart} //or another name 
                                            onClick= {() => this.increaseHeart(i)}
                                        />
                                        <p class="heart-count">{each.heart_count}</p>
                                    </div>
                        </div>
                }, this
                )}
            </div>
        )
    }
}