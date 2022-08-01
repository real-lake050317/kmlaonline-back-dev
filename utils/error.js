export const createError = (status, message) => {
    const err = new Error();
    err.status = this.status;
    err.message = this.message;
}