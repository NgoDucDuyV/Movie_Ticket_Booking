import React from 'react'
import Container from '../Container'

const Footer = () => {
    return (
        <footer className="bg-background-dark border-t border-white/10">
            <Container url_img="footer_homee.jpg">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2 text-primary">
                            <span className="material-symbols-outlined text-4xl font-bold">movie_filter</span>
                            <h1 className="text-2xl font-black tracking-tighter text-white uppercase italic">CinePass</h1>
                        </div>
                        <p className="text-slate-500 text-sm max-w-xs font-medium leading-relaxed">Chuỗi rạp chiếu phim hiện đại
                            hàng đầu Việt Nam, mang đến trải nghiệm điện ảnh chân thực và sống động nhất.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 lg:gap-20">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-black text-[10px] uppercase tracking-widest">Dịch Vụ</h4>
                            <a className="text-slate-500 text-xs font-bold hover:text-white transition-colors" href="#">Mua Vé
                                Nhanh</a>
                            <a className="text-slate-500 text-xs font-bold hover:text-white transition-colors" href="#">Lịch
                                Chiếu</a>
                            <a className="text-slate-500 text-xs font-bold hover:text-white transition-colors" href="#">Rạp Toàn
                                Quốc</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-black text-[10px] uppercase tracking-widest">Khám Phá</h4>
                            <a className="text-slate-500 text-xs font-bold hover:text-white transition-colors" href="#">Ưu
                                Đãi</a>
                            <a className="text-slate-500 text-xs font-bold hover:text-white transition-colors" href="#">Tin Điện
                                Ảnh</a>
                            <a className="text-slate-500 text-xs font-bold hover:text-white transition-colors" href="#">Hỏi
                                Đáp</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-black text-[10px] uppercase tracking-widest">Pháp Lý</h4>
                            <a className="text-slate-500 text-xs font-bold hover:text-white transition-colors" href="#">Quy Định
                                Chung</a>
                            <a className="text-slate-500 text-xs font-bold hover:text-white transition-colors" href="#">Bảo
                                Mật</a>
                            <a className="text-slate-500 text-xs font-bold hover:text-white transition-colors" href="#">Liên
                                Hệ</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-black text-[10px] uppercase tracking-widest">Theo Dõi</h4>
                            <div className="flex gap-4">
                                <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all text-white border border-white/10">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z">
                                        </path>
                                    </svg>
                                </button>
                                <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all text-white border border-white/10">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.599 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-20 pt-8 border-t border-white/5 text-center text-slate-600 text-[10px] uppercase tracking-[0.2em] font-black">
                    © 2024 CinePass Entertainment. Toàn bộ bản quyền được bảo lưu.
                </div>
            </Container>
        </footer>
    )
}

export default Footer
