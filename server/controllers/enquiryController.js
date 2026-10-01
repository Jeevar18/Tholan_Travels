const Enquiry = require("../models/Enquiry");

const createEnquiry = async (req, res, next) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                success: false,
                message: "Please provide the required enquiry details",
            });
        }

        const { name, phone, travelDate, returnDate, pickup, destination, passengers } = req.body;

        if (!name || !name.trim()) {
            return res.status(400).json({
                success: false,
                message: "Please provide your name",
            });
        }

        if (!phone || !phone.toString().trim()) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid phone number",
            });
        }

        if (!travelDate) {
            return res.status(400).json({
                success: false,
                message: "Travel date is required",
            });
        }

        if (!pickup || !pickup.trim()) {
            return res.status(400).json({
                success: false,
                message: "Pickup location is required",
            });
        }

        if (!destination || !destination.trim()) {
            return res.status(400).json({
                success: false,
                message: "Destination is required",
            });
        }

        if (!passengers || Number(passengers) < 1 || !Number.isInteger(Number(passengers))) {
            return res.status(400).json({
                success: false,
                message: "Passengers must be a positive whole number",
            });
        }

        const travelDateValue = new Date(travelDate);
        if (Number.isNaN(travelDateValue.getTime())) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid travel date",
            });
        }

        if (returnDate) {
            const returnDateValue = new Date(returnDate);
            if (Number.isNaN(returnDateValue.getTime())) {
                return res.status(400).json({
                    success: false,
                    message: "Please provide a valid return date",
                });
            }

            if (returnDateValue < travelDateValue) {
                return res.status(400).json({
                    success: false,
                    message: "Return date cannot be before travel date",
                });
            }
        }

        const enquiry = await Enquiry.create(req.body);

        res.status(201).json({
            success: true,
            message: "Enquiry submitted successfully",
            data: enquiry,
        });
    } catch (error) {
        next(error);
    }
};

const getEnquiries = async (req, res, next) => {
    try {
        const enquiries = await Enquiry.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: enquiries.length,
            data: enquiries,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { createEnquiry, getEnquiries };
