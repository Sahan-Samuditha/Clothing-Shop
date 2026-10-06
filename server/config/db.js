const mongoose = require("mongoose");
const dns = require("node:dns").promises;

const connect = () => mongoose.connect(process.env.MONGO_URI);

const connectDB = async () => {
    try {
        await connect();

        console.log("MongoDB connected successfully");
    } catch (error) {
        if (error.code === "EBADRESP" && process.env.MONGO_URI?.startsWith("mongodb+srv://")) {
            const dnsServer = process.env.MONGO_DNS_SERVER || "1.1.1.1";
            console.warn(`MongoDB SRV lookup returned an invalid DNS response; retrying with ${dnsServer}`);

            try {
                dns.setServers([dnsServer]);
                await connect();
                console.log("MongoDB connected successfully");
                return;
            } catch (retryError) {
                console.error("MongoDB connection retry failed:");
                console.error(retryError.message);
                process.exit(1);
            }
        }

        console.error("MongoDB connection failed:");
        console.error(error.message);

        process.exit(1);
    }
};

module.exports = connectDB;