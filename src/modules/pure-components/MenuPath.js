const MenuPath = ({ menuReader }) => ({ item }) => {

    const items = menuReader.getMenuItemPath(item.pathArray);
    items.shift(); // remove ["HOME"]

    const pathItems = items.map(item => {
        const { labelSingleLine, backColor, textColor } = item;
        const label = labelSingleLine.length ? labelSingleLine : '(BLANK)';
        const className = `path-segment back-color-${backColor} text-color-${textColor}`.toLowerCase();
        return <span key={label} className={className}>{label}</span>
    });

    const isPenultimate = i => i === pathItems.length - 1;
    const fullPaths = pathItems.flatMap((el, i) => [el, isPenultimate(i) ? null : ' ▶︎ ']);

    return <span>{fullPaths}</span>
}

export default MenuPath;
