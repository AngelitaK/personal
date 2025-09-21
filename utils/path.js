export const getAssetPath = (path) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/personal' : '';
  return `${basePath}${path}`;
};