import { betterAuth, } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.AUTH_DB_URI);
const db = client.db("QurbaniHatDB");

export const auth = betterAuth({
    database: mongodbAdapter(db, { client }),

    emailAndPassword: {
        enabled: true,
    },

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },

    user: {
        additionalFields: {
            firstName: {
                type: "string",
                required: false,
            },
            lastName: {
                type: "string",
                required: false,
            },
            phone: {
                type: "string",
                required: false,
            },
            dateOfBirth: {
                type: "string",
                required: false,
            },
            firstName: {
                type: "string",
                required: false,
            },
            role: {
                type: "string",
                required: false,
                defaultValue: "Buyer",
            },

        }
    }
});