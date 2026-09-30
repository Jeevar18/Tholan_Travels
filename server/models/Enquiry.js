const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
            minlength: [2, "Name must be at least 2 characters"],
        },
        phone: {
            type: String,
            required: [true, "Phone is required"],
            trim: true,
            match: [/^[+\d][\d\s()-]{6,19}$/, "Please provide a valid phone number"],
        },
        whatsapp: {
            type: String,
            trim: true,
        },
        travelDate: {
            type: Date,
            required: [true, "Travel date is required"],
        },
        returnDate: {
            type: Date,
        },
        pickup: {
            type: String,
            required: [true, "Pickup location is required"],
            trim: true,
        },
        destination: {
            type: String,
            required: [true, "Destination is required"],
            trim: true,
        },
        passengers: {
            type: Number,
            required: [true, "Number of passengers is required"],
            min: [1, "Passengers must be at least 1"],
            validate: {
                validator: Number.isInteger,
                message: "Passengers must be a whole number",
            },
        },
        vehicle: {
            type: String,
            trim: true,
        },
        package: {
            type: String,
            trim: true,
        },
        message: {
            type: String,
            trim: true,
            maxlength: [2000, "Message cannot exceed 2000 characters"],
        },
    },
    {
        timestamps: { createdAt: true, updatedAt: false },
    },
);

module.exports = mongoose.model("Enquiry", enquirySchema);
