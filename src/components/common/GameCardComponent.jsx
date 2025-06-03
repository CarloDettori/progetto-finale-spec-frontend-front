export default function GameCardComponent({ title, category }) {

    return (
        <div className="bg-white p-6 rounded-xl shadow-xl">
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 e">{title}</h2>
            <h4 className="font-normal text-gray-700 dark:text-gray-600">{category}</h4>
        </div >



    )
}