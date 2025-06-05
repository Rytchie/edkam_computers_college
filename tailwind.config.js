export default {
        darkMode: 'class', // Enable class-based dark mode
        theme: {
          extend: {
            colors: {
              // Existing dark mode colors (will be used with dark: prefix)
              'brand-dark': '#060818',
              'brand-dark-blue': '#0A0C2B',
              'brand-light-text': '#E0E0E0', // Text on dark backgrounds
              'brand-secondary-text': '#A0A0B0', // Secondary text on dark backgrounds

              // New light mode colors
              'brand-bg-light': '#F8FAFC', // slate-50 (main page background)
              'brand-bg-light-card': '#FFFFFF', // white (for cards, modals)
              'brand-bg-light-section': '#F1F5F9', // slate-100 (for sections like AboutUs)
              'brand-bg-light-hover': '#E2E8F0', // slate-200 (for hover states on light elements)
              'brand-text-light-primary': '#0F172A', // slate-900 (primary text)
              'brand-text-light-secondary': '#475569', // slate-600 (secondary text)
              'brand-border-light': '#CBD5E1', // slate-300 (borders in light mode)
              'brand-border-light-strong': '#94A3B8', // slate-400 (stronger borders in light mode)


              // Accent colors (can remain the same or have light/dark variants if needed)
              'brand-accent-purple': '#A855F7', // purple-500
              'brand-accent-blue': '#6366F1', // indigo-500
            },
            animation: {
              'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
              'subtle-pulse': 'subtlePulse 2s infinite ease-in-out',
              'gradient-bg': 'gradientBg 15s ease infinite',
              'slide-in-from-left': 'slideInFromLeft 0.8s ease-out forwards',
              'slide-infinite-horizontal': 'slideInfiniteHorizontal 60s linear infinite',
              'chat-window-in': 'chatWindowIn 0.3s ease-out forwards',
              'chat-window-out': 'chatWindowOut 0.3s ease-in forwards',
              'faq-expand': 'faqExpand 0.3s ease-out',
              'faq-collapse': 'faqCollapse 0.3s ease-out',
            },
            keyframes: {
              fadeInUp: {
                '0%': { opacity: '0', transform: 'translateY(20px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
              },
              subtlePulse: {
                '0%, 100%': { opacity: '1' },
                '50%': { opacity: '.7' },
              },
              gradientBg: {
                '0%, 100%': { backgroundPosition: '0% 50%' },
                '50%': { backgroundPosition: '100% 50%' },
              },
              slideInFromLeft: {
                '0%': { opacity: '0', transform: 'translateX(-50px)' },
                '100%': { opacity: '1', transform: 'translateX(0)' },
              },
              slideInfiniteHorizontal: {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' },
              },
              chatWindowIn: {
                '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
                '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
              },
              chatWindowOut: {
                '0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
                '100%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
              },
              faqExpand: {
                '0%': { maxHeight: '0px', opacity: '0' },
                '100%': { maxHeight: '500px', opacity: '1' }, // Adjust maxHeight as needed
              },
              faqCollapse: {
                '0%': { maxHeight: '500px', opacity: '1' },
                '100%': { maxHeight: '0px', opacity: '0' },
              }
            },
            backgroundImage: {
              'animated-gradient': 'linear-gradient(-45deg, #0F172A, #1E1B4B, #312E81, #4F46E5)', // Dark gradient
              'animated-gradient-light': 'linear-gradient(-45deg, #E0E7FF, #C7D2FE, #A5B4FC, #818CF8)', // Light gradient
            },
            backgroundSize: {
              '400%': '400% 400%',
            },
            rotate: {
              'y-180': 'rotateY(180deg)',
            }
          }
        }
      }