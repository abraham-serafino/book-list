export default function List({ children }) {
    return (
        <div className="border-l-2 drop-shadow-lg border-gray-500 rounded">
            <ul>{children}</ul>
        </div>
    );
}
