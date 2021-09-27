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
                (this.randomEmails.length >= 10) ? this.emailCount++ : null
            })
            
            
           
        }
    },

    mounted: function(){
        for(let i = 0; i < this.emailCount; i++){
            this.newMail();
        }
        //elimina incremento dell'ultimo ciclo al contatore delle email (pareggia)
        this.emailCount--;             
        console.log(this.randomEmails)
    },
})

