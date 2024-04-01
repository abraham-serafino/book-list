import H1 from '@/components/h1.component';
import Row from '@/components/row.component';
import Link from '@/components/link.component';

export default function HomePage() {
    return (
        <main className="m-8">
            <Row>
                <H1>Welcome</H1>
            </Row>

            <Row justifyContent="start">
                <Link href="/books">Book List</Link>
            </Row>
        </main>
    );
}
