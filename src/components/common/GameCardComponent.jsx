export default function GameCardComponent(title, category) {


    return (
        <section>
            <h1>Lista Giochi</h1>
            <div>
                <h2>{title}</h2>
                <h4>{category}</h4>
            </div>
        </section>
    )
}