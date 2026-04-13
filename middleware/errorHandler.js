module.exports = (err, req, res, next) => {
    console.error(err);

    let statusCode = 500;
    let message = "Internal Server Error";

    
    if (err.name === "SequelizeValidationError") {
        statusCode = 400;
        message = err.errors.map(e => e.message).join(", ");
    }

    
    if (err.name === "SequelizeForeignKeyConstraintError") {
        statusCode = 400;
        message = "Invalid reference: related record does not exist";
    }


    if (err.statusCode) {
        statusCode = err.statusCode;
    }

    if (err.message && statusCode === 500) {
        message = err.message;
    }

    res.status(statusCode).json({
        success: false,
        error: message
    });
};