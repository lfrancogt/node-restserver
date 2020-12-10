/// =================================
/// Conf Puerto
/// =================================
process.env.PORT = process.env.PORT || 3000


/// =================================
/// ENV
/// =================================

process.env.NODE_ENV = process.env.PORT || 'dev';

/// =================================
/// BD
/// =================================

// let urlDB;
// if (process.env.NODE_ENV === 'dev') {
// urlDB = 'mongodb://localhost:27017/cafe';
// } else {
// 
urlDB = 'mongodb://franco:rGDB8fR3roWMMbGq@cluster0.rnnbi.mongodb.net/cafe';
// }
// 
process.env.URLDB = urlDB;