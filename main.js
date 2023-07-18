
var quoteArray=[

    ' "It is better to be hated for what you are thn to be loved for what you are not be. " --Andre Gide Autumn Leaves' ,
       
    '  "I am so clever that sometimes I dont understand a single word of what I am saying Oscar Wilde The Happy Prince and Other Stories" ' ,
    
    ' "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment . you can alaways do the best and make sure "  -- Ralph Waldo Emerson',
        
    ' "Darkness cannot drive out darkness: only light can do that. Hate cannot drive  " --Martin Luther ',
    
    ' "Your passion is waiting for your courage to catch up so you will go on definitly" --Isabelle Lafleche',
    
    ' "Dont limit yourself. Many people limit themelves to what they think they can. You can go as far as your mind lets you. What you believe remember and achieve ".--Mary Kay Ash',
    ]
    
    function quoteCall(){
        var randomquote=quoteArray[Math.floor(Math.random() * quoteArray.length)]
       
           document.getElementById('quotesDay').innerHTML= randomquote;
    
    }
    
    
    


