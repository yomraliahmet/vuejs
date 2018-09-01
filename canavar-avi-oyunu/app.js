window.onload = function(){
        new Vue({
        el : '#app',
        data : {
            player_heal : 100,
            monster_heal : 100,
            game_is_on : false,
            logs : [],
            multiple : [10,20,25]
        },
        methods : {
            // Yeni oyun
            start_game : function(){
                this.game_is_on = true;
            },
            attack : function(){
                // Math.random() 0 ile 1 arasında virgüllü bir sayı verir.
                // Math.random() * 10 , 0 ile 10 arasında virgüllü vir sayı verir.
                // Math.ceil() , virgüllü kısmı kaldırır.Yukarı yuvarlama yapar.
                var point = Math.ceil(Math.random() * this.multiple[0]);
                //this.monster_heal = this.monster_heal - point;
                this.monster_heal -= point; // üstteki yazımla aynıdır.
                this.add_to_log({ turn : "player", text : "OYUNCU ATAĞI ("+ point +")" });
                this.monster_attack();
            },
            special_attack : function(){
                var point = Math.ceil(Math.random() * this.multiple[2]);
                //this.monster_heal = this.monster_heal - point;
                this.monster_heal -= point; // üstteki yazımla aynıdır.
                this.add_to_log({ turn : "player", text : "ÖZEL OYUNCU ATAĞI ("+ point +")" });
                this.monster_attack();
            },
            heal_up : function(){
                var point = Math.ceil(Math.random() * this.multiple[1]);
                //this.monster_heal = this.monster_heal - point;
                this.player_heal += point; // üstteki yazımla aynıdır.
                this.add_to_log({ turn : "player", text : "İLK YARDIM ("+ point +")" });
                this.monster_attack();
            },
            give_up : function(){
                this.player_heal = 0;
                this.add_to_log({ turn : "player", text : "OYUNCU PES ETTİ ("+ point +")" });
            },
            monster_attack : function(){
                var point = Math.ceil(Math.random() * this.multiple[2]);
                this.player_heal -= point;
                this.add_to_log({ turn : "monster", text : "CANAVAR ATAĞI ("+ point +")" });
            },
            add_to_log : function(log){
                this.logs.push(log);
            }
        },
        watch : {
            player_heal : function(value){
                if (value <= 0){
                    this.player_heal = 0;
                    if(confirm('Oyunu KAYBETTİN.Tekrar Denemek ister misin?')){
                       this.player_heal = 100; 
                       this.monster_heal = 100; 
                       this.logs = [];
                    } 
                }
                else if (value >= 100) this.player_heal = 100; // Yardım aldığı için 100 den büyük olma  durumu var.
            },
            monster_heal : function(value){
                if (value <= 0){
                    this.monster_heal = 0;
                    if(confirm('Oyunu KAZANDIN.Tekrar Denemek ister misin?')){
                        this.player_heal = 100; 
                        this.monster_heal = 100; 
                        this.logs = [];
                     } 
                }
            },
            
        }
    });
}
