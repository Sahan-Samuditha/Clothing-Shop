import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";


function ScrollAnimatedBackground({ children, className = "", ...props }) {
    const backgroundRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = backgroundRef.current;

        if (!element) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.15 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={backgroundRef}
            className={`${className} ${isVisible ? "hero-bg-zoom-active" : ""}`}
            {...props}
        >
            {children}
        </div>
    );
}

function ScrollAnimatedImage({ className = "", ...props }) {
    const imageRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = imageRef.current;

        if (!element) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.15 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <img
            ref={imageRef}
            className={`hero-model-rise ${className} ${isVisible ? "hero-model-rise-active" : ""}`}
            {...props}
        />
    );
}

function ScrollAnimatedAction({ children, className = "", ...props }) {
    const actionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = actionRef.current;

        if (!element) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.15 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <Link
            ref={actionRef}
            className={`${className} ${isVisible ? "hero-shop-action-active" : ""}`}
            {...props}
        >
            {children}
        </Link>
    );
}


function Home() {
    return (
        <div className="min-h-screen">

            {/* Hero */}

            <section className="relative -mt-5 min-h-[600px] overflow-hidden">

                {/* Background Image Only */}
                <ScrollAnimatedBackground
                    className="absolute inset-0 bg-cover bg-center hero-bg-zoom"
                    style={{
                        backgroundImage:
                            "url('https://weddingvows.com/wp-content/uploads/2024/01/fast-fashion-concept-with-full-clothing-store-scaled.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Animated Side Image */}
                <ScrollAnimatedImage
                    src="https://pngimg.com/images/dress_PNG56170.png"
                    alt="Fashion dress"
                    className="hero-left-image absolute bottom-0 left-0 hidden h-72 w-56 object-contain object-bottom md:block lg:h-96 lg:w-72"
                />

                {/* Hero Content */}
                <div className="relative z-10 px-8 py-32 text-center">

                    <p className="mb-4 text-sm uppercase tracking-widest text-white text-shadow-lg">
                        New Collection
                    </p>

                    <h1 className="text-5xl font-bold text-white text-shadow-lg md:text-6xl">
                        Discover Your Style
                    </h1>

                    <p className="mx-auto mt-6 max-w-xl text-white text-shadow-lg">
                        Discover modern clothing designed for your everyday style.
                    </p>

                    <div className="flex justify-center">

                        <Link
                            to="/shop"
                            className="group mt-8 inline-flex items-center rounded-full border border-white/40 bg-black/65 px-8 py-4 font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/70 hover:bg-black/80 hover:shadow-[0_16px_36px_rgba(0,0,0,0.35)]"
                        >
                            Shop Now
                            <img
                                src="https://img.icons8.com/ios-filled/20/ffffff/long-arrow-right.png"
                                alt="arrow"
                                className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>

                    </div>

                </div>

            </section>

            {/* Categories */}

            <section className="px-8 py-16">

                <h2 className="mb-10 text-center text-3xl font-bold">
                    Shop By Category
                </h2>

                <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
                 

                    <Link
                        to="/shop/?category=Men"
                       className="flex h-64 items-center justify-center overflow-hidden bg-cover bg-center text-2xl font-bold text-white transition-transform duration-500 ease-out hover:scale-105"
                        style={{
                            backgroundImage:
                               "url('https://tse2.mm.bing.net/th/id/OIP.Xi7mOX4ul3S6gkezgW1fUwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3')",
                         }}
                        >
                       
                            Men
                        
                    
                    </Link>
                    

                   <Link
                        to="/shop/?category=Women"
                         className="flex h-64 items-center justify-center overflow-hidden bg-cover bg-center text-2xl font-bold text-white transition-transform duration-500 ease-out hover:scale-105"
                        style={{
                            backgroundImage:
                               "url('https://wallpaperaccess.com/full/26423577.jpg')",
                         }}
                        >
                           <div classname="bg-shadow-lg">
                                Women
                           </div>
                        </Link>

                    <Link
                        to="/shop/?category=Accessories"
                       className="flex h-64 items-center justify-center overflow-hidden bg-cover bg-center text-2xl font-bold text-white transition-transform duration-500 ease-out hover:scale-105"
                        style={{
                            backgroundImage:
                               "url('https://img.freepik.com/premium-photo/modern-female-clothing-accessories-color-background_392895-296715.jpg')",
                         }}
                        >
                            <div className="bg-shadow-lg">
                                Accessories
                            </div>
                        
                    </Link>

                </div>

                <div className="mx-auto mt-6 grid max-w-6xl gap-6 md:grid-cols-3">

                    <Link
                        to="/shop/?category=Sport"
                        className="flex h-64 items-center justify-center overflow-hidden bg-cover bg-center text-2xl font-bold text-white transition-transform duration-500 ease-out hover:scale-105 md:col-span-2"
                        style={{
                            backgroundImage:
                                "url('https://cdn.wallpapersafari.com/44/93/z9YJw7.jpg')",
                        }}
                    >
                        Sport
                    </Link>

                    <Link
                        to="/shop/?category=Baby"
                        className="flex h-64 items-center justify-center overflow-hidden bg-cover bg-center text-2xl font-bold text-white transition-transform duration-500 ease-out hover:scale-105"
                        style={{
                            backgroundImage:
                                "url('https://tse3.mm.bing.net/th/id/OIP.-PM-A-B9raapUO88_6pMswHaEh?r=0&rs=1&pid=ImgDetMain&o=7&rm=3')",
                        }}
                    >
                        Baby
                    </Link>

                </div>

            </section>

 {/* Hero */}

            <section className="relative min-h-[400px] max-h-[600px] overflow-hidden">

                {/* Background Image Only */}
                <ScrollAnimatedBackground
                    className="absolute inset-0 bg-cover bg-center hero-bg-zoom"
                    style={{
                        backgroundImage:
                            "url('https://img.freepik.com/premium-photo/fashionable-accessories-colored-background-flat-lay-illustration_1088041-21834.jpg?w=2000')",
                    }}
                />

                {/* Dark Overlay */}
                <div className="absolute " />

                {/* Hero Content */}
                <div className="relative z-10 px-8 py-10 md:text-left text-center md:h-[550px] " >

                    <div className="flex  justify-between ">
                         <div className="w-full md:w-1/2 py-15">
                                <p className="mb-4 text-sm font-semibold  uppercase tracking-[0.3em] text-white text-shadow-lg"> 
                                    New Collection </p> 
                                <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl text-shadow-lg">
                                     Discover Your Style </h1> 
                                     <p className="mt-6 max-w-lg text-lg leading-7 text-white text-shadow-lg"> 
                                        Discover modern clothing designed for your everyday style. Find the latest fashion and create your own unique look. 
                                        </p >
                                    <ScrollAnimatedAction
                                        to="/shop"
                                        className="group relative mt-8 inline-flex items-center overflow-hidden rounded-full border border-white/50 bg-black/65 px-8 py-4 font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/80 hover:bg-black/80 hover:shadow-[0_16px_36px_rgba(0,0,0,0.35)]"
                                    >
                                         <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                         <span className="relative">Shop Now</span>
                                         <img src="https://img.icons8.com/ios-filled/20/ffffff/long-arrow-right.png" alt="arrow" className="relative ml-2 transition-transform duration-300 group-hover:translate-x-1" /> 
                                    </ScrollAnimatedAction>

                            </div>
                        <div>

                   
                    <div className="hidden w-1900px justify-end md:flex md:items-left  ">
                         <ScrollAnimatedImage
                                src="https://static.vecteezy.com/system/resources/thumbnails/044/857/725/small_2x/confident-woman-dressed-orange-sweater-pointing-finger-empty-space-on-isolated-transparent-background-free-png.png"
                                alt="arrow" 
                                 className="mr-50 mb-40 inline-block h-1900px w-1900px"
                            />
                            </div>
                        
                        </div>
    </div>
</div>
                
            </section>

            {/* Categories */}

            <section className="px-8 py-16">

                <h2 className="mb-10 text-center text-3xl font-bold">
                    Our brand new arrivals
                </h2>

                <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
                 

                    <Link
                        to="/shop/?category=Men"
                       className="flex h-64 items-center justify-center overflow-hidden bg-cover bg-center text-2xl font-bold text-white transition-transform duration-500 ease-out hover:scale-105"
                        style={{
                            backgroundImage:
                               "url('https://images.wallpapersden.com/image/download/adidas-originals-stylish-clothes-youth_Z2lqbWuUmZqaraWkpJRmZ21lrWZlZ2k.jpg')",
                         }}
                        >
                            
                        Adidas
                    
                    </Link>
                    

                   <Link
                        to="/shop/?category=Women"
                         className="flex h-64 items-center justify-center overflow-hidden bg-cover bg-center text-2xl font-bold text-white transition-transform duration-500 ease-out hover:scale-105"
                        style={{
                            backgroundImage:
                               "url('https://tse1.mm.bing.net/th/id/OIP.ZMYnW8G7SGx03n9MsVytSgAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3')",
                         }}
                        >
                           <div classname="bg-shadow-lg">
                                Moose
                           </div>
                        </Link>

                    <Link
                        to="/shop/?category=Accessories"
                       className="flex h-64 items-center justify-center overflow-hidden bg-cover bg-center text-2xl font-bold text-white transition-transform duration-500 ease-out hover:scale-105"
                        style={{
                            backgroundImage:
                               "url('https://tse3.mm.bing.net/th/id/OIP.Loou1toPbdmQb4AG3UxIgQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3')",
                         }}
                        >
                            <div className="bg-shadow-lg">
                                crocodile
                            </div>
                        
                    </Link>

                   
                    </div>

                     <div className="mx-auto mt-6 grid max-w-6xl gap-6 md:grid-cols-3">

                    <Link
                        to="/shop/?category=Sport"
                        className="flex h-64 items-center justify-center overflow-hidden bg-cover bg-center text-2xl font-bold text-white transition-transform duration-500 ease-out hover:scale-105 "
                        style={{
                            backgroundImage:
                                "url('https://claraclothing.lk/wp-content/uploads/2026/06/img_0927-scaled.jpeg')",
                        }}
                    >
                        Clara Clothing
                    </Link>

                    <Link
                        to="/shop/?category=Baby"
                        className="flex h-64 items-center justify-center overflow-hidden bg-cover bg-center text-2xl font-bold text-white transition-transform duration-500 ease-out hover:scale-105 md:col-span-2"
                        style={{
                            backgroundImage:
                                "url('https://w0.peakpx.com/wallpaper/241/154/HD-wallpaper-dolce-and-gabbana-for-summer-dolce-models-gabbana-men-clothing-fashion.jpg')",
                        }}
                    >
                        Dolce & Gabbana
                    </Link>

                </div>
                    
<div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 py-6">
                   <Link
                        to="/shop/?category=Nike"
                         className="flex h-64 items-center justify-center overflow-hidden bg-cover bg-center text-2xl font-bold text-white transition-transform duration-500 ease-out hover:scale-105"
                        style={{
                            backgroundImage:
                               "url('https://i.pinimg.com/736x/ec/c5/36/ecc53641e23a25095fb6d4291d217f83.jpg')",
                         }}
                        >
                           <div classname="bg-shadow-lg">
                                Nike
                           </div>
                        </Link>

                    
                     <Link
                        to="/shop/?category=Elegant"
                       className="flex h-64 items-center justify-center overflow-hidden bg-cover bg-center text-2xl font-bold text-white transition-transform duration-500 ease-out hover:scale-105"
                        style={{
                            backgroundImage:
                               "url('https://hayathiexclusive.com/wp-content/uploads/2026/02/DSC07499-copy-scaled.jpg')",
                         }}
                        >
                       
                            Elegant
                        
                    
                    </Link>
                    <Link
                        to="/shop/?category=Accessories"
                       className="flex h-64 items-center justify-center overflow-hidden bg-cover bg-center text-2xl font-bold text-white transition-transform duration-500 ease-out hover:scale-105"
                        style={{
                            backgroundImage:
                               "url('https://5.imimg.com/data5/SELLER/Default/2024/6/429736001/AD/EK/JT/36718451/whatsapp-image-2024-06-25-at-12-40-03-pm-500x500.jpeg')",
                         }}
                        >
                            <div className="bg-shadow-lg">
                                Jonology
                            
   </div>                     
                    </Link>


                </div>
                

            </section>

            

        </div>
    );
}

export default Home;