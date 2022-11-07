import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Dental Service`;
    }, [title])
};

export default useTitle;