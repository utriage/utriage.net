/**
 * Cloudflare Web Analytics (RUM) beacon.min.js を自ドメインから配信するプロキシ
 * クライアントの広告ブロッカー/トラッキングブロッカーによるドメイン遮断を回避します。
 */
export async function onRequestGet(): Promise<Response> {
  try {
    const upstreamUrl = 'https://static.cloudflareinsights.com/beacon.min.js';

    // Cloudflare のエッジキャッシュを活用してアップストリームへの問い合わせ頻度を抑える
    const response = await fetch(upstreamUrl, {
      // @ts-expect-error Cloudflare-specific fetch options
      cf: {
        cacheTtl: 86400,
        cacheEverything: true,
      },
    });

    if (!response.ok) {
      return new Response('/* Failed to fetch beacon script */', {
        status: response.status,
        headers: {
          'Content-Type': 'application/javascript; charset=utf-8',
        },
      });
    }

    const scriptBody = await response.text();

    return new Response(scriptBody, {
      status: 200,
      headers: {
        'Content-Type': 'application/javascript; charset=utf-8',
        'Cache-Control': 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response('/* Beacon script unavailable */', {
      status: 500,
      headers: {
        'Content-Type': 'application/javascript; charset=utf-8',
      },
    });
  }
}
