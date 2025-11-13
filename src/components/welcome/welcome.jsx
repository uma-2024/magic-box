import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './welcome.css'
import backgroundImage from '../../assets/Untitled design.svg?url'
import animatedImage from '../../assets/Untitled design (1).svg?url'

gsap.registerPlugin(ScrollTrigger)

function Welcome() {
  const containerRef = useRef(null)
  const textOverlayRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const imageRef = useRef(null)
  useEffect(() => {
    // Show text immediately (no animation delay)
    const titleElement = titleRef.current
    const subtitleElement = subtitleRef.current
    const imageElement = imageRef.current

    // Set initial visible state immediately
    if (titleElement && subtitleElement) {
      gsap.set([titleElement, subtitleElement], {
        opacity: 1,
        y: 0,
        scale: 1
      })
    }

    // Defer animations to next frame for better perceived performance
    requestAnimationFrame(() => {
      if (titleElement && subtitleElement) {
        // Lightweight fade-in animation
        gsap.fromTo(
          [titleElement, subtitleElement],
          {
            opacity: 0,
            y: 20
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.1
          }
        )

        // Scroll trigger - deferred initialization
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 80%",
          end: "top -60%",
          onEnter: () => {
            gsap.to([titleElement, subtitleElement], {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out"
            })
          },
          onLeave: () => {
            gsap.to([titleElement, subtitleElement], {
              opacity: 0,
              y: -20,
              duration: 0.6,
              ease: "power2.in"
            })
          },
          onEnterBack: () => {
            gsap.to([titleElement, subtitleElement], {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out"
            })
          },
          onLeaveBack: () => {
            gsap.to([titleElement, subtitleElement], {
              opacity: 0,
              y: 20,
              duration: 0.6,
              ease: "power2.in"
            })
          }
        })
      }

      // Animate image - lighter animation
      if (imageElement) {
        gsap.fromTo(
          imageElement,
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.3
          }
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="welcome-container"
      style={{ 
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      {/* Text Overlay - Visible immediately */}
      <div 
        ref={textOverlayRef}
        className="text-overlay"
        style={{ opacity: 1 }}
      >
        <h1 
          ref={titleRef}
          className="welcome-title"
          style={{ opacity: 1 }}
        >
          WELCOME TO MAGIC-BOX
        </h1>
        <p 
          ref={subtitleRef}
          className="welcome-subtitle"
          style={{ opacity: 1 }}
        >
          A FULLY DECENTRALIZED MAGIC WORLD
        </p>
      </div>

      {/* Animated Image */}
      <div 
        ref={imageRef}
        className="animated-image-container"
      >
        <img 
          src={animatedImage} 
          alt="Magic Box" 
          className="animated-image"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </div>
  )
}

export default Welcome

