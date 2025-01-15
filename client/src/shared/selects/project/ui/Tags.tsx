"use client";
import Select from "@shared/selects/select/ui/Select";

import { SelectOptionIF } from "@entities/interfaces/selects";

export default function Tags(){

    const options: SelectOptionIF[] = [
        {label: "All", value: null},
        {label: "Site", value: "site"},
        {label: "React", value: "react"},
        {label: "NextJS", value: "nextjs"},
        {label: "NestJS", value: "nestjs"},
        {label: "Prisma", value: "prisma"},
        {label: "Game", value: "game"},
        {label: "PHP", value: "php"},
        {label: "Laravel", value: "laravel"},
        {label: "C#", value: "c#"},
        {label: "C++", value: "c++"},
    ];

    return <Select queryKey="tags" initial={null} options={options} prefix="Tags" />
}