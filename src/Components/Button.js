

export const Button = (props) => {
    return (
        <div>
            <button className="inline-flex hover:bg-slate-300 hover:text-base items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                {props.title}
            </button>
        </div>
    )
}