import Column from '@/components/column.component';

export default function Input({ name, label, value, onChange, placeholder }) {
    return (
        <Column>
            <label className="text-xs">{label}</label>
            <input
                className="rounded shadow-cyan-100 bg-gray-50"
                id={name}
                {...{ name, value, onInput: onChange, placeholder }}
            />
        </Column>
    );
}
