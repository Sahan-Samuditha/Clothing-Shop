import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

function Shop() {

    const [products, setProducts] = useState([]);

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("All");

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

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

            <section className="bg-black px-8 py-16 text-center text-white">

                <h1 className="text-4xl font-bold">
                    Shop
                </h1>

                <p className="mt-3 text-gray-300">
                    Find your perfect style
                </p>

            </section>


            {/* Search + Filter */}

            <section className="px-8 py-10">

                <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row">

                    {/* Search */}

                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 rounded-lg border px-4 py-3 outline-none focus:border-black"
                    />


                    {/* Category */}

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="rounded-lg border px-4 py-3"
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
                    <p className="text-center">
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

                {!loading && !error && filteredProducts.length === 0 && (

                    <p className="text-center text-gray-500">
                        No products found.
                    </p>

                )}


                {!loading && !error && filteredProducts.length > 0 && (

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