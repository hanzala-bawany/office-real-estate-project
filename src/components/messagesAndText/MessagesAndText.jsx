import { useState } from 'react';
import s from './messagesAndText.module.scss'
import { AiOutlineClose } from 'react-icons/ai';



const MessagesAndText = () => {

    const [textArea, setTextArea] = useState(false)


    return (
        <div className={s.messagesAndText}>

            <div className={s.messagesContainer}>

                <div className={s.messagesHeading}> Messages </div>

                <div onClick={() => setTextArea(true)} className={s.messageWrpper}>
                    <img src="https://www.bing.com/th/id/OIP.5naUK-L8A7RxxF7JB0NLuAHaE8?w=251&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                    <span className={s.name}>hanzala bawany</span>
                    <span className={s.message}>Lorem it amet consectetur...</span>
                </div>

                <div className={s.messageWrpper}>
                    <img src="https://www.bing.com/th/id/OIP.5naUK-L8A7RxxF7JB0NLuAHaE8?w=251&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                    <span className={s.name}>hanzala bawany</span>
                    <span className={s.message}>Lorem  sit amet consectetur...</span>
                </div>

                <div className={s.messageWrpper}>
                    <img src="https://www.bing.com/th/id/OIP.5naUK-L8A7RxxF7JB0NLuAHaE8?w=251&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                    <span className={s.name}>hanzala bawany</span>
                    <span className={s.message}>Lorem  sit amet consectetur...</span>
                </div>

                <div className={s.messageWrpper}>
                    <img src="https://www.bing.com/th/id/OIP.5naUK-L8A7RxxF7JB0NLuAHaE8?w=251&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                    <span className={s.name}>hanzala bawany</span>
                    <span className={s.message}>Lorem  sit amet consectetur...</span>
                </div>

                <div className={s.messageWrpper}>
                    <img src="https://www.bing.com/th/id/OIP.5naUK-L8A7RxxF7JB0NLuAHaE8?w=251&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                    <span className={s.name}>hanzala bawany</span>
                    <span className={s.message}>Lorem  sit amet consectetur...</span>
                </div>

                <div className={s.messageWrpper}>
                    <img src="https://www.bing.com/th/id/OIP.5naUK-L8A7RxxF7JB0NLuAHaE8?w=251&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                    <span className={s.name}>hanzala bawany</span>
                    <span className={s.message}>Lorem  sit amet consectetur...</span>
                </div>

                <div className={s.messageWrpper}>
                    <img src="https://www.bing.com/th/id/OIP.5naUK-L8A7RxxF7JB0NLuAHaE8?w=251&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                    <span className={s.name}>hanzala bawany</span>
                    <span className={s.message}>Lorem  sit amet consectetur...</span>
                </div>

            </div>

            {
                textArea &&
                <div className={s.textContainer}>

                    <div className={s.top}>

                        <div className={s.left}>
                            <img src="https://www.bing.com/th/id/OIP.5naUK-L8A7RxxF7JB0NLuAHaE8?w=251&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                            <span>hanzala bawany</span>
                        </div>

                        <div onClick={() => setTextArea(false)} className={s.right}>
                            <AiOutlineClose />
                        </div>

                    </div>

                    <div className={s.center}>
                        <div className={s.centerWrapper}>

                            <div className={s.signleMessageWrapper}>
                                <p >Lorem, ipsum dolor.</p>
                                <span>11 am</span>
                            </div>

                            <div className={`${s.signleMessageWrapper} ${s.own}`}>
                                <p className={s.own}>Lorem, ipsum dolor. Lorem, ipsum dolor.</p>
                                <span>11:38 am</span>
                            </div>

                            <div className={s.signleMessageWrapper}>
                                <p>Lorem, ipsum dolor.</p>
                                <span>11 am</span>
                            </div>

                            <div className={s.signleMessageWrapper}>
                                <p>Lorem, ipsum dolor.</p>
                                <span>11 am</span>
                            </div>

                            <div className={`${s.signleMessageWrapper} ${s.own}`}>
                                <p className={s.own}>Lorem, ipsum dolor. Lorem, ipsum dolor.</p>
                                <span>11:38 am</span>
                            </div>

                        </div>
                    </div>

                    <div className={s.bottom}>
                        <textarea name="" onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault(); // agar newline nahi chahiye
                                console.log(e.target.value);
                            }
                        }} className={s.textArea} id="" placeholder='Enter Text'></textarea>
                        <button>Send</button>
                    </div>

                </div>
            }

        </div>
    )
}

export default MessagesAndText