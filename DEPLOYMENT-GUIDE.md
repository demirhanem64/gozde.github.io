# Deployment Guide - gozdeeksi.com.tr

This guide provides instructions for deploying the Gözde Ekşi Portfolio Website to production.

## Pre-Deployment Checklist

### 1. Domain Configuration

- [ ] Register domain: **gozdeeksi.com.tr**
- [ ] Configure DNS settings:
  - A Record: `@` → [hosting server IP]
  - CNAME: `www` → `gozdeeksi.com.tr`
- [ ] Enable SSL/TLS certificate (Let's Encrypt or hosting provider)
- [ ] Verify HTTPS is working correctly

### 2. File Preparation

- [ ] Generate favicon files (see `/assets/icons/README.md`)
- [ ] Place `favicon.ico` in root directory
- [ ] Verify all icon files are in `/assets/icons/`
- [ ] Create Open Graph and Twitter Card images:
  - `/assets/images/og-image.jpg` (1200x630px)
  - `/assets/images/twitter-card.jpg` (1200x600px)

### 3. Content Verification

- [ ] Review all text content for accuracy
- [ ] Verify contact information is correct
- [ ] Test all external links (Instagram, Facebook, University)
- [ ] Confirm webhook URLs are correct in `/data/surveys.json`

### 4. SEO Configuration

- [ ] Verify `robots.txt` is in root directory
- [ ] Verify `sitemap.xml` is in root directory
- [ ] Update sitemap lastmod dates if needed
- [ ] Test meta tags with:
  - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
  - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## Deployment Steps

### Option 1: Traditional Web Hosting (cPanel/FTP)

1. **Connect to hosting server**
   ```bash
   # Via FTP client (FileZilla, Cyberduck, etc.)
   Host: ftp.gozdeeksi.com.tr
   Username: [your-username]
   Password: [your-password]
   ```

2. **Upload files**
   - Upload all files to `public_html` or `www` directory
   - Maintain directory structure
   - Ensure `.htaccess` is uploaded (if using Apache)

3. **Set file permissions**
   - Directories: 755
   - Files: 644
   - Ensure `robots.txt` and `sitemap.xml` are readable

4. **Configure .htaccess** (if using Apache)
   ```apache
   # Force HTTPS
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   
   # Redirect www to non-www
   RewriteCond %{HTTP_HOST} ^www\.gozdeeksi\.com\.tr [NC]
   RewriteRule ^(.*)$ https://gozdeeksi.com.tr/$1 [L,R=301]
   ```

### Option 2: Static Hosting (Netlify, Vercel, GitHub Pages)

#### Netlify

1. **Connect repository or drag & drop**
   - Go to [Netlify](https://www.netlify.com/)
   - Create new site from Git or drag & drop files

2. **Configure build settings**
   - Build command: (none - static site)
   - Publish directory: `/` (root)

3. **Configure custom domain**
   - Add custom domain: `gozdeeksi.com.tr`
   - Configure DNS as instructed by Netlify
   - Enable HTTPS (automatic with Let's Encrypt)

4. **Configure redirects** (create `netlify.toml`)
   ```toml
   [[redirects]]
     from = "https://www.gozdeeksi.com.tr/*"
     to = "https://gozdeeksi.com.tr/:splat"
     status = 301
     force = true
   ```

#### Vercel

1. **Import project**
   - Go to [Vercel](https://vercel.com/)
   - Import Git repository or upload files

2. **Configure project**
   - Framework Preset: Other
   - Build Command: (none)
   - Output Directory: `/`

3. **Add custom domain**
   - Go to Project Settings → Domains
   - Add `gozdeeksi.com.tr`
   - Configure DNS as instructed

## Post-Deployment Verification

### 1. Functionality Testing

- [ ] Test all navigation links
- [ ] Test survey form submission
- [ ] Verify webhook integration works
- [ ] Test KVKK consent checkbox
- [ ] Test form validation
- [ ] Test mobile responsive design
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)

### 2. Performance Testing

- [ ] Run [Google PageSpeed Insights](https://pagespeed.web.dev/)
  - Target: Score > 90
- [ ] Run [GTmetrix](https://gtmetrix.com/)
- [ ] Test loading speed on mobile network
- [ ] Verify images are optimized

### 3. SEO Testing

- [ ] Verify site appears in Google Search Console
- [ ] Submit sitemap to Google Search Console
- [ ] Test meta tags with social media debuggers
- [ ] Verify canonical URLs are correct
- [ ] Check for broken links

### 4. Accessibility Testing

- [ ] Run [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)
- [ ] Test keyboard navigation
- [ ] Test with screen reader (NVDA/JAWS)
- [ ] Verify color contrast ratios
- [ ] Test with browser zoom (up to 200%)

### 5. Security Testing

- [ ] Verify HTTPS is enforced
- [ ] Check SSL certificate is valid
- [ ] Test form submission security
- [ ] Verify no sensitive data in client-side code
- [ ] Check HTTP security headers

## Monitoring and Maintenance

### Analytics Setup (Optional - KVKK Compliant)

If you want to track basic metrics without collecting personal data:

1. **Server-side analytics** (recommended for KVKK compliance)
   - Use server logs for basic traffic analysis
   - No cookies or personal data collection

2. **Privacy-focused analytics** (if needed)
   - Consider: Plausible, Fathom, or Simple Analytics
   - Ensure GDPR/KVKK compliance
   - Add privacy policy if collecting any data

### Regular Maintenance Tasks

**Weekly:**
- [ ] Check webhook functionality
- [ ] Review form submissions
- [ ] Monitor site uptime

**Monthly:**
- [ ] Update survey configurations if needed
- [ ] Review and update content
- [ ] Check for broken links
- [ ] Review performance metrics

**Quarterly:**
- [ ] Update dependencies (if any)
- [ ] Review security best practices
- [ ] Backup site files and data
- [ ] Review and update SEO strategy

## Troubleshooting

### Common Issues

**Issue: Favicon not showing**
- Clear browser cache
- Verify favicon files exist in correct locations
- Check file permissions
- Wait 24-48 hours for browser cache to update

**Issue: Forms not submitting**
- Verify webhook URLs are correct
- Check browser console for errors
- Test webhook endpoint directly
- Verify CORS settings on webhook server

**Issue: Mobile menu not working**
- Check JavaScript is loading correctly
- Verify no console errors
- Test on actual mobile device (not just browser resize)

**Issue: SSL certificate errors**
- Verify DNS is pointing to correct server
- Wait for SSL certificate to propagate (can take 24 hours)
- Check hosting provider's SSL settings

## Support and Resources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/)
- [Can I Use](https://caniuse.com/) - Browser compatibility

### Testing Tools
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WAVE Accessibility Tool](https://wave.webaim.org/)
- [W3C Markup Validator](https://validator.w3.org/)

### SEO Tools
- [Google Search Console](https://search.google.com/search-console)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## Contact

For technical support or questions about deployment:
- Review project documentation
- Check browser console for errors
- Test on multiple devices and browsers

---

**Last Updated:** December 5, 2024
**Domain:** gozdeeksi.com.tr
**Version:** 1.0
