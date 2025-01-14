'use client';

import { useState, useEffect } from "react";
import { getProducts } from "@/services/productService";
import { getSuppliers } from "@/services/supplierService";
import { associateProductSupplier } from "@/services/associationService";

export default function AssociationsPage() {
    const [products, setProducts] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [productId, setProductId] = useState<number>();
    const [supplierId, setSupplierId] = useState<number>();

    useEffect(() => {
        getProducts().then(res => setProducts(res.data));
        getSuppliers().then(res => setSuppliers(res.data));
    }, []);

    const handleAssociate = () => {
        if (productId && supplierId) {
            associateProductSupplier(productId, supplierId);
            alert('Associação realizada com sucesso!');
        }
    };

    return (
        <div className="p-6">
            <h1 className="texte-2xl font-bold">Associar Produto e Fornecedor</h1>
            <button onClick={handleAssociate} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Associar</button>
        </div>
    );
}