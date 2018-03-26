function runBootsRedBoxAnim(){
    var basicTimeline = anime.timeline();
    basicTimeline.add({
        targets:'.graybox-temp-boots',
        width:'510px',
        height:'284px',
        offset:0
    });

    $('.graybox-temp-boots').css({cursor:'default'}).animate({
        backgroundColor:'#e82061'
    },{
        duration:1000
    });

    basicTimeline.add({
        targets:'#Boots-temp',
        width: '279px',
        height: '287px',
        left:'100px',
        top:'1px',
        offset:0
    });

    basicTimeline.add({
        targets:'.graybox-temp-boots',
        left:'257px',
        offset:30
    });

    basicTimeline.add({
        targets:'#Chuckie',
        left:'35px',
        offset:0
    });

    basicTimeline.add({
        targets:'.angelica-red-box',
        width:'250px',
        height:'140px',
        offset:50
    });

    // Shrink Angelica
    $('#Angelica').hide();
    $('.red-box').hide();
    basicTimeline.add({
        targets:'.angelica-red-box',
        width:'250px',
        height:'140px',
        offset:50,
    });

    $('.angelica-red-box').animate({
        backgroundColor:'#d3d3d3'
    },{
        duration:600
    });

    basicTimeline.add({
        targets:'#angelica-red-box-image',
        width:'125px',
        height:'125px',
        top:'5px',
        left:'60px',
        complete:function(){
            console.log('binding yellow box');
          bindYellowBoxClick();
        },
        offset:50,
    });

}

function bindRedBoxHover() {
    $('.red-box').on('mouseenter', function () {

        var basicTimeline = anime.timeline();
        basicTimeline.add({
            targets: '.red-box',
            width: '253px',
            height: '140px',
            backgroundColor: '#d3d3d3',
            offset:0
        });

        basicTimeline.add({
            targets: '.redbox-image',
            height: '140px',
            width: '250px',
            left: '-3px',
            offset:0
        });

        basicTimeline.add({
            targets: '.redbox-image img',
            width: '125px',
            height: '125px',
            offset:0
        });

        // Angelica Grow
        basicTimeline.add({
            targets: '.angelica-red-box',
            width: '510px',
            height: '284px',
            offset:0,
        });

        $('.angelica-red-box').animate({
            backgroundColor:'#e82061'
        },{
            duration:500
        });

        basicTimeline.add({
            targets: '#angelica-red-box-image',
            height: '263px',
            width: '264px',
            top:'4px',
            left:'136px',
            offset:0,
        });

        // Create a new Boots and slide in and also slide in Chuckie
        $('.hidden-boots').show();
        basicTimeline.add({
            targets:'.hidden-boots',
            left:'565px',
            offset:200,
            duration:2000
        });
        basicTimeline.add({
            targets:'#Chuckie',
            left:'565px',
            offset:200,
            duration:1500,
            complete:function(){
                $('.container').append('<div class="graybox-temp-boots"><img id="Boots-temp" src="images/Boots.png"/></div>');
                $('.graybox-temp-boots').click(function(){
                    $('.graybox-temp-boots').off();
                    runBootsRedBoxAnim();
                })
            }
        });

    });
}



$(document).ready(function(){
    bindRedBoxHover();
});