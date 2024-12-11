'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "eb5d07d6f6bfb613952268f76d52a78f",
".git/config": "5f409ee2b96de2a06744d7c14ed15383",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a3d99326b6b940da479d7641203cb60e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ba8d94ebfb6f0d25f0fb290fcc136091",
".git/logs/refs/heads/master": "ba8d94ebfb6f0d25f0fb290fcc136091",
".git/logs/refs/remotes/origin/master": "32df7796471c097a0ff989fe57a8008d",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0a/1286d9b580d35af1d35307b02fef88cadea24e": "49839927a43edcd11ca47af741efc4b3",
".git/objects/0a/adc3102c9a5d37d5a12af8196039906022ba4c": "841fc63ff5551df0a6e4306dc09840ff",
".git/objects/0c/579398984bfbf4ba1827b5390d3f540b966f12": "a635873f72d8466bc7c871eef24634ce",
".git/objects/0c/bca88584fa4b9cc07332a5a73123b58b5e4cae": "5aee247656317adac0bfd1d5a5b1a99f",
".git/objects/0d/9197b0da17da77e11e262b4bf09e3f347d1f7a": "5724dfefdb50071a423a3c0120a4b953",
".git/objects/10/1389a7e99c40bf2bfc263ccc77663cba65307f": "53055cf632a4318eae4df216783458df",
".git/objects/1b/092f4fa1b7fb9c48ff039329534aeebdeadd83": "d2077baae39d5d272c3b03c480a764c5",
".git/objects/1c/21685cc0fb245c8fbc497fc7b08ca8f2436538": "9b41a234d01458ec5da375934248481a",
".git/objects/1c/66428858d029247158c47c08d94df565fb7521": "f73cdfe4c404d9c423e6dc30bde744c3",
".git/objects/1d/fbbe214df7be713829b11bb715f100e694f1fd": "5dddb7289a8a1be6e6efc063c98fa31d",
".git/objects/22/0a0c54686c0c12d068e5d0da8c45aef60a484d": "abe17dc505711ff2ecfd042b274958ea",
".git/objects/2b/9ef40880d845fe265005a3b1f76fa16606f877": "1dcf24ae9b9349b9e1383910595d6a53",
".git/objects/30/019a0dae2c8803de80ddaee7c47934d22791dd": "fd449cb2690327f05196914e1084b501",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/c3eef01be10465f61701ec42731350e9e160b1": "03c32c1d5d6991953d07b4d3b241559d",
".git/objects/37/21ff64034cda4d0ee4f8c1f941155b602951c8": "b753a9daa68ff81d3db607bf86e65ad3",
".git/objects/39/a5bce00ffd0dfa8ffac427283ecd715d9676a0": "b3f754b3a0f907f38c1b9d5d3a2f3f7d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/ab535dbd2a900aff71abfe1b0e9f8a0af8d4c1": "29720e961bcd3f33b9aa57bde6fca1ad",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/0afb0a89405e1f91a7c8544b7efa211880dcfe": "05ffd75e6d2f5da18dfb3cd28fb33601",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/d43f21862ab6595b8230256a60020fff691f05": "c93aaec1a117ed79fbd2c8e15e9852a7",
".git/objects/45/81a80559030780dad2738f647673e27f3ebb9d": "d3697fcb7de45cd9a38006dd72a748cb",
".git/objects/61/31072a7e6d73fde1de701066e3d1f8a3565a63": "eb73c16b6f4570449faf085e62726749",
".git/objects/65/8798c87b0e4d71a698851a9f6c961acb7252fc": "3ac1a3b190fcb724119bf222236db25a",
".git/objects/6a/23548748dee7d40439864c9829ad374f5d4d3e": "18309be5fc788277e6c77d7eee9c5eea",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/3281c31ee690d797c81f6c31197f75129059ca": "5d3f013a197e8b75002c030aa3525c51",
".git/objects/6e/53371519cdfd88585440077cca0be3e047d97f": "871fd1d55098d91cc38811683613ef83",
".git/objects/72/4cdfee9802568c6ffe8b969a59bf0f37798365": "3b832737bec5346385b018edca215cdf",
".git/objects/73/74be757cea778e53407480baee0c1008009f8b": "4895cb7d11e7545ff1d686d50478951b",
".git/objects/76/fa26bfa10d06699744bddd9ba3e35f78c1e2de": "629430ab8635d64ec1d4420cb5737d4f",
".git/objects/77/04e820feedc8b64c4ded9bb46b5acb3b98cad8": "ee9509b6162bf09866e5f1b4fab5e0d6",
".git/objects/78/dbde9c80bc7c4f2580d2722ac0dfe7faf0b5a0": "858a35f281b796714d33d0e025300a02",
".git/objects/7b/6aa9ebf716f680f9c54f2ba5b3630b23bf7168": "379bd255068f0b1e771e86a7b1225e74",
".git/objects/7b/a4dd7ac496a4b63757e24be1cdd1e1780a07c4": "3f2c5e5e8eeba6ae34a85a0b4a867f7f",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/2c9a9eec25ddf127066f298e56e4ee6bda5b48": "6811fc6a2b96c09da8b1873e9ce86bc9",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/cce792a21faaa97d648e53173e2cac498a8f38": "43a85ffc25a1db51f31a133233199e5d",
".git/objects/9a/c722dd41e99082d5bedfb46eb4965f282c4289": "2a05a810695f472b189ce141a1c34555",
".git/objects/9b/8fdb34338be1dfed4e679836253d4042fed892": "b583e83ab27d87197131853892f7a0a4",
".git/objects/9c/495c17881cf6bf8ffa407a92421210f44696f4": "c4a1c3c52983a9feee3b08ffac3481ed",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/379d6e77fbfad10cad0ae3184363f6d1561036": "3080af10963ea38c151b75e2d931108c",
".git/objects/b5/ba51025560f00f59a5e9121943032566bfdf38": "0f0f4384c519a163d3733277ec2d0ed2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/c21435d3816c756ca3e80b2bfa65047c1344f3": "ea978e9d9f93eb55beea97d1318f1636",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/08c75abbddc07cc1e2e78afd8feb55a8bc0cc1": "843274461f119bb2789b3ffb1bd1ab65",
".git/objects/bc/a2562754a6620df36dc94865ddda9dfa26bc3e": "c78bab8f8ea33b4fcc18e0e472364dc9",
".git/objects/bc/c4d3c27588a0e1e73345f7b1ae009e1fc3e7b4": "c565b2a2c5a664803c3087b32e8943a3",
".git/objects/be/a6ae1cc5aff5ef3111238782d513fa5b2d28b5": "0016b4bbcebd3221424d9648dbf495e5",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c4/a361dd9bb307d041001c54904898d49c6b36cd": "0f4da49cf9fc0c528c48f7174d11c1e0",
".git/objects/c5/585bcb0bfd0c8c10697f1171a88bdd4b88e9f3": "9d9f029a3cacbb34bd146761d84d8129",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c7/79bea5cc6ef14e465837c0137cc800040d0e2e": "fc6c3abc6c155cd0008256b727308ceb",
".git/objects/cb/739ec9c9628700c77e5256ebba0002e7322ed6": "4e9fe2b91fcb650b0cbae01efacde36d",
".git/objects/ce/90d6d6a8814091eb0ad00781cf66554606b9b1": "d1ad1e8976e13405f3c46bdd2aac95b8",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/45c6063ba840058c6f9bf5ba390b24cf3faf16": "58dc9fd80ba2c9b1b30dc448b5f4e73a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/6dcb60705a636265b77bff5ef940eded7d62e9": "af5f05d8a38baed72d69c10135641457",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/f41a127ced5c8241b7d1129000eb4cd0e65647": "5a6efbd185ad5b30aa3bebed3545cdc8",
".git/objects/dc/508baf399cfbea32f51b9542fe69f91cfae884": "b96c46ed4195adad3b35a2d13f3b26e1",
".git/objects/e2/100ce009c25efb2752e1d80b30f24e2bb7aee5": "58c3b5836cdf079fe620ff7e60724d35",
".git/objects/ea/99f8990de53d7085fb9fc704ad2b2728a7c700": "c1065f1df5759d7094e0bf053a6a9351",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/57ce34d77c5c2ddf6276b2dc86115a59b48753": "e1df94c37eccfc12b93e18de6b4031c7",
".git/objects/ef/c585f66afe3d604fd315b7a68df4d346bd846f": "156ad9bb7c66f08413dc0b2f758c444d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/fcbced5c1f2a8b89e00f81d01eab4a4999e49f": "c79b5a0f92346ef0ae8a13359a3131fa",
".git/objects/fc/0382bc9cb11daf2109687c3fe956cb60ac1e16": "e8b4baa6ff63f505b653c395595a1c66",
".git/refs/heads/master": "214f739b02e5f80f3f95837b5459236d",
".git/refs/remotes/origin/master": "214f739b02e5f80f3f95837b5459236d",
"assets/AssetManifest.bin": "6c4bdd0eb27cc17a7de1a46da4d6e55d",
"assets/AssetManifest.bin.json": "575290e7fac1889e166700d1ed45222e",
"assets/AssetManifest.json": "6472163a554a9da64b8636e7c5b359b1",
"assets/assets/icons/moon.png": "7dcd7cd8150660b2138e92c19f6e72fc",
"assets/assets/icons/sun.png": "4c95b9d600c250138d9a261bc821e546",
"assets/assets/image/background.png": "da10e3e503138c5c140ff89b50a0aef2",
"assets/assets/image/icon_active_faq.svg": "0cd284ca111aff6598ccc05e9e4a4032",
"assets/assets/image/icon_active_features.svg": "453a053f147191d02bf3a7e8b492985c",
"assets/assets/image/icon_active_home.svg": "73641bcf8d176597a6de0e2b525a2e09",
"assets/assets/image/icon_active_pricing.svg": "20f42b7fee935bbae020a0dca47ba39c",
"assets/assets/image/icon_inactive_faq.svg": "e22a1e20dd892abe2cda72646b1a4007",
"assets/assets/image/icon_inactive_features.svg": "788ec79a6992628ce27b91f94e05b5f8",
"assets/assets/image/icon_inactive_home.svg": "3bb5352c45869331c0c45e7de8912060",
"assets/assets/image/icon_inactive_pricing.svg": "4632a82d22a477e731293f4c65ed8216",
"assets/assets/image/thumbnail.png": "736ae06e7f80baed1cb81d65a25d76f8",
"assets/assets/images/login_image.jpg": "c8df53fea0fb9afa9c5b2a57f1b51fa6",
"assets/assets/images/logo-bg.png": "6ff239303e058682caa2f5364d366fc8",
"assets/assets/images/logo.jpeg": "eb46615b5615ef3f3be62b8ab5aa860d",
"assets/assets/images/register_image.jpg": "0c948b7e37afbf54d907c86fb42e3a5e",
"assets/FontManifest.json": "773645784d48c5a1fb6747893f087114",
"assets/fonts/MaterialIcons-Regular.otf": "22294ad021d0544995c96217dc5de80a",
"assets/NOTICES": "90495f3d56206aba028bdfa2764293fd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "06b03fa4b190f1b38d9b5c517204bcba",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5120b79d24a4371da31e3cbf556d98e9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a42f0e08557451cd595f10e18306edda",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "c1d81249243daf8526e2b186b1845d69",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8f3135db9ec349c4c93445b8ad3078ca",
"/": "8f3135db9ec349c4c93445b8ad3078ca",
"main.dart.js": "047cbd1dea7073de8774be6e12338ad5",
"manifest.json": "13d6c688daf7b8a6d31ccb583ac8ef90",
"version.json": "dd682eacdfd11357ae3d8f084447b57d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
