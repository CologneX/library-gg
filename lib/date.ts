const INDONESIAN_MONTHS = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
];

export function formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = INDONESIAN_MONTHS[date.getMonth()];
    const year = String(date.getFullYear());

    return `${day} ${month} ${year}`;
}