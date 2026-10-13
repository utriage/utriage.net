const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
};

/**
 * CORS プリフライト対応
 */
export async function onRequestOptions(): Promise<Response> {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}

/**
 * Cloudflare Web Analytics (RUM) 計測ビーコン転送プロキシ
 * クライアントからの POST (sendBeacon / fetch / XHR) を受け取り、
 * Cloudflare の公式エンドポイント (https://cloudflareinsights.com/cdn-cgi/rum) へ中継します。
 */
export async function onRequestPost({ request }: { request: Request }): Promise<Response> {

  try {
    const url = new URL(request.url);
    const host = request.headers.get('Host') || url.hostname;
    const referer = request.headers.get('Referer') || '';
    const isLocal =
      host.includes('localhost') ||
      host.includes('127.0.0.1') ||
      url.hostname === 'localhost' ||
      url.hostname === '127.0.0.1' ||
      referer.includes('localhost') ||
      referer.includes('127.0.0.1');

    // ローカル開発環境の場合は Cloudflare に POST せず、即座にダミー応答(204)を返す
    if (isLocal) {
      return new Response(null, {
        status: 204,
        headers: CORS_HEADERS,
      });
    }

    const payload = await request.text();
    const forwardHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    const userAgent = request.headers.get('User-Agent');
    if (userAgent) {
      forwardHeaders['User-Agent'] = userAgent;
    }

    const clientIp = request.headers.get('CF-Connecting-IP');
    if (clientIp) {
      forwardHeaders['X-Forwarded-For'] = clientIp;
    }

    if (referer) {
      forwardHeaders['Referer'] = referer;
    }

    const origin = request.headers.get('Origin');
    if (origin) {
      forwardHeaders['Origin'] = origin;
    }

    await fetch('https://cloudflareinsights.com/cdn-cgi/rum', {
      method: 'POST',
      headers: forwardHeaders,
      body: payload,
    });

    return new Response(null, {
      status: 204,
      headers: {
        ...CORS_HEADERS,
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  } catch (error) {
    // ビーコン転送で何らかのエラーが発生しても、ブラウザ側のコンソールエラーを防ぐため 204 を返却
    return new Response(null, {
      status: 204,
      headers: CORS_HEADERS,
    });
  }
}
