import clsx from 'clsx';

export default function Column({ additionalClasses, my = true, children }) {
    return (
        <div
            className={clsx(
                `flex flex-col flex-1 min-w-60 max-w-lg mx-1 ${additionalClasses || ''}`,
                {
                    ['my-1']: my,
                },
            )}
        >
            {children}
        </div>
    );
}
