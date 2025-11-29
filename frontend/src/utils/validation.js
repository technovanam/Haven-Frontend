export const validatePhone = (phone) => {
    const digits = phone.replace(/\D/g, '');
    return digits.length >= 10;
};
