import Container from '@/components/Layouts/Container'
import React from 'react'

function ClientHome() {
    return (
        <>

            <section className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img alt="Hành Tinh Cát: Phần Hai Banner" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ_3YA4R9VFKGD-mQP7cYon9Sp7V6dmGO3EOmKu0ccUYVu-6hCFrC2B6061k1J6wASfXEG2k2nore3hg-dyEnkRTh3v16isTXiFeChPif8Tg0d-i-Y9qv_ZbZ1WGq6hGUxpoC0v1yAkpA5yobvB_dAZGPQgR0XfuT30odhWP6gdv86IjkeFLQIDjE5LpFRjkl0ALPfeId1MGq6trIo1MVSawQL36uAGgoPl-at_4LRJFl8LJNxaiuv2eYTYpUYd5vHAsHLx6w1i3D2" />
                    <div className="absolute inset-0 hero-side-gradient" />
                    <div className="absolute inset-0 hero-gradient" />
                </div>
                <div className="relative max-w-[1440px] mx-auto px-6 h-full flex flex-col justify-center items-start pt-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg shadow-primary/30">
                        <span className="material-symbols-outlined text-sm">local_fire_department</span> Đang Chiếu Rạp
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-6 tracking-tighter uppercase max-w-4xl">
                        HÀNH TINH <br /><span className="text-primary italic">CÁT: PHẦN HAI</span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-xl mb-10 leading-relaxed font-medium">
                        Một kiệt tác điện ảnh không thể bỏ lỡ. Hãy theo chân Paul Atreides trong hành trình báo thù và định
                        đoạt số phận của thiên hà.
                    </p>
                    <div className="flex flex-wrap gap-5">
                        <button className="bg-primary hover:bg-red-700 text-white px-10 py-4 rounded-full font-black text-sm transition-all flex items-center gap-3 shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 uppercase tracking-widest">
                            <span className="material-symbols-outlined">confirmation_number</span>
                            Đặt Vé Ngay
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-10 py-4 rounded-full font-black text-sm transition-all flex items-center gap-3 hover:scale-105 active:scale-95 uppercase tracking-widest">
                            <span className="material-symbols-outlined">play_circle</span>
                            Xem Trailer
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-32 right-12 flex flex-col gap-4 z-30">
                    <div className="w-1.5 h-12 bg-primary rounded-full" />
                    <div className="w-1.5 h-6 bg-white/20 rounded-full hover:bg-white/40 cursor-pointer transition-all" />
                    <div className="w-1.5 h-6 bg-white/20 rounded-full hover:bg-white/40 cursor-pointer transition-all" />
                </div>
            </section>
            <div className="max-w-6xl mx-auto z-40 px-6">
                <div className="glass-card rounded-2xl p-2 shadow-2xl border border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-1">
                        <div className="lg:col-span-3 flex flex-col justify-center px-6 py-3 border-r border-white/10">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 mb-1">Chọn
                                Rạp</label>
                            <select className="w-full bg-transparent border-none p-0 text-sm font-bold text-white focus:ring-0 appearance-none cursor-pointer">
                                <option className="bg-background-dark">CinePass TP. Hồ Chí Minh</option>
                                <option className="bg-background-dark">CinePass Hà Nội</option>
                                <option className="bg-background-dark">CinePass Đà Nẵng</option>
                            </select>
                        </div>
                        <div className="lg:col-span-3 flex flex-col justify-center px-6 py-3 border-r border-white/10">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 mb-1">Chọn
                                Phim</label>
                            <select className="w-full bg-transparent border-none p-0 text-sm font-bold text-white focus:ring-0 appearance-none cursor-pointer">
                                <option className="bg-background-dark">Hành Tinh Cát: Phần Hai</option>
                                <option className="bg-background-dark">Kung Fu Panda 4</option>
                                <option className="bg-background-dark">Mai</option>
                            </select>
                        </div>
                        <div className="lg:col-span-2 flex flex-col justify-center px-6 py-3 border-r border-white/10">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 mb-1">Ngày
                                Xem</label>
                            <select className="w-full bg-transparent border-none p-0 text-sm font-bold text-white focus:ring-0 appearance-none cursor-pointer">
                                <option className="bg-background-dark">Hôm nay, 15/05</option>
                                <option className="bg-background-dark">Thứ 5, 16/05</option>
                            </select>
                        </div>
                        <div className="lg:col-span-2 flex flex-col justify-center px-6 py-3">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 mb-1">Suất
                                Chiếu</label>
                            <select className="w-full bg-transparent border-none p-0 text-sm font-bold text-white focus:ring-0 appearance-none cursor-pointer">
                                <option className="bg-background-dark">19:30 (IMAX)</option>
                                <option className="bg-background-dark">21:00 (Digital)</option>
                            </select>
                        </div>
                        <div className="lg:col-span-2 p-1">
                            <button className="w-full h-full bg-primary hover:bg-red-700 text-white font-black text-xs py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 uppercase tracking-widest">
                                Đặt Vé
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <section className="max-w-[1440px] mx-auto px-6 py-24" id="phim">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="h-1 w-12 bg-primary" />
                            <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em]">Phim hot
                                nhất</span>
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
            <section className="bg-surface-dark py-24 border-y border-white/5">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-1 w-12 bg-primary" />
                                <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em]">Hẹn gặp
                                    lại</span>
                            </div>
                            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Siêu Phẩm Sắp Ra Mắt</h2>
                        </div>
                    </div>
                    <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-8">
                        <div className="min-w-[320px] group">
                            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-5 border border-white/5">
                                <span className="absolute top-5 left-5 z-20 bg-primary text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">Coming
                                    Soon</span>
                                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHsICiqhgF30W6VQLqYVS_GfkVPmOmVF_KzPyObVuOC3w9IvmMsOc-UhwGny5vjPz15Sjo7wLjzaidRz7OiRTt1lDpM9CVTYU0b1irnMjied1AWxmoA20VLJl6HmluHFRi9E8AaDPMG0YIf5oUI2TFPKpJK9eOB07rYblZCZJvAE9HQkpA6x-LMBaWq8el-mIDZC_kkMbyCy26wFhE6YJ1ZAKtWqAhCHL9Bhl81FxZma1y_VDS4B5kOOCrf4AX5zYPGiTl6_oqc_Ft" />
                            </div>
                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-2 italic">Dự kiến:
                                12.06.2024</p>
                            <h3 className="text-xl font-bold text-white uppercase tracking-tight">Kỷ Nguyên Mới</h3>
                        </div>
                        <div className="min-w-[320px] group">
                            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-5 border border-white/5">
                                <span className="absolute top-5 left-5 z-20 bg-primary text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">Coming
                                    Soon</span>
                                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiTKykZzeRzM1c7rsKkAEe-ZYrQ6bUobid0dcIyQwFWfD3n6SZ2nnxJiLuNCKIKXEQbcDIcspGY2fSmI95vDVEJG-IjFmLctrdZLSBgja2UZLVPXuZ3uUFimE_dwadVbwgZV8Qt0ig6DfFKj0_PRL9OAQEs5mwnd-iRZB9pSzR5vbWb1-YlMm5SAHB-t4pb7JT13Oetnk1H0BRel29ZYBnR-mrV5Xrue0UHYxDGZnBlPVmiqjpDPTjDIn8ERCp1DkdMDE0g1qSaQr3" />
                            </div>
                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-2 italic">Dự kiến:
                                28.06.2024</p>
                            <h3 className="text-xl font-bold text-white uppercase tracking-tight">Đội Tiên Phong</h3>
                        </div>
                        <div className="min-w-[320px] group">
                            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-5 border border-white/5">
                                <span className="absolute top-5 left-5 z-20 bg-primary text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">Coming
                                    Soon</span>
                                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnqY1StUGew32yQe4kzp1cy6WyHkoLzh-SzTsF29RSflCz-kJqn-tR-c2DnhG-1GJP-qSlHbLWcmUs6eQHcdOR5oaRKJ4rBo2-NbglEocJavUNiddMc6Tl4ek6t-EFekfuLiyBxYPIdwnxvl7Ejq08LEXXtl4-lItyXx-7073snSMbvHGBHl0seeGrVy4nF0kqR3ISNRtK_nkAllz9itx9NoiaiXOxjxKAutMKs5bKef5wwgnLMNfjfavqnYLUIOZNJCiASr-e6Wl4" />
                            </div>
                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-2 italic">Dự kiến:
                                04.07.2024</p>
                            <h3 className="text-xl font-bold text-white uppercase tracking-tight">Đế Chế Sóng Dữ</h3>
                        </div>
                        <div className="min-w-[320px] group">
                            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-5 border border-white/5">
                                <span className="absolute top-5 left-5 z-20 bg-primary text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">Coming
                                    Soon</span>
                                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzAsYhK7_jvlwNV8y85UxgtaUV0kWrqrKGX7VjsaxKktZL2ueFXxWrc60DF9OokpTnet5ddhMwV_byGHtMKskpA_LsrVEMa-CauJ4EGBtB4Nh912sD53qzbbW-hmQ_j1MNJiwHC8XhmvKpQOksNlM3nsSt2MKesZCz1eypRb6mSISuN49Jxp9S4lgPmuopq4SoZdP4W8kB0-KlYEOyEpOkMsNMnDG36oGjMUiOM97U3WBcsrMI3POYAe41twcSmjAN7ZLTmtr4QL0Y" />
                            </div>
                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-2 italic">Dự kiến:
                                19.07.2024</p>
                            <h3 className="text-xl font-bold text-white uppercase tracking-tight">Tinh Vân Trỗi Dậy</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-[1440px] mx-auto px-6 py-24" id="uu-dai">
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-1 w-12 bg-gold" />
                        <span className="text-gold font-black text-[10px] uppercase tracking-[0.3em]">Quà tặng hấp dẫn</span>
                    </div>
                    <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Ưu Đãi &amp; Khuyến Mãi</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="relative bg-gradient-to-br from-red-600 to-red-900 rounded-3xl p-8 overflow-hidden group shadow-xl">
                        <div className="relative z-10">
                            <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-4 inline-block">Mỗi
                                Thứ Ba</span>
                            <h3 className="text-2xl font-black mb-2 uppercase italic">Mua 1 Tặng 1</h3>
                            <p className="text-sm text-white/80 mb-6 font-medium">Áp dụng cho mọi suất chiếu tiêu chuẩn vào mỗi
                                ngày thứ ba hàng tuần.</p>
                            <button className="bg-white text-red-600 font-black text-[10px] px-6 py-2.5 rounded-full uppercase tracking-widest hover:scale-105 transition-transform">Nhận
                                Ngay</button>
                        </div>
                        <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[180px] text-white/10 rotate-12">confirmation_number</span>
                    </div>
                    <div className="relative bg-gradient-to-br from-blue-600 to-indigo-900 rounded-3xl p-8 overflow-hidden group shadow-xl">
                        <div className="relative z-10">
                            <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-4 inline-block">Dành
                                Cho HSSV</span>
                            <h3 className="text-2xl font-black mb-2 uppercase italic">Ưu Đãi Học Sinh</h3>
                            <p className="text-sm text-white/80 mb-6 font-medium">Chỉ từ 45.000đ cho một vé xem phim khi xuất
                                trình thẻ học sinh, sinh viên.</p>
                            <button className="bg-white text-indigo-600 font-black text-[10px] px-6 py-2.5 rounded-full uppercase tracking-widest hover:scale-105 transition-transform">Xem
                                Chi Tiết</button>
                        </div>
                        <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[180px] text-white/10 rotate-12">school</span>
                    </div>
                    <div className="relative bg-gradient-to-br from-gold/80 to-yellow-800 rounded-3xl p-8 overflow-hidden group shadow-xl">
                        <div className="relative z-10">
                            <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-4 inline-block">Combo
                                Đặc Biệt</span>
                            <h3 className="text-2xl font-black mb-2 uppercase italic">Combo Bỏng Nước</h3>
                            <p className="text-sm text-white/80 mb-6 font-medium">Giảm ngay 20% khi mua combo bắp nước đi kèm
                                với vé phim bom tấn.</p>
                            <button className="bg-white text-yellow-800 font-black text-[10px] px-6 py-2.5 rounded-full uppercase tracking-widest hover:scale-105 transition-transform">Mua
                                Ngay</button>
                        </div>
                        <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[180px] text-white/10 rotate-12">local_pizza</span>
                    </div>
                </div>
            </section>
            <section className="bg-black py-24 relative overflow-hidden" id="thanh-vien">
                <div className="max-w-[1440px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="h-1 w-12 bg-gold" />
                            <span className="text-gold font-black text-[10px] uppercase tracking-[0.3em]">Đẳng cấp thượng
                                lưu</span>
                        </div>
                        <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-8">Thẻ Thành Viên <span className="text-gold">CinePass VIP</span></h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                            Trở thành thành viên VIP để tận hưởng không gian phòng chờ hạng sang, tích điểm đổi quà và được
                            ưu tiên đặt vé những bộ phim hot nhất.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            <li className="flex items-center gap-3 text-white font-bold text-sm">
                                <span className="material-symbols-outlined text-gold">check_circle</span> Tích điểm 10% mỗi hóa
                                đơn
                            </li>
                            <li className="flex items-center gap-3 text-white font-bold text-sm">
                                <span className="material-symbols-outlined text-gold">check_circle</span> Quà tặng sinh nhật đặc
                                biệt
                            </li>
                            <li className="flex items-center gap-3 text-white font-bold text-sm">
                                <span className="material-symbols-outlined text-gold">check_circle</span> Phòng chờ VIP riêng
                                biệt
                            </li>
                            <li className="flex items-center gap-3 text-white font-bold text-sm">
                                <span className="material-symbols-outlined text-gold">check_circle</span> Ưu đãi đối tác toàn
                                quốc
                            </li>
                        </ul>
                        <button className="bg-gold hover:bg-yellow-600 text-black font-black px-12 py-4 rounded-full text-sm uppercase tracking-widest transition-all shadow-lg shadow-gold/20">
                            Đăng Ký Ngay
                        </button>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="vip-card-gradient w-full max-w-md aspect-[1.6/1] rounded-3xl p-8 relative shadow-2xl shadow-gold/5 flex flex-col justify-between overflow-hidden border border-gold/20">
                            <div className="flex justify-between items-start relative z-10">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-gold text-3xl">movie_filter</span>
                                    <span className="text-white font-black text-xl tracking-tighter uppercase italic">CinePass</span>
                                </div>
                                <span className="material-symbols-outlined text-gold text-4xl">contactless</span>
                            </div>
                            <div className="relative z-10">
                                <div className="text-slate-500 text-[8px] uppercase tracking-widest mb-1">Thành Viên Kim Cương
                                </div>
                                <div className="text-white font-mono text-2xl tracking-widest mb-4">4482 9102 3381 0049</div>
                                <div className="flex justify-between items-end">
                                    <div className="text-white font-bold text-sm uppercase">NGUYỄN VĂN A</div>
                                    <div className="text-gold font-black text-xl italic">VIP PLATINUM</div>
                                </div>
                            </div>
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
                            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* liên hệ */}
            <Container className='bg-black' url_img="/contact.jpg" >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="h-1 w-12 bg-primary" />
                            <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em]">Kết nối với chúng
                                tôi</span>
                        </div>
                        <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-12">Thông Tin Liên Hệ</h2>
                        <div className="space-y-10">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-surface-dark rounded-2xl flex items-center justify-center text-primary border border-white/5 shrink-0">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-black text-xs uppercase tracking-widest mb-2">Địa Chỉ Trụ Sở
                                    </h4>
                                    <p className="text-slate-400 text-sm font-medium">Tầng 10, Tòa nhà Pearl Plaza, 561A Điện
                                        Biên Phủ, P.25, Q.Bình Thạnh, TP.HCM</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-surface-dark rounded-2xl flex items-center justify-center text-primary border border-white/5 shrink-0">
                                    <span className="material-symbols-outlined">call</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-black text-xs uppercase tracking-widest mb-2">Tổng Đài (24/7)
                                    </h4>
                                    <p className="text-slate-400 text-sm font-medium">1900 6017</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-surface-dark rounded-2xl flex items-center justify-center text-primary border border-white/5 shrink-0">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-black text-xs uppercase tracking-widest mb-2">Email Hỗ Trợ
                                    </h4>
                                    <p className="text-slate-400 text-sm font-medium">support@cinepass.vn</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="glass-card rounded-3xl p-8 lg:p-12">
                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8">Gửi Tin Nhắn Cho Chúng
                            Tôi</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Họ
                                        và Tên</label>
                                    <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" type="text" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Số
                                        Điện Thoại</label>
                                    <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" type="text" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Vấn
                                    đề cần hỗ trợ</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all appearance-none">
                                    <option className="bg-background-dark">Phản hồi về chất lượng dịch vụ</option>
                                    <option className="bg-background-dark">Hỗ trợ đặt vé online</option>
                                    <option className="bg-background-dark">Hợp tác kinh doanh</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Nội
                                    dung</label>
                                <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all resize-none" rows={4} defaultValue={""} />
                            </div>
                            <button className="w-full bg-primary hover:bg-red-700 text-white font-black py-4 rounded-xl uppercase tracking-widest text-xs transition-all shadow-lg shadow-primary/20">
                                Gửi Ngay
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ClientHome
