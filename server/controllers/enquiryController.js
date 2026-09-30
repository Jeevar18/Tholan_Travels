const Enquiry = require("../models/Enquiry");

const createEnquiry = async (req, res) => {
    const { travelDate, returnDate } = req.body;

    if (returnDate && travelDate && new Date(returnDate) < new Date(travelDate)) {
        return res.status(400).json({
            success: false,
            message: "Return date cannot be before travel date",
        });
    }

    const enquiry = await Enquiry.create(req.body);

    res.status(201).json({
        success: true,
        message: "Enquiry submitted successfully",
        data: enquiry,
    });
};

const getEnquiries = async (req, res) => {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });

    res.status(200).json({
        success: true,
        count: enquiries.length,
        data: enquiries,
    });
};

module.exports = { createEnquiry, getEnquiries };
