chrome.webRequest.onBeforeRequest.addListener(
	function (request) {
		var url = request.url.replace("http://", "https://");
		url = url.replace("ajax.googleapis.com", "ajax.loli.net");
		url = url.replace("fonts.googleapis.com", "fonts.loli.net");
		url = url.replace("themes.googleusercontent.com", "themes.loli.net");
		url = url.replace("fonts.gstatic.com", "gstatic.loli.net");
		url = url.replace(
			"www.google.com/recaptcha/",
			"www.recaptcha.net/recaptcha/"
		);
		url = url.replace("secure.gravatar.com", "gravatar.loli.net");

		if (url.indexOf("code.jquery.com/jquery-") != -1) {
			url = "https://lib.baomitu.com/jquery/latest/jquery.min.js";
		}
		url = url.replace(
			"pixijs.download/dev/pixi.min.js",
			"lib.baomitu.com/pixi.js/latest/pixi.min.js"
		);
		url = url.replace(
			"cdnjs.cloudflare.com/ajax/libs/gsap/",
			"cdn.staticfile.org/gsap/"
		);

		// cdnjs全部转到360 cdn
		// 360 前端静态资源库是由奇舞团支持并维护的开源项目免费 CDN 服务，支持 HTTPS 和 HTTP/2，囊括上千个前端资源库和 Google 字体库。
		url = url.replace("cdnjs.cloudflare.com/ajax/libs", "lib.baomitu.com");
		url = url.replace("libs.cdnjs.net", "lib.baomitu.com");

		return { redirectUrl: url };
	},
	{
		urls: [
			"*://ajax.googleapis.com/*",
			"*://fonts.googleapis.com/*",
			"*://themes.googleusercontent.com/*",
			"*://fonts.gstatic.com/*",
			"*://www.google.com/recaptcha/*",
			"*://secure.gravatar.com/*",
			"*://code.jquery.com/*",
			"*://cdnjs.cloudflare.com/*",
			"*://pixijs.download/*",
			"*://stackoverflow.com/*",
			"*://libs.cdnjs.net/*",
		],
	},
	["blocking"]
);
