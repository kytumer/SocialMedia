let Store = {
    rerenderAllTree ()  {
    },

    State: {
        dialogsData: [
            { name: 'Кирилл', id: 1 },
            { name: 'Арина', id: 2 },
            { name: 'Алексей', id: 3 },
            { name: 'Денис', id: 4 },
            { name: 'Ренат', id: 5 },
        ],
    
        messageData: [
            {message:'Привет, как дела?', id:1 },
        ],
    
        newMessegeText: ""
    },

    addMessage  (PostMessage)  {
        let newMessage = {message:PostMessage, id:3 };
        this.State.messageData.push(newMessage);
        this.rerenderAllTree();
    } ,

    updateNewMessage  (newUpdateMessage)  {
        this.State.newMessegeText = newUpdateMessage;
        this.rerenderAllTree();
    },

    dispatch (action) {
        if (action.type === 'ADD-MESSAGE') {
            let newMessage = {message:action.PostMessage, id:3 };
        this.State.messageData.push(newMessage);
        this.rerenderAllTree();
        } else if (action.type === 'UPDATE-NEW-MESSAGE') {
            this.State.newMessegeText = action.newUpdateMessage;
        this.rerenderAllTree();
        }
    },

    subscribe (observer)  {
        this.rerenderAllTree = observer;
    },

}


export default Store;
window.Store = Store;