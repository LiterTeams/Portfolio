
interface SelectOptionIF {
    label: string;
    value: string | null;
    icon?: React.ReactNode;
}

interface SelectOptionsIF {
    queryKey: string;
    initial?: string | null;
    prefix?: string;
    options: SelectOptionIF[];
    multiple?: boolean;
}

export type { SelectOptionIF, SelectOptionsIF }