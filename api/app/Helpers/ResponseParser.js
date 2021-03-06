"use strict"

class ResponseParser {
  apiCollection(items) {
    const output = {
      meta: {
        status: 200,
        message: "Data retrieval successfully",
        total: items.total,
        perPage: items.perPage,
        page: items.page,
        lastPage: items.lastPage,
      },
      data: items.data,
    }
    return output
  }

  apiCreated(data) {
    const output = {
      meta: {
        status: 201,
        message: "Created successfully",
      },
      data,
    }
    return output
  }

  apiUpdated(data) {
    const output = {
      meta: {
        status: 200,
        message: "Updated successfully",
      },
      data,
    }
    return output
  }

  apiDeleted() {
    const output = {
      meta: {
        status: 200,
        message: "Deleted successfully",
      },
    }
    return output
  }

  apiItem(data) {
    const output = {
      meta: {
        status: 200,
        message: "Data retrieval successfully",
      },
      data,
    }
    return output
  }

  apiNotFound() {
    const meta = {
      status: 400,
      message: "Data not found",
    }
    return { meta }
  }

  apiValidationFailed(data, message) {
    const output = {
      meta: {
        status: 422,
        message: message || "Validation failed",
      },
      details: data,
    }
    return output
  }

  /**
   * Error Response
   */

  errorResponse(msg) {
    return {
      meta: {
        status: 400,
        message: msg,
      },
    }
  }

  /**
   * Unauthorized
   */

  unauthorizedResponse() {
    return {
      meta: {
        status: 401,
        message: "Unauthorized",
      },
    }
  }

  /**
   * Success Response
   */

  successResponse(data, msg) {
    return {
      meta: {
        status: 200,
        message: msg,
      },
      data,
    }
  }

  /**
   * Forbidden Response
   */

  forbiddenResponse() {
    return {
      meta: {
        status: 403,
        message: "Forbidden",
      },
    }
  }

  /**
   * Unknown Error Response
   */

  unknownError() {
    return {
      meta: {
        status: 500,
        message: "unknownError",
      },
    }
  }
}

module.exports = new ResponseParser()
