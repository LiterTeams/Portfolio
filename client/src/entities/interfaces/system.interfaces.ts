import { ButtonHTMLAttributes } from "react";
interface _BaseIF {
    readonly id: number;
    readonly created_at: Date;
    updated_at: Date;
}

interface _MetaIF {
    page: number;
    pages: number;
    items: number;
    status: number;
}

interface _ValidateOptionsIF {
    required?: boolean;
    type?: "str" | "int";
    lang?: "Ru" | "Eng";
    format?: "email" | "tel" | "IP";
    lengthMin?: number; lengthMax?: number; lengthBetween?: number[];
    quantityMin?: number; quantityMax?: number; quantityBetween?: number[];
    sizeMin?: string; sizeMax?: string; sizeBetween?: string[];
}

interface _ButtonIF extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLink?: boolean;
    children?: React.ReactNode;
    label?: string;
}

interface _LinkIF {
    isActive?: boolean;
    className?: string;
    href?: string;
    children?: React.ReactNode;
}

interface _ParamsIF {
    page: string;
}

export type {
    _BaseIF,
    _MetaIF,
    _ButtonIF,
    _LinkIF,
    _ParamsIF,
    _ValidateOptionsIF,
} 