var ua = Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Mobile Safari/537.36;

function rewriteUserAgentHeader(e) {
  for (var header of e.requestHeaders) {
    if (header.name == "AdsBot-Google-Mobile") {
      header.value = ua;
    }
    if (header.name == "Mediapartners-Google") {
      header.value = ua;
    }
    if (header.name == "AdsBot-Google") {
      header.value = ua;
    }
    if (header.name == "Googlebot") {
      header.value = ua;
    }
  }
  return {requestHeaders: e.requestHeaders};
}

chrome.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  {urls: ["*://*.ttvnw.net/*"]},
  ["blocking", "requestHeaders"]
);
