$(document).ready(function(){
    const tl=new TimelineMax({delay: 0.5});

    $("#switch").click(function(){
        if ($(this).hasClass("player")){
            $(this).removeClass("player").addClass("agent");
            $("#toggle #text").removeClass("player").addClass("agent");
            // to move the agent mask down
            tl.fromTo(
                $("#switch #mask img#agent"), 2,
                {top: "-50%"},
                {top: "50%"}
            )
            // to change the border mask
            .fromTo(
                $(this), 1,
                {backgroundImage: "url(/img/border-mask-player.svg)"},
                {backgroundImage: "url(/img/border-mask-agent.svg)"},
                "=-2"
            )
            // to change the position of the mask
            .fromTo(
                $(this), 2,
                {left: "266px"},
                {left: "27px"},
                "=-2"
            )
            // to change the shadow of the mask
            .fromTo(
                $(this), 2,
                {boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2), 4px 8px 32px rgba(3, 152, 143, 0.2), 8px 16px 64px rgba(1, 80, 71, 0.4)"},
                {boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2), 4px 8px 32px rgba(168, 9, 86, 0.2), 8px 16px 64px rgba(130, 15, 70, 0.4)"},
                "=-2"
            )

        }else if($(this).hasClass("agent")){
            $(this).removeClass("agent").addClass("player");
            $("#toggle #text").removeClass("agent").addClass("player");
            // to move agent mask up
            tl.fromTo(
                $("#switch #mask img#agent"), 2,
                {top: "50%"},
                {top: "-50%"}
            )
            // to change border mask
            .fromTo(
                $(this), 1,
                {backgroundImage: "url(/img/border-mask-agent.svg)"},
                {backgroundImage: "url(/img/border-mask-player.svg)"},
                "=-2"
            )
            // to change position of the mask
            .fromTo(
                $(this), 2,
                {left: "27px"},
                {left: "266px"},
                "=-2"
            )
            // to change the shadow of the mask
            .fromTo(
                $(this), 2,
                {boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2), 4px 8px 32px rgba(168, 9, 86, 0.2), 8px 16px 64px rgba(130, 15, 70, 0.4)"},
                {boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2), 4px 8px 32px rgba(3, 152, 143, 0.2), 8px 16px 64px rgba(1, 80, 71, 0.4)"},
                "=-2"
            )
        };
    });



});