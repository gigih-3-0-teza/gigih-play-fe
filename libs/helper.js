export const currencyFormatter = (value) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(value);
};

export const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const past = new Date(timestamp);
    const timeDifference = now - past; // Difference in milliseconds

    const minute = 60 * 1000; // 1 minute in milliseconds
    const hour = 60 * minute; // 1 hour in milliseconds
    const day = 24 * hour; // 1 day in milliseconds
    const week = 7 * day; // 1 week in milliseconds

    if (timeDifference < minute) {
        return `${Math.floor(timeDifference / 1000)} seconds ago`;
    } else if (timeDifference < hour) {
        return `${Math.floor(timeDifference / minute)} minutes ago`;
    } else if (timeDifference < day) {
        return `${Math.floor(timeDifference / hour)} hours ago`;
    } else if (timeDifference < week) {
        return `${Math.floor(timeDifference / day)} days ago`;
    } else {
        // You can add more conditions here for longer time spans if needed
        return 'Long time ago';
    }
}
