/*class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleJavascriptList = () => {
      const message = this.createChatBotMessage(
        "Do you want to book or reschedule your appointment?",
        {
          widget: "javascriptLinks",
        }
      );
  
      this.updateChatbotState(message);
    };
  
    updateChatbotState(message) {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;*/
  import axios from 'axios';

  class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
 
    async greet() {
        //const res=null;
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({type:"Search", value: "appointment"})
      };
        const response = await fetch('https://4pjz1fqnp5.execute-api.ap-south-1.amazonaws.com/POC/SecurraAssistAutoCompleteFAQFulfilment', requestOptions);
        const data = await response.json();
        const greetingMessage = this.createChatBotMessage("HI Musaraf")
        this.updateChatbotState(greetingMessage)
    }
    
    updateChatbotState(message) {
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider;
  