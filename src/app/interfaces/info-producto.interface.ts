export interface InfoProducto {
    error?: string;
    producto?: {
        codigo?: string;
        producto?: string;
        linea?: string;
        linea_id?: number;
        proveedor?: string;
        descripcion?: string;
        precio_compra?: number;
    }
}

