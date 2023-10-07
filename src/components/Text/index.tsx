interface IText {
    type?: "title" | "subtitle" | "label" | "big" | "small"
    children: React.ReactNode | React.ReactNode[] | string
    italic?: boolean
    bold?: boolean
}

export default function Text({ type, italic, bold, children }: IText) {

    let i
    let b

    if (italic) {
        i = 'italic'
    } 
    if (bold) (
        b = 'font-bold'
    )

    let defaultClasses = `flex items-center flex-row flex-wrap ${i} ${b}`

    switch (type) {
        case 'title': return <h1 className={`text-2xl ${defaultClasses}`}>{children}</h1>;
        case 'subtitle': return <h2 className={`text-xl ${defaultClasses}`}>{children}</h2>;
        case 'label': return <h3 className={`text-lg ${defaultClasses}`}>{children}</h3>;
        case 'big': return <p className={`text-base ${defaultClasses}`}>{children}</p>;
        case 'small': return <small className={`text-xs ${defaultClasses}`}>{children}</small>;
        default: return <p className={`text-sm ${defaultClasses}`}>{children}</p>
    }
}