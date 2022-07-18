// let number = document.getElementById("number-ps");
// let number1 = document.getElementById("number-ai");
// let number2 = document.getElementById("number-html");
// let number3 = document.getElementById("number-js");
// let counter = 0;
// let html_counter = 0;
// let js_counter = 0;

new fullpage('#wrap',{
    autoScrolling:true ,
    anchors:['1page', '2page', '3page','4page'],
    navigation:true,
    afterLoad: function(origin, destination, direction, trigger){
		if(destination.index == 1){
            document.querySelector('.st0').style.opacity = 1;
            document.querySelector('.st1').style.opacity = 1;
            document.querySelector('.st2').style.opacity = 1;
            document.querySelector('.st3').style.opacity = 1;
            document.querySelector('.per-ps').innerHTML = 0;
            document.querySelector('.per-il').innerHTML = 0;
            document.querySelector('.per-html').innerHTML = 0;
            document.querySelector('.per-js').innerHTML = 0;
            anime({
                targets:'.st0',
                strokeDashoffset:[anime.setDashoffset, 0],
                duration:4000,
                easing:'easeOutSine'
            });
            
            anime({
                targets:'.st1',
                strokeDashoffset:[anime.setDashoffset, 0],
                duration:4000,
                easing:'easeOutSine'
            });
            
            anime({
                targets:'.st2',
                strokeDashoffset:[anime.setDashoffset, 0],
                duration:4000,
                easing:'easeOutSine'
            });
            
            anime({
                targets:'.st3',
                strokeDashoffset:[anime.setDashoffset, 0],
                duration:4000,
                easing:'easeOutSine'
            });

            anime({
                targets:'.per-ps',
                innerHTML:[90],
                round:1,
                duration:4000,
                easing:'easeOutSine'
            });

            anime({
                targets:'.per-il',
                innerHTML:[90],
                round:1,
                duration:4000,
                easing:'easeOutSine'
            });

            anime({
                targets:'.per-html',
                innerHTML:[70],
                round:1,
                duration:4000,
                easing:'easeOutSine'
            });

            anime({
                targets:'.per-js',
                innerHTML:[60],
                round:1,
                duration:4000,
                easing:'easeOutSine'
            });

        }
	}
});


// setInterval(function(){
            //     if(counter == 90){
            //         clearInterval();
            //     }else{
            //         counter += 1;
            //         number.innerHTML = '<img src="images/photoshop_logo.jpg">' + counter + "%" ;
            //         number1.innerHTML = '<img src="images/illust_logo.jpg">' + "<br>" + counter + "%" ;
            //     }
            // },40);
            
            // setInterval(function(){
            //     if(html_counter == 70){
            //         clearInterval();
            //     }else{
            //         html_counter += 1;
            //         number2.innerHTML = '<img src="images/html_css_logo.png">' + "<br>" + html_counter + "%" ;
            //     }
            // },47);
            
            // setInterval(function(){
            //     if(js_counter == 60){
            //         clearInterval();
            //     }else{
            //         js_counter += 1;
            //         number3.innerHTML = '<img src="images/js_logo.png">' + "<br>" + js_counter + "%" ;
            //     }
            // },55);