import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { useHistory } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

const Chatbot = () => {
    let history = useHistory();


    const handlePage = (props) => {
        history.push(`/category/${props}`)
    }

    const theme = {
        background: 'white',
        headerBgColor: 'rgb(246,79,64)',
        headerFontColor: 'white',
        botBubbleColor: 'rgb(246,79,64)',
        botFontColor: 'white',
        userBubbleColor: 'white'
    }



    const config = {
        width: "300px",
        height: "400px",
        floating: true
    };

    const steps = [
        {
            //reffering to the step by Id
            id: 'Greet',
            message: 'Hi there!',
            //will trigger next Id
            trigger: 'Ask Name',
        },
        {
            id: 'Ask Name',
            message: 'What is your name?',
            trigger: 'Waiting for user input',
        },
        {
            id: 'Waiting for user input',
            //this will mean that the bot has to wait for the user to type something
            user: true,
            validator: (value) => {
                if (!isNaN(value)) {
                    return 'Please enter a name'
                };
                return true;

            },
            trigger: 'Welcome to Website',
        },
        {
            id: 'Welcome to Website',
            message: `Hi {previousValue}, Welcome to Six Tech Gear!`,
            trigger: 'Show Categories',
        },
        {
            id: 'Show Categories',
            options: [
                { value: 'Fitness', label: 'Fitness', trigger: () => { handlePage('Fitness'); return 'RedirectToCategory' } },
                { value: 'Medical', label: 'Medical', trigger: () => { handlePage('Medical'); return 'RedirectToCategory' } },
                { value: 'Lifestyle', label: 'Lifestyle', trigger: () => { handlePage('Lifestyle'); return 'RedirectToCategory' } },
                { value: 'Entertainment', label: 'Entertainment', trigger: () => { handlePage('Entertainment'); return 'RedirectToCategory' } },
                { value: 'Industrial', label: 'Industrial', trigger: () => { handlePage('Industrial'); return 'RedirectToCategory' } },
                { value: 'Pets and Animals', label: 'Pets and Animals', trigger: () => { handlePage('Pets and Animals'); return 'RedirectToCategory' } },
                { value: 'Gaming', label: 'Gaming', trigger: () => { handlePage('Gaming'); return 'RedirectToCategory' } },
            ],
        },
        {
            id: 'RedirectToCategory',
            message: `I'll bring you to that page in a sec!`,
            end: true,
        }
    ]

    return <div>

        <ThemeProvider theme={theme}>
            <ChatBot
                steps={steps} {...config}
            />
        </ThemeProvider>
    </div>


}

export default Chatbot;