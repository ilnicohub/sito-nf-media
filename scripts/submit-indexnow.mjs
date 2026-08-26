const SITE_URL = (process.env.INDEXNOW_SITE_URL || "https://www.nfmedialab.it").replace(/\/$/, "");
const INDEXNOW_KEY = "940796f38053f8c3d73b12735cb81f73";
const INDEXNOW_ENDPOINT = process.env.INDEXNOW_ENDPOINT || "https://api.indexnow.org/indexnow";
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;
const KEY_VERIFICATION_URL = process.env.INDEXNOW_KEY_VERIFICATION_URL || KEY_LOCATION;
const SITEMAP_URL = process.env.INDEXNOW_SITEMAP_URL || `${SITE_URL}/sitemap.xml`;

const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function fetchWithRetry(url, attempts = 6) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { "user-agent": "NF-Media-Lab-IndexNow/1.0" },
      });

      if (response.ok) return response;
      lastError = new Error(`${url} ha risposto con HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }

    if (attempt < attempts) await wait(attempt * 5_000);
  }

  throw lastError;
}

function extractUrls(xml) {
  const canonicalHost = new URL(SITE_URL).host;
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];

  return [...new Set(matches.map((match) => match[1].trim()))].filter((url) => {
    try {
      return new URL(url).host === canonicalHost;
    } catch {
      return false;
    }
  });
}

async function submitIndexNow() {
  const keyResponse = await fetchWithRetry(KEY_VERIFICATION_URL);
  const publishedKey = (await keyResponse.text()).trim();

  if (publishedKey !== INDEXNOW_KEY) {
    throw new Error("Il file di verifica IndexNow online non contiene la chiave prevista.");
  }

  const sitemapResponse = await fetchWithRetry(SITEMAP_URL);
  const urls = extractUrls(await sitemapResponse.text());

  if (urls.length === 0) {
    throw new Error("La sitemap online non contiene URL validi da inviare.");
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    }),
  });

  if (!response.ok) {
    const responseBody = await response.text();
    throw new Error(`IndexNow ha risposto con HTTP ${response.status}${responseBody ? `: ${responseBody}` : ""}`);
  }

  console.log(`IndexNow: ${urls.length} URL inviati correttamente (HTTP ${response.status}).`);
}

submitIndexNow().catch((error) => {
  console.error("Invio IndexNow non riuscito:", error);
  process.exitCode = 1;
});
