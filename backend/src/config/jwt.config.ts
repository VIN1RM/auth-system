export const jwtConfig = {
  secret: process.env.JWT_SECRET || 'super-secret-key',
  expiresIn: 900, // 15 minutos em segundos
};
