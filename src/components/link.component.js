import _Link from 'next/link';

export default function Link({ href = '', children }) {
    return (
        <span className="text-sm text-blue-600 active:text-red-600 underline">
            <_Link href={href}>{children}</_Link>
        </span>
    );
}
