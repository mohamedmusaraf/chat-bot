import { createChatBotMessage } from 'react-chatbot-kit';
import React from 'react';
import LearningOptions from "./components/LearningOptions";
import LinkList from "./components/LinkList";
import ActionProvider from './ActionProvider';
const data=ActionProvider.greet2();
const config = { 
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
        widgetName: "javascriptLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              text: "Schedule appointment",
              url:
                "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
              id: 1,
            },
            {
              text: "Reshedule appointment",
              url:
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
              id: 2,
            },
            
          ],
        },
      },  
  ]
}

export default config;