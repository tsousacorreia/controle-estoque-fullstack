'use client';

import { useEffect, useState } from "react";
import { getSuppliers, deleteSupplier } from "@/services/supplierService";

interface Supplier {
    id: number;
    name: string;
    cnpj: string;
    address: string;
    contact: string;
}

export default function SuppliersPage() {
    const [suppliers, setSuppliers] = useState<Supplier[]>([]);

    useEffect(() => {
        fetchSuppliers();
    }, []);

    const fetchSuppliers = async () => {
        const response = await getSuppliers();
        setSuppliers(response.data);
    };

    const handleDelete = async (id: number) => {
        await deleteSupplier(id);
        fetchSuppliers();
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Fornecedores</h1>
            <ul className="mt-4">
                {suppliers.map(supplier => (
                    <li key={supplier.id} className="bg-gray-100 p-2 rounded my-2">
                        {supplier.name} - CNPJ: {supplier.cnpj}
                        <button onClick={() => handleDelete(supplier.id)} className="ml-4 text-red-500">Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}