import React, { useState } from "react";
import ChatbotImg from "../../assets/chatbot.png"
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";

const theme = {
    background: "#F4F5F6",
    fontFamily: "Source Serif Pro",
    headerBgColor: "#C83CB9",
    headerFontColor: "#fff",
    headerFontSize: "18px",
    botBubbleColor: "#4984B8",
    botFontColor: "#fff",
    userBubbleColor: "#439fca",
    userFontColor: "#fff",
    innerHeight: "80%",
    fontWeight: "800"
};

const steps = [
    {
        id: '1',
        message: 'Hi, What is your name?',
        trigger: '2',
    },
    {
        id: '2',
        user: true,
        trigger: '3',
    },
    {
        id: '3',
        message: "Hi {previousValue}, I am Play Bot, how are you feeling today?",
        trigger: "expressions",
    },
    {
        id: "expressions",
        options: [
            { value: "veryHappy", label: "đ", trigger: "veryHappy" },
            { value: "happy", label: "đ", trigger: "happy" },
            { value: "normal", label: "đ", trigger: "normal" },
            { value: "sad", label: "âšī¸", trigger: "sad" },
            { value: "angry", label: "đĄ", trigger: "angry" },
        ],
    },
    {
        id: "veryHappy",
        message: "Great Me too đ",
        trigger: "help",
    },
    {
        id: "happy",
        message:
            "Hmm, Looks Like You are in good mood. Well I can make it great đ",
        trigger: "help",
    },
    {
        id: "normal",
        message:
            "Ooh, Are You Confused Sir/Mam ? Don't Worry I am here to Assist You đģ",
        trigger: "help",
    },
    {
        id: "sad",
        message:
            "I am sorry to here that đ . Well i would suggest to read our random Fun-fact or visit Fun Zone. You will feel better.đ",
        trigger: "help",
    },
    {
        id: "angry",
        message:
            "đ Oops, Did i do something wrong....But wait i am a bot i can't do that..đ¤Ĩ.  Well i suggest you to relax your mind, play some games,  watch some movies and eat a lot of healthy tasty food just like me..đ",
        trigger: "help",
    },
    {
        id: "help",
        message: "How can I help you?",
        trigger: "options",
    },
    {
        id: "options",
        options: [
            { value: "services", label: "Services", trigger: "services" },
            { value: "exit", label: "Exit", trigger: "end" },
        ],
    },
    {
        id: "services",
        message: "Select one of these services",
        trigger: "selectServices",
    },
    {
        id: "selectServices",
        options: [
            { value: "Home", label: "Home", trigger: "selectedService" },
            { value: "Recommendation", label: "Recommendation", trigger: "selectedService" },
            { value: "goBack", label: "Go back", trigger: "options" },
        ],
    },
    {
        id: "selectedService",
        message: "opening {previousValue}",
        trigger: "end",
    },
    {
        id: "moreHelp",
        message: "do you meed more help?",
        trigger: "moreHelp-yes",
    },
    {
        id: "moreHelp-yes",
        options: [
            { value: "yes", label: "Yes", trigger: "help" },
            { value: "no", label: "No", trigger: "end" },
        ],
    },
    {
        id: "end",
        message: "Thank you, see you again!",
        end: true,
    },
];


function Chatbot() {
    const [opened, setOpened] = useState(false);
    const [key, setKey] = useState(Math.random());
    const history = useNavigate();

    const handleEnd = ({ values }) => {
        switch (values[values.length - 1]) {
            case "home":
                history.push("/");
                break;
            case "Recommendation":
                history.push("/recommendation");
                break;
            default:
                break;
        }
        setTimeout(() => {
            setKey(Math.random());
            setOpened(false);
        }, 1000);
    };

    return (
        <div className="chatbot">
            <ThemeProvider theme={theme}>
                <ChatBot
                    key={key}
                    steps={steps}
                    handleEnd={handleEnd}
                    opened={opened}
                    headerTitle="Play Bot"
                    botAvatar={ChatbotImg}
                    avatarStyle={{ borderRadius: "100%" }}
                    floating={true}
                    floatingIcon={
                        <img
                            src={ChatbotImg}
                            style={{ width: "70%" }}
                            alt="chatBot icon"
                        />
                    }
                    floatingStyle={{
                        backgroundColor: "#ffffff",
                        width: "60px",
                        height: "60px",
                        boxShadow: "2px 2px 20px -8px #111",
                    }}
                />
            </ThemeProvider>
        </div>
    );
}

export default Chatbot;
