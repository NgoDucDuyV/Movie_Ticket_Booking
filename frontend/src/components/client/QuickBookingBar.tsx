import React from 'react'
import Container from '../Layouts/Container'

const QuickBookingBar = () => {
    return (
        <>
            <Container>
                    <div className="a glass-card rounded-2xl p-2 shadow-2xl border border-white/10">
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
            </Container>
        </>
    )
}

export default QuickBookingBar
