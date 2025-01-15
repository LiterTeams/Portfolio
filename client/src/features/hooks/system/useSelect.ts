"use client";
import { useState, useEffect, useCallback } from "react";

import { SelectOptionIF } from "@entities/interfaces/selects";

export default function useSelect(initial: string | null, options: SelectOptionIF[]){
    
    const [initialOption, setInitialOption] = useState<SelectOptionIF | undefined | null>(undefined);
    const [showOptions, setShowOptions] = useState(false);

    const toggleShowOptions = useCallback(() => setShowOptions(!showOptions), [showOptions]);

    const setSelectOption = useCallback((value: string | null) => {
        setInitialOption(options.find(option => option.value == value));
        toggleShowOptions();
    }, [options, toggleShowOptions]);

    useEffect(() => {
        if (!initialOption){
            setInitialOption(options.find(option => option.value == initial));
        };
    },[initial, initialOption, options, setSelectOption])

    return { initialOption, showOptions, toggleShowOptions, setSelectOption }
}