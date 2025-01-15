'use strict';


/**
 * brand
 * *** The GraphQl query for this endpoint is: ``` graphql query brand {   brand {     avatar     id     name   } }  ```
 *
 * xHasuraAdminSecret String Your x-hasura-admin-secret will be used for authentication of the API request. (optional)
 * returns inline_response_200_10
 **/
exports.apiRestBrandGET = function(xHasuraAdminSecret) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "brand" : [ {
    "name" : "name",
    "avatar" : "avatar",
    "id" : "id"
  }, {
    "name" : "name",
    "avatar" : "avatar",
    "id" : "id"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * delete_brand_by_pk
 * *** The GraphQl query for this endpoint is: ``` graphql mutation delete_brand_by_pk($id: String!) {   delete_brand_by_pk(id: $id) {     avatar     id     name   } }  ```
 *
 * body Brand_id_body_2 Query parameters can also be provided in the request body as a JSON object (optional)
 * id String _\"id\" is required (enter it either in parameters or request body)_
 * xHasuraAdminSecret String Your x-hasura-admin-secret will be used for authentication of the API request. (optional)
 * returns inline_response_200_14
 **/
exports.apiRestBrandIdDELETE = function(body,id,xHasuraAdminSecret) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "delete_brand_by_pk" : {
    "name" : "name",
    "avatar" : "avatar",
    "id" : "id"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * brand_by_pk
 * *** The GraphQl query for this endpoint is: ``` graphql query brand_by_pk($id: String!) {   brand_by_pk(id: $id) {     avatar     id     name   } }  ```
 *
 * body Brand_id_body Query parameters can also be provided in the request body as a JSON object (optional)
 * id String _\"id\" is required (enter it either in parameters or request body)_
 * xHasuraAdminSecret String Your x-hasura-admin-secret will be used for authentication of the API request. (optional)
 * returns inline_response_200_12
 **/
exports.apiRestBrandIdGET = function(body,id,xHasuraAdminSecret) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "brand_by_pk" : {
    "name" : "name",
    "avatar" : "avatar",
    "id" : "id"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update_brand_by_pk
 * *** The GraphQl query for this endpoint is: ``` graphql mutation update_brand_by_pk($id: String!, $object: brand_set_input!) {   update_brand_by_pk(pk_columns: {id: $id}, _set: $object) {     avatar     id     name   } }  ```
 *
 * body Brand_id_body_1 Query parameters can also be provided in the request body as a JSON object
 * id String _\"id\" is required (enter it either in parameters or request body)_
 * xHasuraAdminSecret String Your x-hasura-admin-secret will be used for authentication of the API request. (optional)
 * returns inline_response_200_13
 **/
exports.apiRestBrandIdPOST = function(body,id,xHasuraAdminSecret) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "update_brand_by_pk" : {
    "name" : "name",
    "avatar" : "avatar",
    "id" : "id"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * insert_brand_one
 * *** The GraphQl query for this endpoint is: ``` graphql mutation insert_brand_one($object: brand_insert_input!) {   insert_brand_one(object: $object) {     avatar     id     name   } }  ```
 *
 * body Rest_brand_body Query parameters can also be provided in the request body as a JSON object
 * xHasuraAdminSecret String Your x-hasura-admin-secret will be used for authentication of the API request. (optional)
 * returns inline_response_200_11
 **/
exports.apiRestBrandPOST = function(body,xHasuraAdminSecret) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "insert_brand_one" : {
    "name" : "name",
    "avatar" : "avatar",
    "id" : "id"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * collection
 * *** The GraphQl query for this endpoint is: ``` graphql query collection {   collection {     brand_id     cover     createdAt     id     looks     name     seasonId     type     updatedAt   } }  ```
 *
 * xHasuraAdminSecret String Your x-hasura-admin-secret will be used for authentication of the API request. (optional)
 * returns inline_response_200_5
 **/
exports.apiRestCollectionGET = function(xHasuraAdminSecret) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "collection" : [ {
    "cover" : "cover",
    "createdAt" : "",
    "looks" : "",
    "seasonId" : "seasonId",
    "name" : "name",
    "id" : "id",
    "type" : "",
    "brand_id" : "brand_id"
  }, {
    "cover" : "cover",
    "createdAt" : "",
    "looks" : "",
    "seasonId" : "seasonId",
    "name" : "name",
    "id" : "id",
    "type" : "",
    "brand_id" : "brand_id"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * delete_collection_by_pk
 * *** The GraphQl query for this endpoint is: ``` graphql mutation delete_collection_by_pk($id: String!) {   delete_collection_by_pk(id: $id) {     brand_id     cover     createdAt     id     looks     name     seasonId     type     updatedAt   } }  ```
 *
 * body Collection_id_body_2 Query parameters can also be provided in the request body as a JSON object (optional)
 * id String _\"id\" is required (enter it either in parameters or request body)_
 * xHasuraAdminSecret String Your x-hasura-admin-secret will be used for authentication of the API request. (optional)
 * returns inline_response_200_9
 **/
exports.apiRestCollectionIdDELETE = function(body,id,xHasuraAdminSecret) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "delete_collection_by_pk" : {
    "cover" : "cover",
    "createdAt" : "",
    "looks" : "",
    "seasonId" : "seasonId",
    "name" : "name",
    "id" : "id",
    "type" : "",
    "brand_id" : "brand_id"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * collection_by_pk
 * *** The GraphQl query for this endpoint is: ``` graphql query collection_by_pk($id: String!) {   collection_by_pk(id: $id) {     brand_id     cover     createdAt     id     looks     name     seasonId     type     updatedAt   } }  ```
 *
 * body Collection_id_body Query parameters can also be provided in the request body as a JSON object (optional)
 * id String _\"id\" is required (enter it either in parameters or request body)_
 * xHasuraAdminSecret String Your x-hasura-admin-secret will be used for authentication of the API request. (optional)
 * returns inline_response_200_7
 **/
exports.apiRestCollectionIdGET = function(body,id,xHasuraAdminSecret) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "collection_by_pk" : {
    "cover" : "cover",
    "createdAt" : "",
    "looks" : "",
    "seasonId" : "seasonId",
    "name" : "name",
    "id" : "id",
    "type" : "",
    "brand_id" : "brand_id"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update_collection_by_pk
 * *** The GraphQl query for this endpoint is: ``` graphql mutation update_collection_by_pk($id: String!, $object: collection_set_input!) {   update_collection_by_pk(pk_columns: {id: $id}, _set: $object) {     brand_id     cover     createdAt     id     looks     name     seasonId     type     updatedAt   } }  ```
 *
 * body Collection_id_body_1 Query parameters can also be provided in the request body as a JSON object
 * id String _\"id\" is required (enter it either in parameters or request body)_
 * xHasuraAdminSecret String Your x-hasura-admin-secret will be used for authentication of the API request. (optional)
 * returns inline_response_200_8
 **/
exports.apiRestCollectionIdPOST = function(body,id,xHasuraAdminSecret) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "update_collection_by_pk" : {
    "cover" : "cover",
    "createdAt" : "",
    "looks" : "",
    "seasonId" : "seasonId",
    "name" : "name",
    "id" : "id",
    "type" : "",
    "brand_id" : "brand_id"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * insert_collection_one
 * *** The GraphQl query for this endpoint is: ``` graphql mutation insert_collection_one($object: collection_insert_input!) {   insert_collection_one(object: $object) {     brand_id     cover     createdAt     id     looks     name     seasonId     type     updatedAt   } }  ```
 *
 * body Rest_collection_body Query parameters can also be provided in the request body as a JSON object
 * xHasuraAdminSecret String Your x-hasura-admin-secret will be used for authentication of the API request. (optional)
 * returns inline_response_200_6
 **/
exports.apiRestCollectionPOST = function(body,xHasuraAdminSecret) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "insert_collection_one" : {
    "cover" : "cover",
    "createdAt" : "",
    "looks" : "",
    "seasonId" : "seasonId",
    "name" : "name",
    "id" : "id",
    "type" : "",
    "brand_id" : "brand_id"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * season
 * *** The GraphQl query for this endpoint is: ``` graphql query season {   season {     id     name   } }  ```
 *
 * xHasuraAdminSecret String Your x-hasura-admin-secret will be used for authentication of the API request. (optional)
 * returns inline_response_200
 **/
exports.apiRestSeasonGET = function(xHasuraAdminSecret) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "season" : [ {
    "name" : "name",
    "id" : "id"
  }, {
    "name" : "name",
    "id" : "id"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * delete_season_by_pk
 * *** The GraphQl query for this endpoint is: ``` graphql mutation delete_season_by_pk($id: String!) {   delete_season_by_pk(id: $id) {     id     name   } }  ```
 *
 * body Season_id_body_1 Query parameters can also be provided in the request body as a JSON object (optional)
 * id String _\"id\" is required (enter it either in parameters or request body)_
 * xHasuraAdminSecret String Your x-hasura-admin-secret will be used for authentication of the API request. (optional)
 * returns inline_response_200_4
 **/
exports.apiRestSeasonIdDELETE = function(body,id,xHasuraAdminSecret) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "delete_season_by_pk" : {
    "name" : "name",
    "id" : "id"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * season_by_pk
 * *** The GraphQl query for this endpoint is: ``` graphql query season_by_pk($id: String!) {   season_by_pk(id: $id) {     id     name   } }  ```
 *
 * id String _\"id\" is required (enter it either in parameters or request body)_
 * xHasuraAdminSecret String Your x-hasura-admin-secret will be used for authentication of the API request. (optional)
 * returns inline_response_200_2
 **/
exports.apiRestSeasonIdGET = function(id,xHasuraAdminSecret) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "season_by_pk" : {
    "name" : "name",
    "id" : "id"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update_season_by_pk
 * *** The GraphQl query for this endpoint is: ``` graphql mutation update_season_by_pk($id: String!, $object: season_set_input!) {   update_season_by_pk(pk_columns: {id: $id}, _set: $object) {     id     name   } }  ```
 *
 * body Season_id_body Query parameters can also be provided in the request body as a JSON object
 * id String _\"id\" is required (enter it either in parameters or request body)_
 * xHasuraAdminSecret String Your x-hasura-admin-secret will be used for authentication of the API request. (optional)
 * returns inline_response_200_3
 **/
exports.apiRestSeasonIdPOST = function(body,id,xHasuraAdminSecret) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "update_season_by_pk" : {
    "name" : "name",
    "id" : "id"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * insert_season_one
 * *** The GraphQl query for this endpoint is: ``` graphql mutation insert_season_one($object: season_insert_input!) {   insert_season_one(object: $object) {     id     name   } }  ```
 *
 * body Rest_season_body Query parameters can also be provided in the request body as a JSON object
 * xHasuraAdminSecret String Your x-hasura-admin-secret will be used for authentication of the API request. (optional)
 * returns inline_response_200_1
 **/
exports.apiRestSeasonPOST = function(body,xHasuraAdminSecret) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "insert_season_one" : {
    "name" : "name",
    "id" : "id"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

