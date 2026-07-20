export const getInitials = (name) => {
    if (!name) return
    return name
        .trim()
        .split("")
        .map((word) => word[0])
        .join()
        .toUpperCase()
        .slice(0, 3)

}

export const colors = [
    "#1677ff",
    "#52c41a",
    "#faad14",
    "#eb2f96",
    "#722ed1"
]