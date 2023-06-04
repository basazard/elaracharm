function Table({children}) {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-700 overflow-hidden border">
                {children}
            </table>
        </div>
    );
}

function Thead({ children, className = '' }) {
    return <thead className={`${className} text-sm text-slate-700 uppercase bg-white border-b`}>{children}</thead>;
}

function Th({ children, className = '' }) {
    return (
        <th scope="col" className={`${className} text-center px-6 py-3`}>
            {children}
        </th>
    );
}

function Tbody({ children }) {
    return (
        <tbody className="divide-y divide-gray-200">
            {children}
        </tbody>
    );
}

function Td({ children, className = '' }) {
    return (
        <td className={`${className} px-4 py-3 whitespace-nowrap`}>
            {children}
        </td>
    );
}

function Empty({ children }) {
    return (
        <td className="px-6 py-3">
            {children}
        </td>
    );
}

Table.Thead = Thead;
Table.Th = Th;
Table.Tbody = Tbody;
Table.Td = Td;
Table.Empty = Empty;

export default Table;
