export function customMiddleware(req, res, next) {
  // Your custom authentication logic here
  if (req.headers.authorization === 'your-expected-auth-header') {
      return next();
  }
  return res.status(401).json({ message: 'Unauthorized' });
}