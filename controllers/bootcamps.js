// @desc    Get all bootcamps
// @route   Get / api/v1/bootcamps
// access   Public   
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg:'Show all bootcamps'});
}

// @desc    Get single bootcamp
// @route   Get / api/v1/bootcamps/:id
// access   Public   
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg:`get bootcamp ${req.params.id}`});
}

// @desc    Create new bootcamp
// @route   Post / api/v1/bootcamps/:id
// access   Public   
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg:'Create new bootcamp'});
}

// @desc    Update new  new bootcamp
// @route   Put / api/v1/bootcamps/:id
// access   Public   
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg:`Update bootcamp ${req.params.id}`});
}

// @desc    Delete bootcamp
// @route   Delete / api/v1/bootcamps/:id
// access   Public   
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg:`delete bootcamp ${req.params.id}`});
}