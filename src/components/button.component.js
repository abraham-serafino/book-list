export default function Button({
    onClick = () => {},
    color = 'primary',
    additionalClasses = '',
    formSubmit = false,
    children,
}) {
    let backgroundColor = 'bg-gray-50';
    let textColor = 'text-black';

    switch (color) {
        case 'primary':
            backgroundColor = 'bg-gray-300';
            textColor = 'text-black';
            break;
        case 'secondary':
            backgroundColor = 'bg-gray-50';
            textColor = 'text-black';
            break;
    }

    return (
        <button
            type={formSubmit ? 'submit' : undefined}
            className={`py-0.5 w-24 mx-2 my-1 rounded-md focus:border-none active:drop-shadow-none active:shadow-inner drop-shadow-md text-sm ${textColor} ${backgroundColor} ${additionalClasses}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
