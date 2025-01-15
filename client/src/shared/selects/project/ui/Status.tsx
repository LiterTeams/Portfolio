"use client";
import Select from "@shared/selects/select/ui/Select";

import { SelectOptionIF } from "@entities/interfaces/selects";

export default function Status(){

    const options: SelectOptionIF[] = [
        {label: "All", value: null},
        {label: "Planned", value: "planned"},
        {label: "WIP", value: "wip"},
        {label: "Supported", value: "supported"},
        {label: "Unsupported", value: "unsupported"},
        {label: "Close", value: "close"},
    ];

    return <Select queryKey="status" initial={null} options={options} prefix="Status" />
}