
export function setColor(priority: string): string {
    if (priority === 'High') {
        return '#de2e21';
    } else if (priority === 'Medium') {
        return '#dec821';
    } else if (priority === 'Low') {
        return '#21dea2';
    } else {
        return '';
    }
}