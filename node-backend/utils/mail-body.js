module.exports = function createMailBody(obj) {
  var head = `Hello,\n\nA new order has been as follows :\n`;
  var body = "";
  Object.keys(obj).forEach((key) => {
    if (!key.startsWith("Image") && !key.endsWith("Image")) {
      body += `\t${key} : ${obj[key]}\n`;
    }
  });
  var bottom = `\nPlease contact the person here : ${obj.phone}`;

  var finalBody = head + body + bottom;
  return finalBody;
};
