'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { shouldShowOverlay, isBlacklisted } from '@/lib/overlay-config'

export function PageOverlay() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [assetsLoaded, setAssetsLoaded] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const updateProgress = useCallback((loaded: number, total: number) => {
    const progress = Math.min((loaded / total) * 100, 100)
    setLoadingProgress(progress)
  }, [])

  const handleDismiss = useCallback(() => {
    setIsVisible(false)
    // Store that we've shown overlay for this specific route
    const overlayKey = `page-overlay-shown-${pathname}`
    sessionStorage.setItem(overlayKey, 'true')
  }, [pathname])

  const handleAllAssetsLoaded = useCallback(() => {
    setAssetsLoaded(true)
    setLoadingProgress(100)
    
    // Small delay to show 100% before fade out
    setTimeout(() => {
      handleDismiss()
    }, 300)
  }, [handleDismiss])

  const trackAssetLoading = useCallback(() => {
    let loadedCount = 0
    let totalAssets = 2 // Document ready + video (or fallback)
    let documentReady = false
    let videoLoaded = false
    const minDisplayTime = 800 // Minimum time to show overlay (ms)
    const startTime = Date.now()

    const checkAllLoaded = () => {
      const elapsed = Date.now() - startTime
      const remainingTime = Math.max(0, minDisplayTime - elapsed)
      
      if (documentReady && videoLoaded) {
        setTimeout(() => {
          handleAllAssetsLoaded()
        }, remainingTime)
      }
    }

    // Track document ready state
    if (document.readyState === 'complete') {
      documentReady = true
      loadedCount++
      updateProgress(loadedCount, totalAssets)
    } else {
      window.addEventListener('load', () => {
        documentReady = true
        loadedCount++
        updateProgress(loadedCount, totalAssets)
        checkAllLoaded()
      }, { once: true })
    }

    // Track video loading (the main heavy asset)
    const checkVideo = () => {
      const video = document.querySelector('video')
      if (video) {
        const handleVideoLoad = () => {
          videoLoaded = true
          loadedCount++
          updateProgress(loadedCount, totalAssets)
          checkAllLoaded()
        }
        
        if (video.readyState >= 3) {
          // Video already loaded
          videoLoaded = true
          loadedCount++
          updateProgress(loadedCount, totalAssets)
          checkAllLoaded()
        } else {
          video.addEventListener('canplaythrough', handleVideoLoad, { once: true })
          video.addEventListener('error', handleVideoLoad, { once: true })
        }
      } else {
        // No video found, count as loaded
        videoLoaded = true
        loadedCount++
        updateProgress(loadedCount, totalAssets)
        checkAllLoaded()
      }
    }

    // Wait a bit for DOM to be ready, then check video
    setTimeout(() => {
      checkVideo()
    }, 150)

    // Fallback: If assets don't load within 3 seconds, proceed anyway
    timeoutRef.current = setTimeout(() => {
      if (!assetsLoaded) {
        handleAllAssetsLoaded()
      }
    }, 3000)
  }, [assetsLoaded, handleAllAssetsLoaded, updateProgress])

  useEffect(() => {
    // Check if route is blacklisted
    if (isBlacklisted(pathname)) {
      return
    }

    // Check if overlay should show for this route
    const shouldShow = shouldShowOverlay(pathname, false, 0)
    if (!shouldShow) {
      return
    }

    // Check if we've already shown the overlay for this route in this session
    const overlayKey = `page-overlay-shown-${pathname}`
    const hasShown = sessionStorage.getItem(overlayKey)
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    // Only show overlay on first visit to this route and if user doesn't prefer reduced motion
    if (!hasShown && !prefersReducedMotion) {
      setIsVisible(true)
      
      // Small delay to ensure DOM is ready, then track asset loading
      setTimeout(() => {
        trackAssetLoading()
      }, 100)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [pathname, trackAssetLoading])

  // Manual dismiss (click to skip)
  const handleSkip = () => {
    handleDismiss()
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          onClick={handleSkip}
        >
          {/* Logo/Branding */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative z-10 flex flex-col items-center justify-center space-y-8 px-4"
          >
            {/* Logo */}
            <div className="relative h-24 w-24 sm:h-32 sm:w-32">
              <Image
                src="/AFS-Logo900.png"
                alt="Advanced Roofing & Siding Inc."
                fill
                className="object-contain"
                priority
                sizes="128px"
              />
            </div>

            {/* Loading Progress Bar */}
            <div className="w-full max-w-xs space-y-2">
              <div className="h-1 w-full overflow-hidden rounded-full bg-gray-700">
                <motion.div
                  className="h-full bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </div>
              <p className="text-center text-sm text-gray-400">
                {loadingProgress < 100 ? 'Loading...' : 'Ready!'}
              </p>
            </div>

            {/* Skip Hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xs text-gray-500"
            >
              Click anywhere to skip
            </motion.p>
          </motion.div>

          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

