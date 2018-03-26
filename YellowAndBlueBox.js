function bindYellowBoxClick() {
    var basicTimeline = anime.timeline();
    $('.container').append('<div class="lizard-yellow-box"><img src="images/lizard.png"</div>');
    $('.lizard-yellow-box').click(function(){
        $('#Lizard').hide();
        $('.lizard-yellow-box').css({
            cursor:'default'
        });
        $('.lizard-yellow-box').off();

        // lizard grow
        basicTimeline.add({
            targets: '.lizard-yellow-box',
            width: '510px',
            height: '284px',
            duration:1000,
            offset:0,
        });

        $('.lizard-yellow-box').animate({
            backgroundColor:'#e8d126'
        },{
            duration:200
        });

        basicTimeline.add({
            targets: '.lizard-yellow-box img',
            height: '263px',
            width: '264px',
            top:'4px',
            left:'136px',
            duration:1000,
            offset:0,
        });

        // Shrink blue box
        basicTimeline.add({
            targets: '.blue-box',
            width: '253px',
            height: '140px',
            backgroundColor: '#d3d3d3',
            duration:1000,
            offset:0
        });

        basicTimeline.add({
            targets: '.bluebox-image',
            height: '140px',
            width: '250px',
            left: '-3px',
            duration:1000,
            offset:0
        });

        basicTimeline.add({
            targets: '.bluebox-image img',
            width: '125px',
            height: '125px',
            duration:1000,
            offset:0
        });

        basicTimeline.add({
            targets: '.blue-box',
            left:'1023px',
            top:'288px',
            duration:1000,
            offset:50
        });

        basicTimeline.add({
            targets: ['#map'],
            left:'799px',
            offset:20,
            duration:1000
        });

        basicTimeline.add({
            targets: ['#Sonic'],
            left:'824px',
            duration:1000,
            offset:20
        });

        basicTimeline.add({
            targets: ['#Spongebob'],
            left:'1083px',
            duration:1000,
            offset:20,
            complete:function(){
                RedBoxAltBindClick();
            }
        });
    })
}
