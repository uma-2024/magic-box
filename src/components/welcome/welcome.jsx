import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './welcome.css'
import backgroundImage from '../../assets/Untitled design.svg'

gsap.registerPlugin(ScrollTrigger)

function Welcome() {
  const containerRef = useRef(null)
  const textOverlayRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  useEffect(() => {
    // Ensure text is visible on initial load and animate in
    const titleElement = titleRef.current
    const subtitleElement = subtitleRef.current

    if (titleElement && subtitleElement) {
      // Animate text in on initial load
      gsap.fromTo(
        [titleElement, subtitleElement],
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2
        }
      )

      // Single scroll trigger that handles show/hide based on scroll position
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        end: "top -60%",
        onEnter: () => {
          // Show text when entering viewport
          gsap.to([titleElement, subtitleElement], {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out"
          })
        },
        onLeave: () => {
          // Hide text when leaving viewport (scrolling down)
          gsap.to([titleElement, subtitleElement], {
            opacity: 0,
            y: -30,
            scale: 0.9,
            duration: 0.8,
            ease: "power2.in"
          })
        },
        onEnterBack: () => {
          // Show text when scrolling back up into viewport
          gsap.to([titleElement, subtitleElement], {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out"
          })
        },
        onLeaveBack: () => {
          // Hide text when scrolling back up past viewport
          gsap.to([titleElement, subtitleElement], {
            opacity: 0,
            y: 50,
            scale: 0.9,
            duration: 0.8,
            ease: "power2.in"
          })
        }
      })
    }

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
      {/* Text Overlay */}
      <div 
        ref={textOverlayRef}
        className="text-overlay"
      >
        <h1 
          ref={titleRef}
          className="welcome-title"
        >
          WELCOME TO MAGIC-BOX
        </h1>
        <p 
          ref={subtitleRef}
          className="welcome-subtitle"
        >
          A FULLY DECENTRALIZED MAGIC WORLD
        </p>
      </div>
    </div>
  )
}

export default Welcome

