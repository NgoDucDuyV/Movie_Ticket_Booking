import Container from '@/components/Layouts/Container'
import React from 'react'
import HeroCarousel from "@/pages/client/home/HeroCarousel"
import NowPlayingSelect from "@/pages/client/home/NowPlayingSection"
import ComingSoonSection from "@/pages/client/home/ComingSoonSection"
import QuickBookingBar from "@/components/client/QuickBookingBar"
function ClientHome() {
    return (
        <>
            {/* Hero Carousel */}
            <HeroCarousel/>
            {/* QuickBookingBar */}
            <QuickBookingBar/>
            {/* NowPlayingSelect */}
            <NowPlayingSelect/>
            {/* ComingSoonSection */}
            <ComingSoonSection/>
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
            <Container className='bg-black' url_img="/contact.jpg" overlay={true} classOverlay="bg-black/40" >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="h-1 w-12 bg-primary" />
                            <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em]">Kết nối với chúng
                                tôi
                            </span>
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
