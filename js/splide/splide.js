document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide',{
        type: 'loop',
        perPage:1,
        perMove:1,
    //     height     : '30rem',
	// cover      : true,
        // focus: 'center',
        // height   : '29rem',
	    // autoWidth: true,
        rewind : true,
        autoplay:true,
        interval:4000,
        // focus    : 'center',
        gap: 0,
        easing: 'ease',
        arrows: false,
        pagination: true,
        pauseOnHover: false,
        keyboard:true,
        // direction  : 'ttb',
        // heightRatio: 0.6,
        cover: false,
        breakpoints: {
            768: {
                perPage: 1,
            },
            528:{
                perPage:1
            }
        }
    } ).mount();
} );