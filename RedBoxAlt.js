function RedBoxAltBindClick(){
    var mapTimeline = anime.timeline();
    $('.container').append('<div class="map-red-box"><img id="map-red-box-image" src="images/map.png"/></div>');
    $('.map-red-box').click(function(){
        $('.map-red-box').css({cursor:'default'}).off();
        mapTimeline.add({
            targets:'.map-red-box',
           width:'510px',
            height:'284px',
            offset:0,
            duration:1000
        });

        mapTimeline.add({
            targets:'.map-red-box',
            left:'706px',
            offset:10
        });

        mapTimeline.add({
            targets:'.map-red-box',
            left:'510px',
            offset:40,
            duration:1000
        });

        $('.map-red-box').animate({
            backgroundColor:'#e82061'
        },{
            duration:200
        });

        mapTimeline.add({
            targets:'#map-red-box-image',
            width:'369px',
            height:'258px',
            left:'71px',
            top:'13px',
            offset:0,
            duration:1000
        });

        // lizard shrink
        mapTimeline.add({
            targets: '.lizard-yellow-box',
            width: '250px',
            height: '140px',
            duration:1000,
            offset:0,
        });

        $('.lizard-yellow-box').animate({
            backgroundColor:'#d3d3d3'
        },{
            duration:200
        });

        mapTimeline.add({
            targets: '.lizard-yellow-box img',
            height: '125px',
            width: '125px',
            top:'10px',
            left:'63px',
            duration:1000,
            offset:0,
        });

        mapTimeline.add({
            targets: '#Sonic',
            left:'311px',
            duration:1000,
            offset:0,
            complete:function(){
                LightBlueBoxBindClick();
            }
        });
    });
}