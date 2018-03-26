function BlueAndOrangeBoxBindClick(){
    var pepperTimeline = anime.timeline();
    $('.pepper-orangebox').css({cursor:'pointer'});
    console.log('cu');
    $('.pepper-orangebox').click(function(){
        $('.pepper-orangebox').css({cursor:'default'}).off();

        pepperTimeline.add({
            targets:'.pepper-orangebox',
           width:'250px',
            height:'140px',
            offset:0,
            duration:1000
        });

        $('.pepper-orangebox').animate({
            backgroundColor:'#d3d3d3'
        },{
            duration:400
        });

        pepperTimeline.add({
            targets:'#pepper-orangebox-image',
            width:'125px',
            height:'125px',
            left:'60px',
            offset:0,
            duration:1000
        });

        // grow mario
        pepperTimeline.add({
            targets:'.mario-kart-bluebox-redbox',
            width:'510px',
            height:'284px',
            offset:0,
            duration:1000
        });

        $('.mario-kart-bluebox-redbox').animate({
            backgroundColor:'#2f2ce8'
        },{
            duration:400
        });

        pepperTimeline.add({
            targets:'#mario-kart-bluebox-redbox-image',
            width:'279px',
            height:'287px',
            left:'87px',
            top:'-5px',
            offset:0,
            duration:1000
        });

        // slide Squirrel in and create temporary pepper and slide in

        $('#pepper').show();
        $('#pepper').css({
           left:'769px',
            top:'288px'
        });

        pepperTimeline.add({
            targets:'#pepper',
            left:'1344px',
            offset:700,
            duration:1000
        });

        pepperTimeline.add({
            targets:'#Squirrel',
            top:'439px',
            left:'1354px',
            offset:700,
            duration:1000
        });

    });
}