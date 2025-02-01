export const formatRelativeTime = (seconds: number) => {
    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

    if (seconds >= 86400) return rtf.format(Math.floor(seconds / 86400), 'day');
    if (seconds >= 3600) return rtf.format(Math.floor(seconds / 3600), 'hour');
    if (seconds >= 60) return rtf.format(Math.floor(seconds / 60), 'minute');
    return rtf.format(-seconds, 'second');
}

export const formatDetailedTime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return [
        days > 0 ? `${days.toString().padStart(2, '0')}` : '',
        hours > 0 ? `${String(hours).padStart(2, '0')}:` : '',
        `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
    ].join('');
}