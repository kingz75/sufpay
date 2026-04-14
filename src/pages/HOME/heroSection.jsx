import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Import hero images
import hero1 from '../../assets/images/hero1.jpg';
import hero2 from '../../assets/images/hero2.jpg';

const heroImages = [hero1, hero2];

// Custom hook for responsive design
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

export default function HeroSection() {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);
    const { width } = useWindowSize();

    // Responsive breakpoints - EASY TO MODIFY
    const isMobile = width <= 480;
    const isTablet = width <= 768;

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(false);

            setTimeout(() => {
                setCurrentImageIndex((prevIndex) =>
                    (prevIndex + 1) % heroImages.length
                );
                setIsAnimating(true);
            }, 500);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    // ==========================================
    // INLINE STYLES - EASY TO MODIFY FOR RESPONSIVENESS
    // ==========================================

    const styles = {
        // Main Hero Section Container
        heroSection: {
            position: 'relative',
            width: '100%',
            height: isMobile ? '100dvh' : '100vh',
            minHeight: isMobile ? '100dvh' : isTablet ? '500px' : '600px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },

        // Background Image Slide
        heroBackground: (isActive) => ({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: isActive ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: 1,
        }),

        // Dark Overlay
        heroOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.5) 100%)',
            zIndex: 2,
        },

        // Content Container
        heroContent: {
            position: 'relative',
            zIndex: 3,
            textAlign: 'center',
            padding: isMobile ? '0 15px' : '0 20px',
            maxWidth: '900px',
        },

        // Subtitle - "Tiamin Group"
        heroSubtitle: {
            display: 'block',
            fontFamily: "'Manrope', sans-serif",
            fontSize: isMobile ? '0.875rem' : isTablet ? '1rem' : '1.25rem',
            fontWeight: 400,
            color: '#ffffff',
            letterSpacing: isMobile ? '1px' : '2px',
            marginBottom: '10px',
            textTransform: 'uppercase',
        },

        // Main Title Container
        heroTitle: {
            fontFamily: "'Manrope', sans-serif",
            fontSize: isMobile ? '1.75rem' : isTablet ? '2.5rem' : '4rem',
            fontWeight: 700,
            lineHeight: 1.2,
            margin: isMobile ? '0 0 20px 0' : '0 0 30px 0',
        },

        // Yellow Title Line - "Food Processing &"
        titleYellow: {
            display: 'block',
            color: '#f5c842', // Yellow color
        },

        // White Title Line - "Commodity Farming"
        titleWhite: {
            display: 'block',
            color: '#ffffff', // White color
            position: 'relative',
        },

        // Decorative Underline SVG
        underlineSvg: {
            position: 'absolute',
            bottom: isMobile ? '-8px' : '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: isMobile ? '90%' : '80%',
            maxWidth: '400px',
            height: '20px',
            color: 'rgba(255, 255, 255, 0.6)',
        },

        // CTA Button - "Discover More"
        heroButton: {
            display: 'inline-block',
            padding: isMobile ? '12px 24px' : isTablet ? '12px 28px' : '14px 36px',
            fontFamily: "'Manrope', sans-serif",
            fontSize: isMobile ? '0.875rem' : isTablet ? '0.9rem' : '1rem',
            fontWeight: 500,
            color: '#ffffff',
            backgroundColor: '#4BAF47', // Green color
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)',
        },

        // Slide Indicators Container
        heroIndicators: {
            position: 'absolute',
            bottom: isMobile ? '20px' : '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '12px',
            zIndex: 4,
        },

        // Individual Indicator Dot
        indicator: (isActive) => ({
            width: isMobile ? '10px' : '12px',
            height: isMobile ? '10px' : '12px',
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.7)',
            background: isActive ? '#ffffff' : 'transparent',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            padding: 0,
            transform: isActive ? 'scale(1.1)' : 'scale(1)',
        }),
    };

    // Keyframes for animations (injected via style tag)
    const keyframesStyle = `
        @keyframes fadeSlideIn {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideOut {
            0% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-20px); }
        }
        @keyframes fadeSlideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes drawLine {
            0% { stroke-dasharray: 400; stroke-dashoffset: 400; opacity: 0; }
            50% { opacity: 1; }
            100% { stroke-dasharray: 400; stroke-dashoffset: 0; opacity: 1; }
        }
        .hero-content-animate {
            animation: ${isAnimating ? 'fadeSlideIn 0.8s ease-out forwards' : 'fadeSlideOut 0.5s ease-in forwards'};
        }
        .hero-subtitle-anim { animation: fadeSlideUp 0.8s ease-out 0.2s both; }
        .title-yellow-anim { animation: fadeSlideUp 0.8s ease-out 0.4s both; }
        .title-white-anim { animation: fadeSlideUp 0.8s ease-out 0.6s both; }
        .hero-button-anim { animation: fadeSlideUp 0.8s ease-out 0.8s both; }
        .underline-anim { animation: drawLine 1s ease-out 1s both; }
        .hero-button-hover:hover {
            background-color: #43A047 !important;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4) !important;
        }
    `;

    return (
        <>
            <style>{keyframesStyle}</style>
            <section style={styles.heroSection}>
                {/* Background Images Slideshow */}
                {heroImages.map((image, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.heroBackground(index === currentImageIndex),
                            backgroundImage: `url(${image})`,
                        }}
                    />
                ))}

                {/* Dark Overlay for Text Readability */}
                <div style={styles.heroOverlay} />

                {/* Main Content */}
                <div style={styles.heroContent} className="hero-content-animate">
                    <span style={styles.heroSubtitle} className="hero-subtitle-anim">
                        Tiamin Group
                    </span>
                    <h1 style={styles.heroTitle}>
                        <span style={styles.titleYellow} className="title-yellow-anim">
                            Food Processing &
                        </span>
                        <span style={styles.titleWhite} className="title-white-anim">
                            Commodity Farming
                            <svg
                                style={styles.underlineSvg}
                                className="underline-anim"
                                viewBox="0 0 300 20"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0,15 Q50,5 100,12 T200,10 T300,15"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                            </svg>
                        </span>
                    </h1>
                    <button
                        style={styles.heroButton}
                        className="hero-button-anim text-[14px] hero-button-hover"
                        onClick={() => navigate('/shop')}
                    >
                        Discover More
                    </button>
                </div>

                {/* Slide Navigation Indicators */}
                {/* <div style={styles.heroIndicators}>
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            style={styles.indicator(index === currentImageIndex)}
                            onClick={() => {
                                setIsAnimating(false);
                                setTimeout(() => {
                                    setCurrentImageIndex(index);
                                    setIsAnimating(true);
                                }, 300);
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div> */}
            </section>
        </>
    );
}
