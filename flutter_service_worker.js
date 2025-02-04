'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "fdaa4d324d63e3492ff45a477f917273",
".git/config": "ed6aa3347738733bc95510c521a0f5b1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ac92cbce86b79eea1627a9b80dd005c1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "087170052d53232513d1e28b09bb6213",
".git/logs/refs/heads/main": "18ec1a9ab727ddcd292de1f7aa8a213c",
".git/logs/refs/remotes/origin/main": "d2f729599cab27fa0d947df61e1fcb8f",
".git/objects/01/af5619b11485d445cb4cef3bf99b6bb190c88b": "4f6e18f68726a9dd3d18011e41791e3b",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/08/7ba07539061ba2f29c510dfa2ac66940023751": "83f2946cd58b65c42ee191b6b8613f6b",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/0e/236c615791a1204000d51b11d89bc3c95038fc": "735c9e21977353d49e5b9e96ae8957b1",
".git/objects/10/68cc4c18a8f8615f46ee15b0788fc3b1e3babf": "43365a138091dd09a2fcdfe39771ed1b",
".git/objects/18/67b7e2e10acf6b06b7df9e23665e3f1550cd81": "cb7d1bd5e3aea0fb61141c8c298d3d90",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/bd74408ebe2c905c973860fee2cceb195fcd4d": "7543093c4c6d1f58c7da78877c8f92dd",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/a21d352aaa09e0bdc60a2e6689c676c0642b5f": "2f930517dcb734130ea0bd54bec4b100",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2b/7f9e66bbbf204b06f335f047ac4db017c4214c": "b3ea6c82aa4bb15b3c5342c3d702e28e",
".git/objects/35/7b639d92f298db23040fd3f919abab1fbf9fd8": "f3324a1ca98be10b75281b7c7dad23ae",
".git/objects/38/2ae7b27cd81c4520c2ccd6de6e37a9e10fdf73": "29d86abb04df9ddfceda4da370bacbfe",
".git/objects/39/72f5e6796d98c5c47b7a4f595f602c397fb84b": "6dfa7f6a970b2ff52aef764fa76d5023",
".git/objects/3e/461db80f94a1696627471a5561315ee8e9417a": "9f0a6f13f20165f8a65548918210dfd1",
".git/objects/42/89c6034922eed7fb04fc47e5d913f6d00f821a": "dafa36ff44e68ac35c28643cb77c5437",
".git/objects/4c/a44374ea605eebd1217d3aecfe301ff3686a95": "6eff5f0b3408bf66d4d2000f76b3cd4e",
".git/objects/4e/bbac2e72cca5272db7f9f0aa914bc17d358ad0": "7f4c979d06112dae03c2586d59dd149e",
".git/objects/55/b5aa4a0628e12e079f50b7ce95d8b015bb7fc6": "fff0454ef44e91c1425357cc54a2be97",
".git/objects/57/0011af588e9ee7d97badddbabef49fbe61e29f": "bca3b7d68e3dbbac5d7126411c09732d",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5b/254a3ca9c221a73845874de5e81a678bbe3fff": "f4e1c7ae23eef3937fbf0b425a7d28e7",
".git/objects/5b/46fd151a4910ed553a27645acb05b8f5fea9d4": "49ef05c0258fe0ede38c4506c475c7c6",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/62/9f0119ab0aad37893e5312fa921a72d3c98cbc": "8c82137e8f8b46892b4fd2ea4fd75d33",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/91e03e0ac0833593e6e68a068a07106bdb1d2b": "1c1daec9f4b39039e4cd310b15d30497",
".git/objects/6a/89ab59133b22b1858c87ab7566f2c5770747c1": "ea67ae75aa50f7c9cb08fbfb5807b989",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/7b/a0615b145caf37c621b5f0b14bc1cd14479538": "00ec03a569f218213b0c1e9612ce1833",
".git/objects/7c/cfe657e2636eddc4b2854d3f8c3c0828507a70": "76044676e74dfb50e114a45d37f15f21",
".git/objects/7f/cb146f7a4d3eb613e23345353701d7f010b132": "1791f1835b43b32100c49d09db6dbb03",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8e/4eaf64c97081efab3de3785a6d8deee16833ed": "087d64f8306af84bb9f49f0393e188d6",
".git/objects/93/3d76fa7e6b3daa88c053deaf1304edca82d8cf": "47a4156e2d0e30a283cb0650cf053bcc",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9d/523abaf983b9a79f94a8a13f1ed91e5c3f725f": "5b4d3902e440b5f2928ed753d63b1071",
".git/objects/9e/b0525f7cf27a4ebf31bcb512c426c3bf8501bf": "4cfc619cbda2f8b6d63dbda33fe41f78",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/d76cf9ed22af62915f08b670b15af30b792bc1": "74ff912205a4e9689cf97e0533bde7e2",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b5/b4452cbcbeb45369e5c635cf06a0ae7b4b61df": "10ffd15798aec49bc5547a3aa725d5d8",
".git/objects/b5/efad75c3c840a5731f74a24a5df0a6a9327c81": "0bb61d452debf9cd1ad22234b3c167ad",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/cf/b9f6462663ee6a37528ef6e1aabb828a106ae9": "63a1a45f87f355c26d13a127292d1a7e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/5901b42a3b42195b0cc4e8a02dc549ca97e7c7": "dba23525c36d37a96ff07e7f9b09bb86",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/a6283010d3339d45d51c15c1f881e76a3aef07": "4dcd2c093c4e8f5cc145f106d3db4281",
".git/objects/dd/7885ff3f55599f4f20d4d6990e12fa18e1952e": "15d6909f2ce8ca9d7aabee52c31ccc33",
".git/objects/de/d18e11eb4339010f5d0b537c029dabe65f6916": "7e48a943d46bd29219834f9f84d34a3c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ed/66db11e43a6ca244f9140ad8e9286f0b16b399": "53b1b49e909fae320f2523fafe48dbb3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/0bf991a6b7318124e52356ee014a6d33b53d7e": "e758aefc1731f57a1d75a647929729c3",
".git/objects/fb/a8974e3cb7eeb87b04634e855aa326c8b9d15c": "13e06b79d6d13448f9e0064122bc3a6c",
".git/objects/fb/a94ccc3aac431ddc14477642e5d50b7146d505": "8ad178b54f12022f36c638b6642e787a",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "0d7d528dbf2309c1a909c44a3af2c87d",
".git/refs/remotes/origin/main": "0d7d528dbf2309c1a909c44a3af2c87d",
"assets/AssetManifest.bin": "4940e7bf016a9dfad29a33e06ae747b4",
"assets/AssetManifest.bin.json": "3d7518607504b6bb03b522c39024b5de",
"assets/AssetManifest.json": "b99028c7079ecb5f14313e4b721075a1",
"assets/assets/Bookly-App.jpeg": "a12715fd29ac6d9a86f7829e9a7e8811",
"assets/assets/Chat-App.png": "f59126ad0b9aedce6912e6ce1a472c2b",
"assets/assets/iDemocracy.png": "a494a07c122df3d4cc4f06fca5376d23",
"assets/assets/my_photo.png": "6420308b9febd887ca720c0045c24005",
"assets/assets/News-App.png": "9dc8eb560957efe5d88080e9d27e1fc8",
"assets/assets/Note-App.png": "1e1550988fbad88fc570b570bbae5611",
"assets/assets/Payment-App.png": "9e38f405f16d28f5ac9f619e528edd83",
"assets/assets/Quiz-App.png": "36f756df126d5a8ac35b9c641ce9b084",
"assets/assets/Route%2520Tracker-App.png": "fafbad9c70f73a7142e8b8a93de9f735",
"assets/assets/Sports-App.png": "9420234e72301fb37bc17064388585c1",
"assets/assets/Weather-App.png": "6ae452c4b01f451c1a18f54e4cdecb14",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "9d943359122c803e0b3fca28ab0e3a46",
"assets/NOTICES": "de97697e8b8a520ec084146f7de096de",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b17b305d3195f2faf295b77afae0fe06",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "d821cce50d84247ac195a2ea57e2d62b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "eb3b4f70a26e2333a407502c5763a7b3",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
