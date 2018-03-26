function GreenAndYellowBoxBindClick(){
    var doraemonTimeline = anime.timeline();
    $('.container').append('<div class="doraemon-yellowbox"><img id="doraemon-yellowbox-image" src="images/Doraemon.png"/></div>');
    $('.doraemon-yellowbox').css({cursor:'pointer'});
    $('.doraemon-yellowbox').click(function(){
        $('.doraemon-yellowbox').css({cursor:'default'}).off();

        doraemonTimeline.add({
            targets:'.doraemon-yellowbox',
           width:'510px',
            height:'284px',
            offset:0,
            duration:1000
        });

        $('.doraemon-yellowbox').animate({
            backgroundColor:'#e8e73d'
        },{
            duration:400
        });

        doraemonTimeline.add({
            targets:'#doraemon-yellowbox-image',
            width:'235px',
            height:'270px',
            left:'148px',
            top:'5px',
            offset:0,
            duration:1000
        });

        // shrink dora
        $('#Dora').hide();
        doraemonTimeline.add({
            targets:'.dora-boots-green-box',
            width:'250px',
            height:'140px',
            offset:0,
            duration:1000
        });

        $('.dora-boots-green-box').animate({
            backgroundColor:'#d3d3d3'
        },{
            duration:400
        });

        doraemonTimeline.add({
            targets:'#dora-boots-green-box-image',
            width:'125px',
            height:'125px',
            left:'52px',
            top:'9px',
            offset:0,
            duration:1000
        });

        // slide dora down
        doraemonTimeline.add({
            targets:'.dora-boots-green-box',
            top:'144px',
            offset:900,
            duration:1000
        });

        doraemonTimeline.add({
            targets:'#Cat',
            left:'843px',
            offset:600,
            duration:2200,
            complete:function(){
                BlueAndOrangeBoxBindClick();
            }
        });

        doraemonTimeline.add({
            targets:'.doraemon-yellowbox',
            top:'0px',
            left:'1024px',
            offset:0,
            duration:1000
        });
    });
}