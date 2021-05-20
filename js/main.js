$(document).ready(function () {
  // preload start
  let width = 100;
  let perfData = window.performance.timing; // The PerformanceTiming interface represents timing-related performance information for the given page.
  let EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart);
  let time = parseInt((EstimatedTime / 1000) % 60) * 100;
  let delaySeconds = time / 1000 + 1;
  function preloadAnimate(time) {
    console.log(delaySeconds);
    // Loadbar Animation
    $('.loadbar').animate(
      {
        width: width + '%',
      },
      time
    );

    // Loadbar Glow Animation
    $('.glow').animate(
      {
        width: width + '%',
      },
      time
    );
  }
  setTimeout(function () {
    $('.preloader-wrap').fadeOut(400);
    $('.onepage-pagination').css('display', 'block');
  }, time);
  // preload end
  // section queen animation start
 $('#queen').on('load', () => {
    const svgDoc = document.querySelector('#queen').contentDocument;
    const layout = svgDoc.querySelectorAll('svg > g');
    const fontFlashwhite = svgDoc.querySelector('#font_x5F_flashwhite');
    const font = svgDoc.querySelector('#font');
    const fontBg = svgDoc.querySelector('#font_x5F_back');
    const rightarm = svgDoc.querySelector('#rightarm');
    const leftarm = svgDoc.querySelector('#leftarm');
    const arms = [rightarm, leftarm];
    const girl = svgDoc.querySelectorAll('#girl,#mouth');
    const line = svgDoc.querySelectorAll(
      '#font_x5F_rightline,#font_x5F_leftline'
    );
    const leftStarLine = svgDoc.querySelectorAll(
      '#font_x5F_leftstar_x5F_tail,#font_x5F_leftstar'
    );
    const leftStar = svgDoc.querySelector('#font_x5F_leftstar');
    const rightStarLine = svgDoc.querySelectorAll(
      '#font_x5F_rightstar_x5F_tail,#font_x5F_rightstar'
    );
    const rightStar = svgDoc.querySelector('#font_x5F_rightstar');
    const halfUpRightStar = svgDoc.querySelectorAll(
      '#halfup_x5F_rightstar_x5F_tail,#halfup_x5F_rightstar'
    );
    const halfUpLeftStar = svgDoc.querySelectorAll(
      '#halfup_x5F_leftstar_x5F_tail,#halfup_x5F_leftstar'
    );
    const halfdownLeftStar = svgDoc.querySelectorAll(
      '#halfdown_x5F_leftstar_x5F_tail,#halfdown_x5F_leftstar'
    );
    const halfdownRightStar = svgDoc.querySelectorAll(
      '#halfdown_x5F_rightstar_x5F_tail,#halfdown_x5F_rightstar'
    );
    const halfdownMidStar = svgDoc.querySelectorAll(
      '#halfdown_x5F_midstar_x5F_tail,#halfdown_x5F_midstar'
    );
    // const bg_overlay = querySelector('.bg_overlay')
    console.log(layout);
    gsap.set(layout, {
      opacity: 0,
    });
    const masterTl = gsap.timeline();
    const firstFontTl = gsap.timeline();
    // label
    firstFontTl.addLabel('bg', delaySeconds + 3);
    firstFontTl.addLabel('girl', delaySeconds + 7);
    firstFontTl.addLabel('stars', delaySeconds + 8);
    // animate font
    firstFontTl
      .to(fontFlashwhite, {
        delay: delaySeconds,
        duration: 1.5,
        opacity: 1,
      })
      .to(fontFlashwhite, {
        duration: 1.5,
        opacity: 0,
      })
      .to(
        font,
        {
          duration: 1.5,
          opacity: 1,
        },
        '<'
      )
      .to(fontBg, {
        duration: 0.3,
        opacity: 1,
      });
    // animate bg
    firstFontTl
      .to(
        '.bg_overlay',
        {
          duration: 1,
          width: '100%',
          height: '100%',
          borderRadius: '0%',
        },
        'bg'
      )
      .to('.bg_overlay', {
        opacity: 0,
        duration: 3,
        zIndex: 0,
      });
    // animate girl
    firstFontTl
      .fromTo(
        girl,
        {
          y: 375,
        },
        {
          y: 0,
          duration: 1,
        },
        'girl'
      )
      .to(
        girl,
        {
          delay: 0.6,
          opacity: 1,
          duration: 0.4,
        },
        '<'
      );
    // animate arms
    firstFontTl.fromTo(
      arms,
      {
        y: -345,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
      'girl'
    );
    // animate font line
    firstFontTl.to(
      line,
      {
        opacity: 1,
        duration: 1,
      },
      'girl'
    );
    // animate star line
    firstFontTl
      .to(
        leftStar,
        {
          duration: 4,
          rotation: '+=360',
          repeat: -1,
          transformOrigin: '50% 50%',
          ease: Linear.easeNone,
        },
        'girl'
      )
      .fromTo(
        leftStarLine,
        {
          x: 80,
          y: -30,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
        },
        'girl'
      );
    firstFontTl
      .to(
        rightStar,
        {
          duration: 4,
          rotation: '+=360',
          repeat: -1,
          transformOrigin: '50% 50%',
          ease: Linear.easeNone,
        },
        'girl'
      )
      .fromTo(
        rightStarLine,
        {
          x: -80,
          y: 30,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
        },
        'girl'
      );
    firstFontTl.fromTo(
      halfUpRightStar,
      {
        x: -150,
        y: 150,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1,
      },
      'stars'
    );
    firstFontTl.fromTo(
      halfUpLeftStar,
      {
        x: 150,
        y: 150,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1,
      },
      'stars'
    );
    firstFontTl.fromTo(
      halfdownLeftStar,
      {
        x: 118,
        y: -150,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1,
      },
      'stars'
    );
    firstFontTl.fromTo(
      halfdownRightStar,
      {
        x: -118,
        y: -150,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1,
      },
      'stars'
    );
    firstFontTl.fromTo(
      halfdownMidStar,
      {
        y: -150,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
      'stars'
    );
  });
  // section queen animation end
  let section2Anim = lottie.loadAnimation({
    container: document.querySelector('.second_wrap'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './svgdata/data.json', // the path to the animation json
  });
  function moveCircle(e) {
    gsap.to('.mouse', {
      duration: 0.1,
      css: {
        left: e.pageX,
        top: e.pageY,
      },
    });
  }
  preloadAnimate(time);
  $('.main').onepage_scroll();
  $('.second_wrap').on('mouseenter', section2Anim.play());
  $('.second_wrap').on('mousemove', moveCircle);
});
