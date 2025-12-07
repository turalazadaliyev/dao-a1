# Deployment Guide

## 🌐 Deployment Options

### 1. Vercel (Recommended)
Vercel is the official Next.js hosting platform with zero-configuration deployment.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### 2. Docker
Build and deploy using Docker:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Build image
docker build -t quadratic-funding-dao .

# Run container
docker run -p 3000:3000 quadratic-funding-dao
```

### 3. Traditional VPS/Server
```bash
# Build
npm run build

# Start production server
npm start

# Use PM2 for process management
pm2 start "npm start" --name "qf-dao"
```

## 🔐 Environment Variables

Create `.env.local` for development:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_WEB3_RPC_URL=https://mainnet.infura.io/v3/YOUR_KEY
```

## 📊 Performance Monitoring

### Lighthouse Scores
- Performance: 95+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 95+

### Monitoring Tools
- Vercel Analytics (automatic with Vercel)
- Google PageSpeed Insights
- WebPageTest

## 🚀 Optimization Tips

1. **Image Optimization**
   - Use Next.js Image component
   - Compress images with tools like TinyPNG

2. **Code Splitting**
   - Dynamic imports for heavy components (Three.js)
   - Tree-shaking removes unused code

3. **Caching**
   - Vercel provides edge caching
   - Set proper Cache-Control headers

4. **Database**
   - When backend is ready, cache requests
   - Use SWR or React Query for data fetching

## 🔄 CI/CD Pipeline

Example GitHub Actions workflow:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm ci
      - run: npm run build
      - run: npm run test
      
      - uses: vercel/action@main
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## 📱 Mobile Optimization

✅ Responsive design
✅ Touch-friendly buttons (min 48x48px)
✅ Mobile navigation with hamburger menu
✅ Optimized images for mobile
✅ Fast initial load

## 🔐 Security

- No sensitive data in client code
- CORS headers configured
- CSP headers recommended
- Input validation on forms
- XSS protection via React escaping

## 🎯 Next Steps After Deployment

1. Set up monitoring and alerting
2. Configure CDN for static assets
3. Set up database backups
4. Implement analytics
5. Monitor user behavior
6. A/B testing framework
7. Error tracking (Sentry)

## 📞 Support

For deployment issues:
- Check Next.js documentation: https://nextjs.org/docs/deployment
- Vercel support: https://vercel.com/support
- GitHub issues: Check project repository
