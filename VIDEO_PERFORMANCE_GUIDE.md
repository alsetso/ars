# Video Background Performance Guide

## ✅ Current Performance Optimizations

### 1. **Smart Video Loading**
- **Preload Strategy**: `preload="metadata"` - Only loads video metadata initially, not full video
- **Poster Image**: Shows fallback image immediately while video loads
- **Progressive Loading**: Smooth fade-in when video is ready

### 2. **Accessibility & User Preferences**
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Slow Connections**: Detects slow 2G connections and shows image instead
- **Graceful Fallback**: Falls back to image if video fails to load

### 3. **Performance Features**
- **Poster Image**: `/gallery/340661788_241238031731100_708703886642482358_n.webp` shows instantly
- **Smooth Transitions**: Opacity fade-in prevents jarring video start
- **Error Handling**: Automatically switches to image on video error

## 📊 How It Works

### Loading Sequence:
1. **Immediate**: Poster image displays (instant visual)
2. **Metadata Load**: Video metadata loads (lightweight)
3. **Video Ready**: Video fades in smoothly when loaded
4. **Fallback**: If video fails, image remains visible

### Performance Checks:
- ✅ Checks for reduced motion preference
- ✅ Detects slow network connections
- ✅ Handles video loading errors gracefully
- ✅ Uses optimized poster image

## 🚀 Additional Performance Recommendations

### 1. **Video Compression** (Recommended)
**Current**: `townhomes1.mp4` (check file size)

**Optimize using FFmpeg**:
```bash
# Compress video for web (recommended settings)
ffmpeg -i townhomes1.mp4 \
  -c:v libx264 \
  -preset slow \
  -crf 28 \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  -vf "scale=1920:-2" \
  townhomes1-optimized.mp4
```

**Target File Size**: < 5MB for best performance

### 2. **Multiple Video Formats** (Future Enhancement)
Add WebM format for better compression:
```tsx
<video>
  <source src="/townhomes1.webm" type="video/webm" />
  <source src="/townhomes1.mp4" type="video/mp4" />
</video>
```

### 3. **Lazy Loading** (Optional)
Only load video when hero section is in viewport:
```tsx
// Using Intersection Observer
const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
```

### 4. **CDN Hosting** (Production)
- Host video on CDN (Cloudflare, AWS CloudFront)
- Enables better caching and faster delivery
- Reduces server bandwidth

## 📈 Performance Metrics to Monitor

### Core Web Vitals:
- **LCP (Largest Contentful Paint)**: Should be < 2.5s
- **FID (First Input Delay)**: Should be < 100ms
- **CLS (Cumulative Layout Shift)**: Should be < 0.1

### Video-Specific:
- **Time to First Frame**: Video should start playing quickly
- **Buffering**: Should be minimal
- **File Size**: Keep under 5MB for optimal performance

## 🎯 Current Status

### ✅ Implemented:
- Smart preloading (metadata only)
- Poster image fallback
- Reduced motion support
- Slow connection detection
- Error handling
- Smooth fade-in transitions

### ⏳ Recommended Next Steps:
1. **Compress video** to reduce file size
2. **Add WebM format** for better browser support
3. **Monitor Core Web Vitals** in production
4. **Consider CDN** for video hosting

## 💡 Best Practices

1. **Video Length**: Keep hero videos under 30 seconds
2. **File Size**: Target < 5MB for fast loading
3. **Resolution**: 1920x1080 is sufficient (don't need 4K)
4. **Frame Rate**: 24-30fps is fine (no need for 60fps)
5. **Codec**: H.264 (MP4) for maximum compatibility

## 🔧 Quick Performance Check

Run this in browser console to check video performance:
```javascript
const video = document.querySelector('video');
console.log('Video duration:', video.duration);
console.log('Video file size:', 'Check Network tab');
console.log('Video ready state:', video.readyState);
```

---

**Current Implementation**: Optimized with smart loading, fallbacks, and accessibility features! 🚀

