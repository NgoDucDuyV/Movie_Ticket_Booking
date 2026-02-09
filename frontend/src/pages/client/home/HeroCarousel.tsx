import Container from '../../../components/Layouts/Container'
import { Flame, Play, Ticket } from 'lucide-react'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, } from 'motion/react';
import { cn } from '@/lib/utils';

// const heroMovies = [
//     {
//         id: 1,
//         title: "HÀNH TINH CÁT",
//         highlight: "CÁT: PHẦN HAI",
//         description:
//             "Một kiệt tác điện ảnh không thể bỏ lỡ. Hãy theo chân Paul Atreides trong hành trình báo thù và định đoạt số phận của thiên hà.",
//         // backdrop ngang 16:9
//         image:
//             "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
//         status: "Đang Chiếu Rạp",
//         trailer: "https://youtube.com/watch?v=Way9Dexny3w",
//         bookingUrl: "/booking/dune-2",
//     },

//     {
//         id: 2,
//         title: "KUNG FU PANDA",
//         highlight: "PHẦN 4",
//         description:
//             "Po trở lại với hành trình hài hước và những pha hành động võ thuật đỉnh cao.",
//         image:
//             "https://image.tmdb.org/t/p/original/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
//         status: "Phim Hot",
//         trailer: "https://youtube.com/",
//         bookingUrl: "/booking/kungfu-panda-4",
//     },

//     {
//         id: 3,
//         title: "AVENGERS",
//         highlight: "SECRET WARS",
//         description:
//             "Cuộc chiến đa vũ trụ bùng nổ. Tất cả anh hùng hội tụ trong trận chiến cuối cùng.",
//         image:
//             "https://image.tmdb.org/t/p/original/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
//         status: "Sắp Chiếu",
//         trailer: "https://youtube.com/",
//         bookingUrl: "/booking/avengers",
//     },
//     {
//         id: 3,
//         title: "AVENGERS",
//         highlight: "SECRET WARS",
//         description:
//             "Cuộc chiến đa vũ trụ bùng nổ. Tất cả anh hùng hội tụ trong trận chiến cuối cùng.",
//         image:
//             "https://image.tmdb.org/t/p/original/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
//         status: "Sắp Chiếu",
//         trailer: "https://youtube.com/",
//         bookingUrl: "/booking/avengers",
//     },
// ];

export type THeroMovies = {
    id: number | string,
    title: string,
    highlight: string,
    description: string,
    image: string,
    status: string,
    trailer: string,
    bookingUrl: string,
}

