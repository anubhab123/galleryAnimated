function LightBlueBoxBindClick(){
    var cowTimeline = anime.timeline();
    $('.container').append('<div class="cow-lightblue-box"><img id="cow-lightblue-box-image" src="images/Cow.png"/></div>');
    $('.cow-lightblue-box').click(function(){
        $('.cow-lightblue-box').css({cursor:'default'}).off();

        cowTimeline.add({
            targets:'.cow-lightblue-box',
           width:'510px',
            height:'284px',
            offset:0,
            duration:1000
        });

        $('.cow-lightblue-box').animate({
            backgroundColor:'#12c9e8'
        },{
            duration:400
        });

        cowTimeline.add({
            targets:'#cow-lightblue-box-image',
            width:'310px',
            height:'270px',
            left:'101px',
            top:'5px',
            offset:0,
            duration:1000
        });

        $('.hidden-boots').hide();
        // shrink boots
        cowTimeline.add({
            targets:'.graybox-temp-boots',
            width:'250px',
            height:'140px',
            offset:0,
            duration:1000
        });

        $('.graybox-temp-boots').animate({
            backgroundColor:'#d3d3d3'
        },{
            duration:400
        });

        cowTimeline.add({
            targets:'#Boots-temp',
            width:'125px',
            height:'125px',
            left:'51px',
            offset:0,
            duration:1000
        });

        // Slide Blue to th left and boots to the bottom and blue box into place
        cowTimeline.add({
            targets:'#Blue',
            left:'302px',
            offset:50,
            duration:1000
        });

        cowTimeline.add({
            targets:'.graybox-temp-boots',
            top:'144px',
            offset:50,
            duration:400
        });

        cowTimeline.add({
            targets:'#Boots-temp',
            top:'7px',
            offset:50,
            duration:400
        });

        cowTimeline.add({
            targets:'.cow-lightblue-box',
            left:'512px',
            top:'0px',
            offset:50,
            duration:1000,
            complete:function(){
                GreenBoxBindClick();
            }
        });

    });
}