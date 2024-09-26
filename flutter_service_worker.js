'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0f8c6fb08d6e629d89cae76ae9883954",
".git/config": "ee1787c1b3a7fa5f9b91fb1dd6b5a3be",
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
".git/index": "e49a3791401820dec6f926263cfbdca5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ad1db531565c2076e6a60c8504048acf",
".git/logs/refs/heads/master": "ffd22b4475af1341bbd0528c34ab3483",
".git/logs/refs/remotes/origin/master": "b4386bcb1f5d93d41d884d8a383db738",
".git/objects/01/24c4c47fb74b7c4798bd31d0df88899c8d3fc2": "444a98c0a5d0d1c7da48af1f9e800af5",
".git/objects/05/75f179a8eaf5dc74a8bb07030e197a029fe3fb": "cfaa9f7b564c23348143df6157abe62d",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0f/797a5439cb0ebea73978c4c52b80d0005677fd": "57d18c6edd70ff1cde1173025c2a42e2",
".git/objects/1b/912ee1c67a2f911a67f9512d1ca918341507a1": "96d4565466afe86f78c0fe79085087c5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/0a0c54686c0c12d068e5d0da8c45aef60a484d": "abe17dc505711ff2ecfd042b274958ea",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/376366c2ebfa5d3f2c028a3e5d53c3432a4a21": "d83e52ad8a12b42de711f1edcbdde9ea",
".git/objects/26/b3829dd130f714a76fabe5749613dc07405fd9": "1495b5baf932ae11cef02dbed87fe45b",
".git/objects/2e/f06f06bbb5731dbd786b45d08879f215a4420d": "5612644f601881c17b2aca912a91f438",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/43/b2b0e119ccfbfdd5cc3d4827187993f5cb47b5": "18944bc800a6844c092569094e2cfb19",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5a/6fe849fa45ff6bb71edd453be2db2d11a61947": "2c78c6e8f4044d2d37805e3998f1824e",
".git/objects/5d/fd188d494bb02532c2cc99eadcd36deeb59b47": "010aeab9c60d4191f6c3714118dadb3d",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/73/74be757cea778e53407480baee0c1008009f8b": "4895cb7d11e7545ff1d686d50478951b",
".git/objects/77/04e820feedc8b64c4ded9bb46b5acb3b98cad8": "ee9509b6162bf09866e5f1b4fab5e0d6",
".git/objects/7b/a4dd7ac496a4b63757e24be1cdd1e1780a07c4": "3f2c5e5e8eeba6ae34a85a0b4a867f7f",
".git/objects/7f/a53315a05f5405f9d80f18b29026e0b610f3a1": "38472d708fff346687c84e63a709a750",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/dbe46e5eb8192e7e8a1475b553cfc4bf0a6f39": "2ff378132dcecd5eb79723c52ce8fb34",
".git/objects/91/4d5a2f9a233c3ace99d4f2318a400930ec8a9a": "60afb7eb1e7ada60d338624bc2428f04",
".git/objects/92/8928a1d3ff06d8601c459f98f910c439450aef": "6d9f45ff1767afeca9a7fb774db56498",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/83187643aae1f5de5deef217a9f131d9822fa4": "7fc190b10f58ec6aee71d61d34091c09",
".git/objects/99/cce792a21faaa97d648e53173e2cac498a8f38": "43a85ffc25a1db51f31a133233199e5d",
".git/objects/9b/8fdb34338be1dfed4e679836253d4042fed892": "b583e83ab27d87197131853892f7a0a4",
".git/objects/a0/2f7d314a114fecc5ce0b2f09a873946d4f89cc": "c3ea7b5f1745717ce192898f7eafed75",
".git/objects/a4/61b97c7457c13c5fdebd51ae4b54c96ce27d63": "44a683f3a683c0343a5bc982e7550001",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/2424fcbb5eb86871f14a91c4aef2f3e7a28f7c": "91c79c1ee36a82c022da9e3797990fad",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/22b9dae0cfe46471f628900ba171a592c919fc": "8e5856d191b4720c0db79a509508abe3",
".git/objects/bc/98ce3b6c9301e9339aa241355c5d6cfd7bcad7": "b125cb242044ef31a8dc3843fa52db69",
".git/objects/be/a6ae1cc5aff5ef3111238782d513fa5b2d28b5": "0016b4bbcebd3221424d9648dbf495e5",
".git/objects/cb/40eda990e31830ac502dc0cf4c98f9a9fdcee4": "8a2f3449566f8498f18df70b5b3f156a",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/581de13d5537f990b22b454b0ab4362c97c9fd": "f0f7a54183542db6246e8039db2785ae",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/b96b3e08fe252610bcbe2eaa91377dad1aab29": "154a0a1e160e119ae65786e31ab6aa7a",
".git/objects/e2/236b3d8c3c97297df6938f0e7dda98eba32a3d": "ae40c79b8b4431937f0d74e098c0185f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/c585f66afe3d604fd315b7a68df4d346bd846f": "156ad9bb7c66f08413dc0b2f758c444d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/342f17344273067e90d322eddee484530c02bb": "c7b81b61b17bb16daf43ac45ad843f02",
".git/refs/heads/master": "fd377a834c125d95d933f7bdff9f4f69",
".git/refs/remotes/origin/master": "fd377a834c125d95d933f7bdff9f4f69",
"assets/AssetManifest.bin": "af76a106e93eb274103c63e315aa1020",
"assets/AssetManifest.bin.json": "e2cf3e610f42c709d66d9b68ddd39102",
"assets/AssetManifest.json": "258d464ae05bf7c68bfeba62e6480bb5",
"assets/assets/images/login_image.jpg": "c8df53fea0fb9afa9c5b2a57f1b51fa6",
"assets/assets/images/logo-bg.png": "6ff239303e058682caa2f5364d366fc8",
"assets/assets/images/logo.jpeg": "eb46615b5615ef3f3be62b8ab5aa860d",
"assets/assets/images/register_image.jpg": "0c948b7e37afbf54d907c86fb42e3a5e",
"assets/FontManifest.json": "ac3f70900a17dc2eb8830a3e27c653c3",
"assets/fonts/MaterialIcons-Regular.otf": "a4cb3b3931c89bd7217ac16ea02729ad",
"assets/NOTICES": "19967d54aaf833564434dde759cf489c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2d55c059ab802867c8949cae7379fb1e",
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
"flutter_bootstrap.js": "e6d320769825fcd97acc520df792f9ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8f3135db9ec349c4c93445b8ad3078ca",
"/": "8f3135db9ec349c4c93445b8ad3078ca",
"main.dart.js": "a0ee388e83878208dd4b5cfb9bc6086f",
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
