function growOrangeBox(){
    var orangeTimeline = anime.timeline();
    $('#pepper').hide();
    $('.container').append('<div class="pepper-orangebox"><img id="pepper-orangebox-image" src="images/pepper.png"/></div>');

    orangeTimeline.add({
        targets:'.pepper-orangebox',
        width:'510px',
        height:'284px',
        offset:1000,
        duration:1000,
        begin:function(){
            $('.pepper-orangebox').animate({
                backgroundColor:'#e89219'
            });
        },
    });

    orangeTimeline.add({
        targets:'#pepper-orangebox-image',
        width: '292px',
        height: '270px',
        left: '120px',
        offset:1000,
        duration:1000
    });

    orangeTimeline.add({
        targets:'#Squirrel',
        left:'838px',
        offset:1200,
        duration:1000,
        complete:function(){
            GreenAndYellowBoxBindClick();
        }
    });

    orangeTimeline.add({
        targets:'.pepper-orangebox',
        left:'1024px',
        offset:800,
        duration:1000
    });
}

function RedBlueOrangeBoxClick(){
    var marioTimeline = anime.timeline();
    $('.container').append('<div class="mario-kart-bluebox-redbox"><img id="mario-kart-bluebox-redbox-image" src="images/mariokart.png"/></div>');
    $('.mario-kart-bluebox-redbox').click(function(){
        $('.mario-kart-bluebox-redbox').css({cursor:'default'}).off();

        marioTimeline.add({
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

        marioTimeline.add({
            targets:'#mario-kart-bluebox-redbox-image',
            width:'235px',
            height:'270px',
            left:'116px',
            offset:0,
            duration:1000
        });

        marioTimeline.add({
            targets:'#Spongebob',
            left:'572px',
            offset:800,
            duration:2000
        });

        $('#map').hide();

        marioTimeline.add({
            targets:'.map-red-box',
            width:'250px',
            height:'140px',
            offset:0,
            duration:1200
        });

        $('.map-red-box').animate({
            backgroundColor:'#d3d3d3'
        },{
            duration:600
        });

        marioTimeline.add({
            targets:'#map-red-box-image',
            width: '180px',
            height: '120px',
            left: '36px',
            offset:0,
            duration:1200
        });

        marioTimeline.add({
            targets:'.mario-kart-bluebox-redbox',
            left:'769px',
            offset:400,
            duration:1000,
        });

        // Shrink blue box
        $('.blue-box').hide();
        marioTimeline.add({
            targets:'.mario-kart-bluebox-redbox',
            width:'250px',
            height:'140px',
            offset:1200,
            duration:1000,
            begin:function(){
                $('.mario-kart-bluebox-redbox').animate({
                    backgroundColor:'#d3d3d3'
                });

                growOrangeBox(marioTimeline);
            }
        });

        marioTimeline.add({
            targets:'#mario-kart-bluebox-redbox-image',
            width:'125px',
            height:'125px',
            left:'53px',
            offset:1200,
            duration:1000,
        });


    });
}