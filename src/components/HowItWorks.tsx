import {useGSAP} from "@gsap/react";
import { chipImg, frameImg, frameVideo } from '../utils';
import {useRef} from "react";
import gsap from "gsap";


const HowItWorks = () => {
    const videoRef = useRef();



    useGSAP(() => {
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: '20% bottom'
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        })
    })

    return (

        <section className="common-padding">
            <div className="screen-max-width">
                <div id="chip" className="flex-center w-full my-20">
                    <img src={chipImg} alt="chip" width={180} height={180}/>
                </div>

                <div className="flex flex-col items-center">
                    <h2 className="hiw-title">
                        A17 Pro chip.
                        <br/> A monster win for gaming.
                    </h2>

                    <p className="hiw-subtitle">
                        It's here. The biggest redesign in the history of Apple GPUs.
                    </p>
                </div>

                <div className="mt-10 md:mt-20 mb-14">
                    <div className="relative h-full flex-center">
                        <div className="overflow-hidden">
                            <img
                                src={frameImg}
                                alt="frame"
                                className="bg-transparent relative z-10"
                            />
                        </div>
                        <div className="hiw-video">
                            <video className="pointer-events-none" playsInline preload="none" muted autoPlay
                                   ref={videoRef}>
                                <source src={frameVideo} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                    <p className="text-gray font-semibold text-center mt-3">Honkai: Star Rail</p>
                </div>



            </div>
        </section>
    )
}
export default HowItWorks
