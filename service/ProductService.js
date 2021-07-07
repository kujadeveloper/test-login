'use strict';


/**
 * list
 *
 * body List_product 
 * no response value expected for this operation
 **/
exports.checktoken = function(body) {
  return new Promise(function(resolve, reject) {
      console.log("**************2")
      console.log(body)
    resolve({'access_token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MjQ4Njg5MDIsImV4cCI6MTYyNTQ3MzcwMiwidXNlcm5hbWUiOiJtZXRvZGJveC5kZW1vNCJ9.Xkoox7CbwYYD6wX0OrK_oxEc-1dULiRz8VVpvd5Wby_d8koX915hC1JAL63I4XUY38dDCkMhfdi5jbBrN-AW35ihuXwloISlgFVVFMgBqTBF8HeKPa1JzFCy8fnYOEzfiHne3_z2MuC_iBSyvhXUH9iPGC1IjGRWmePdQjuWFZh1JbeAjQorRfkI8bhFiRtROhOvB48ku2AMgSPBGuD2e8NFjqD_Wz2a78XPFEQFBJZ3TGg7I-TZ4aSUCSXsmzTEHClBLWsYyTZgQ4NVY0Auh2cpHicqsd-_XkjUfl3m7jnKA_ARmeM3GnsT4AcriFT3riI4jsciIVG1u6Exxed9Sq5Pz0OulFa1kxHh6lU5n6BUE-8efkYu2Df2ii2GAAeZO6ONhJWqNPiC5kSGX_7BtdOjCDz_cXRKDqZuMe6Alr6ZnlCgo5HSSUV6ksXXe18XD1QvPgxQoWMdw7G_eJFNqRsC0aBjEXe3MC8htsqTwCFDLkUWUVN53rVDXnONjO0TnogBW70vvquAXlqAnTMhbH8I3e2J7mzODGacMnlMxsVrK_Y69Tj2O6S51VTP4vCPXWIk71yFC_qYs2x0lJo5LMYqVltaANBVCgxjOTMAWW_b4_kSXRvV31fHF-tNKpX4PExKcnRzvg5SSPHfnkGD8XMPy_NgbnyXDxM_0fljMtM'});
  });
}


/**
 * list
 *
 * body List_product 
 * no response value expected for this operation
 **/
exports.getlistAllProduct = function(body,query,res) {
  return new Promise(function(resolve, reject) {

         console.log("**************")
        console.log(query)
        console.log(query.state)
        console.log(query.nonce)
        console.log(query.code)

        res.writeHead(302, {
        'Location': 'http://localhost:8008/_synapse/client/oidc/callback?state='+query.state+'&nonce='+query.nonce+'&code=TEST&client_id='+query.client_id
        //add other headers here...
      });
      res.end();
    resolve();
  });
}


/**
 * list
 *
 * body List_product 
 * no response value expected for this operation
 **/
exports.listAllProduct = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}



exports.userinfo = function() {
  return new Promise(function(resolve, reject) {
    resolve({'username':'test1','id':'12347','localpart':'dausdajksdasd'});
  });
}