module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				manrope: ['Manrope', 'sans-serif'],
				Montserrat: ['Montserrat', 'sans-serif'],
				sans: ['Manrope', 'Montserrat', 'sans-serif'],
			},
			keyframes: {
				parallax: {
					'0%': { transform: 'scale(1.1) translateY(0px)' },
					'100%': { transform: 'scale(1.1) translateY(-20px)' },
				},
				fadeSlide: {
					'0%': { opacity: 0, transform: 'translateY(20px)' },
					'100%': { opacity: 1, transform: 'translateY(0px)' },
				},
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-50%)' },
				},
				fadeInUp: {
					'0%': { opacity: 0, transform: 'translateY(30px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' },
				},
				scaleIn: {
					'0%': { opacity: 0, transform: 'scale(0.8)' },
					'100%': { opacity: 1, transform: 'scale(1)' },
				},
				bounceIn: {
					'0%': { opacity: 0, transform: 'scale(0.3)' },
					'50%': { opacity: 1, transform: 'scale(1.05)' },
					'70%': { transform: 'scale(0.9)' },
					'100%': { opacity: 1, transform: 'scale(1)' },
				},
				slideInLeft: {
					'0%': { opacity: 0, transform: 'translateX(-50px)' },
					'100%': { opacity: 1, transform: 'translateX(0)' },
				},
				slideInRight: {
					'0%': { opacity: 0, transform: 'translateX(50px)' },
					'100%': { opacity: 1, transform: 'translateX(0)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				rotateIn: {
					'0%': { opacity: 0, transform: 'rotate(-180deg) scale(0.5)' },
					'100%': { opacity: 1, transform: 'rotate(0deg) scale(1)' },
				},
				pulseGlow: {
					'0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
					'50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)' },
				},
			},
			animation: {
				parallax: 'parallax 10s linear infinite alternate',
				fadeSlide: 'fadeSlide 1.2s ease-out',
				marquee: 'marquee 15s linear infinite',
				fadeInUp: 'fadeInUp 0.6s ease-out forwards',
				scaleIn: 'scaleIn 0.5s ease-out forwards',
				bounceIn: 'bounceIn 0.8s ease-out forwards',
				slideInLeft: 'slideInLeft 0.7s ease-out forwards',
				slideInRight: 'slideInRight 0.7s ease-out forwards',
				float: 'float 3s ease-in-out infinite',
				rotateIn: 'rotateIn 0.6s ease-out forwards',
				pulseGlow: 'pulseGlow 2s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};
