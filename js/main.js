const app = new Vue ({

    el:'#root',
    data:{

        randomEmails:[],

        emailCount: 10,

    },
    methods:{

        newMail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) =>{
                this.randomEmails.push(response.data.response);
                // (this.emailCount >= 10) ? this.emailCount++ : null;
            })
            
           
        }
    },

    mounted: function(){
        for(let i = 0; i < this.emailCount; i++){
            this.newMail();
        }
        console.log(this.randomEmails)
    },
})

