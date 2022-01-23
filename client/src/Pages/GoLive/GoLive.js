import React from 'react';
import Webcam from "react-webcam";
import Message from "../Message/Message"

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

export default function GoLive() {

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
        },
        [webcamRef]
    );

    return (
        <div className='bg-homeBg'>
            <div className="md:grid md:grid-cols-3 ">
                <div className='col-span-2 '>
                    <Webcam
                        audio={false}
                        height={720}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={1240}
                        videoConstraints={videoConstraints}
                    />
                </div>
                <div>
                    <Message />
                </div>
            </div>
            <h1 className='text-3xl text-white p-5'>Demo Event</h1>
            <p className='text-xl text-white pl-5 py-2'>This event is only for demo.</p>
            <p className='text-xl text-white pl-5 py-2'>Date: 23/01/2022</p>
        </div>
    );
}
