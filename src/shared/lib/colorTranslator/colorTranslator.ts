type RGB = {r: number, g: number, b: number};

export function hexToRgbA(hex: string, alpha: number): string {
    let c: string[];
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        const num = parseInt(c.join(''), 16);
        // eslint-disable-next-line no-bitwise
        return `rgba(${[(num >> 16) & 255, (num >> 8) & 255, num & 255].join(',')},${alpha})`;
    }
    throw new Error('Bad Hex');
}

export function RGBToHex(rgb: RGB): string {
    let r = rgb.r.toString(16);
    let g = rgb.g.toString(16);
    let b = rgb.b.toString(16);

    if (r.length === 1) r = `0${r}`;
    if (g.length === 1) g = `0${g}`;
    if (b.length === 1) b = `0${b}`;

    return `#${r}${g}${b}`;
}
