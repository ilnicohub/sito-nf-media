// Semplice rate limiter in-memory per prevenire spam massivo
// Nota: in un ambiente serverless puro (come Vercel) questo stato viene perso ai riavvii a freddo,
// ma è sufficiente per mitigare raffiche di richieste dallo stesso IP.

const rateLimit = new Map<string, { count: number; timestamp: number }>();

export function checkRateLimit(ip: string, limit: number = 3, windowMs: number = 60000) {
  const now = Date.now();
  const userRecord = rateLimit.get(ip);

  if (!userRecord) {
    rateLimit.set(ip, { count: 1, timestamp: now });
    return { success: true };
  }

  // Se la finestra di tempo è passata, resetta
  if (now - userRecord.timestamp > windowMs) {
    rateLimit.set(ip, { count: 1, timestamp: now });
    return { success: true };
  }

  // Se ha superato il limite nella finestra di tempo
  if (userRecord.count >= limit) {
    return { success: false };
  }

  // Altrimenti incrementa e permetti
  userRecord.count += 1;
  return { success: true };
}
