function GreenBoxBindClick(){
    var doraTimeline = anime.timeline();
    $('.dora-boots-green-box').show();
    $('.dora-boots-green-box').click(function(){
        $('.dora-boots-green-box').css({cursor:'default'}).off();

        doraTimeline.add({
            targets:'.dora-boots-green-box',
           width:'510px',
            height:'284px',
            offset:0,
            duration:1000
        });

        $('.dora-boots-green-box').animate({
            backgroundColor:'#20a100'
        },{
            duration:400
        });

        doraTimeline.add({
            targets:'#dora-boots-green-box-image',
            width:'235px',
            height:'270px',
            left:'116px',
            top:'5px',
            offset:0,
            duration:1000
        });

        // shrink cow
        $('#Cow').hide();
        doraTimeline.add({
            targets:'.cow-lightblue-box',
            width:'250px',
            height:'140px',
            offset:0,
            duration:1000
        });

        $('.cow-lightblue-box').animate({
            backgroundColor:'#d3d3d3'
        },{
            duration:400
        });

        doraTimeline.add({
            targets:'#cow-lightblue-box-image',
            width:'125px',
            height:'125px',
            left:'62px',
            top:'7px',
            offset:0,
            duration:1000
        });

        // Slide Bowser left and Cow Down
        doraTimeline.add({
            targets:'.cow-lightblue-box',
            top:'145px',
            offset:50,
            duration:1000
        });

        doraTimeline.add({
            targets:'#Bowser',
            left:'568px',
            offset:50,
            duration:400
        });

        doraTimeline.add({
            targets:'.dora-boots-green-box',
            width:'510px',
            height:'284px',
            offset:0,
            duration:1000
        });

        $('.dora-boots-green-box').animate({
            backgroundColor:'#20a100'
        },{
            duration:400
        });

        doraTimeline.add({
            targets:'.dora-boots-green-box',
            left:'768px',
            top:'0px',
            offset:0,
            duration:1000,
            complete:function(){
                RedBlueOrangeBoxClick();
            }
        });

    });
}