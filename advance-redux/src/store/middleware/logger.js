export const loggerMiddleware = param => store => next => action => {
    console.log('Logging Type', param); // custom parameter for logging type
    next(action);
};