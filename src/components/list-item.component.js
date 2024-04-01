import Row from '@/components/row.component';

export default function ListItem({ title = '', subTitle = '', children }) {
    return (
        <li className="text-xs">
            {title !== '' ? (
                <Row
                    justifyContent="start"
                    additionalClasses="text-sm bg-gray-200 px-3 py-1"
                >
                    {title}
                </Row>
            ) : null}

            {subTitle !== '' ? (
                <Row
                    justifyContent="start"
                    additionalClasses="text-xs bg-gray-50 px-3 py-1"
                >
                    {subTitle}
                </Row>
            ) : null}

            {children}
        </li>
    );
}
