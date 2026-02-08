import React from 'react'
function ClientNotFoundSearch() {
    return (
        <>
            <main className="relative z-20 flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
                <div className="max-w-[800px] animate-fade-in">
                    <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Error Code 404</span>
                    <h1 className="text-white tracking-tight text-6xl md:text-8xl font-bold leading-tight mb-2">404</h1>
                    <h2 className="text-white tracking-tight text-3xl md:text-5xl font-bold leading-tight mb-6">Plot Twist: This
                        page doesn't exist.</h2>
                    <p className="text-white/70 text-lg md:text-xl font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
                        The scene you're looking for was cut from the final edit. Let's get you back to the action before
                        the popcorn gets cold.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="flex min-w-[240px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-primary text-white text-base font-bold transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20">
                            Return to Now Showing
                        </button>
                        <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-white/10 text-white text-base font-bold backdrop-blur-md border border-white/20 transition-all hover:bg-white/20">
                            View Coming Soon
                        </button>
                    </div>
                </div>
            </main>

        </>
    )
}

export default ClientNotFoundSearch
