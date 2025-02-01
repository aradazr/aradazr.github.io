'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3749251f12418a150b6964ed8b4dbe69",
"version.json": "03acefc4795e8573b194262cd3a4419f",
"index.html": "bb2d5cc48ddd196568331b893f163659",
"/": "bb2d5cc48ddd196568331b893f163659",
"main.dart.js": "762a43f814efcf43b941a171dbbc7e75",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "21f427ce97d98b3f010c3c252c541a39",
"icons/apple-icon-144x144.png": "b26772c6340e746c548560923711354d",
"icons/android-icon-192x192.png": "2f04696beff65b8a8786348ead41a4cc",
"icons/apple-icon-114x114.png": "04292a9b50a9a3676ea5bcd258df3ecf",
"icons/apple-icon-57x57.png": "99a54c64372ff7e17324f759e0f675d7",
"icons/apple-icon-152x152.png": "39aa0f13030de5f51cbbed0c8d458d9d",
"icons/android-icon-72x72.png": "7701dd44a9f0cc650aa286da0cffec8d",
"icons/android-icon-96x96.png": "839a533e8bef75069cf6c17878768b5f",
"icons/android-icon-36x36.png": "a8543751f3d1bc3da03958b828f7a473",
"icons/apple-icon-180x180.png": "290815297e4b7a4db862e20ba20b16d7",
"icons/android-icon-48x48.png": "522464f94c64e37302bd3caeb5a23503",
"icons/apple-icon-76x76.png": "73abefb8a98dda3f69b11e03391b9668",
"icons/apple-icon-60x60.png": "e5075a41b0a39449dc044539feb98bcb",
"icons/android-icon-144x144.png": "b26772c6340e746c548560923711354d",
"icons/apple-icon-72x72.png": "7701dd44a9f0cc650aa286da0cffec8d",
"icons/apple-icon-120x120.png": "b128cff44814437f11f06a09a561f77b",
"manifest.json": "493757defcfefaf370ef90ea0954c227",
"assets/AssetManifest.json": "e35e1b4cc981261acc5e1afbe8ee83ad",
"assets/NOTICES": "61ba6627a4fd0241af5497e062e75378",
"assets/FontManifest.json": "250912785b367cbefa63aff02ef382e4",
"assets/AssetManifest.bin.json": "af193343f1579d4b63358de10b654adf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1379beedd8aa21e3bf472476585863cf",
"assets/fonts/MaterialIcons-Regular.otf": "9ebfc6bfa04506ca078a0099895c0174",
"assets/assets/images/sib3.png": "995a9afa602f9fcd73008730c7e40d1b",
"assets/assets/images/translation.png": "59b5823cba89e7abd9afdd122dca4495",
"assets/assets/images/crypto4.png": "098d2678db201a5b6889c822e8f5992a",
"assets/assets/images/sib2.png": "4fdd135ec9ac41e4356fbc2f0663851c",
"assets/assets/images/carist4.png": "22b17046dba2ff36ed40bd185ec9af58",
"assets/assets/images/aradmain.png": "49191e4c28bf1aa88db84e239e5cc870",
"assets/assets/images/watchwhat9.png": "7d3b2b3c47549805a8855037b771f2cf",
"assets/assets/images/sib1.png": "e114251ffd1c9dce3233daab09bee11a",
"assets/assets/images/aradcircule.png": "72f8b93dd9300a2824701b8c6a351f4a",
"assets/assets/images/watchwhat8.png": "11eb0de2a9275f2405931301b1d79cb6",
"assets/assets/images/carist3.png": "f2e0cbaa6f085fc88c8205461fa5123d",
"assets/assets/images/git.png": "d657da75a9312c395d6da68f739dd2e7",
"assets/assets/images/sib5.png": "f85f3ed75aab2d148652311b66a9fc86",
"assets/assets/images/crypto2.png": "27223c1d6d4121ae2795f59c2128e961",
"assets/assets/images/crypto3.png": "18e51df3a6606342c638748dbe6b3a62",
"assets/assets/images/sib4.png": "46569df18362c6529c05fdcd8ea533a0",
"assets/assets/images/carist2.png": "7f01f213c549a82be81c6623d080d308",
"assets/assets/images/sib6.png": "8c7ad3a65a8bedc0621500559bf9a0e4",
"assets/assets/images/crypto1.png": "72ae45e2b48ce529f1353a4613aab055",
"assets/assets/images/instagram.png": "f2673cb36616d831ccbde1c534c3ed00",
"assets/assets/images/flutter.png": "d9eb3bfe50f7d898286857a508b0719b",
"assets/assets/images/sib7.png": "9fc9f3891c1942768fdbcdbf92209ce3",
"assets/assets/images/carist1.png": "3fc4c353b13143f798884416ab515ce4",
"assets/assets/images/arrowdown.png": "914ee28dd214f741b635b911996ba956",
"assets/assets/images/sib10.png": "b879c2740dc90cba5ca29264a750eae9",
"assets/assets/images/sql.png": "db1fa770587d9af2841dd7a7bb669528",
"assets/assets/images/github.png": "e1f07f66b77c6dd7a354237fbc6aa581",
"assets/assets/images/blue.png": "c760a5cf63b0aac6869ee21cf9c35bcf",
"assets/assets/images/js.png": "26526cb18a1f3b01c66a3e55e9e9cbf7",
"assets/assets/images/figma.png": "191e00390044dd8d2e0f0cfbb30e9d78",
"assets/assets/images/myimageblue.png": "eab10c059a898f6b7ed3247d5c54f3b9",
"assets/assets/images/csharp.png": "5849eee0515d79ad118442e37918c148",
"assets/assets/images/linkdin.png": "0515fd5d00673e4b3adc5f5cc0825261",
"assets/assets/images/bloc.png": "05ff54c730ee9a46cfea09291cf84cb9",
"assets/assets/images/html.png": "3bdf183c7e42603b0637bba8e5c12b32",
"assets/assets/images/bmi1.png": "7e0b7375bb71c1c89c915601381be61d",
"assets/assets/images/twitter.png": "044663922239cf5de0da6bfbcf78a4fb",
"assets/assets/images/react.png": "aad55f8297675bf0359225174c88313d",
"assets/assets/images/postman.png": "393bac6abd9e3f453898e692008e1d78",
"assets/assets/images/bmi2.png": "ac2b37b17bbab82dbdcda021b55c6643",
"assets/assets/images/bmi3.png": "8371b6224a6330d142fd9069a8767713",
"assets/assets/images/watchwhat3.png": "93f1a8fa05d8bcd554c9dda255a80992",
"assets/assets/images/watchwhat2.png": "e12301af6322a784e20ba350c4400639",
"assets/assets/images/c.png": "87d8999bc5a108de75edfbb981768700",
"assets/assets/images/photoshop.png": "64eee04c8cdef3f94a3cca3ab6b117de",
"assets/assets/images/weekend4.png": "c4982f3116c5774db29da95571dc27f1",
"assets/assets/images/sib9.png": "d87b7240b85868f4ea884014a81aab4e",
"assets/assets/images/provider.png": "f51dc54a7e487213963c6cb7a4a88b56",
"assets/assets/images/sib8.png": "3d89c4b29d5d73b97a7e495077d03cd2",
"assets/assets/images/watchwhat1.png": "abb5afba9755ca8fc51773e799343317",
"assets/assets/images/weekend5.png": "84f88c119024823678df736921bd3941",
"assets/assets/images/css.png": "33295c32a4c354eb2d93bc3bc228d39a",
"assets/assets/images/weekend1.png": "ef01680a79169bbc802e2d8c8a609a9a",
"assets/assets/images/watchwhat5.png": "2f7fd2c3ebcb08b4f2bb71306e141c8c",
"assets/assets/images/dart.png": "258e022fd810605bc7673131f31e1931",
"assets/assets/images/watchwhat4.png": "96c459911a897900933c0fac78114af5",
"assets/assets/images/weekend2.png": "3dc5fa189c63ef6c5caa118e90985e16",
"assets/assets/images/watchwhat6.png": "b423368d53b8bedde72875a444fcc583",
"assets/assets/images/arrowback.png": "671d7b9a785516f96c2f037014f170c9",
"assets/assets/images/watchwhat7.png": "835f7ab235bd074503230b11f9e5dd40",
"assets/assets/images/weekend3.png": "6d0cc9f2e2ad761bd53d22495fd5da13",
"assets/assets/fonts/LT.ttf": "46e6531c42dce109e6916f490cd16851",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
