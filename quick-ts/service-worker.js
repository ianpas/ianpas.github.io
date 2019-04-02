/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/quick-ts/2019/02/18/hello/index.html","03a272960d2de43f992d9a086e2bb321"],["/quick-ts/api/index.html","ff1be78eb44cfcd46a2bfe87eecf13c0"],["/quick-ts/archives/2019/02/index.html","59ea904e1051052d9c24854f5972d2e6"],["/quick-ts/archives/2019/index.html","18e0d8592bb0416f1237fd9172eb7bc4"],["/quick-ts/archives/index.html","8d23655f7309d51a604d03853476d623"],["/quick-ts/atom.xml","fef81f2cb7683c13859dd7f52807c094"],["/quick-ts/browserconfig.xml","a1327babc882f9875f57f5b367c9ffc9"],["/quick-ts/css/benchmark.css","b083e0006589a5ba88a250eb8ee12cc5"],["/quick-ts/css/index.css","5e40844ff95012b73ea3c7f046260a19"],["/quick-ts/css/page.css","5ef267eed0a5b30151fc09b2b967ef72"],["/quick-ts/css/search.css","9597a3c53c68ed297e49fb1f1dd331a4"],["/quick-ts/examples/commits.html","bade576bc2aa1b6bf133a34f4d642c0a"],["/quick-ts/examples/elastic-header.html","667dbbb3186de029a4a6d751b902a4fe"],["/quick-ts/examples/firebase.html","5b4f6d8a7dbd4618a2a8471a55638efb"],["/quick-ts/examples/grid-component.html","3c00b40f0e09c37b332085fe1a48cbf1"],["/quick-ts/examples/hackernews.html","e8cf263c3c9a6d6d9cc949bb197091f9"],["/quick-ts/examples/index.html","0a03f4c515399720a31c7dc542ffc19e"],["/quick-ts/examples/modal.html","5d210600f3684e131eb95d7c4ea654ed"],["/quick-ts/examples/select2.html","738b1a317552412139a030a6e86e7232"],["/quick-ts/examples/svg.html","59067865f1534a9174557378f059ea9a"],["/quick-ts/examples/todomvc.html","eb5e71aa793f54a84848008fed22873c"],["/quick-ts/examples/tree-view.html","80ad1eb78eb64838dd15bd111ec5001d"],["/quick-ts/fonts/Dosis/Dosis-Medium.ttf","1a7809b30cc0cb7fc96feb3cad2eefb7"],["/quick-ts/fonts/Roboto_Mono/RobotoMono-Regular.ttf","a48ac41620cd818c5020d0f4302489ff"],["/quick-ts/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf","b2e90cc01cdd1e2e6f214d5cb2ae5c26"],["/quick-ts/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf","ba6cad25afe01d394e830f548a7f94df"],["/quick-ts/fonts/Source_Sans_Pro/SourceSansPro-Semibold.ttf","52984b3a4e09652a6feee711d5c169fd"],["/quick-ts/guide/class-and-style.html","8060e013effb4cde73b728221aa1ed1f"],["/quick-ts/guide/comparison.html","7336ed8d44a56af248dc002ed10f5aaa"],["/quick-ts/guide/components.html","b6f9cc214f98223d28e2e951e20c1e2f"],["/quick-ts/guide/computed.html","edee244d0f46ef1d1e1a3ef24b99b791"],["/quick-ts/guide/conditional.html","61f0570d80bed8acf8a7e77f29611c2e"],["/quick-ts/guide/custom-directive.html","155562c3a8d3de5353489c90ac9f8c57"],["/quick-ts/guide/deployment.html","8b6311caa5f9a742202348e8c1fb1ffd"],["/quick-ts/guide/events.html","7ef3d41c8cb89ff8503d3bd623847c6e"],["/quick-ts/guide/features.html","00802737d6b3d0fcd5747402242dfa73"],["/quick-ts/guide/forms.html","6f32cf5ce6f0a53d5c1c9ccacf79e386"],["/quick-ts/guide/index.html","fb400c8bfc4689b186a8bf18f66818fe"],["/quick-ts/guide/installation.html","80d9c3fef1adced6a540217a5ff4ba28"],["/quick-ts/guide/instance.html","5e787cb1798824a0fb98024520a6116d"],["/quick-ts/guide/join.html","13ec8afee9c28256d2137d9c09bd374d"],["/quick-ts/guide/list.html","a559e0c10101bd240378b0eba3765141"],["/quick-ts/guide/migration-vue-router.html","41287f824e61cdd77d55f2770c13ab23"],["/quick-ts/guide/migration-vuex.html","3e3433be03c967fc8d3af08a4658de84"],["/quick-ts/guide/migration.html","c56d8eceb1f1c04bd4c8cd5da00a0228"],["/quick-ts/guide/mixins.html","23dd1efdad784a4c4c9963e2e2d7220c"],["/quick-ts/guide/plugins.html","a000342c29930814602f8528ffb489d0"],["/quick-ts/guide/reactivity.html","41c735bfd6a35e0d6221fa247d8a141b"],["/quick-ts/guide/render-function.html","5bf7da9c80fe6b0df4b516c0212b59e4"],["/quick-ts/guide/routing.html","134ba782505ac9b4e24bf8749dc95b72"],["/quick-ts/guide/samples.html","6694c9c5fe84ce387fa55e39d9032783"],["/quick-ts/guide/single-file-components.html","447244c3b2e040e354c92da0cebf8389"],["/quick-ts/guide/ssr.html","ca7d7a3a4a26e4bc7fb9c9e2b83151d5"],["/quick-ts/guide/state-management.html","a7d7e9be4cd8363200de910cdb73e079"],["/quick-ts/guide/syntax.html","6816f6888019363ec42a3ab80ae76f53"],["/quick-ts/guide/transitioning-state.html","461e94fd94ed62b54482781a266fe7a6"],["/quick-ts/guide/transitions.html","f9b9d194429dc29c7f5a73e13e8f1d87"],["/quick-ts/guide/unit-testing.html","d8b889aa64f68d4e4ac7eb6ff4a38835"],["/quick-ts/images/aaha.png","77bfeb59f772f37444c9cefe00785cf2"],["/quick-ts/images/accelebrate.png","e030e08131cebe8b43c89df18d710ded"],["/quick-ts/images/alligator_io.svg","1ffe0191e22a65337f9cb224790f5222"],["/quick-ts/images/bacancy_technology.png","9a0590eb4ce29289b454240415611162"],["/quick-ts/images/bestvpn_co.png","afbe252b6b59bc3cdac2e7dec69eac39"],["/quick-ts/images/bit.png","9638a3f44bf471876effb80ea0659f73"],["/quick-ts/images/chaitin.png","549e43997790dc624c477424acbfe228"],["/quick-ts/images/check.png","c634675b753a1a03b587c43d8b535600"],["/quick-ts/images/cloudstudio.png","fc480cf4c2b06591f58e7e91666226af"],["/quick-ts/images/coding.png","10c55345da3c2374563b096f5c86d781"],["/quick-ts/images/coin-bch.png","ddfab54149483e02f3cd540a47e2782b"],["/quick-ts/images/coin-btc.png","d90559bb202766dd6ddabf71dd1680be"],["/quick-ts/images/coin-eth.png","70ae70292937880fe9e77c2c7dc38f86"],["/quick-ts/images/coin-ltc.png","9e756bd611ac7355515153cecbc20d36"],["/quick-ts/images/dcloud.gif","b6f12416bda47e75f829da47479483ba"],["/quick-ts/images/derek_pollard.png","b1c4d535b619865d80d6cf1b2e370300"],["/quick-ts/images/devsquad.png","e639ea4fd0d7053fc0928d4ff9fefb2a"],["/quick-ts/images/dopamine.png","17222090b66cfca59f1ccf8b9843f595"],["/quick-ts/images/down.png","2f948222df409af3121254d5fe0ed377"],["/quick-ts/images/earthlink.png","88f1bd15252b11484834176965844e22"],["/quick-ts/images/features/component-type-check.gif","026d13f870e822085075e5cf05f9497f"],["/quick-ts/images/features/type-inference.gif","15e719d2a453727b391ab4ac4dfaa5c9"],["/quick-ts/images/feed.png","a9bbd11a96e1cbcc49bf8fa857a0d70f"],["/quick-ts/images/firestick_tricks.png","1ee05223a5b12fe910cb8428d57223d8"],["/quick-ts/images/frontend_love.png","b514babc53a0f3ddc854b0b14a54a489"],["/quick-ts/images/geekbang-ad.jpg","980250c419ffdb2573f26fdbde209026"],["/quick-ts/images/geekbang-vue-ad.gif","e7fae85ac459b6e43a71948c0561ef12"],["/quick-ts/images/gitee.png","429b3c31a180461c4fb66e5ac20e1385"],["/quick-ts/images/gridsome.png","e82a2f872ec319bbb5d0a804288cd9b7"],["/quick-ts/images/html_burger.png","c7ce1344d001e7a236a89694ed59d988"],["/quick-ts/images/icons.png","ad6ee8c400066e15712cdef4342023da"],["/quick-ts/images/icons/android-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/quick-ts/images/icons/android-icon-192x192.png","5d10eaab941eb596ee59ffc53652d035"],["/quick-ts/images/icons/android-icon-36x36.png","bb757d234def1a6b53d793dbf4879578"],["/quick-ts/images/icons/android-icon-48x48.png","0d33c4fc51e2bb020bf8dd7cd05db875"],["/quick-ts/images/icons/android-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["/quick-ts/images/icons/android-icon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["/quick-ts/images/icons/apple-icon-114x114.png","f4fd30f3a26b932843b8c5cef9f2186e"],["/quick-ts/images/icons/apple-icon-120x120.png","b6a574d63d52ef9c89189b67bcac5cbd"],["/quick-ts/images/icons/apple-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/quick-ts/images/icons/apple-icon-152x152.png","f53787bf41febf2b044931a305ccaf2a"],["/quick-ts/images/icons/apple-icon-180x180.png","9f6b1e3b92b2c5bd5b7d79501bb6e612"],["/quick-ts/images/icons/apple-icon-57x57.png","83f622ba0994866abc56ace068b6551c"],["/quick-ts/images/icons/apple-icon-60x60.png","643f761bc39f86c70f17cd1fed3b8e08"],["/quick-ts/images/icons/apple-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["/quick-ts/images/icons/apple-icon-76x76.png","94d9af047b86d99657b5efb88a0d1c7b"],["/quick-ts/images/icons/apple-icon-precomposed.png","707758f591323153a4f1cb3a8d9641fa"],["/quick-ts/images/icons/apple-icon.png","707758f591323153a4f1cb3a8d9641fa"],["/quick-ts/images/icons/bacancy_technology.png","5810bb8253b1e35ba437373ff83f82d3"],["/quick-ts/images/icons/favicon-16x16.png","a5a9da66870189b0539223c38c8a7749"],["/quick-ts/images/icons/favicon-192x192.png","a3484dd0a967d07e9b9bab2f69bd767d"],["/quick-ts/images/icons/favicon-32x32.png","3d60db0d77303b2414ddd50cf2472bf7"],["/quick-ts/images/icons/favicon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["/quick-ts/images/icons/ms-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/quick-ts/images/icons/ms-icon-150x150.png","e8cdf492981122a2548bc247c7b4067d"],["/quick-ts/images/icons/ms-icon-310x310.png","1721f8303ec2349002b5980a01f27cef"],["/quick-ts/images/icons/ms-icon-70x70.png","a110cf0132b00b23a8605ca72a8874ba"],["/quick-ts/images/icons_8.png","ffcdd01817ecdb32b92bd2f1e4d75e84"],["/quick-ts/images/inkoop.png","1cff77d2c927657d3aceeba2c12db892"],["/quick-ts/images/intygrate.png","fdd390b44a4aeed763f53f4e8f6529e4"],["/quick-ts/images/isle_of_code.png","42f662ab71b943889f8f8b56515350f2"],["/quick-ts/images/laravel.png","9a2fba3eca41e26743dc731e3a4469b6"],["/quick-ts/images/logo.png","cf23526f451784ff137f161b8fe18d5a"],["/quick-ts/images/marcus_hiles.png","8b55f40abd154200ce72b8cdb6a8d90f"],["/quick-ts/images/menu.png","0b414c367f5e7c0eb1b40f1076216b08"],["/quick-ts/images/modus.png","6498c04fee5b8542449b350e77180379"],["/quick-ts/images/nativescript.png","05c94493b428db55bb441faaca4b02d8"],["/quick-ts/images/neds.png","1f1a2a46c2575019ae07a90205f60b65"],["/quick-ts/images/onsen_ui.png","e41569bcb10fbca3f361d818b29ed7fd"],["/quick-ts/images/opteo.png","e80eaa359d4722af5fd8fed79fb9eec5"],["/quick-ts/images/passionate_people.png","03e59e28347e1dcd165e4e1525afb545"],["/quick-ts/images/patreon.png","99eb0cdcab5f46697e07bec273607903"],["/quick-ts/images/paypal.png","067bd556ce9e4c76538a8057adb6d596"],["/quick-ts/images/quick-ts.png","a3484dd0a967d07e9b9bab2f69bd767d"],["/quick-ts/images/samples/member-access.gif","8ab44d40ec88a89953abff3c62741ca8"],["/quick-ts/images/search.png","3a38056b0f3ec4fcac63c4d1c3841cab"],["/quick-ts/images/shopware_ag.svg","5d2a8176b6e1b0a348339746de3edf28"],["/quick-ts/images/special-sponsor-spot.png","860ea231e9bd1b3ff35e627eb83bb936"],["/quick-ts/images/stdlib.png","8693858c969505b29339bf84c0a5cbdf"],["/quick-ts/images/syncfusion.png","fd1617455479c2e3265656c167faeb91"],["/quick-ts/images/tidelift.png","831935bd53d7d2d4eea9427c5f874816"],["/quick-ts/images/tighten_co.png","003364e7044150e2979cbfe03d640cec"],["/quick-ts/images/tooltwist.png","b81bfd5ae608e965d03aaa5a4164373e"],["/quick-ts/images/valuecoders.png","1bccdd1583af0609cada15218d98a2f4"],["/quick-ts/images/vehikl.png","3bd1b88aa9d242d308e838f2342d7660"],["/quick-ts/images/vuejobs.png","77ed618e17571d1a2d77ad7bc53e8fc4"],["/quick-ts/images/vuemastery.png","6f09ce143467fba22039bde3f2070c19"],["/quick-ts/images/vueschool.png","3d92b4f1a8fcbe3be0d0e89950a1a705"],["/quick-ts/images/vuetify.png","c7cfff77abb10162cb0b7c2ed3b6ac51"],["/quick-ts/images/webdock.png","6b8d3d271ba4d05daf83ad75d21221d1"],["/quick-ts/images/wilderminds.png","cd98b69653b51369da2e765097f13d6f"],["/quick-ts/images/yakaz.png","f1918919114e35d6091e67370450e8bd"],["/quick-ts/images/youku.png","1cce2782971aed63d38b17e28614d512"],["/quick-ts/index.html","b811ec6c52c83ffb7e69f13d96265476"],["/quick-ts/js/common.js","509e6e360fba42306c22153af14035a7"],["/quick-ts/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/quick-ts/js/smooth-scroll.min.js","ecaa94f311c27bd2ac704a9658ff9cef"],["/quick-ts/js/vue.js","cbe2b9b2fb6955decf033515d079e44b"],["/quick-ts/js/vue.min.js","5283b86cbf48a538ee3cbebac633ccd4"],["/quick-ts/manifest.json","bd8de9895abf2cc1faa760a8bd1004d8"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.networkFirst, {"origin":"sendgrid.sp1.convertro.com"});
toolbox.router.get("/*", toolbox.networkFirst, {"origin":"ad.doubleclick.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.googleapis.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.gstatic.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"maxcdn.bootstrapcdn.com"});