export const heroMovies: THeroMovies[] = [
    {
        id: 1,
        title: "HÀNH TINH CÁT",
        highlight: "PHẦN HAI",
        description:
            "Một kiệt tác điện ảnh không thể bỏ lỡ. Theo chân Paul Atreides trong hành trình báo thù và định đoạt số phận của thiên hà.",
        image:
            "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
        status: "Đang Chiếu",
        trailer: "https://youtube.com/watch?v=Way9Dexny3w",
        bookingUrl: "/booking/dune-2",
    },

    {
        id: 2,
        title: "MARIO OPTION",
        highlight: "PHẦN 4",
        description:
            "Po trở lại với hành trình hài hước và những pha hành động võ thuật đỉnh cao.",
        image:
            "https://image.tmdb.org/t/p/original/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
        status: "Phim Hot",
        trailer: "https://youtube.com/",
        bookingUrl: "/booking/kung-fu-panda-4",
    },

    {
        id: 3,
        title: "AVENGERS",
        highlight: "ENDGAME",
        description:
            "Cuộc chiến sinh tử của các siêu anh hùng để cứu lấy vũ trụ trước mối đe doạ hủy diệt.",
        image:
            "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
        status: "Phim Hot",
        trailer: "https://youtube.com/",
        bookingUrl: "/booking/avengers-endgame",
    },

    // +7 phim hot banner ngang
    {
        id: 4,
        title: "GODZILLA x KONG",
        highlight: "THE NEW EMPIRE",
        description:
            "Hai Titan huyền thoại hợp lực đối đầu với thế lực bí ẩn trỗi dậy từ lòng đất.",
        image:
            "https://image.tmdb.org/t/p/original/7ZP8HtgOIDaBs12krXgUIygqEsy.jpg",
        status: "Phim Hot",
        trailer: "https://youtube.com/",
        bookingUrl: "/booking/godzilla-x-kong",
    },

    {
        id: 5,
        title: "INSIDE OUT",
        highlight: "PHẦN 2",
        description:
            "Riley bước vào tuổi teen, và những cảm xúc mới khiến mọi thứ trở nên bùng nổ hơn bao giờ hết.",
        image:
            "https://image.tmdb.org/t/p/original/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg",
        status: "Đang Chiếu",
        trailer: "https://youtube.com/",
        bookingUrl: "/booking/inside-out-2",
    },

    {
        id: 6,
        title: "DEADPOOL",
        highlight: "& WOLVERINE",
        description:
            "Bộ đôi 'lầy' nhất màn ảnh trở lại với loạt tình huống khó đỡ và những pha combat cực cháy.",
        image:
            "https://image.tmdb.org/t/p/original/6Xfj8wD7GoEysgcFayRKd6DDc2A.jpg",
        status: "Phim Hot",
        trailer: "https://youtube.com/",
        bookingUrl: "/booking/deadpool-wolverine",
    },

    {
        id: 7,
        title: "JOHN WICK",
        highlight: "CHAPTER 4",
        description:
            "Sát thủ huyền thoại tiếp tục cuộc truy sát nghẹt thở với những màn hành động mãn nhãn.",
        image:
            "https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        status: "Phim Hot",
        trailer: "https://youtube.com/",
        bookingUrl: "/booking/john-wick-4",
    },

    {
        id: 8,
        title: "SPIDER-MAN",
        highlight: "NO WAY HOME",
        description:
            "Đa vũ trụ mở ra, Peter đối mặt với lựa chọn khó khăn nhất đời mình.",
        image:
            "https://image.tmdb.org/t/p/original/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg",
        status: "Phim Hot",
        trailer: "https://youtube.com/",
        bookingUrl: "/booking/spider-man-no-way-home",
    },

    {
        id: 9,
        title: "OPPENHEIMER",
        highlight: "THE STORY",
        description:
            "Câu chuyện ám ảnh về người đứng sau bom nguyên tử và cái giá của tham vọng khoa học.",
        image:
            "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        status: "Top Rating",
        trailer: "https://youtube.com/",
        bookingUrl: "/booking/oppenheimer",
    },

    {
        id: 10,
        title: "INTERSTELLAR",
        highlight: "SPACE JOURNEY",
        description:
            "Hành trình xuyên không gian tìm sự sống mới cho nhân loại — giàu cảm xúc và choáng ngợp.",
        image:
            "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        status: "Classic",
        trailer: "https://youtube.com/",
        bookingUrl: "/booking/interstellar",
    },
];

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setslides] = useState<THeroMovies[]>(heroMovies)
    useEffect(() => {

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Auto-advance every 5 seconds

        return () => clearInterval(timer);
    }, []);
    return (
        <>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7 }}
                >
                    <Container
                        className="h-[100vh] py-10 overflow-hidden pt-20"
                        url_img={`${slides[currentSlide]?.image}`}
                    >
                        <div className="relative w-full my-auto px-6 flex flex-col justify-center items-start">
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg shadow-primary/30">
                                    <span className="material-symbols-outlined text-sm">
                                        <Flame />
                                    </span>
                                    {slides[currentSlide]?.status}
                                </div>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-6 tracking-tighter uppercase max-w-4xl">
                                    {slides[currentSlide]?.title}
                                    <br />
                                    <span className="text-primary italic">
                                        {slides[currentSlide]?.highlight}
                                    </span>
                                </h1>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <p className="text-lg text-slate-300 max-w-xl mb-10 leading-relaxed font-medium">
                                    {slides[currentSlide]?.description}
                                </p>
                            </motion.p>
                            <div className="flex flex-wrap gap-5">
                                <motion.button
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >
                                    <button className="bg-primary hover:bg-red-700 text-white px-10 py-4 rounded-full font-black text-sm transition-all flex items-center gap-3 shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 uppercase tracking-widest">
                                        <span className="material-symbols-outlined">
                                            <Ticket />
                                        </span>
                                        Đặt Vé Ngay
                                    </button>
                                </motion.button>
                                <motion.button
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >
                                    <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-10 py-4 rounded-full font-black text-sm transition-all flex items-center gap-3 hover:scale-105 active:scale-95 uppercase tracking-widest">
                                        <span className="material-symbols-outlined">
                                            <Play />
                                        </span>
                                        Xem Trailer
                                    </button>
                                </motion.button>
                            </div>
                        </div>
                        {/* Slide Indicators */}
                        <div
                            className={cn(
                                "absolute z-30 flex items-center gap-4",

                                "bottom-1",

                                "inset-x-0 md:bottom-20 flex-row justify-center",

                                "lg:left-auto lg:translate-x-0 lg:right-10 lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto lg:flex-col",

                                "lg:right-20"
                            )}
                        >
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className="group relative"
                                    aria-label={`Go to slide ${index + 1}`}
                                >
                                    <div className={`h-1 rounded-full shadow-2xl transition-all duration-300 ${index === currentSlide
                                        ? 'lg:h-12 lg:w-1.5 sl:w-6 w-2 h-1.5 bg-primary'
                                        : 'lg:h-8 lg:w-1.5 sl:w-4 w-1.5 h-1.5 bg-white/40 group-hover:bg-white/60'
                                        }`} />
                                </button>
                            ))}
                        </div>
                    </Container>
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default HeroCarousel
