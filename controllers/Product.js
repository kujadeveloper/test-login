'use strict';

var utils = require('../utils/writer.js');
var Product = require('../service/ProductService');

module.exports.checktoken = function checktoken (req, res, next) {
  var body = req.swagger.params['body'].value;
  Product.checktoken(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getlistAllProduct = function getlistAllProduct (req, res, next) {
  var body = req.swagger.params['body'].value;
   var url = require('url');
var url_parts = url.parse(req.url, true);
var query = url_parts.query;
  Product.getlistAllProduct(body,query,res)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listAllProduct = function listAllProduct (req, res, next) {
  var body = req.swagger.params['body'].value;
  Product.listAllProduct(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.userinfo = function userinfo (req, res, next) {
  Product.userinfo()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};