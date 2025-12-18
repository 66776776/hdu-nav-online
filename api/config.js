// api/config.js
export default function handler(req, res) {
  // 1. 安全检查：只允许 GET 请求
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // 2. 从 Vercel 环境变量中读取敏感信息
  // 注意：这些变量是我们在 Vercel 后台配置的，代码里不写死！
  const botId = process.env.COZE_BOT_ID;
  const patToken = process.env.COZE_PAT_TOKEN;
  const mapKey = process.env.AMAP_KEY;
  const mapSecurity = process.env.AMAP_SECURITY;

  // 3. 将信息返回给前端
  res.status(200).json({
    botId: botId,
    patToken: patToken,
    mapKey: mapKey,
    mapSecurity: mapSecurity
  });
}
