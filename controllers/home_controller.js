const Project = require('../models/project');
module.exports.home = async function (req, res) {
  try {
    let projects = await Project.find({}).sort('-createdAt');
    return res.render('home', {
      title: 'Issue Tracker',
      projects,
    });
  } catch {
    console.log('Error', err);
    return;
  }
};
