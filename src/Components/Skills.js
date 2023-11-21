

export const Skills = ({ skill }) => {

    return (
        <div className="d-flex flex-wrap">
            {skill && skill.map((item, index) => (
                <div className="m-2">
                    <span class="p-2 border-secondary-subtle rounded-1 bg-secondary-subtle">{item}</span>
                </div>
            ))}

        </div>
    )
}