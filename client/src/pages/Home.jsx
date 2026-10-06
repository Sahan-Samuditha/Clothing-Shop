import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="min-h-screen">

            {/* Hero */}

            <section className="relative min-h-[600px] overflow-hidden">

                {/* Background Image Only */}
                <div
                    className="absolute inset-0 bg-cover bg-center hero-bg-zoom"
                    style={{
                        backgroundImage:
                            "url('https://weddingvows.com/wp-content/uploads/2024/01/fast-fashion-concept-with-full-clothing-store-scaled.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20" />

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
                            className="mt-8 inline-block bg-black px-8 py-4 text-white shadow-lg hover:bg-gray-800"
                        >
                            Shop Now
                            <img
                                src="https://img.icons8.com/ios-filled/20/ffffff/long-arrow-right.png"
                                alt="arrow"
                                className="ml-2 inline-block"
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

            </section>

 {/* Hero */}

            <section className="relative min-h-[600px] max-h-[500px] overflow-hidden">

                {/* Background Image Only */}
                <div
                    className="absolute inset-0 bg-cover bg-center hero-bg-zoom"
                    style={{
                        backgroundImage:
                            "url('https://virtualbackgrounds.site/wp-content/uploads/2021/02/womens-clothing-store.jpg')",
                    }}
                />

                {/* Dark Overlay */}
                <div className="absolute " />

                {/* Hero Content */}
                <div className="relative z-10 px-8 py-32 md:text-left text-center">

                    <div className="flex  justify-between">
                         <div className="w-full md:w-1/2">
                                <p className="mb-4 text-sm font-semibold  uppercase tracking-[0.3em] text-white"> 
                                    New Collection </p> 
                                <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl">
                                     Discover Your Style </h1> 
                                     <p className="mt-6 max-w-lg text-lg leading-7 text-white"> 
                                        Discover modern clothing designed for your everyday style. Find the latest fashion and create your own unique look. 
                                        </p> <Link to="/shop" className="mt-8 inline-flex items-center bg-black px-8 py-4 font-semibold text-white transition duration-300 hover:bg-gray-800" >
                                         Shop Now 
                                         <img src="https://img.icons8.com/ios-filled/20/ffffff/long-arrow-right.png" alt="arrow" className="ml-2 h-1900px" /> 
                                         </Link>

                            </div>
                        <div>

                   
                    <div className="hidden w-1900px justify-end md:flex md:items-left ">
                         <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/044/857/725/small_2x/confident-woman-dressed-orange-sweater-pointing-finger-empty-space-on-isolated-transparent-background-free-png.png"
                                alt="arrow"
                                 className="ml-2 inline-block h-1900px w-1900px"
                            />
                            </div>
                        
                        </div>
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

            </section>

            

        </div>
    );
}

export default Home;