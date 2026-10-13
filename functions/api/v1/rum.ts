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

    const upstreamResponse = await fetch('https://cloudflareinsights.com/cdn-cgi/rum', {
      method: 'POST',
      headers: forwardHeaders,
      body: payload,
    });

    return new Response(null, {
      status: upstreamResponse.status === 200 || upstreamResponse.status === 204 ? 204 : upstreamResponse.status,
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
