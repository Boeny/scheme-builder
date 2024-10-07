export const getNew = {
    block: () => ({
        type: 'block',
        canHaveTitle: true,
        title: '',
    }),
    if: () => ({
        type: "if",
    }),
};
