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

export const ConditionalRendering = ({ condition, children, elseChild }) => {
    if (condition) {
        return children
    } else if (elseChild) {
        return elseChild
    }
    return null
}

export const getAvatarColor = (index) => {

    const avatarColors = [
        "#1677ff",
        "#52c41a",
        "#faad14",
        "#f5222d",
        "#722ed1",
        "#13c2c2",
    ];

    return avatarColors[index]
}