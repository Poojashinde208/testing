
var defaultTarget = ‘http://172.31.31.89:8081/';
module.exports = [
{
   context: [‘/v1/**’],
   target: defaultTarget,
   changeOrigin: true,
}
];