// components/scroll-frame-background.tsx
'use client'

import { useEffect, useRef } from 'react'

const FRAME_COUNT = 240

function frameSrc(index: number) {
  const frame = String(index).padStart(4, '0')
  return `/frames/frame_${frame}.jpg`
}

export default function ScrollFrameBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const currentFrameRef = useRef(1)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1

      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      drawFrame(currentFrameRef.current)
    }

    const drawImageCover = (image: HTMLImageElement) => {
      const canvasWidth = window.innerWidth
      const canvasHeight = window.innerHeight

      const imageRatio = image.width / image.height
      const canvasRatio = canvasWidth / canvasHeight

      let drawWidth = canvasWidth
      let drawHeight = canvasHeight
      let offsetX = 0
      let offsetY = 0

      if (imageRatio > canvasRatio) {
        drawHeight = canvasHeight
        drawWidth = canvasHeight * imageRatio
        offsetX = (canvasWidth - drawWidth) / 2
      } else {
        drawWidth = canvasWidth
        drawHeight = canvasWidth / imageRatio
        offsetY = (canvasHeight - drawHeight) / 2
      }

      ctx.clearRect(0, 0, canvasWidth, canvasHeight)
      ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight)
    }

    const drawFrame = (frameNumber: number) => {
      const image = imagesRef.current[frameNumber]

      if (image?.complete) {
        drawImageCover(image)
      }
    }

    const updateFrame = () => {
      const scrollTop = window.scrollY
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight

      const scrollFraction = maxScroll > 0 ? scrollTop / maxScroll : 0

      const frameNumber = Math.min(
        FRAME_COUNT,
        Math.max(1, Math.ceil(scrollFraction * FRAME_COUNT))
      )

      if (frameNumber !== currentFrameRef.current) {
        currentFrameRef.current = frameNumber
        drawFrame(frameNumber)
      }
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(updateFrame)
    }

    resizeCanvas()

    const firstImage = new Image()
    firstImage.src = frameSrc(1)
    firstImage.onload = () => drawFrame(1)
    imagesRef.current[1] = firstImage

    for (let i = 2; i <= FRAME_COUNT; i++) {
      const image = new Image()
      image.src = frameSrc(i)
      imagesRef.current[i] = image
    }

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}
