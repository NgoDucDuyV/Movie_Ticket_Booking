import Container from '@/components/Layouts/Container'
import React from 'react'
import { Link } from 'react-router-dom'

const ClientNotFound = () => {
    return (
        <>
            <Container className='bg-black'>
                {/* Large Background Numbers */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                    <span className="text-[25rem] text-white/20 font-black leading-none tracking-tighter">404</span>
                </div>
                <div className="w-full text-center z-10 mb-10">
                    {/* Visual Element */}
                    <div className="mb-10 relative flex justify-center">
                        <div className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center">
                            {/* Dramatic Red Chair / Spotlight Illustration placeholder */}
                            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
                            <div className="relative w-full h-full bg-center bg-no-repeat bg-contain" data-alt="A single empty red theater seat under a dim spotlight" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7Vy34Enhw0Rl9OvjSL-urCdJzZBRrIACgbnoxrmJOa8_lZjzu4fst0FqbPEYmJuESejbizZpWrmB_JLszCJ-f72Tnev6yFV_Fnb4X_Uemg3Jk6IlhJVGomKLmS7s1IbawUm0BSSKzuIVULWAASNHCh2dOzrGJGw46_X75L86nGgsbtHxBmDiYQ9-zmg3yvYQv197yApHOKAjlE5oullsgbZjacNUW7ko0PExR_RlsvTNqfe0PvTITDIb9MUrATFvLVGc1GZ8FR72J")' }}>
                            </div>
                        </div>
                    </div>
                    {/* Error Messages */}
                    <div className="space-y-4 mb-10">
                        <h1 className="text-primary text-sm font-bold uppercase tracking-[0.3em]">Error Code: 404</h1>
                        <h2 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">Oops! This Scene is
                            Missing</h2>
                        <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto font-normal">
                            The scene you're looking for was cut from the final edit. It seems we've lost the reel for this
                            page.
                        </p>
                    </div>
                    {/* Search Bar Component */}
                    <div className="max-w-md mx-auto mb-10 group">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary transition-colors">search</span>
                            <input className="w-full h-14 pl-14 pr-6 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all" placeholder="Search for movies, actors, or cinemas..." type="text" />
                        </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to={"/home"} className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group">
                            <span className="material-symbols-outlined">home</span>
                            Back to Home
                        </Link>
                        <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">movie</span>
                            Browse Movies
                        </button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ClientNotFound
