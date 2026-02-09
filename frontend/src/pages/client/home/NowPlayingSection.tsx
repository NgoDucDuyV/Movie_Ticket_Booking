import React from 'react'
import Container from '../../../components/Layouts/Container'

const NowPlayingSection = () => {
    return (
        <>
            <Container>
                <section className="max-w-[1440px] mx-auto px-6 py-24" id="phim">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="h-1 w-12 bg-primary" />
                            <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em]">
                                Phim hot nhất</span>
                        </div>
                        <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Đang Trình Chiếu</h2>
                    </div>
                    <a className="group text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em] flex items-center gap-3 hover:text-white transition-all" href="#">
                        Xem tất cả <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    <div className="group relative aspect-[2/3] rounded-2xl overflow-hidden cursor-pointer poster-hover border border-white/5 bg-surface-dark">
                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6nUgVvHmO6dbssjsvfVJxtfDn30YILzv4unz1hGbfJtYfs4Y_CmU9_-_FEv6jtro-MXrRmmrfgT4gtGDx4yoCn8A_jBi_LFjrLGYPOfzw73nrs50gqenv63OZ0rXhB1ZgcZwyrzIP0THLlRGrk6iqYFRUtNZTkALHNKlaZQpKoXf3npFLLgdhzm1pNnnzWTZvVjHBNfairIMKPoEM1OaX2QtRx0Ubw5D5V7YBxkGZWtEmkHmrbc9iC0vs8QKXqFk08lCWm0G9ybo_" />
                        <div className="poster-overlay absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-yellow-500 text-black text-[10px] font-black px-1.5 py-0.5 rounded">8.9</span>
                                <span className="text-slate-300 text-[10px] font-bold uppercase tracking-widest">Hành Động /
                                    Sci-Fi</span>
                            </div>
                            <h3 className="text-xl font-black text-white leading-tight mb-4 uppercase tracking-tighter">Kẻ Du
                                Hành Vũ Trụ</h3>
                            <button className="w-full bg-primary py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-transform hover:scale-105">Đặt
                                Vé</button>
                        </div>
                    </div>
                    <div className="group relative aspect-[2/3] rounded-2xl overflow-hidden cursor-pointer poster-hover border border-white/5 bg-surface-dark">
                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX69sw7JskU9N0qpLYpK_5ME-PabNbzAfHraP01A2f8yxxhN9BD3SHPza8PBAfafsLtdGEAXaCsU-95D4uPsfhljeUwuh6jwqVxpn8zYqrFm_Zk0Yk1086gSWunF-fstqsRHizI5gbIV3dqxYKyS9PFS_O3FZRd3uguxI3uxCPaEpDS1701bebOCkoAwf8-peIpWlkFQ19c8WJa2XtP2tMi0OrEKJI3nfC2ClPbGlgX2V6hd-XPapibFYW0Eonn6K0UG64LZKXCSBf" />
                        <div className="poster-overlay absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-yellow-500 text-black text-[10px] font-black px-1.5 py-0.5 rounded">7.4</span>
                                <span className="text-slate-300 text-[10px] font-bold uppercase tracking-widest">Kịch
                                    Tính</span>
                            </div>
                            <h3 className="text-xl font-black text-white leading-tight mb-4 uppercase tracking-tighter">Tiếng
                                Vọng Câm Lặng</h3>
                            <button className="w-full bg-primary py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-transform hover:scale-105">Đặt
                                Vé</button>
                        </div>
                    </div>
                    <div className="group relative aspect-[2/3] rounded-2xl overflow-hidden cursor-pointer poster-hover border border-white/5 bg-surface-dark">
                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQegFHqXGEqrHR8cvEIoWuRBMPloAlmgIdg03MG_zfux2gBidD9bqN_IxkeuLmyGBiBMbh1UbYxBr4aHIga0ksrzEGd_phfzM73uudWdS5kVpCOW04ekYA5aT3MtZY55fbgVKVhev1Uq2ZXl476Gt7ORc59iEOaIeOqs5LOwPFvZxBvODVL5LystM_nI1W9rkTDVn26iHze1Fbjdc13u7Cgl3w2713Wnj-T4GyAcwyko-lxrCzmq-E7rEbHiBD4mWJEZHb7QaIrh4k" />
                        <div className="poster-overlay absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-yellow-500 text-black text-[10px] font-black px-1.5 py-0.5 rounded">8.2</span>
                                <span className="text-slate-300 text-[10px] font-bold uppercase tracking-widest">Nghệ
                                    Thuật</span>
                            </div>
                            <h3 className="text-xl font-black text-white leading-tight mb-4 uppercase tracking-tighter">Sau Thủy
                                Triều</h3>
                            <button className="w-full bg-primary py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-transform hover:scale-105">Đặt
                                Vé</button>
                        </div>
                    </div>
                    <div className="group relative aspect-[2/3] rounded-2xl overflow-hidden cursor-pointer poster-hover border border-white/5 bg-surface-dark">
                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaamEQHhWbYZ0RNvePQlIlU9HalnzFmPHzyaAp_GY4vX8RIqV5NA4EpG7s3im2z3rt72UUkzky41oq9HAlVTpwr8wlZzMRkVRnqtuzxel1wEIJBz6GMrSo6szxbg9tQrnhtfoiBJsUFwMCeGCCdW-hk_5mdAJP9bYKcGsaioelUxfmXxRftBII9-41n1cqXVDCGaTHuiAnQ0s6YkciQfwsWIR4gm1XoV2cqBVctxBQ_8e9UHRC7uqbt6jMeoTtXH_FJMOX0AhRh0Gu" />
                        <div className="poster-overlay absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-yellow-500 text-black text-[10px] font-black px-1.5 py-0.5 rounded">9.1</span>
                                <span className="text-slate-300 text-[10px] font-bold uppercase tracking-widest">Hoạt
                                    Hình</span>
                            </div>
                            <h3 className="text-xl font-black text-white leading-tight mb-4 uppercase tracking-tighter">Vương
                                Quốc Mây</h3>
                            <button className="w-full bg-primary py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-transform hover:scale-105">Đặt
                                Vé</button>
                        </div>
                    </div>
                    <div className="group relative aspect-[2/3] rounded-2xl overflow-hidden cursor-pointer poster-hover border border-white/5 bg-surface-dark">
                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1WjJsAzCoK1zN-lMCB_XX5l4JGJVfGsv9tZW771GM9sROsAtAFnZ7GQRdw94BuE_N0ht2hYW6KBJzvYgdAUq-twqb4k89E_rbhonpLBYoaYgucSAHZ6jCx8sjoDKBZACHL_L8liph84A43K2NE3syoF2Sukz81oV8aLupFrjZJY6mrN2_rj5kyyy-S7Z8O1d-Eb0qScq_RiNFaNLS314JH5uAKE4rwL-_k21evra0Vg74llL4KE2vDYnUPFm7CjnoJ_WaBSOZAvgC" />
                        <div className="poster-overlay absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-yellow-500 text-black text-[10px] font-black px-1.5 py-0.5 rounded">6.9</span>
                                <span className="text-slate-300 text-[10px] font-bold uppercase tracking-widest">Kinh Dị</span>
                            </div>
                            <h3 className="text-xl font-black text-white leading-tight mb-4 uppercase tracking-tighter">Rừng Sâu
                                Đêm Muộn</h3>
                            <button className="w-full bg-primary py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-transform hover:scale-105">Đặt
                                Vé</button>
                        </div>
                    </div>
                </div>
            </section>
            </Container>
        </>
    )
}

export default NowPlayingSection
