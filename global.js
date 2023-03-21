document.body.style = `--scroll: 0px;`;
const hero = document.getElementById("hero");

const names = hero.appendChild(document.createElement("div"));
names.id = "names";

let rows = 0;
const generateNames = () => {
  if (rows < names.clientHeight / 76) {
    rows = names.clientHeight / 76;
    names.innerHTML = "";

    for (let i = 0; i < rows; i++) {
      const random = Math.floor(Math.random() * 30) - 15;

      const group = names.appendChild(document.createElement("div"));
      group.style = `top: ${i * 76}px; --random: ${random}%; ${
        i % 2 ? "right" : "left"
      }: calc(-25% + ${random}% + var(--scroll));`;
      group.classList.add(i % 2 ? "odd" : "even");

      const n1 = group.appendChild(document.createElement("span"));
      n1.innerText = "sigfrid wade filip mårtensson ";
      n1.classList.add("name");
      const n2 = group.appendChild(document.createElement("span"));
      n2.innerText = "sigfrid wade filip mårtensson";
      n2.classList.add("name");
    }
  }
};
generateNames();
window.onresize = generateNames;

document.body.onscroll = (e) => {
  document.body.style = `--scroll: ${
    document.documentElement.scrollTop * 0.25
  }px;`;
};

const cookies = document.cookie.split("; ").reduce((prev, current) => {
  const [name, ...value] = current.split("=");
  prev[name] = value.join("=");
  return prev;
}, {});

const setCookies = (c = cookies) => {
  let cookieString = "";
  for (const key in c) {
    if (Object.hasOwnProperty.call(c, key)) {
      const value = c[key];

      cookieString += `${key}=${value}; `;
    }
    console.log(window.location.pathname.startsWith("/filip.martensson"));
    cookieString += `path=${
      window.location.pathname.startsWith("/filip.martensson")
        ? "/filip.martensson"
        : "/"
    };`;
  }

  document.cookie = cookieString;
  return cookieString;
};

if (!cookies.allowCookies) {
  const cookieBanner = document.body.appendChild(document.createElement("div"));
  cookieBanner.id = "cookieBanner";

  const textBlock = cookieBanner.appendChild(document.createElement("div"));
  const title = textBlock.appendChild(document.createElement("h3"));
  title.innerText = "Cookie Notice!";

  const text = textBlock.appendChild(document.createElement("p"));
  text.innerHTML =
    "We and selected third parties use cookies or similar technologies for technical purposes and, with your consent, for other purposes. Denying consent may make related features unavailable.<br>Use the “Accept” button to consent. Use the “Reject” button to continue without accepting.";

  const buttons = cookieBanner.appendChild(document.createElement("div"));
  buttons.id = "cookieButtons";

  const reject = buttons.appendChild(document.createElement("button"));
  reject.id = "rejectCookies";
  reject.innerText = "Reject";

  const accept = buttons.appendChild(document.createElement("div"));
  const necessary = accept.appendChild(document.createElement("button"));
  necessary.id = "necessaryCookies";
  necessary.innerText = "Only Necessary";

  const all = accept.appendChild(document.createElement("button"));
  all.id = "allCookies";
  all.innerText = "Accept";

  reject.onclick = () => {
    cookieBanner.style = "";
    cookieBanner.classList.add("cookieBannerHidden");
  };
  necessary.onclick = () => {
    setCookies({ allowCookies: "necessary" });
    cookieBanner.style = "";
    cookieBanner.classList.add("cookieBannerHidden");
  };
  all.onclick = () => {
    setCookies({ allowCookies: "all" });
    cookieBanner.style = "";
    cookieBanner.classList.add("cookieBannerHidden");
  };
}
