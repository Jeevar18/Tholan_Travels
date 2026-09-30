const notFound = (req, res) => {
    res.status(404).json({
        success: false,
        message: `Route not found: ${req.method} ${req.originalUrl}`,
    });
};

const errorHandler = (error, req, res, next) => {
    const statusCode = error.name === "ValidationError" ? 400 : error.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message: statusCode === 500 ? "Internal server error" : error.message,
        ...(statusCode === 400 && error.errors
            ? { errors: Object.fromEntries(Object.entries(error.errors).map(([field, value]) => [field, value.message])) }
            : {}),
    });
};

module.exports = { notFound, errorHandler };
