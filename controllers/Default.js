'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.apiRestBrandGET = function apiRestBrandGET (req, res, next, xHasuraAdminSecret) {
  Default.apiRestBrandGET(xHasuraAdminSecret)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiRestBrandIdDELETE = function apiRestBrandIdDELETE (req, res, next, body, id, xHasuraAdminSecret) {
  Default.apiRestBrandIdDELETE(body, id, xHasuraAdminSecret)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiRestBrandIdGET = function apiRestBrandIdGET (req, res, next, body, id, xHasuraAdminSecret) {
  Default.apiRestBrandIdGET(body, id, xHasuraAdminSecret)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiRestBrandIdPOST = function apiRestBrandIdPOST (req, res, next, body, id, xHasuraAdminSecret) {
  Default.apiRestBrandIdPOST(body, id, xHasuraAdminSecret)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiRestBrandPOST = function apiRestBrandPOST (req, res, next, body, xHasuraAdminSecret) {
  Default.apiRestBrandPOST(body, xHasuraAdminSecret)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiRestCollectionGET = function apiRestCollectionGET (req, res, next, xHasuraAdminSecret) {
  Default.apiRestCollectionGET(xHasuraAdminSecret)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiRestCollectionIdDELETE = function apiRestCollectionIdDELETE (req, res, next, body, id, xHasuraAdminSecret) {
  Default.apiRestCollectionIdDELETE(body, id, xHasuraAdminSecret)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiRestCollectionIdGET = function apiRestCollectionIdGET (req, res, next, body, id, xHasuraAdminSecret) {
  Default.apiRestCollectionIdGET(body, id, xHasuraAdminSecret)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiRestCollectionIdPOST = function apiRestCollectionIdPOST (req, res, next, body, id, xHasuraAdminSecret) {
  Default.apiRestCollectionIdPOST(body, id, xHasuraAdminSecret)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiRestCollectionPOST = function apiRestCollectionPOST (req, res, next, body, xHasuraAdminSecret) {
  Default.apiRestCollectionPOST(body, xHasuraAdminSecret)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiRestSeasonGET = function apiRestSeasonGET (req, res, next, xHasuraAdminSecret) {
  Default.apiRestSeasonGET(xHasuraAdminSecret)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiRestSeasonIdDELETE = function apiRestSeasonIdDELETE (req, res, next, body, id, xHasuraAdminSecret) {
  Default.apiRestSeasonIdDELETE(body, id, xHasuraAdminSecret)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiRestSeasonIdGET = function apiRestSeasonIdGET (req, res, next, id, xHasuraAdminSecret) {
  Default.apiRestSeasonIdGET(id, xHasuraAdminSecret)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiRestSeasonIdPOST = function apiRestSeasonIdPOST (req, res, next, body, id, xHasuraAdminSecret) {
  Default.apiRestSeasonIdPOST(body, id, xHasuraAdminSecret)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiRestSeasonPOST = function apiRestSeasonPOST (req, res, next, body, xHasuraAdminSecret) {
  Default.apiRestSeasonPOST(body, xHasuraAdminSecret)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
