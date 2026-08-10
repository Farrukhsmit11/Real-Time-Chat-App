export const getInitials = (name) => {
    if (!name) return "";
    return name
        .trim()
        .split(/\s+/)
        .map((word) => word[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)

}

export const colors = [
    "#1677ff",
    "#52c41a",
    "#faad14",
    "#eb2f96",
    "#722ed1"
]

export const ConditionalRendering = ({condition, children, elseChild}) => {
    if (condition) {
        return children
    } else if (elseChild) {
        return elseChild
    }
    return null
}