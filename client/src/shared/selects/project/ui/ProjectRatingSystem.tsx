"use client";
import Select from "@shared/selects/select/ui/Select";

import { SelectOptionIF } from "@entities/interfaces/selects";

export default function ProjectRatingSystem(){

    const options: SelectOptionIF[] = [
        {label: "All", value: null},
        {label: "0+", value: "G"},
        {label: "6+", value: "PG"},
        {label: "12+", value: "PG13"},
        {label: "16+", value: "R"},
        {label: "18+", value: "NC17"},
    ];

    return <Select queryKey="project_rating_system" initial={null} options={options} prefix="PRS" />
}