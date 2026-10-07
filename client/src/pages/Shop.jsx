import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

function Shop() {

    const [products, setProducts] = useState([]);

    const [search, setSearch] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();

    const [category, setCategory] = useState(
        searchParams.get("category") || "All"
    );

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    // Read category from URL
    useEffect(() => {

        const urlCategory = searchParams.get("category");

        if (urlCategory) {
            setCategory(urlCategory);
        } else {
            setCategory("All");
        }

    }, [searchParams]);


    // Load products
    useEffect(() => {

        const loadProducts = async () => {

            try {

                const data = await getProducts();

                setProducts(data);

            } catch (error) {

                console.error(error);

                setError(
                    "Products could not be loaded. Please make sure the API server and database are running."
                );

            } finally {

                setLoading(false);

            }

        };

        loadProducts();

    }, []);


    // Handle category change
    const handleCategoryChange = (e) => {

        const selectedCategory = e.target.value;

        setCategory(selectedCategory);

        if (selectedCategory === "All") {

            setSearchParams({});

        } else {

            setSearchParams({
                category: selectedCategory,
            });

        }
    };


    // Search + Category filtering
    const filteredProducts = products.filter((product) => {

        const matchesSearch =
            product.name
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" ||
            product.category === category;

        return matchesSearch && matchesCategory;
    });


    return (
        <div className="min-h-screen bg-gray-50">

            {/* Header */}

            <section className="relative overflow-hidden border-b border-white/10 px-8 py-16 text-center text-white">

                <div className="absolute inset-0 bg-[url('https://tse4.mm.bing.net/th/id/OIP.SLWtElcslY-4pa9cLZzppQHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/45" />

                <div className="relative">

                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                    STYLEHUB COLLECTIONS
                </p>

                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    {category === "All"
                        ? "Shop"
                        : `${category}'s Collection`}
                </h1>

                <p className="mt-3 text-gray-300">
                    Find your perfect style
                </p>

                </div>

            </section>


            {/* Search + Filter */}

            <section className="px-8 py-10">

                <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-3xl border border-white/20 bg-white/10 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl md:flex-row">

                    {/* Search */}

                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 rounded-xl border border-white/25 bg-white/90 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-500 focus:border-white focus:ring-4 focus:ring-white/20"
                    />


                    {/* Category */}

                    <select
                        value={category}
                        onChange={handleCategoryChange}
                        className="rounded-xl border border-white/25 bg-white/90 px-4 py-3 text-gray-900 outline-none transition focus:border-white focus:ring-4 focus:ring-white/20"
                    >

                        <option value="All">
                            All Categories
                        </option>

                        <option value="Men">
                            Men
                        </option>

                        <option value="Women">
                            Women
                        </option>

                        <option value="Unisex">
                            Unisex
                        </option>

                        <option value="Accessories">
                            Accessories
                        </option>

                    </select>

                </div>

            </section>


            {/* Products */}

            <section className="mx-auto max-w-6xl px-8 pb-16">

                {loading && (
                    <p className="text-center text-white/80">
                        Loading products...
                    </p>
                )}


                {!loading && error && (

                    <div className="mx-auto max-w-xl rounded-lg border border-red-200 bg-red-50 p-6 text-center text-red-700">

                        <p>{error}</p>

                        <button
                            type="button"
                            onClick={() => window.location.reload()}
                            className="mt-4 bg-black px-5 py-2 text-white hover:bg-gray-800"
                        >
                            Try Again
                        </button>

                    </div>

                )}


                {!loading &&
                    !error &&
                    filteredProducts.length === 0 && (

                        <p className="text-center text-white/70">
                            No products found.
                        </p>

                    )}


                {!loading &&
                    !error &&
                    filteredProducts.length > 0 && (

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                            {filteredProducts.map((product) => (

                                <ProductCard
                                    key={product._id}
                                    product={product}
                                />

                            ))}

                        </div>

                    )}

            </section>

        </div>
    );
}

export default Shop;