import clsx from 'clsx';

export default function Row({
    additionalClasses = '',
    justifyContent = 'evenly',
    children,
}) {
    return (
        <div
            className={clsx(`flex flex-wrap`, {
                ['justify-evenly']: justifyContent === 'evenly',
                ['justify-start']: justifyContent === 'start',
                ['justify-end']: justifyContent === 'end',
                [additionalClasses]: additionalClasses,
            })}
        >
            {children}
        </div>
    );
}
