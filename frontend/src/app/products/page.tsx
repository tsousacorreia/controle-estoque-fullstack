'use client';

import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "@/services/productService";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    barcode: string;
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await getProducts();
        setProducts(response.data);
    };

    const handleDelete = async (id: number) => {
        await deleteProduct(id);
        fetchProducts();
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Produtos</h1>
            <a href="/products/new" className="bg-green-500 text-white px-4 py-2 rounded">Novo Produto</a>
            <ul className="mt-4">
                {products.map(product => (
                    <li key={product.id} className="bg-gray-100 p-1 rounded my-2">
                        {product.name} - R$ {product.price}
                        <button onClick={() => handleDelete(product.id)} className="ml-4 text-red-500">Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}