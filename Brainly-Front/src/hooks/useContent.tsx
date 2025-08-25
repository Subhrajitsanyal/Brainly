import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface Content {
    type: any;
    title: string;
    link: any;
}

interface ContentResponse {
    content: Content[];
}

export function useContent() {
    const [contents, setContents] = useState<Content[]>([]);

    function refresh() {
        axios.get<ContentResponse>(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                "Authorization": localStorage.getItem("token") || ""
            }
        })
            .then((response) => {
                setContents(response.data.content);
            })
    }

    useEffect(() => {
        refresh()
        let interval = setInterval(() => {
            refresh()
        }, 10 * 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    return { contents, refresh };
}
