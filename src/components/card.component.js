import H3 from '@/components/h3.component';
import Row from '@/components/row.component';
import Column from '@/components/column.component';

export default function Card({ title = '', children }) {
    return (
        <Column>
            <div className="rounded shadow-md bg-gray-200 border m-1">
                {title && (
                    <Row additionalClasses="bg-gray-300 py-1">
                        <H3>{title}</H3>
                    </Row>
                )}

                <div className="min-h-8">{children}</div>
            </div>
        </Column>
    );
}
