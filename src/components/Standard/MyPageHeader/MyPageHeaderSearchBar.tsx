import React, {
    ChangeEvent,
    useCallback,
    useDeferredValue,
    useEffect,
    useState,
} from "react";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { MyInputAdornment, MyTextField } from "../../Basic";

interface MyPageHeaderSearchBarProps {
    onSearch: (searchQuery: string) => void;
}

const MyPageHeaderSearchBar = ({ onSearch }: MyPageHeaderSearchBarProps) => {
    const [query, setQuery] = useState("");
    const deferredQuery = useDeferredValue(query);

    const handleOnChange = useCallback(
        (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            setQuery(e?.target?.value);
        },
        []
    );

    useEffect(() => {
        onSearch(deferredQuery);
    }, [deferredQuery]);

    return (
        <MyTextField
            variant="outlined"
            id="outlined-start-adornment"
            placeholder="Search..."
            value={query}
            onChange={handleOnChange}
            InputProps={{
                startAdornment: (
                    <MyInputAdornment position="start">
                        <SearchOutlinedIcon color="inherit" />
                    </MyInputAdornment>
                ),
            }}
            sx={{
                input: {
                    height: "30",
                    py: 1,
                },
            }}
        />
    );
};

export default MyPageHeaderSearchBar;
