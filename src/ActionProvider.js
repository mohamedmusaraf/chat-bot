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
var data2;
  class ActionProvider {
  
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    async greet(msg) {
        //const res=null;
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({type:"Search", value: msg})
      };
        const response = await fetch('https://4pjz1fqnp5.execute-api.ap-south-1.amazonaws.com/POC/SecurraAssistAutoCompleteFAQFulfilment', requestOptions);
        const data = await response.json();
        data2=data;
       // console.log(data)
        this.greet2();
        const greetingMessage = this.createChatBotMessage(data.responseMessage[0].answer)
        this.updateChatbotState(greetingMessage)

    }
    greet2()
    {
      console.log(data2);
      return data2;
    }
    
    updateChatbotState(message) {
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider;
  