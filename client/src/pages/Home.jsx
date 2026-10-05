import { Link } from "react-router-dom";

function Home() {

    return (

        <div className="min-h-screen">

            {/* Hero */}

            <section className="bg-gray-100 px-8 py-32 text-center">

                <p className="mb-4 text-sm uppercase tracking-widest">
                    New Collection
                </p>

                <h1 className="text-5xl font-bold md:text-6xl">
                    Discover Your Style
                </h1>

                <p className="mx-auto mt-6 max-w-xl text-gray-600">
                    Discover modern clothing designed for your everyday style.
                </p>

                <Link
                    to="/shop"
                    className="mt-8 inline-block bg-black px-8 py-4 text-white hover:bg-gray-800"
                >
                    Shop Now
                </Link>

            </section>


            {/* Categories */}

            <section className="px-8 py-16">

                <h2 className="mb-10 text-center text-3xl font-bold">
                    Shop By Category
                </h2>

                <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">

                    <Link
                        to="/shop"
                        className="flex h-64 items-center justify-center bg-gray-200 text-2xl font-bold hover:bg-gray-300"
                    >
                        Men
                    </Link>

                    <Link
                        to="/shop"
                        className="flex h-64 items-center justify-center bg-gray-200 text-2xl font-bold hover:bg-gray-300"
                    >
                        Women
                    </Link>

                    <Link
                        to="/shop"
                        className="flex h-64 items-center justify-center bg-gray-200 text-2xl font-bold hover:bg-gray-300"
                    >
                        Accessories
                    </Link>

                </div>

            </section>

        </div>

    );

}

export default Home;