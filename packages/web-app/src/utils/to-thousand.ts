export const toThousand = (n: number) => {
    const integer = Number(n).toFixed(0);
    return integer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
