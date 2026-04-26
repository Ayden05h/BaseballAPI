module.exports = (err, req, res, next) => {
    console.error(err);

    let statusCode = 500;
    let message = "Internal Server Error";

    // Sequelize validation errors
    if (err.name === "SequelizeValidationError") {
        statusCode = 400;
        message = err.errors.map(e => e.message).join(", ");
    }

    // Foreign key constraint errors
    else if (err.name === "SequelizeForeignKeyConstraintError") {
        statusCode = 400;
        message = "Invalid reference: related record does not exist";
    }

    // Custom errors with statusCode
    else if (err.statusCode) {
        statusCode = err.statusCode;
        message = err.message;
    }

    res.status(statusCode).json({
        success: false,
        error: message
    });
};