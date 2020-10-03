class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      if (lowerCaseMessage.includes("appointment")) {
        this.actionProvider.greet()
      }
    }
  }
  
  export default MessageParser