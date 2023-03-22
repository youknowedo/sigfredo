const notFirstLoad = sessionStorage.getItem("notFirstLoad");

if (notFirstLoad) {
    document.getElementById("logoAnim").style = "display:none;";
} else {
    gsap.fromTo(
        "#names>div.even",
        {
            left: "calc(75% + var(--random) + var(--scroll))",
        },
        {
            left: `calc(-10% + var(--random) + var(--scroll))`,
            duration: "random(4,6)",
        }
    );
    gsap.fromTo(
        "#names>div.odd",
        {
            right: "calc(75% + var(--random) + var(--scroll))",
        },
        {
            right: `calc(-25% + var(--random) + var(--scroll))`,
            duration: "random(4,6)",
        }
    );

    gsap.from("#logoAnim>span:not(#cursor)", {
        display: "none",
        duration: 2,
        stagger: 0.15,
    });
    gsap.from("#logoAnim>#cursor", {
        opacity: 0,
        repeat: 3,
        yoyo: true,
        duration: 0.5,
    });
    gsap.to("#logoAnim", {
        rotation: -7.77,
        duration: 1,
        delay: 2.5,
    });

    gsap.from("nav", {
        opacity: 0,
        delay: 3,
        ease: "inOut",
    });

    gsap.from("#hero", {
        display: "hidden",
        flex: 0,
        height: "0px",
        padding: 0,
        duration: 2,
        delay: 3,
        ease: "inOut",
    });
    gsap.to("#logoAnim", {
        display: "none",
        duration: 2,
        delay: 3,
    });

    gsap.from("#hero span:not(.name), #hero p", {
        opacity: 0,
        marginBottom: "-25px",
        marginTop: "25px",
        stagger: 0.5,
        delay: 4,
        ease: "inOut",
    });

    gsap.from("#header", {
        height: "100vh",
        borderRadius: 0,
        duration: 2,
        delay: 4,
    });

    gsap.from("body", {
        overflow: "hidden",
        delay: 5,
    });

    gsap.from("#cookieBanner", {
        bottom: "-100%",
        duration: 3,
        delay: 4,
    });

    sessionStorage.setItem("notFirstLoad", true);
}
