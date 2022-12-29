import { getFooterCopy, getFullYear, getLatestNotification } from './utils';

test('getFullYear returns right year', () => {
    expect(getFullYear()).toBe(2022);
});

test('getFooterCopy returns right text when true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getFooterCopy returns right text when false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification returns rigth text', () => {
    expect(getLatestNotification().__html).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});