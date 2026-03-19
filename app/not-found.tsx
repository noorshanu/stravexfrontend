import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Animated background glows */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: 'hsl(210 100% 55%)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-[100px] pointer-events-none"
        style={{ background: 'hsl(175 75% 42%)' }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 number with gradient */}
        <h1
          className="text-[10rem] sm:text-[14rem] font-bold leading-none tracking-tighter select-none"
          style={{
            background: 'linear-gradient(135deg, hsl(210 100% 55%), hsl(175 75% 42%))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 60px hsl(210 100% 55% / 0.3))',
          }}
        >
          404
        </h1>

        {/* Neon divider line */}
        <div className="w-32 h-[1px] mx-auto mb-6 mt-2"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(210 100% 55% / 0.6), hsl(175 75% 42% / 0.4), transparent)',
          }}
        />

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Page Not Found
        </h2>
        <p className="text-white/50 text-base sm:text-lg mb-10 max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group relative px-8 py-3.5 rounded-xl text-white font-medium text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_hsl(210_100%_55%_/_0.25)]"
            style={{
              background: 'linear-gradient(135deg, hsl(210 100% 50%), hsl(195 90% 48%), hsl(175 75% 42%))',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 13.5L1.5 8.5L6.5 3.5M2.5 8.5H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Go Back Home
            </span>
          </Link>

          <Link
            href="/conatct-us"
            className="px-8 py-3.5 rounded-xl text-gray-300 hover:text-white font-medium text-sm transition-all duration-300 border border-white/10 hover:border-white/25 hover:bg-white/5"
          >
            Contact Support
          </Link>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-[15%] right-[20%] w-1 h-1 rounded-full bg-blue-400/40 animate-pulse" />
      <div className="absolute bottom-[25%] left-[15%] w-1.5 h-1.5 rounded-full bg-teal-400/30 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[40%] left-[10%] w-1 h-1 rounded-full bg-blue-300/20 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[35%] right-[10%] w-1 h-1 rounded-full bg-teal-300/25 animate-pulse" style={{ animationDelay: '0.5s' }} />
    </div>
  )
}
