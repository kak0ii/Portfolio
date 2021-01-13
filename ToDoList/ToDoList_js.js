var app = new Vue({
    el: "#todoApp",
    data: {
        todoLists: [{
            list:"Wake-Up at 7:00AM"
        }],
        inputList: {
            list: null
        },
        updateList:{
            list: null
        },

        type: "Update",
        updateMsg:"",
        updateIndex: -1

        

    },
    methods:{
        add(){
            this.todoLists.push({
                list:this.inputList.list
                
            });
            
            this.inputList.list = ""
        },
        del(index){
          alert("are you sure you want to delete this on your list?")
         
          this.todoLists.splice(index,1)
        },
        edt(index){
            this.updateIndex = index
            this.updateMsg = this.todoLists[index].list
        },
        
        saveUpdt(){
            this.todoLists[this.updateIndex].list = this.updateMsg
            this.updateMsg = ""
        }

    }
    
})