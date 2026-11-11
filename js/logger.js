export const Logger = {
  log(action, userId = "UNKNOWN", details = {}) {
    console.info(`[${action}]`, { userId, ...details });
  }
};
